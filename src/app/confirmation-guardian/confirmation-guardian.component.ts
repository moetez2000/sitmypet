import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmation-guardian',
  templateUrl: './confirmation-guardian.component.html',
  styleUrls: ['./confirmation-guardian.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]  // Ajoutez les modules nécessaires ici
})
export class ConfirmationGuardianComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
