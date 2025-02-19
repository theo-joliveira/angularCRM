import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ConsumerService } from '../consumer.service';
import { PhonePipe } from '../../common/phone.pipe';

export interface Consumer {
  id: number;
  civility: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}



@Component({
  selector: 'crm-consumer-list',
  imports: [MatTableModule, PhonePipe],
  templateUrl: './consumer-list.component.html',
  styleUrl: './consumer-list.component.css'
})

export class ConsumerListComponent implements OnInit {
  consumerService = inject(ConsumerService);

  displayedColumns: string[] = ['id', 'civility', 'firstname', 'lastname', 'email', 'phone', 'createdAt', 'updatedAt'];
  dataSource: Consumer[] = [];

  ngOnInit(): void {
    this.consumerService.getConsumers().subscribe((consumers: Consumer[]) => {
      this.dataSource = consumers;
    });
  }
}

