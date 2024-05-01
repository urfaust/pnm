import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../shared/theme.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

sidebarVisible: boolean = false;

    constructor(
      private themeService: ThemeService
    ){

    }

    ngOnInit() {
    }

    changeTheme(theme: string) {
      this.themeService.switchTheme(theme);
    }

}
