import {Component, Input} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {ConfirmValidators} from './confirmValidators';

@Component({
    selector: 'pass-form',
    templateUrl: './app/forms/passForm/pass-form.partial.html'
})
export class PassFormComponent {
    form: ControlGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            current: ['', Validators.required],
            newpass: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirm: ['', Validators.compose([Validators.required])]
        }, { validator: ConfirmValidators.shouldMatchWith });

    }
    changePass(form) {
        let oldPassword = this.form.find('current');
        if (oldPassword.value !== '1234') {
            oldPassword.setErrors({ validOldPassword: true });
        }

        if (this.form.valid) {
            alert('Password successfully changed.');
        }
    }
}
