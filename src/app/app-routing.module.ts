import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfosComponent } from './infos/infos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'infos/:idApp', component: InfosComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
