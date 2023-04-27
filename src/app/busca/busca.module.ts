import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaComponent } from './busca.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { ButtonModule } from '../shared/components/button/button.module';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    BuscaComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatInputModule,
    ButtonModule,
    MatSelectModule,
    MatRadioModule,
    ButtonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    BuscaComponent
  ]
})
export class BuscaModule { }
