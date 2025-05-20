import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';  // Importation de ReactiveFormsModule
import { AppComponent } from './app.component';
import { FormSearchSitterComponent } from './form-searchsitter/form-searchsitter.component';  // Déclaration de votre composant
import { GoogleMapsModule } from '@angular/google-maps';  // Importation du module Google Maps
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Ajoutez FormsModule ici

@NgModule({
  declarations: [AppComponent, FormSearchSitterComponent],
  imports: [
    GoogleMapsModule,  // Importer GoogleMapsModule ici
    BrowserModule,
    FormsModule,  // Ajoutez FormsModule ici pour utiliser ngModel
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
  })
  export class AppModule {}