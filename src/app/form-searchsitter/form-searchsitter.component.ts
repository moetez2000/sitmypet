import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Assurez-vous d'importer IonicModule
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importation de ReactiveFormsModule
import { GoogleMapsModule } from '@angular/google-maps';  // Importer GoogleMapsModule ici
import { FormsModule } from '@angular/forms';

declare var L: any; // Déclare Leaflet (L) comme une variable globale

@Component({
  selector: 'app-form-searchsitter',
  imports: [IonicModule, RouterModule, ReactiveFormsModule,GoogleMapsModule,FormsModule],  // Ajoutez ReactiveFormsModule ici pour le composant standalone
  templateUrl: './form-searchsitter.component.html',
  styleUrls: ['./form-searchsitter.component.scss'],
  standalone: true,
})
export class FormSearchSitterComponent implements OnInit {

  Form: FormGroup = {} as FormGroup;  // Initialiser à un objet vide de type FormGroup
  showStartDatePicker: boolean = false;
  showEndDatePicker: boolean = false;
  newSearch: any = {
    latitude: '',
    longitude: '',
    adresse: ''
  };
  showMap: boolean = false;
  map: any; // Pour stocker l'instance de la carte
  

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.Form = this.fb.group({
      owner: ['', Validators.required],
      animal: ['', Validators.required],
      description: ['', Validators.required],
      guardType: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      services: ['', Validators.required],
      minSalary: ['', [Validators.required, Validators.min(0)]],
      maxSalary: ['', [Validators.required, Validators.min(0)]],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.Form.valid) {
      console.log('Form Submitted', this.Form.value);
    }
  }

 
 
  onDateSelected(event: any, field: string) {
    this.Form.get(field)?.setValue(event.detail.value); // Met à jour le champ correspondant du FormGroup
    if (field === 'startDate') {
      this.showStartDatePicker = false; // Ferme le popover de la date de début
    } else {
      this.showEndDatePicker = false; // Ferme le popover de la date de fin
    }
  }

  
    // Formatage de la date pour l'affichage dans le champ de texte
    formatDate(date: string): string {
      if (!date) return ''; // Si la date est undefined ou null, retourne une chaîne vide
      const d = new Date(date);
      return d.toLocaleDateString();  // Retourne la date formatée localement (ex : DD/MM/YYYY)
    }


    // Ouvre la modale avec la carte
    openMap() {
      this.showMap = true;
    
      // Initialisation de la carte après un léger délai pour s'assurer que l'élément est dans le DOM
      setTimeout(() => {
        if (!this.map) {
          // Créer une nouvelle carte Leaflet
          this.map = L.map('map').setView([36.8065, 10.1815], 7); // Vue initiale sur la Tunisie
    
          // Ajouter le fond de carte OpenStreetMap
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(this.map);
    
          // Gérer le clic sur la carte
          this.map.on('click', (e: any) => {
            const lat = e.latlng.lat;
            const lng = e.latlng.lng;
    
            // Mettre à jour les coordonnées dans le modèle
            this.newSearch.latitude = lat;
            this.newSearch.longitude = lng;
    
            // Ajouter un marqueur sur la carte
            L.marker([lat, lng]).addTo(this.map)
              .bindPopup('Position sélectionnée')
              .openPopup();
    
            // Appeler la fonction pour récupérer l'adresse depuis les coordonnées
            this.getAddressFromCoordinates(lat, lng);
          });
        } else {
          this.map.invalidateSize(true); // Force Leaflet à redimensionner la carte
        }
      }, 300);
    }
    
    closeMap() {
    this.showMap = false;
  }

  // Récupérer l'adresse depuis les coordonnées via l'API Nominatim d'OpenStreetMap
  getAddressFromCoordinates(lat: number, lng: number): void {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1&language=fr`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.address) {
          // Mettre à jour le champ adresse avec les données de l'API
          this.newSearch.adresse = data.address.road
            ? `${data.address.road}, ${data.address.city || data.address.town || ''}, ${data.address.country || ''}`
            : "Adresse non trouvée";
        } else {
          this.newSearch.adresse = "Adresse non trouvée";
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération de l\'adresse :', error);
        this.newSearch.adresse = "Erreur de géocodage";
      });
  }
}
    
