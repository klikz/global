import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerialComponent } from './serial.component';

const routes: Routes = [{ path: '', component: SerialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerialRoutingModule { }
