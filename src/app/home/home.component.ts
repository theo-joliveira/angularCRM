import { Component, inject, OnDestroy } from '@angular/core';
import { DemoObservableService } from '../common/demo-observable.service';
import { map, Subscription, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PhonePipe } from '../common/phone.pipe';

@Component({
  selector: 'crm-home',
  imports: [AsyncPipe, PhonePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {
  demoObsService = inject(DemoObservableService);

  private readonly subs: Subscription[] = [];

  myObservable = this.demoObsService.getObservable();

  testObservable() {
    const subs = this.demoObsService.getObservable()
    .pipe(map((x) => x * 10),take(2))
    .subscribe({
      next: (val: number) => {console.log('next', val)},
      error: (err: any) => {console.error(err)},
      complete: () => {console.log('complete')}
    });

    this.subs.push(subs);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}