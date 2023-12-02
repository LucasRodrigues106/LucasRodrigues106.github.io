import { SharedProvider } from './../../providers/shared/shared';
import { IApp } from './../../interfaces/IApp';
import { Component, Injectable, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss'],
})
@Injectable()
export class InfosComponent {
  id: string = '';
  app: IApp = {
    id: '',
    name: '',
    img: '',
    googlePlayLink: '',
    appStoreLink: '',
  };
  constructor(
    private route: ActivatedRoute,
    private sharedProvider: SharedProvider
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('idApp') as string;
    await this.getAppsFromAJsonFile();
  }

  async getAppsFromAJsonFile() {
    const myApps = await this.sharedProvider.getAppsFromAJsonFile();
    this.app = myApps.find((myApp) => myApp.id === this.id) as IApp;
  }
}
