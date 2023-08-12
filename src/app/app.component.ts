import { Component } from '@angular/core';

interface IApps {
  name: string,
  img: string,
  googlePlayLink: string,
  appStoreLink: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-project-app';
  img: string = "../../assets/imgs/logoCell.webp";

  apps: IApps[] = []

  constructor() {
    this.getAppsFromAJsonFile();
  }

  // async ngOnInit() {
  //   await this.getAppsFromAJsonFile();
  // }

  async getAppsFromAJsonFile() {
    await (await fetch("../../assets/allApps.json")).json().then((result) => {
      this.apps = result;
    });
  }

  openLink(link: string) {
    window.open(link);

  }
}
