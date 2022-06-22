import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule) }, { path: 'lines', loadChildren: () => import('./routes/lines/lines.module').then(m => m.LinesModule) }, { path: 'report', loadChildren: () => import('./routes/report/report.module').then(m => m.ReportModule) }, { path: 'defects', loadChildren: () => import('./routes/defects/defects.module').then(m => m.DefectsModule) }, { path: 'defects/admin', loadChildren: () => import('./routes/defects/admin/admin.module').then(m => m.AdminModule) }, { path: 'defects/list', loadChildren: () => import('./routes/defects/list/list.module').then(m => m.ListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
