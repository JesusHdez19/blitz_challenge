import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router){

  }

  navigationTo(section: string){
    this.router.navigate([`/${section}`])
  }

  getCurrentPage(section: string){
    if(this.router.url.indexOf(section) === -1){
      return false
    }else{
      return true
    }
  }
}
