import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IApp } from 'src/interfaces/IApp';
import { SharedProvider } from 'src/providers/shared/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'my-angular-project-app';
  img: string = '../../assets/imgs/logoCell.webp';

  apps: IApp[] = [];

  constructor(private sharedProvider: SharedProvider, private router: Router) {
    // this.getAppsFromAJsonFile();
  }

  async ngOnInit() {
    await this.getAppsFromAJsonFile();
  }

  goToInfosPage(idApp: string) {
    this.router.navigate([`infos`, idApp]);
  }

  async getAppsFromAJsonFile() {
    this.apps = await this.sharedProvider.getAppsFromAJsonFile();
  }

  openLink(link: string) {
    window.open(link);
  }
}
