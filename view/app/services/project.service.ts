import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService
{
	constructor(private http: Http)
	{}
  	getProjects(): Promise
  	{
		return this.http.get('http://localhost:8080/projects')
		.toPromise()
    	.then(response => {response.json()})
		.catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); // for demo purposes only
    	return Promise.reject(error.message || error);
  	}
}