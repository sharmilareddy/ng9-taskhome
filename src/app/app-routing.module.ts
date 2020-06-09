import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

const routes: Routes = [{path: "tabs", component: TabsModule}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
