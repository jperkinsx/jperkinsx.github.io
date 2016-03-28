import {Component} from 'angular2/core'

@Component({
    selector: 'courses',
    templateUrl: 'app/courses.html'
})

export class CoursesComponent {
    title = 'The title of the courses page';
    courses = ['Course1', 'Course2', 'Course3', 'slayer'];
}
