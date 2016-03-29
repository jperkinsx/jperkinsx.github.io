import {Component} from 'angular2/core';
import {WelcomeComponent} from './welcome.component';
import {Observable} from 'rxjs/Rx';
import {GithubService} from './github.service';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
    selector: 'my-app',
    template: '<h1>Header</h1><welcome></welcome>',
    directives: [WelcomeComponent],
    providers: [GithubService, HTTP_PROVIDERS]
})

export class AppComponent {

    constructor(){
    }

 }
