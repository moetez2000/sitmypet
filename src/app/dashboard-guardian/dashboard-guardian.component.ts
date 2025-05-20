import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-guardian',
  imports: [IonicModule, RouterModule],
  templateUrl: './dashboard-guardian.component.html',
  styleUrls: ['./dashboard-guardian.component.scss'],
  standalone:true,
})
export class DashboardGuardianComponent  implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    // Initialisation si nécessaire
    console.log('Dashboard loaded');
  }
  navigateTo(path: string): void {
    this.router.navigate([path]);
}
}
