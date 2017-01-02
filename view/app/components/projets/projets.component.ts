import {Component, OnInit} from '@angular/core';
// import {Http, Response} from '@angular/http';
// import 'rxjs/add/operator/map';
import {ProjectService} from 'app/services/project.service';
// import 'rxjs/add/operator/toPromise';

@Component({
    selector : 'app-projet',
    templatselectoreUrl: './app/components/projets/projets.html',
    styleUrls : ['./app/components/projets/projets.css'],
    providers : [ProjectService]
})
export class ProjectsCmp implements OnInit
{
	selectedProject: any; 
	projects: any;

	constructor(private projectService: ProjectService) {
		
	}
	getProjects(): void
	{
		this.projectService
			.getProjects()
			.then(projects=> console.log(projects));
	}
	ngOnInit(): void {
		this.getProjects();
	}
}
