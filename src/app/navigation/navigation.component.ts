import { Component, OnInit } from '@angular/core';
import { faBars, faEllipsisV, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  faBell = faBell;
  faUser = faUser;
  faEllipsisV = faEllipsisV;
  faBars = faBars;
}
