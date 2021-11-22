import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-stocks-info',
  templateUrl: './stocks-info.component.html',
  styleUrls: ['./stocks-info.component.scss']
})
export class StocksInfoComponent implements OnInit {
  symbol: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSymbolChanged(e: string) {
    this.symbol = e;
  }

}
