import {Component} from '@angular/core';
import {Model, ToDoItem} from '../Model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoTask2';
  model = new Model();

  //return user
  getName() {
    return this.model.user;
  }

  getToDoItems() {
    //return all items
    return this.model.items;

    // //return only done tasks
    // return this.model.items.filter(item => item.done);

  }

  addItem(newTask) {
    if (newTask != '') {
      this.model.items.push(new ToDoItem(newTask, false));
    }
  }
}
