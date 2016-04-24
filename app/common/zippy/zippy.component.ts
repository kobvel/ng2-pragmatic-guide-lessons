import {Component, Input} from 'angular2/core';


@Component({
    selector: 'zippy',
    templateUrl: './app/common/zippy/zippy.partial.html',
    styleUrls: ['./app/common/zippy/zippy.css'],
    inputs: ['title']
})
export class ZippyComponent {
    @Input('title') title = 'Default title';
    private opened: boolean = false;


    constructor() { }
    private onClick() {
        this.opened = !this.opened;
    }

}
