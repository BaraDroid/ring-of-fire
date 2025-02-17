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
  game!: Game;

ngOnInit(): void {
  this.newGame();
}

takeCard(){
  this.pickCardAnimation = true;
}

newGame() {
  this.game = new Game();
  console.log(this.game);
}

}
