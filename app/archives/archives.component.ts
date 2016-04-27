import {Component} from 'angular2/core';
import {RouteConfig, RouteParams} from 'angular2/router';

import {ArchiveComponent} from './archive/archive.component';


@RouteConfig([
    { path: '/test', name: 'Archive', component: ArchiveComponent, useAsDefault: true }
])
@Component({
    selector: 'git-data',
    templateUrl: 'app/archives/archives.partial.html'
})
export class ArchivesComponent {
    archives: string[] = ['12/12/2015', '15/12/2016', '15/03/2008'];
    constructor(private routeParams: RouteParams) {
    }
}
