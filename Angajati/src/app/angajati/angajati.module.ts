import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelComponent } from './tabel/tabel.component';
import { CaracteristiciAngajatiComponent } from './caracteristici-angajati/caracteristici-angajati.component';



@NgModule({
  declarations: [
    TabelComponent,
    CaracteristiciAngajatiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AngajatiModule { }
