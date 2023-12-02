import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfosComponent } from './infos/infos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'LucasRodrigues106.github.io/infos/:idApp', component: InfosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
