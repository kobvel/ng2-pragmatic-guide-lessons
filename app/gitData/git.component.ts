import {Component, OnInit} from 'angular2/core';
import {GitService} from './git.service';
import {IGitFollower, IUserInfo} from './git.model';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'git-data',
    templateUrl: 'app/gitData/git.partial.html',
    providers: [GitService],
    directives: [],
    styleUrls: ['./app/gitData/styles.css']
})
export class GitComponent implements OnInit {
    isLoading: boolean = false;
    user: IUserInfo;
    followers: IGitFollower[];

    constructor(private gitService: GitService, private routeParams: RouteParams) {
    }
    ngOnInit() {
        this.gitService._getGitData('kobvel')
            .subscribe(
            data => {
                this.user = data[0];
                this.followers = data[1];
            },
            err => console.error(err)
            );

        console.log(this);

    }
}
