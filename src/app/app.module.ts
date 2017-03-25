import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {nvD3} from 'ng2-nvd3';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarchartComponent } from './shared/barchart/barchart.component';
import { MultiBarchartComponent } from './shared/multibarchart/multibarchart.component';
import { nvd3BarchartComponent } from './shared/nvd3/nvd3barchart.component';
import { routing, appRoutingProviders } from './app.routes';

import { ChartsSectionComponent } from './components/charts-section';
import { DemoHeaderComponent } from './components/demo-header';
import { LineChartDemoComponent } from './components/charts/line-chart-demo';

import { ChartsModule } from 'ng2-charts';

import { ChartsComponent } from './components/charts.component';

@NgModule({
  declarations: [
    ChartsComponent,
    HomeComponent,
    BarchartComponent,
    MultiBarchartComponent,
    nvD3,
    nvd3BarchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
