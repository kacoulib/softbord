import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavComponent } from './partials/nav.component';
import { AboutComponent } from './about/about.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { FbBotComponent } from './__features__/fb_bot/fb_bot.component';


@NgModule({
  imports: [
  	BrowserModule,
  	routing,
	HttpModule,
	JsonpModule
	],
	
  declarations: [
  	AppComponent,
  	NavComponent,
  	AboutComponent,
  	ProjetsComponent,
  	ContactComponent,
  	FbBotComponent
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
