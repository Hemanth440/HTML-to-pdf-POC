import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ChildOneComponent } from './home/child-one/child-one.component';
import { ChildTwoComponent } from './home/child-two/child-two.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent,
    children: [                          //<---- child components declared here
      {
          path:'child-one',
          component: ChildOneComponent
      },
      {
          path:'child-two',
          component: ChildTwoComponent
      }
    ]
  },
  {
    path: 'dashboard', 
    loadChildren: './dashboard/dashboard/dashboard.module#DashboardModule'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
