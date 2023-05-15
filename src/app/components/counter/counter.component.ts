import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, incrementBy, reset } from 'src/app/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter$: Observable<number> = this.store.select('counter');
  selectedValue = 1;

  constructor(private store: Store<{ counter: number }>) {
  }
 
  increment() {
    this.store.dispatch(incrementBy({amount: this.selectedValue}))
  }
 
  decrement() {
    this.store.dispatch(decrement())
  }
 
  reset() {
    this.store.dispatch(reset())
  }

}
