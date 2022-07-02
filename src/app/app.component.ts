import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMember = '';
  members: string[] = [];

  //On button press, add the newMember value into the members array
  addMember() {
    this.members.push(this.newMember);
  }

  //On input update the newMember value with the input value
  onInput(member: string) {
    this.newMember = member;
  }
}
