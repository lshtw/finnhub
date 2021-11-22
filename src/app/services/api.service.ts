import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import DataSource from 'devextreme/data/data_source';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getStocks() {
    return this.http.get(environment.apiUrl + 'stock/symbol?exchange=US&token=' + environment.apiKey);
  }

  public getChartData(symbol: string, from: number, to: number) {
    return this.http.get(environment.apiUrl + `/stock/candle?resolution=1&symbol=${symbol}&from=${from}&to=${to}&token=` + environment.apiKey);
  }

  public getStockListDS(): DataSource {
    const self = this;
    return new DataSource({
      store: [],
      load() {
        return self.getStocks()
          .toPromise()
          .then((data: any) => ({
            data: data,
            totalCount: data.length
          }))
          .catch((error: Error) => { throw 'Data Loading Error'; });
      },
    });
  }

  public getStockChartDS(symbol: string): DataSource {
    const self = this;
    return new DataSource({
      load() {
        return self.getChartData(symbol, 1631022248, 1631627048)
          .toPromise()
          .then((data: any) => (
            {
              data: data.c.map((el: number, i: number) => {
                return {
                  c: data.c[i],
                  h: data.h[i],
                  l: data.l[i],
                  o: data.o[i],
                  t: data.t[i],
                  v: data.v[i],
                }
              }),
              totalCount: data.length
            }))
          .catch((error) => { throw 'Data Loading Error'; });
      },
    });
  }

  public getProfile2(symbol: string) {
    return this.http.get(environment.apiUrl + `stock/profile2?symbol=${symbol}&token=` + environment.apiKey);
  }

  public getDetailDataSource(symbol: string) {
    const self = this;
    return new DataSource({
      store: [],
      load() {
        return self.getProfile2(symbol)
          .toPromise()
          .then((data: any) => ({
            data: data,
            totalCount: data.length
          }))
          .catch((error: Error) => { throw 'Data Loading Error'; });
      },
    });
  }

  public getWS() {
      return new WebSocket(`wss://ws.finnhub.io?token=${environment.apiKey}`);
  }
}
