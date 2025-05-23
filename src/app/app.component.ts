import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, IonicModule], // ✅ le bon import ici
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {}
