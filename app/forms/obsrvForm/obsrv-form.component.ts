import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {FormBuilder, ControlGroup} from 'angular2/common';

@Component({
    selector: 'obsrv-form',
    templateUrl: 'app/forms/obsrvForm/obsrv-form.partial.html'
})
export class ObsrvFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({ search: [] });

        let search = this.form.find('search');
        search.valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(' ', '-'))
            .subscribe(x => console.log(x));

        let observable = Observable.fromArray([1, 2, 3, 4]);

        let startDates = [];
        let startDate = new Date();

        for (let day = -2; day <= 2; day++) {
            let date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day);
            startDates.push(date);
        }
        Observable
            .fromArray(startDates)
            .map(date => {
                console.log('Getting deals for ' + date);
                return [1, 2, 3];
            })
        // .subscribe(x => console.log(x));

        // let observable1 = Observable.empty().subscribe(x => console.log(x));
        // let observable2 = Observable.range(1, 5).subscribe(x => console.log(x));
        // let observable3 = Observable.fromArray([1, 5]).subscribe(x => console.log(x));
        // let observable4 = Observable.of([1, 5]).subscribe(x => console.log(x));

        // let timer = Observable.interval(1000);
        // timer
        //     .flatMap(x => {
        //         console.log('calling the server to get the latest news');
        //         return Observable.of([1, 2, 3]);
        //     })
        //     .subscribe(news => console.log(news));

        let usersStream = Observable.of({ userId: 1, username: 'Mikki' }).delay(1000);
        let tweetsStream = Observable.of([1, 2, 3]).delay(1500);

        Observable.forkJoin(usersStream, tweetsStream)
            .map(joined => new Object({ user: joined[0], tweet: joined[1] }))
            .subscribe(result => console.log(result));

        let counter = 0;
        let ajaxCall = Observable.of('url')
            .flatMap(() => {
                if (++counter < 2) {
                    return Observable.throw(new Error('Requeest failed'));
                }
                return Observable.of([1, 2, 3]);
            });
        ajaxCall
            .retry(3)
            .subscribe(x => console.log(x), error => console.error(error));

        let remoteDataStream = Observable.throw(new Error('Something failed.'));
        remoteDataStream.catch((err) => {
            let localDataStream = Observable.of([1, 2, 3]);
            return localDataStream;
        }).subscribe(x => console.log(x));
    }
}
