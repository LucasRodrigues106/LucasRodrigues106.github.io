import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { InfosComponent } from './infos/infos.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedProvider } from 'src/providers/shared/shared';
import { HomeComponent } from './home/home.component';
import { InfoDeleteDataUserComponent } from './info-delete-data-user/info-delete-data-user.component';

@NgModule({
  declarations: [AppComponent, InfosComponent, HomeComponent, InfoDeleteDataUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [AppRoutingModule, SharedProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
