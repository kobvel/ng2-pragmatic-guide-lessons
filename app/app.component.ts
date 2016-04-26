import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {OnInit} from 'angular2/core';
import {Post} from './post';

import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {StarComponent} from './common/star/star.component';
import {HeartComponent} from './common/heart/heart.component';
import {VoteComponent} from './common/vote/vote.component';
import {TweetComponent} from './tweet/tweet.component';
import {TweetDataService} from './tweetData.service';
import {ITweet} from './tweetData.service';

import {ZippyComponent} from './common/zippy/zippy.component';

import {ContactFormComponent} from './forms/contactForm/contact-form.component';
import {SignUpFormComponent} from './forms/signupForm/signup-form.component';
import {PassFormComponent} from './forms/passForm/pass-form.component';
import {ObsrvFormComponent} from './forms/obsrvForm/obsrv-form.component';


import {GitComponent} from './gitData/git.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.partial.html',
    directives: [
        TweetComponent,
        ZippyComponent,
        ContactFormComponent,
        SignUpFormComponent,
        PassFormComponent,
        ObsrvFormComponent,
        GitComponent
    ],
    providers: [TweetDataService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
    isLoading: boolean = true;
    private tweets: ITweet[];

    constructor(
        private tweetDataService: TweetDataService, ) {
        this.tweets = this.tweetDataService.getTweets();
    }
    ngOnInit() {
        console.log('on init');
    }
}
