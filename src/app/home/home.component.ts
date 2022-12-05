import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router        
  ){}
  ngOnInit(): void{

  }
  goToInstructor():void{
    console.log("Go To Instructor");
    this.router.navigate(['instructor']);
  }
  goToInstructorURL():void{
    console.log("Go To Instructor");
    this.router.navigateByUrl('instructor');
  }
  goToCoursesURL():void{
    console.log("Go To Courses");
    this.router.navigateByUrl('courses');
  }

}
