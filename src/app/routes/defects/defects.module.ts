import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefectsRoutingModule } from './defects-routing.module';
import { DefectsComponent } from './defects.component';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    DefectsComponent
  ],
  imports: [
    CommonModule,
    DefectsRoutingModule,
    CommonModule,
    TableModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    MenuModule
  ]
})
export class DefectsModule { }
