import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap'

@Component({
    selector: 'app-single-projet',
    templateUrl: './app/components/projets/single.html',
    styleUrls : ['./app/components/projets/projets.css']

})

export class SingleProjectCmp
{
	project : any;

	constructor(private route: ActivatedRoute, private router: Router, private http: Http)
	{
		this.http = http;
		// http.get('http://echo.jsontest.com/key/value/one/two')
		this.http.get('http://localhost:8080/projects')
		// Call map on the response observable to get the parsed people object
		.map(res => res.json())
		// Subscribe to the observable to get the parsed people object and attach it to the
		// component
		.subscribe(project =>
		{
			this.project = project;
			console.log(this.route.params)
		});
		// .subscribe(project => {this.projects.push(project); console.log(this.project)});
	}

	getAll()
	{
		this.http.get('http://localhost:8080/projects')
		.map(res => res.json())
		.subscribe(projects => {this.projects = projects;})
	}
}