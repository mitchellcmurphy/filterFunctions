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
  public emailNumber: number = 100000;
  public randomPercentage: number = 50;
  public ticksArray: number = 0;
  public ticksMap: number = 0;
  public expectedCount: number = 0;

  constructor() {

  }

  ngOnInit() {
    this.emails = [];
    this.filteredEmails = [];
    this.filteredEmailsMap = new Map();
  }

  //Generates a list of random emails with a unique percentage
  //Inputs:
  //this.randomPercentage : the percentage set by the user that is used to calculate how many dupes per entry
  //this.emailNumber : the number of emails to generate, set by the user
  //Outputs:
  //this.emails : adds the randomly generated emails to this object
  //this.expectedCount : calculated and set here, used for a check in the html
  //Uses:
  //this.shuffleEmails() : used to shuffle the email list
  generateEmails(){
    //Calculate the percentage
    let percentage = this.randomPercentage / 100;
    //Create a loop to add entries into this.emails, using a quick calc to limit the loop based on the wanted duplicate percentage
    for(let i = 0; i < (percentage > 0 ? this.emailNumber * percentage : 1); i++){
      //Create a new email
      let newEmail = UUID.UUID() + '@email.com';
      //Calculate and add that email a certain number of times based on user input
      for(let j = 0; j < (percentage > 0 ? 1 / percentage : this.emailNumber); j++){
        this.emails.push(newEmail);
      }
    }
    console.log("Emails before shuffle", this.emails);
    //Calculate the expected count of unique emails
    this.expectedCount = percentage > 0 ? this.emails.length * percentage : 1;
    //Shuffle the list so the duplicates are not close to each other
    this.shuffleEmails();
  }

  //Shuffles an array of strings
  //Inputs:
  //this.emails : shuffles this array so entries are not close to their initial placement
  //Outputs:
  //this.emails : changes the structure of this array
  shuffleEmails() {
    //Loop through our email list
    for (let i = this.emails.length; i; i--) {
        //Generate a random number
        let j = Math.floor(Math.random() * i);
        //Swap the two entires
        [this.emails[i - 1], this.emails[j]] = [this.emails[j], this.emails[i - 1]];
    }
    console.log(this.emails.length);
  }

  //THIS IS AN OLD FUNCTION THAT DIDN'T PERFORM AS WELL AS NEEDED, LEAVING TO SHOW THOUGHT PROCESS AND PROGRESSION
  filterEmailsArray(){
    let start = new Date();
    let length = this.emails.length;
    for(let i = 0; i < length; i++){
      let email = this.emails[i];
      if(this.filteredEmails.indexOf(email) < 0){
        this.filteredEmails.push(email);
      }
    }
    this.ticksArray = Math.abs(new Date().getTime() - start.getTime());
    console.log("Emails", this.emails.length);
    console.log("Filtered", this.filteredEmails.length);
    console.log("Contents:", this.filteredEmails);
  }

  //Filters an array of randomly generated emails into a mapping with only unique entries, no duplicates
  //Inputs:
  //this.emails : filters this list down but not by removing any entries
  //Outputs:
  //this.filteredEmailsMap : creates this mapping with only unique entries
  //this.ticksMap : a calulation of how long it took to filter the data
  filterEmailsMap(){
    //Start our timer (essentually)
    let start = new Date();
    let length = this.emails.length;
    //For every entry in our email list, check if that email's key (which is this case is the email itself)
    //is not already in our mapping.
    //If we don't find the entry in the map, add it
    //If it already exists, move on
    for(let i = 0; i < length; i++){
      let email = this.emails[i];
      if(!(email in this.filteredEmailsMap)){
        this.filteredEmailsMap.set(email, email);
      }
    }
    //Calculate how long it took to process the filter
    this.ticksMap = Math.abs(new Date().getTime() - start.getTime());
    console.log("Emails", this.emails.length);
    console.log("Filtered", this.filteredEmailsMap.size);
    console.log("Contents:", this.filteredEmailsMap);
  }

  //Clears all data used to create and filter data
  //Inputs:
  //this.emails : clears this
  //this.filteredEmails : clears this
  //this.filteredEmailsMap : clears this
  //Outputs:
  //this.emails : cleared
  //this.filteredEmails : cleared
  //this.filteredEmailsMap : cleared
  clearAll(){
    this.emails = [];
    this.filteredEmails = [];
    this.filteredEmailsMap.clear();
  }

}
