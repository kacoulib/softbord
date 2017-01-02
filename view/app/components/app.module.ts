import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

// sevices
import {ProjectService} from '/build/app/services/project.service';

// components
import { AppCmp }  from './app.component';
import { NavCmp } from './partials/nav.component';
import { HelloCmp } from './hello/hello.component';
import { ProjectsCmp } from './projets/projets.component';
import { SingleProjectCmp } from './projets/single.component';
import { ContactCmp } from './contact/contact.component';
import { FbBotCmp } from './__features__/fb_bot/fb_bot.component';



@NgModule({
  imports:
  [
  	BrowserModule,
  	routing,
    HttpModule,
    JsonpModule
	],
	
  declarations:
  [
  	AppCmp,
  	NavCmp,
  	HelloCmp,
    ProjectsCmp,
  	SingleProjectCmp,
  	ContactCmp,
  	FbBotCmp
  ],

  providers:
  [
    ProjectService,
    appRoutingProviders
  ],

  bootstrap:
  [
    AppCmp
  ]
})
export class AppModule { }
