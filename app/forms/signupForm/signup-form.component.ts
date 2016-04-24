import {Component, Input} from 'angular2/core';
import {Control, ControlGroup, Validators} from 'angular2/common';


@Component({
    selector: 'signup-form',
    templateUrl: './app/forms/signupForm/signup-form.partial.html'
})
export class SignUpFormComponent {
    form = new ControlGroup({
        username: new Control('', Validators.required),
        password: new Control('', Validators.required)
    });

    signup() {
        console.log(this.form.value);
    }

}
