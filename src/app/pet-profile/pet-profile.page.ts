import { Component, OnInit ,ViewChild} from '@angular/core';
import { IonicModule }        from '@ionic/angular';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AnimalService, Animal } from '../services/animal.service';
import { IonDatetime } from '@ionic/angular';
@Component({
  selector: 'app-pet-profile',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './pet-profile.page.html',
  styleUrls: ['./pet-profile.page.scss'],
})

export class PetProfilePage implements OnInit {

  showDatePicker: boolean = false; // Contrôle de l'affichage du popover
  
  // your existing model
  pet: Animal = { name: '', description: '',birth_date: '',breed:'' };
  preview: string | null = null;
  editIndex: number | null = null;
  ownerName: string = '';
  age: undefined; 
  petTypeOther: string | null = null;
  photoFile?: File | null;


  // ← ADD these three arrays:
  types = [
    { value: 'dog',     label: 'Chien'   },
    { value: 'cat',     label: 'Chat'    },
    { value: 'rabbit',  label: 'Lapin'   },
    { value: 'bird',  label: 'Oiseau' },
    { value: 'fish',    label: 'Poisson' },
    { value: 'autre',  label: 'Autre'  },
  
  ];

 
  otherTypes = [
    'Hamster',
    'Cobaye',
    'Furet',
    'Perroquet',
    'Tortue',
    'Poisson rouge',
    'Chinchilla'
  ];
  animalBreeds : { [key: string]: string[] } = {
    dog: ['Labrador', 'Golden Retriever', 'Bulldog', 'Beagle'],
    cat: ['Siamois', 'Persan', 'Bengal', 'Maine Coon'],
    rabbit: ['Nain', 'Angora', 'Himalaya'],
    bird: ['Perroquet', 'Canari', 'Perruche'],
    fish: ['Guppy', 'Betta', 'Goldfish'],
    autre: this.otherTypes,
  };
  foods = [
    { value: 'conservé', label: 'Conserves' },
    { value: 'croquette', label: 'Croquettes' },
    { value: 'other',      icon: 'restaurant-outline',   label: 'Autre' }
  ];

  vaccOptions = [
    { value: true,  label: 'Vacciné',     icon: 'vacciné.svg' },
    { value: false, label: 'Non vacciné', icon: 'non_vacciné.svg' }
  ];

  diseaseOptions = [
    { value: true,  label: 'Oui', icon: 'contagious-no.svg' },
    { value: false, label: 'Non', icon: 'contagious-yes.svg' }
  ];
  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
    ngOnInit() {
      const idx = this.route.snapshot.paramMap.get('index');
      if (idx !== null) {
        const existing = this.animalService.getAnimals()[+idx];
        if (existing) {
          this.pet = { ...existing };
          this.preview = existing.photoDataUrl || null;
        }
      }
    }
  
    getBreeds() {
      if (this.pet.type === undefined) {
        return [];
      }
      return this.animalBreeds[this.pet.type] || [];
    }
    onPhotoSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (!input.files?.length) return;
      const file = input.files[0];
      this.pet.photoFile = file;
      const reader = new FileReader();
      reader.onload = () => (this.preview = reader.result as string);
      reader.readAsDataURL(file);
    }
  
    @ViewChild(IonDatetime) datePicker!: IonDatetime; // Utilisation de "!" pour indiquer qu'elle sera définie

  ngAfterViewInit() {
    
  }

  // Fonction pour mettre à jour la date sélectionnée dans le champ
  onDateSelected(event: any) {
    // Mise à jour de la date de naissance de l'animal
    this.pet.birth_date = event.detail.value;
    // Ferme le popover après la sélection de la date
    this.showDatePicker = false;
  }

  // Formatage de la date pour l'affichage dans le champ de texte
  formatDate(date: string | undefined): string {
    if (!date) return ''; // Si la date est undefined ou null, retourne une chaîne vide
    const d = new Date(date);
    return d.toLocaleDateString();  // Retourne la date formatée localement (ex : DD/MM/YYYY)
  }
  
    
 // Méthode pour enregistrer l'animal
 savePet() {
  // Logique pour enregistrer l'animal ici...
  console.log('Animal enregistré');

  // Redirige l'utilisateur vers la page des pets
  this.router.navigate(['/pets']);
}}