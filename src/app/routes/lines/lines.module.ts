import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinesRoutingModule } from './lines-routing.module';
import { LinesComponent } from './lines.component';

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    LinesComponent
  ],
  imports: [
    CommonModule,
    LinesRoutingModule,
    TableModule
  ]
})
export class LinesModule { }
