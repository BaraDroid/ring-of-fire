import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from './../../models/game';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: any;   //Junus hat das nicht, aber für pop kann das auch undefined sein(wenns leer wird) und für push darf es nicht undefined sein, also habe ich nicht gewusst, was damit
  game!: Game;

ngOnInit(): void {
  this.newGame();
}

takeCard(){
  if(!this.pickCardAnimation){
    this.currentCard = this.game.stack.pop();
    this.pickCardAnimation = true;
    this.game.playedCards.push(this.currentCard);
    console.log('new card:', this.currentCard);
    console.log('Game is', this.game);
    setTimeout(() => {
      this.pickCardAnimation = false;
    }, 1500);
  }
}

newGame() {
  this.game = new Game();
  console.log('Game is', this.game);
}

}
