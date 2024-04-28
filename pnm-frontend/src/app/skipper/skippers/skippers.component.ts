import { Component, OnInit } from '@angular/core';
import { SkipperService } from '../services/skipper.service';
import { Skipper } from '../interfaces/skipper';
import { map } from 'rxjs';

@Component({
  selector: 'app-skippers',
  templateUrl: './skippers.component.html',
  styleUrl: './skippers.component.scss'
})
export class SkippersComponent implements OnInit {
  skippers: Skipper[];

  constructor(private skipperService: SkipperService) {
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
}
