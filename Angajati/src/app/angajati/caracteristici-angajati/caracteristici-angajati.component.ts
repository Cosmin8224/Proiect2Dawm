import { Component, Input } from '@angular/core';
import { Angajat } from '../serviciu-angajati.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-caracteristici-angajati',
  templateUrl: './caracteristici-angajati.component.html',
  styleUrls: ['./caracteristici-angajati.component.scss']
})
export class CaracteristiciAngajatiComponent {
  @Input() angajati: Angajat[] = [];
  serviciuAngajati: any;
  paginaCurenta: any;
  numarPagini: any;
  modalService: any;

  get numarAngajati(): number {
    return this.angajati.length;
  }

  get salariuMediu(): number {
    const totalSalarii = this.angajati.reduce((total, angajat) => total + angajat.salariu, 0);
    return totalSalarii / this.numarAngajati;
  }

  get departamente(): string[] {
    return Array.from(new Set(this.angajati.map(angajat => angajat.departament)));
  }
  deschideModalAdaugare(): void {
    const modalRef = this.modalService.create({
      nzTitle: 'Adaugă angajat',
      nzContent: CaracteristiciAngajatiComponent,
      nzFooter: null
    });
  
    modalRef.afterClose.subscribe((result: any) => {
      if (result) {
        this.serviciuAngajati.adaugaAngajat(result);
        this.calculeazaNumarPagini();
        this.paginaCurenta = this.numarPagini;
        this.paginare();
      }
    });
  }
  calculeazaNumarPagini(): void {
    const numarAngajatiPePagina = 5; // Set the number of employees to display per page
    this.numarPagini = Math.ceil(this.numarAngajati / numarAngajatiPePagina);
  }
  
  paginare(): void {
    const numarAngajatiPePagina = 5; // Set the number of employees to display per page
    const indexUltimulAngajat = this.paginaCurenta * numarAngajatiPePagina;
    const indexPrimulAngajat = indexUltimulAngajat - numarAngajatiPePagina;
    this.angajati = this.serviciuAngajati.getAngajati().slice(indexPrimulAngajat, indexUltimulAngajat);
  }
  
}
