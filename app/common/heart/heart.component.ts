import {Component, Input} from 'angular2/core';


@Component({
    selector: 'heart',
    templateUrl: 'app/common/heart/heart.partial.html',
    inputs: ['iLike', 'totalLikes'],
    styleUrls: ['./app/common/heart/heart.css']
})
export class HeartComponent {
    @Input() iLike: boolean = false;
    @Input() totalLikes: number = 0;

    private onClick(): void {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }
}
