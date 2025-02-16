import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  imports: [],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent {

constructor(private router: Router){}

ngOnInit(): void {
}

newGame(){
  //start game
  this.router.navigateByUrl('/game');
}

}
