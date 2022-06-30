import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerialRoutingModule } from './serial-routing.module';
import { SerialComponent } from './serial.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    SerialComponent
  ],
  imports: [
    CommonModule,
    SerialRoutingModule,
    InputTextModule,
    FormsModule,
    TableModule,
    ButtonModule
  ]
})
export class SerialModule { }
