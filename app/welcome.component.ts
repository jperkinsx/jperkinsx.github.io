import {Component} from 'angular2/core';
import {GithubService} from './github.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: 'welcome',
    templateUrl: 'app/welcome.html',
    providers: [GithubService],
    directives: [AutoGrowDirective]
})

export class WelcomeComponent {
    title =  "Welcome to NYC Data Science";
    onClick;

    constructor(private _githubService: GithubService){
        this.onClick = function($event){
            console.log('button clicked', $event);
            this._githubService.authorize()
                .subscribe(data => console.log(data))
        }
    }
}
