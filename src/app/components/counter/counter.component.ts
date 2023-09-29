import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input() counterValue: number = 1;
  @Output() counterValueChange = new EventEmitter<number>();

  increaseCounter(): void {
    this.counterValue += 1;
    this.emitCounterValue();
  }

  decreaseCounter(): void {
    if (this.counterValue > 1) {
      this.counterValue -= 1;
      this.emitCounterValue();
    }
  }

  emitCounterValue(): void {
    this.counterValueChange.emit(this.counterValue);
  }
}
