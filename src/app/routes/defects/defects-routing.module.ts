import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefectsComponent } from './defects.component';

const routes: Routes = [{ path: '', component: DefectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefectsRoutingModule { }
