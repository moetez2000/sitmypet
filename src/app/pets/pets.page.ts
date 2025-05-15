import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AnimalService, Animal } from '../services/animal.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss'],
})
// src/app/pets/pets.page.ts
export class PetsPage implements OnInit {
  animals: Animal[] = [];

  constructor(
    private animalService: AnimalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.animalService.animals$.subscribe(list => this.animals = list);
  }

  goToAdd() {
    this.router.navigateByUrl('/pets/add');
  }

  /** Supprimer après confirmation */
  deleteAnimal(i: number) {
    if (confirm('Voulez‑vous vraiment supprimer cet animal ?')) {
      this.animalService.removeAnimal(i);
    }
  }

  /** Modifier via de simples prompts (ou rediriger vers un formulaire pré‑rempli) */
  editAnimal(i: number) {
    const current = this.animals[i];
    const newName = prompt('Modifier le nom', current.name);
    if (newName === null) return; // annulation

    const newDesc = prompt('Modifier la description', current.description);
    if (newDesc === null) return;

    this.animalService.updateAnimal(i, {
      ...current,
      name: newName,
      description: newDesc
    });
  }
}
