import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-find-sitter',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './find-sitter.component.html',  // Doit correspondre au nom du fichier
  styleUrls: ['./find-sitter.component.scss']
})
export class FindSitterComponent {  // Doit être exactement ce nom
  // Votre logique ici
}
