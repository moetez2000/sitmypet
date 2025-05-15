import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Animal {
    name: string;
    description: string;
    photoDataUrl?: string;

    ownerName?: string;
    
  age?: number;
  ageUnit?: 'year' | 'month'; 
  training?: number;
  size?:string;
  food?:string;
  vaccOptions?:boolean;
  diseaseOptions?:boolean;
  petTypeOther?: string ;
  photoFile?: File | null;
  
    // Ajoutez tous les nouveaux champs :
    type?: string;
    breed?: string;
    gender?: string;
    birth_date?: string;
    color?: string;
    weight?: number;
    character?: string;
    is_vaccinated?: boolean;
    is_neutered?: boolean;
    has_contagious_disease?: boolean;
    has_medical_record?: boolean;
    is_critical_health?: boolean;
  }

@Injectable({ providedIn: 'root' })
export class AnimalService {
  private animals$$ = new BehaviorSubject<Animal[]>([]);
  readonly animals$ = this.animals$$.asObservable();

  getAnimals(): Animal[] {
    return this.animals$$.value;
  }

  addAnimal(a: Animal) {
    this.animals$$.next([...this.animals$$.value, a]);
  }

  updateAnimal(index: number, a: Animal) {
    const list = this.animals$$.value.slice();
    list[index] = a;
    this.animals$$.next(list);
  }

  removeAnimal(index: number) {
    const list = this.animals$$.value.slice();
    list.splice(index, 1);
    this.animals$$.next(list);
  }
}
