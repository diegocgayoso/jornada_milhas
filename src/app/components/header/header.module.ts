import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
