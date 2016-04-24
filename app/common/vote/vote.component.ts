import {Component, Input, Output} from 'angular2/core';


@Component({
    selector: 'vote',
    templateUrl: 'app/common/vote/vote.partial.html',
    inputs: ['voted', 'totalVotes'],
    styleUrls: ['./app/common/vote/vote.css']
})
export class VoteComponent {
    @Input() voted: string = '';
    @Input() totalVotes: number = 0;
    // @Output() vote: number = 0;

    private voteClick(type: string): void {
        if (type === 'up' && this.voted !== 'up') {
            this.totalVotes += 1;
            if (this.voted !== 'down') {
                this.voted = 'up';
            } else {
                this.voted = '';
            }
        } else if (type === 'down' && this.voted !== 'down') {
            this.totalVotes -= 1;
            if (this.voted !== 'up') {
                this.voted = 'down';
            } else {
                this.voted = '';
            }
        }

    }
}
