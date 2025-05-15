import { Component ,ViewChild} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guardian-form',
  templateUrl: './guardian-form.component.html',
  styleUrls: ['./guardian-form.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class GuardianFormComponent {
  birthDate: string = '';           
  birthDateValue: string = '';      
  showDatePicker: boolean = false;  
  selectedAddressType: string = 'personnelle'; 

  onDateSelected(event: any) {
    const isoDate = event.detail.value;
    this.birthDateValue = isoDate;

    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    this.birthDate = `${day}/${month}/${year}`;

    this.showDatePicker = false;
  }
  selectedSegment: string = 'personnel';
  constructor(private router: Router) {}
  submitForm(): void {
    console.log('Formulaire soumis');
    this.router.navigate(['/confirmation-guardian']);
  }

  onFileChange(event: Event, field: string): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      console.log(`Fichier(s) sélectionné(s) pour ${field}`, target.files);
    }
  }
}
