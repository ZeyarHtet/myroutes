import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  constructor(
    private router: Router
  ) { }
  courseid: number =1;
  ngOnInit(): void {
    this.courseid = 4;

  }
  goToAboutUs(): void {
    console.log("Instructor Log------>",this.courseid);
    this.router.navigate(['aboutus', this.courseid]);
  }
  goToAboutUsURL(): void {
    this.router.navigateByUrl('aboutus');
  }

}
