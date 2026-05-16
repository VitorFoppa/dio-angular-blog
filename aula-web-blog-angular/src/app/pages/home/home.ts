import { Component } from '@angular/core';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { PostCard } from '../../components/post-card/post-card';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Footer,
    PostCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}