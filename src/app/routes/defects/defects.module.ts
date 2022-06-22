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

// import { MatButtonModule } from '@angular/material/button';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatSelectModule } from '@angular/material/select';
// import { MatTooltipModule } from '@angular/material/tooltip';


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
    MenuModule,
    // MatDialogModule,
    // MatListModule,
    // MatTooltipModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatInputModule,
    // MatMenuModule,
    // MatIconModule,
    
  ]
})
export class DefectsModule { }
