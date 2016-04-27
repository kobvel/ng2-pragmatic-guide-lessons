import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';


@Component({
    selector: 'git-data',
    templateUrl: 'app/archives/archive/archive.partial.html'
})
export class ArchiveComponent {
    date: string;
    constructor(private routeParams: RouteParams) {
    }
}
