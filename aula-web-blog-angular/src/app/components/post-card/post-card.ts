import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css'
})
export class PostCard {

  @Input()
  title:string = ""

  @Input()
  description:string = ""

}