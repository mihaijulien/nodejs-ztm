function Git(name){
    this.name = name; // Repo name
    this.lastCommitId = -1; // Keep track of last commit id.
}

// var repo = new Git("my-repo");
// Actual command:
// > git init

function Commit(id, message) {
  this.id = id;
  this.message = message;
  // Assume that 'this' has a 'change' property too.
}

Git.prototype.commit = function(message) {
  var commit = new Commit(++this.lastCommitId, message);
  return commit;
};

///  repo.commit("Make commit work");

// Actual command:
// > git commit -m "Make commit work"