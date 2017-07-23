import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showPrevious = false;

  constructor (private router: Router) {}

  previousDropDown (set?: boolean) {
    if (set === false || set === true) {
      this.showPrevious = set;
      return;
    }
    this.showPrevious = !this.showPrevious;
  }

  home () {
    this.router.navigate(['/meetups']);
  }

}
