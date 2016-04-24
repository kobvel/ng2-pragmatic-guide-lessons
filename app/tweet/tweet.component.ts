import {Component, Input} from 'angular2/core';
import {HeartComponent} from '../common/heart/heart.component';

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet/tweet.partial.html',
    directives: [HeartComponent],
    inputs: ['title', 'body', 'imgSrc', 'likes']
})
export class TweetComponent {
    @Input() title: string = 'Title';
    @Input() body: string = 'Body';
    @Input() imgSrc: string = 'http://lorempixel.com/100/100/people';
    @Input() likes: number = 10;

    private onClick(): void {

    }
}
