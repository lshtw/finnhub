import {Component, Input, OnInit} from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-test-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss'],
  providers: [ApiService]
})
export class StockDetailComponent implements OnInit {
  @Input() key!: string;

  detailDataSource!: DataSource;
  constructor(private service: ApiService) {
    if (this.key) {
      this.detailDataSource = service.getDetailDataSource(this.key);
    }
  }

  ngOnInit(): void {
    this.detailDataSource = this.service.getDetailDataSource(this.key);
  }


}
