import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaComponent } from './busca.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BuscaComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MatIconModule
  ],
  exports: [
    BuscaComponent
  ]
})
export class BuscaModule { }
