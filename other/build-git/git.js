function Git(name){
    this.name = name; // Repo name
    this.lastCommitId = -1; // Keep track of last commit id.
    var master = new Branch("master", null); // null is passed as we don't have any commit yet.
    this.HEAD = master; // HEAD points to current branch.
}

// var repo = new Git("my-repo");
// Actual command:
// > git init

function Commit(id, message) {
  this.id = id;
  this.parent = parent;
  this.message = message;
  
}

Git.prototype.commit = function(message) {
  var commit = new Commit(++this.lastCommitId, this.HEAD, message);
  this.HEAD.commit = commit;

  return commit;
};

///  repo.commit("Make commit work");

// Actual command:
// > git commit -m "Make commit work"

function Branch(name, commit) {
  this.name = name;
  this.commit = commit;
}


Git.prototype.log = function() {
    var history = []; // array of commits in reverse order.
  
    // 1. Start from last commit
    // 2. Go back tracing to the first commit
    // 3. Push in `history`
    // Start from HEAD
    var commit = this.HEAD.commit,
    history = [];

    while (commit) {
        history.push(commit);
        // Keep following the parent
        commit = commit.parent;
    }
  
    return history;
  };

// Can be used as repo.log();
// Actual command:
// > git log