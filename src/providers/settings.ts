import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Settings provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Settings {

 private theme: BehaviorSubject<String>;

    constructor() {
        this.theme = new BehaviorSubject('other-theme');
    }

    setActiveTheme(val) {
        this.theme.next(val);
    }

    getActiveTheme() {
        return this.theme.asObservable();
    }

}
