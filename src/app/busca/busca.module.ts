import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaComponent } from './busca.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { PrimengModule } from '../primeng/primeng.module';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    BuscaComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MatIconModule,
    SelectButtonModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  exports: [
    BuscaComponent
  ]
})
export class BuscaModule { }
