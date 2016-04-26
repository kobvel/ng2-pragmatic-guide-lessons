import {Injectable} from 'angular2/core';

import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import {Observable} from 'rxjs/Observable';

import {IGitFollower, IUserInfo} from './git.model';

@Injectable()
export class GitService {
    private _url = 'https://api.github.com/users/';

    constructor(private _http: Http) {

    }
    _getGitData(user: string) {
        return Observable.forkJoin(
            this._http.get(`${this._url}${user}`).map(res => res.json()),
            this._http.get(`${this._url}${user}/followers`).map(res => res.json())
        );
    }

}
