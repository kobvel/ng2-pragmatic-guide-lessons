import { ControlGroup} from 'angular2/common';
/**
 * name
 */
export class ConfirmValidators {
    static shouldMatchWith(group: ControlGroup) {
        const newPassword = group.find('newpass').value;
        const confirmPassword = group.find('confirm').value;

        if (newPassword !== confirmPassword) {
            return { shouldMatchWith: true };
        }
        return null;
    }
}