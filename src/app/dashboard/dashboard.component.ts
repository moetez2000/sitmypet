import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Assurez-vous d'importer IonicModule ici
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    IonicModule,  // Assurez-vous que IonicModule est importé ici
    RouterModule  // Importez RouterModule si nécessaire
  ],
  templateUrl: './dashboard.component.html',
  
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Options pour le slider
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: true
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialisation si nécessaire
    console.log('Dashboard loaded');
  }

  // Fonction pour naviguer vers un autre écran
  navigateTo(path: string) {
    console.log(`Naviguer vers ${path}`);
    this.router.navigate([path]);
  }
}
