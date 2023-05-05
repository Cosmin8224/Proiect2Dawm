import { Angajat, ServiciuAngajatiService } from '../serviciu-angajati.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CaracteristiciAngajatiComponent } from '../caracteristici-angajati/caracteristici-angajati.component';
import { Subscription } from 'rxjs';
import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.scss'],
  providers: [CurrencyPipe]
})


export class TabelComponent {
  @Input() angajati: Angajat[] = [];
  paginaCurenta = 1;
  elementePePagina = 8;
  numarPagini = 1;
  angajatiPaginati: Angajat[] = [];
  private modificareSub: Subscription = new Subscription();
  
  constructor(private serviciuAngajati: ServiciuAngajatiService, private modalService: NzModalService) { }

  ngOnInit(): void {
    this.modificareSub = this.serviciuAngajati.modificareAngajat.subscribe(() => {
      this.paginaCurenta = 1;
      this.calculeazaNumarPagini();
      this.paginare();
    });

    this.calculeazaNumarPagini();
    this.paginare();
  }

  ngOnDestroy(): void {
    this.modificareSub.unsubscribe();
  }

  deschideModalAdaugare(): void {
    const modalRef = this.modalService.create({
      nzTitle: 'Adaugă angajat',
      nzContent: CaracteristiciAngajatiComponent,
      nzFooter: null
    });
  
    modalRef.afterClose.subscribe(result => {
      if (result) {
        this.serviciuAngajati.adaugaAngajat(result);
        this.calculeazaNumarPagini();
        this.paginaCurenta = this.numarPagini;
        this.paginare();
      }
    });
  }
  

  deschideModalEditare(id: number): void {
    const angajat = this.serviciuAngajati.getAngajatById(id);
    if (angajat) {
      const modalRef = this.modalService.create({
        nzTitle: 'Editează angajat',
        nzContent: CaracteristiciAngajatiComponent,
        nzFooter: null
      });

      modalRef.afterClose.subscribe(result => {
        if (result) {
          this.serviciuAngajati.actualizeazaAngajat(result);
          this.paginare();
        }
      });
    }
  }

  stergeAngajat(id: number): void {
    this.serviciuAngajati.stergeAngajat(id);
    this.calculeazaNumarPagini();
    if (this.paginaCurenta > this.numarPagini) {
      this.paginaCurenta--;
    }
    this.paginare();
  }

  calculeazaNumarPagini(): void {
    this.numarPagini = Math.ceil(this.angajati.length / this.elementePePagina);
  }

  paginare(): void {
    const indexInceput = (this.paginaCurenta - 1) * this.elementePePagina;
    const indexSfarsit = this.paginaCurenta * this.elementePePagina;
    this.angajatiPaginati = this.angajati.slice(indexInceput, indexSfarsit);
    }

    schimbaPagina(pagina: number): void {
    this.paginaCurenta = pagina;
    this.paginare();
    }
  }