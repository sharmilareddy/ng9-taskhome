import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  public tabs: any[] = [];
  public menus: any[] = [];

  constructor() {
    this._prepareTabsData();
    this._prepareMenuData();
  }

  _prepareTabsData() {
    this.tabs = [
      { heading: 'Tab 1', active: true, id: 'tab1' },
      { heading: 'Tab 2', active: false, id: 'tab2' },
      { heading: 'Tab 3', active: false, id: 'tab3' }
    ];
  }
    _prepareMenuData() {
      this.menus = [
        { name: 'menu1' },
        { name: 'menu2' },
        { name: 'menu3' },
      ];
  
  }
  @ViewChild('tabset', { static: false }) tabset: TabsetComponent;

  switchTo(): void {
    this.tabset.tabs[1].active = true;
  }

  disableEnable() {
    this.tabset.tabs[0].deselect;
  }

}
