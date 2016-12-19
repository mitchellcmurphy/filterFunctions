import { Component } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'home',  // <home></home>
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public emails: string[];
  public filteredEmails: string[];
  public filteredEmailsMap: any;
  public emailNumber: number = 5000;
  public randomPercentage: number = .5;
  public ticks: number = 0;

  constructor() {

  }

  ngOnInit() {
    this.emails = [];
    this.filteredEmails = [];
    this.filteredEmailsMap = new Map();
  }

  generateEmails(){
    let percentage = this.randomPercentage / 100;
    for(let i = 0; i < (percentage > 0 ? this.emailNumber * percentage : 1); i++){
      let newEmail = UUID.UUID() + '@email.com';
      for(let j = 0; j < (percentage > 0 ? 1 / percentage : this.emailNumber); j++){
        this.emails.push(newEmail);
      }
    }
    console.log("Emails before shuffle", this.emails);
    this.shuffleEmails();
  }

  shuffleEmails() {
    for (let i = this.emails.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [this.emails[i - 1], this.emails[j]] = [this.emails[j], this.emails[i - 1]];
    }
    console.log(this.emails.length);
  }

  filterEmailsArray(){
    let start = new Date();
    let length = this.emails.length;
    for(let i = 0; i < length; i++){
      let email = this.emails.shift();
      if(this.filteredEmails.indexOf(email) < 0){
        this.filteredEmails.push(email);
      }
    }
    this.ticks = Math.abs(new Date().getTime() - start.getTime());
    console.log("Emails", this.emails.length);
    console.log("Filtered", this.filteredEmails.length);
    console.log("Contents:", this.filteredEmails);
  }

  filterEmailsMap(){
    let start = new Date();
    let length = this.emails.length;
    for(let i = 0; i < length; i++){
      let email = this.emails.shift();
      if(!(email in this.filteredEmailsMap)){
        this.filteredEmailsMap.set(email, email);
      }
    }
    this.ticks = Math.abs(new Date().getTime() - start.getTime());
    console.log("Emails", this.emails.length);
    console.log("Filtered", this.filteredEmailsMap.size);
    console.log("Contents:", this.filteredEmailsMap);
  }

  clearAll(){
    this.emails = [];
    this.filteredEmails = [];
    this.filteredEmailsMap.clear();
  }

}
