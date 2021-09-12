import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashAComponent } from './dashboard/dash-a/dash-a.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  { path: 'admin=true', component: DashboardComponent},
  { path: 'admin=false', component: DashAComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
