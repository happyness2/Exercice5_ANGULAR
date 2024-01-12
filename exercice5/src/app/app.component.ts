import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  voitures = [
    { id: 0, marque: 'Audi', modele: 'R8' },
    { id: 1, marque: 'Bentley', modele: 'Bentayga.' },
    { id: 2, marque: 'Bmw', modele: 'SUV BMW' }
  ];

  voitureSelectionnee: any;

  afficherDetails(voiture: any) {
    this.voitureSelectionnee = voiture;
  }
}