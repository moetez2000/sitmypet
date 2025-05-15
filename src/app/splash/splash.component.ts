import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 3000);
  }
}
