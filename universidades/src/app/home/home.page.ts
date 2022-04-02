import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Universidade } from 'src/assets/interfaces/universidade';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchName: string;
  searchCountry: string;

  constructor(private router: Router) {}

  setName(name: Universidade['name']) {
    if (this.searchName !== name) {
      this.searchName = name;
    }
  }

  setCountry(country: Universidade['country']) {
    if (this.searchCountry !== country) {
      this.searchCountry = country;
    }
  }

  sendRequest(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        name: this.searchName,
        country: this.searchCountry,
      },
    };

    this.router.navigate(['universidade'], navigationExtras);
  }
}

