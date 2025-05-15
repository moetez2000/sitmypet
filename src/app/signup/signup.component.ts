import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private router: Router) {}

  
  goToGuardianForm(): void {
    this.router.navigateByUrl('/guardian-form');
  }

  goToOwnerForm(): void {
    this.router.navigateByUrl('/owner-form');
  }
}
