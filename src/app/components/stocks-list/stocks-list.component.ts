import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ApiService} from '../../services/api.service';
import DataSource from "devextreme/data/data_source";
import ArrayStore from "devextreme/data/array_store";

@Component({
  selector: 'app-test-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss'],
  providers: [ApiService]
})
export class StocksListComponent implements OnInit {
  _dataSource: DataSource;
  @Output() symbolChanged = new EventEmitter<string>();

  constructor(private service: ApiService) {
    this._dataSource = service.getStockListDS();
  }

  ngOnInit(): void {
  }

  selectionChanged(e: any) {
    this.symbolChanged.emit(e.key.symbol)
  }

}
