import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';

@Component({
    selector: 'authors',
    template: `<h2>Authors</h2>
                {{title}}
                <ul>
                    <li *ngFor="#author of authors">{{author}}</li>
                    </ul>
                `,
    providers: [AuthorsService]
})
export class AuthorsComponent {
    public title: string = 'Authors title';
    public authors: string[];
    constructor(private authorsService: AuthorsService) {
        this.authors = this.authorsService.getAuthors();
    }
}
