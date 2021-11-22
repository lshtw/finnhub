import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-test-qoute-data',
  templateUrl: './qoute-data.component.html',
  styleUrls: ['./qoute-data.component.scss']
})
export class QouteDataComponent implements OnInit {
  socket: WebSocket;
  constructor(private service: ApiService) {
    this.socket = service.getWS();
  }

  ngOnInit(): void {
    this.socket.addEventListener('open', function (event) {
      this.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}));
    });
    this.socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
    });
  }

  click() {
      this.socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'MEQYF'}));

  }
}
