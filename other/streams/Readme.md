## Streams

Move data from a source to a destination.

**Source**: powder-day.mp4 file
**Destination**: HTTP response

_buffer.js_ file:

We're using the **fs.readFile()**, which is going to read the entire contents of the MP4 video into a single variable. That variable is `data`, so that's our buffer, and we're sending the entire data back on line 12, once we have the entire contents of the movie loaded.
Test _buffer.js_:
1. Go to [http://localhost:3000](http://localhost:3000)
2. Open Task Manager or Activity Monitor
3. Start the app: `node --trace_gc buffer.js` The trace_gc command is going to trace the garbage collection process
4. Make multiple requests 

We're going to see two types of garbage collection: **Scavenge** and **Mark-sweep**

```ps1
[456:000001E79F779CF0]    10878 ms: Mark-sweep (reduce) 4.2 (6.2) -> 3.4 (5.2) MB, 5.4 / 0.0 ms  (+ 0.1 ms in 2 steps since start of marking, biggest step 0.1 ms, walltime since start of marking 8 ms) (average mu = 1.000, current mu = 1.000) finalize incremental marking via task GC in old space requested
[456:000001E79F779CF0]    11492 ms: Mark-sweep (reduce) 3.4 (5.2) -> 3.4 (5.4) MB, 1.1 / 0.0 ms  (+ 0.0 ms in 2 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 3 ms) (average mu = 0.998, current mu = 0.998) finalize incremental marking via task GC in old space requested
[456:000001E79F779CF0]    12455 ms: Scavenge 3.9 (5.4) -> 3.8 (5.4) MB, 0.4 / 0.0 ms  (average mu = 0.998, current mu = 0.998) external memory pressure
[456:000001E79F779CF0]    14531 ms: Mark-sweep 3.9 (5.4) -> 3.4 (5.4) MB, 0.8 / 0.0 ms  (+ 0.9 ms in 15 steps since start of marking, biggest step 0.1 ms, walltime since start of marking 2 ms) (average mu = 0.999, current mu = 0.999) finalize incremental marking via task GC in old space requested
[456:000001E79F779CF0]    17379 ms: Scavenge 4.1 (5.4) -> 4.1 (5.4) MB, 0.2 / 0.0 ms  (average mu = 0.999, current mu = 0.999) external memory pressure[456:000001E79F779CF0]    17407 ms: Mark-sweep 4.1 (5.4) -> 3.4 (5.4) MB, 0.7 / 0.0 ms  (+ 0.8 ms in 12 steps since start of marking, biggest step 0.1 ms, walltime since start of marking 2 ms) (average mu = 0.999, current mu = 0.999) finalize incremental marking via task GC in old space requested
```

For the _stream.js_ file we're creating a read stream with the file system. So that will read this file bit by bit, and send those bits to the client as soon as they get them. When testing again  `node - -trace_gc stream.js`. So what you'll notice is we have some Scavenge garbage collection, but we don't have any Mark-sweeps. And again, Scavenge is a quicker version of the garbage collector that runs on a smaller bit of memory. You can almost think of it as like your short-term memory for your application. The Mark-sweep is a bigger deal, and we don't see any of those. Additionally, we'll notice that significantly less memory is used. And the reason is we aren't loading the entire contents of each video file before we're sending it, we're sending it bit by bit. So, in order to create performant applications, streams are absolutely essential. 

```ps1
[13032:0000020B18B39E80]    35978 ms: Scavenge 4.8 (5.7) -> 3.9 (5.7) MB, 0.7 / 0.0 ms  (average mu = 0.997, current mu = 0.997) allocation failure 
[13032:0000020B18B39E80]    38993 ms: Scavenge 4.8 (5.7) -> 3.9 (5.7) MB, 1.4 / 0.0 ms  (average mu = 0.997, current mu = 0.997) allocation failure 
[13032:0000020B18B39E80]    41285 ms: Scavenge 4.8 (5.7) -> 3.9 (5.7) MB, 0.8 / 0.0 ms  (average mu = 0.997, current mu = 0.997) allocation failure 
[13032:0000020B18B39E80]    48870 ms: Scavenge 4.8 (5.7) -> 3.9 (5.7) MB, 0.4 / 0.0 ms  (average mu = 0.997, current mu = 0.997) allocation failure 
[13032:0000020B18B39E80]    62533 ms: Scavenge 4.8 (5.7) -> 3.9 (5.7) MB, 0.5 / 0.0 ms  (average mu = 0.997, current mu = 0.997) allocation failure
```