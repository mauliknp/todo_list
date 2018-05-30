import { Component } from '@angular/core';

interface Task{
 title: string,
 description:string,
 status:string,
 is_canceled: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  Taskmodel:any={
        "title": "",
       "description":"",
       "status":"",
       "is_canceled": false
  }
  public selectOption= [{ value: 1,Text:'Complate' }, { value:2,Text:'Pending'}];
  tasks: Array<Task>=[
   {
     title: "Go home",
     description:"going home",
     status:"complate",
     is_canceled: false
   },
   {
     title:"Take a nap",
      description:"go to sleep ",
     status:"pending",
     is_canceled: false
   },
   {
     title: "Play Game",
      description:"cricket score 130",
     status:"pending",
     is_canceled: false
   }
 ];
  constructor(){}
  ngOnInit(){}

  addTask(){
    debugger
   this.tasks.push( {
       "title": this.Taskmodel.title,
       "description":this.Taskmodel.description,
       "status":this.Taskmodel.status,
       "is_canceled": false
     });
 }
  deleteSelectedTodos() {
      //need ES5 to reverse loop in order to splice by index
      for(var i=(this.tasks.length -1); i > -1; i--) {
        if(this.tasks[i].is_canceled) {
          this.tasks.splice(i, 1);
        }
      }
    }
  checkAll(ev) {
  this.tasks.forEach(x => x.is_canceled = ev.target.checked)
 }

  isAllChecked() { 
    return this.tasks.every(_ => _.is_canceled);
  }
}
