import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelComponent } from './tabel/tabel.component';
import { CaracteristiciAngajatiComponent } from './caracteristici-angajati/caracteristici-angajati.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination'; // Adăugat această linie
import { AngajatiRoutingModule } from './angajati-routing.module';

@NgModule({
  declarations: [
    CaracteristiciAngajatiComponent
  ],
  imports: [
    CommonModule,
    AngajatiRoutingModule,
    NzPaginationModule // Adăugat această linie
  ]
})
export class AngajatiModule { }
