import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BuscaComponent } from './busca.component';
import { ButtonModule } from '../shared/components/button/button.module';

import { MatIconModule } from '@angular/material/icon';

import { MaterialModule } from '../material.module';
import { ParadasComponent } from './paradas/paradas.component';
import { PrecosComponent } from './precos/precos.component';

@NgModule({
  declarations: [
    BuscaComponent,
    ParadasComponent,
    PrecosComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule
  ],
  exports: [
    BuscaComponent
  ]
})
export class BuscaModule { }
