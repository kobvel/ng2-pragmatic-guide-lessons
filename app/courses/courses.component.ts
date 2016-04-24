import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from '../directives/auto-grow.directive';

@Component({
    selector: 'courses',
    templateUrl: 'app/courses/courses.partial',
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    public title: string = 'this title of course';
    public courses: string[];

    constructor(private courseService: CourseService) {
        this.courses = this.courseService.getCourses();
    }
}