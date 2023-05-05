import { Injectable } from '@angular/core';
import { Angajat } from './interfata-angajati';

@Injectable({
  providedIn: 'root'
})
export class ServiciuAngajatiService {
  private angajati: Angajat[] = [
    { id: 1, nume: 'Popescu Ion', salariu: 3000, functie: 'Programator', departament: 'IT' },
    { id: 2, nume: 'Ionescu Maria', salariu: 2500, functie: 'Asistent medical', departament: 'Sanatate' },
    { id: 3, nume: 'Georgescu Andrei', salariu: 4000, functie: 'Manager', departament: 'Afaceri' },
    { id: 4, nume: 'Stefanescu Elena', salariu: 3500, functie: 'Inginer', departament: 'Tehnic' },
    { id: 5, nume: 'Petrescu Ioana', salariu: 2000, functie: 'Secretar', departament: 'Administrativ' }
  ];
  
  modificareAngajat: any;

  constructor() { }

  getAngajati(): Angajat[] {
    return this.angajati;
  }

  getAngajatById(id: number): Angajat | undefined {
    return this.angajati.find(angajat => angajat.id === id);
  }

  adaugaAngajat(angajat: Angajat): void {
    this.angajati.push(angajat);
  }

  actualizeazaAngajat(angajat: Angajat): void {
    const index = this.angajati.findIndex(a => a.id === angajat.id);
    if (index !== -1) {
      this.angajati[index] = angajat;
    }
  }

  stergeAngajat(id: number): void {
    const index = this.angajati.findIndex(a => a.id === id);
    if (index !== -1) {
      this.angajati.splice(index, 1);
    }
  }
}
export { Angajat };

