import { Component, NgModule } from '@angular/core';
import { GuardsCheckStart, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { TestominComponent } from './testomin/testomin.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'github', component: GuardsCheckStart},
  {path: 'calculator', component: TestominComponent }
];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
