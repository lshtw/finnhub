import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StocksInfoComponent } from './components/stocks-info/stocks-info.component';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { DxChartModule } from 'devextreme-angular';
import { QouteDataComponent } from './components/qoute-data/qoute-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksInfoComponent,
    StocksListComponent,
    StockDetailComponent,
    StockChartComponent,
    QouteDataComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTemplateModule,
    HttpClientModule,
    DxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
