import { Component, OnInit } from '@angular/core';
import { faCircleNotch, faLongArrowAltLeft, faLongArrowAltRight, faHeartbeat, faShareAlt, faFilter, faCalendar, faDownload, faUpload, faRetweet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public icons = {
    'leftArrow': faLongArrowAltLeft, 'rightArrow': faLongArrowAltRight, 'circle': faCircleNotch,
    'heartbeat': faHeartbeat, 'share': faShareAlt, 'filter': faFilter, 'calendar': faCalendar, 'download': faDownload, 'upload': faUpload, 'refresh': faRetweet
  };
  public items: IItem[] = [];    // items list
  public activeItemIndex: number = 0;  // index of current active item

  public actions: IActions[] = [];
  public actionStates: IActionState[] = [];

  constructor() {
    this._prepareItemsData();
    this._prepareActions();
    this._prepareActionStates();
  }

  ngOnInit(): void {
  }

  //#region private methods
  private _prepareItemsData() {
    this.items = [];
    for (let index = 0; index < 23; index++) {

      this.items.push({
        index: index,
        title: `Sample Item ${index + 1}`,
        description1: `Sample Key Figure`,
        description2: ` Sample Key Figure ${index + 1}`,
        status: 'active',
        share: 'active',
        filter: 'active',
        calendar: 'active'
      });

    }
  }

  // Actions MetaData
  private _prepareActions() {
    this.actions = [
      { name: 'status', icon: this.icons.heartbeat },
      { name: 'share', icon: this.icons.share },
      { name: 'filter', icon: this.icons.filter },
      { name: 'calendar', icon: this.icons.calendar }
    ];
  }

  // ActionStates MetaData
  private _prepareActionStates() {
    this.actionStates = [
      { index: 0, state: 'active', nextState: 'selective' },
      { index: 1, state: 'selective', nextState: 'toggle' },
      { index: 2, state: 'toggle', nextState: 'inactive' },
      { index: 3, state: 'inactive', nextState: 'active' }
    ];
  }
  //#endregion

  //#region Events
  public showPrevItem() {
    this.activeItemIndex = this.activeItemIndex == 0 ? this.items.length - 1 : this.activeItemIndex - 1;
  }

  public showNextItem() {
    this.activeItemIndex = this.activeItemIndex == this.items.length - 1 ? 0 : this.activeItemIndex + 1;
  }

  public changeState(clickedActionName) {
    let currentState = this.items[this.activeItemIndex][clickedActionName];
    let nextState = this.actionStates.find(val => val.state == currentState).nextState;
    this.items[this.activeItemIndex][clickedActionName] = nextState;
  }
  //#endregion
}

interface IItem {
  index: number;
  title: string;
  description1: string;
  description2: string;
  status: string;
  share: string;
  filter: string;
  calendar: string;
}

interface IActions {
  name: string;
  icon: any;
}

interface IActionState {
  index: number;
  state: string;
  nextState: string;
}
