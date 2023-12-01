import { IApp } from './../../interfaces/IApp';
export class SharedProvider {
  constructor() {}

  async getAppsFromAJsonFile(): Promise<IApp[]> {
    let apps: IApp[] = [];
    await (await fetch('../../assets/allApps.json')).json().then((result) => {
      apps = result;
    });
    return apps;
  }
}
