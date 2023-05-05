import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelComponent } from './tabel/tabel.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TabelComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AngajatiRoutingModule {}
  