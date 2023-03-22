import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter$: Observable<number> = this.store.select('counter');

  constructor(private store: Store<{ counter: number }>) {
  }
 
  increment() {
    this.store.dispatch(increment())
  }
 
  decrement() {
    this.store.dispatch(decrement())
  }
 
  reset() {
    this.store.dispatch(reset())
  }

}
