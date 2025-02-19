import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Consumer } from './consumer-list/consumer-list.component';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  httpClient = inject(HttpClient);

  getConsumers() {
    return this.httpClient.get<Consumer[]>('/api/consumers');
  }
}
