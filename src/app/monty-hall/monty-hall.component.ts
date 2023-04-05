import { Component } from '@angular/core';

@Component({
  selector: 'app-monty-hall',
  templateUrl: './monty-hall.component.html',
  styleUrls: ['./monty-hall.component.scss']
})
export class MontyHallComponent {
  //declaring variables
  modalMsg: string = '';
  welcomeMsg: string = 'Welcome to Monty Hall Problem Game. Choose one of the below door.'
  finalRevealed: number = 0;
  showAnimation: boolean = false;
  finalChoice: number = 0;
  //random generates number from 0. we have doors starting from 1. therefore, adding 1.
  winningDoor: number = Math.floor(Math.random() * 3) + 1; 
  doors:number[] = [1, 2, 3];
  result: string='';
  switchChoice: boolean = false;
  displayStyle: string= 'none';
  chosenDoor : number = 0;
  revealedDoor: number = 0;
  calc : number = 0 ;
  

  chooseDoor(doorNumber: number) {
    this.chosenDoor = doorNumber;
    do {
      this.revealedDoor = Math.floor(Math.random() * 3) + 1;
    } 
    //revealed door by host should not be the equal to the selected and the winning door.
    while (this.revealedDoor === this.chosenDoor || this.revealedDoor === this.winningDoor);
    this.calc = (6 - this.chosenDoor - this.revealedDoor); // sum of the numbers on the three doors is 1+2+3 = 6.
    this.finalRevealed = this.revealedDoor;
    this.modalMsg = "You have selected Door" + " " + this.chosenDoor + ". The Host has revealed Door" + " " + this.revealedDoor + ". Do you want to switch to Door" + " " +this.calc + "?";
    this.displayStyle = "block"; //to display the modal
  }

  
  closePopup(switchChoice : boolean){
    this.displayStyle='none';
    this.finalCalcOfDoor(switchChoice);
  }
  //method to check if the player has switched his choice
  switchConfirmation(switchChoice : boolean){
    this.switchChoice = switchChoice;
    this.displayStyle='none';
    this.finalCalcOfDoor(this.switchChoice);
  }

  //finally revealing behind the chosen door.
  finalCalcOfDoor(choice:boolean) {
    this.finalChoice = choice ? this.calc : this.chosenDoor;
    this.result = this.finalChoice === this.winningDoor ? 'Congratulations! You won your dream car!' : 'You lose! Better luck next time';
    this.showAnimation = true;
  }

  onAnimationEnd() {
  this.showAnimation = false;
  }

  reset(){
    this.modalMsg = '';
    this.finalRevealed = 0;
    this.winningDoor = Math.floor(Math.random() * 3) + 1;
    this.doors = [1, 2, 3];
    this.result = '';
    this.switchChoice = false;
    this.displayStyle = 'none';
    this.chosenDoor = 0;
    this.revealedDoor = 0;
    this.calc = 0;
    this.showAnimation = false;
  }
}