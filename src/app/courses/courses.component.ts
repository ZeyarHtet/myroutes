import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
    // console.log(this.activateRoute.snapshot.params['id']);
}
goToAngular():void{
  console.log("Go To Angular");
  this.route.navigate(['angular']);
}
goToAngularURL():void{
  console.log("Go To Angular");
  this.route.navigateByUrl('angular');
}

}
