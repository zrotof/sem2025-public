import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    DialogModule,
    SplitButtonModule
  ],
  exports: [
    MenuModule,
    DialogModule,
    SplitButtonModule
  ]
})
export class PrimeNgComponentsModule { }
