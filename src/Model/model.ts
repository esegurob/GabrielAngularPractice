import construct = Reflect.construct;

export class Model {
  user;
  items;

  constructor(){
    this.user = "Gabriel",
      this.items = [
        {action: "Marry", done: false},
        {action: "Build House", done: false},
        {action: "Buy Car", done: false},
        {action: "Further Studies", done: true},
        {action: "Go Vacation", done: false}
      ]
  }
}

export class ToDoItem {
  action;
  done;

  constructor(action, done){
    this.action = action;
    this.done = done;
  }
}


