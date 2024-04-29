import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
skipperID!: number;

  constructor(private route: ActivatedRoute) {
    this.skipperID = this.route.snapshot.params['id']
    console.log(this.skipperID);
  }

}
