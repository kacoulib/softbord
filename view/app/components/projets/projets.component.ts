import { Component } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map';

import {Projet} from './app/class/projet.class';

@Component({
    selector: 'app-projet',
    templateUrl: './app/components/projets/projets.html',
    styleUrls : ['./app/components/projets/projets.css']

})
export class ProjetsComponent {
			people: Projet[];

		constructor(http: Http) {
			// http.get('http://echo.jsontest.com/key/value/one/two')
			http.get('http://localhost:8080/home')
			// Call map on the response observable to get the parsed people object
			.map(res => res.json())
			// Subscribe to the observable to get the parsed people object and attach it to the
			// component
			.subscribe(people => {this.people = people; console.log(this.people)});
		}
}
