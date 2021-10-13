import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dockerAws';

  info:any = {
    myName: "Christopher James Hillman",
    course: "MEAN Stack",
    projectName: "My Docker AWS app"
  }
}
