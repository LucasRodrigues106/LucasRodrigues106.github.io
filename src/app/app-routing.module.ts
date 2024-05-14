import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfosComponent } from './infos/infos.component';
import { HomeComponent } from './home/home.component';
import { InfoDeleteDataUserComponent } from './info-delete-data-user/info-delete-data-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'infos/:idApp', component: InfosComponent },
  { path: 'InfoDeleteDataUser', component: InfoDeleteDataUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
