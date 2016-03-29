import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()

export class GithubService {

    constructor(private _http : Http){

    }

    authorize(){

        var options = {
            client_id : '76c877ee4aee6b953866',
            // redirect_uri: '',
            state: 'qpzmwoxn'
        }

        console.log('authorize!');
        return this._http.get('https://github.com/login/oauth/authorize', options)
            .map(res => res.json());
    }
}
