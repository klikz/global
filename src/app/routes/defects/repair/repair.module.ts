import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairRoutingModule } from './repair-routing.module';
import { RepairComponent } from './repair.component';
import {FormsModule} from '@angular/forms';

import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    RepairComponent
  ],
  imports: [
    CommonModule,
    RepairRoutingModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
  ]
})
export class RepairModule { }
