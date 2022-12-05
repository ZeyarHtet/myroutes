import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularComponent } from './angular/angular.component';
import { CoursesComponent } from './courses/courses.component';
import { FlutterComponent } from './home/flutter/flutter.component';
import { HomeComponent } from './home/home.component';
import { InstructorComponent } from './instructor/instructor.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: 'flutter',
        component: FlutterComponent,
      }
    ]
  },
  {
    path: 'instructor',
    component: InstructorComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: 'angular',
        component: AngularComponent,

      },
      // {
      //   path: 'flutter',
      //   component: FlutterComponent,
      // },
    ]
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'angular',
    component: AngularComponent,
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
