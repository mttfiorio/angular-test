import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMember = '';
  members: string[] = [];
  errorMessage: string = '';
  teamsAmount: number | '' = '';
  teams: string[][] = [];

  //On button press, add the newMember value into the members array
  addMember() {
    if (!this.newMember) {
      this.errorMessage = 'Please enter a new member name';
      return;
    }

    this.errorMessage = '';
    this.members.push(this.newMember);
    this.newMember = '';
  }

  //On input update the newMember value with the input value
  onInput(member: string) {
    this.newMember = member;
  }

  //On input update the teamsAmount value with the input value
  onTeamsAmountInput(amount: string) {
    this.teamsAmount = Number(amount);
  }

  generateTeams() {
    if (!this.teamsAmount || this.teamsAmount <= 0) {
      this.errorMessage = 'Please enter a valid amount';
      return;
    }

    if (this.members.length < this.teamsAmount) {
      this.errorMessage = 'Too many teams for too few people';
      return;
    }

    this.errorMessage = '';
    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.teamsAmount; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) {
          break;
        }

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }

    this.members = [];
    this.teamsAmount = 0;
  }
}
