import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.styl']
})
export class MainMenuComponent implements OnInit {
  public isViewPointMenu = false;
  constructor() { }

  ngOnInit() {
    if (this.isLocalStorage('token')) this.isViewPointMenu = true;

  }

  public isLocalStorage(item: string) {
    return !!localStorage.getItem(item);
  }

}
