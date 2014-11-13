
var toDo1 = {
  task: "costco",
  who: "chris",
  done: false,
  isDone: function (){
    return toDo1.done
  },
  setDone:function(a){
    this.done = a
  }
}

var toDo2 = {
  task: "target",
  who: "calla",
  done: true,
  isDone: function(){
    this.done;
  },
  setDone:function(a){
    this.done = a
  }
}

var toDo3 = {
  task: "housing",
  who: "calla",
  done: false,
  isDone: function(){
    this.done
  },
  setDone:function(a){
    this.done = a
  }
}

array = [toDo1, toDo2, toDo3]


function toDo(task, who, done, isDone, setDone){
  this.task = task;
  this.who = who;
  this.done = done;
  this.isDone = function(){
    console.log(this.done);
  };
  this.setDone = function(a){
    this.done = a;
  }

}
