import { Component, OnInit } from '@angular/core';
import { Angajat, ServiciuAngajatiService } from './angajati/serviciu-angajati.service';
import { TabelComponent } from './angajati/tabel/tabel.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  angajati: Angajat[] | undefined;
  modalService: any;

  constructor(private serviciuAngajati: ServiciuAngajatiService) { }

  ngOnInit(): void {
    this.angajati = this.serviciuAngajati.getAngajati();
  }
}
