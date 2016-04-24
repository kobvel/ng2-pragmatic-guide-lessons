import {Component, Input, Output, EventEmitter} from 'angular2/core';


@Component({
    selector: 'star-favorite',
    templateUrl: 'app/common/star/star.partial.html',
    inputs: ['isFavorite']
})
export class StarComponent {
    @Output() change = new EventEmitter();
    @Input('is-favorite') isFavorite = false;


    constructor() { }
    private iconActivate(): void {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}
