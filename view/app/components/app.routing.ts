import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloCmp }  from './hello/hello.component';
import { ProjectsCmp }  from './projets/projets.component';
import { SingleProjectCmp }  from './projets/single.component';
import { ContactCmp }  from './contact/contact.component';

const appRoutes: Routes = [

  { path: '', component: HelloCmp },
  { path: 'projets', component: ProjectsCmp },
  { path: 'projets/:slug', component: SingleProjectCmp },
  { path: 'contact', component: ContactCmp },
  // { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);