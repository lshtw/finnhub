import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import DataSource from "devextreme/data/data_source";

@Component({
  selector: 'app-test-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss'],
  providers: [ApiService]
})
export class StockChartComponent implements OnInit, OnChanges {
  @Input() symbol!: string;
  _stockPrices!: DataSource;

  constructor(private service: ApiService) {
    if (this.symbol) {
      this._stockPrices = service.getStockChartDS(this.symbol);
    }
  }

  ngOnInit(): void {
    // this.service.getChartData('AAPL', 1631022248, 1631627048).subscribe((value) => {
    //   this._stockPrices = value;
    // })
  }

  ngOnChanges(e: any) {
    if (e.symbol.currentValue !== e.symbol.previousValue) {
      this._stockPrices = this.service.getStockChartDS(e.symbol.currentValue);
    }
  }

}
