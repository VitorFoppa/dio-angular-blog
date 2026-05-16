import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  isDarkMode:boolean = false;

  toggleTheme(){

    this.isDarkMode = !this.isDarkMode;

    document.body.classList.toggle(
      'dark-mode'
    );

  }

}