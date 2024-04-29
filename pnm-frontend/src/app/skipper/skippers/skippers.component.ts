import { Component, OnInit } from '@angular/core';
import { SkipperService } from '../services/skipper.service';
import { Skipper } from '../interfaces/skipper';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skippers',
  templateUrl: './skippers.component.html',
  styleUrl: './skippers.component.scss'
})
export class SkippersComponent implements OnInit {
  skippers: Skipper[];
  selectedSkipper!: Skipper;

  constructor(
    private skipperService: SkipperService,
    private router: Router
    ) {
    this.skippers = [];
  }

  ngOnInit(): void {
    this.getSkippers().subscribe(data => {
      this.skippers = data;
    });
  }

  getSkippers() {
    return this.skipperService.getSkippers().pipe(
      map((res: any) => res.data)
    )
  }

  viewProfile(e: any) {
    this.router.navigate([`skippers/profile/${this.selectedSkipper.id}`]);
  }
}
