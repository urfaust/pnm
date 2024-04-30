import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkipperService } from '../services/skipper.service';
import { Skipper } from '../interfaces/skipper';
import { map } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  skipperID!: number;
  skipper!: Skipper;
  url!: string
  fullName!: string
  email!: string
  region!: string

  constructor(
    private route: ActivatedRoute,
    private skipperService: SkipperService
    ) {
    this.skipperID = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getSkipper(this.skipperID).subscribe(data => {
      this.skipper = data;
      this.url = this.skipper.attributes.imageUrl;
      this.fullName = `${this.skipper.attributes.surname} ${this.skipper.attributes.name}`
      this.email = this.skipper.attributes.email
      this.region = this.skipper.attributes.region;
    });
  }

  getSkipper(id: any) {
    return this.skipperService.getSkipper(id).pipe(
      map((res: any) => res.data)
    )
  }
}
