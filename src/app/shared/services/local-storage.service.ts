import { Injectable } from '@angular/core'

@Injectable()
export class LocalStorage {

    public localStorage: any;

    constructor() {
        if (!window.localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = window.localStorage;
    }

    public set(key:string, value: any): void {
        this.localStorage[key] = JSON.stringify(value);
    }

    public get(key:string): any {
        return JSON.parse(this.localStorage[key] || null);
    }

}
