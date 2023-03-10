/*
* File: app-routing.module.ts
* Author: Sangare F. Felisha
* Copyright: 2023, Sangare F. Felisha
* Group: Szoft II N
* Date: 2023-01-04
* Github: https://github.com/fe-ktch/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { TestominComponent } from './testomin/testomin.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'github', component: GithubComponent},
  {path: '', component: TestominComponent }
];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
