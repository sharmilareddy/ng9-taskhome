import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabsComponent } from './tabs/tabs.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EchartsComponent } from './echarts/echarts.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { LineChartComponent } from './charts/line-chart/line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TabsComponent,
    EchartsComponent,
    ToolbarComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts,
    }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
