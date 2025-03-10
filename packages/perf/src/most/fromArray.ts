import {
  ContinuationContextLike_yield,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "@reactive-js/core/utils";
import * as VirtualTimeScheduler from "@reactive-js/core/utils/VirtualTimeScheduler";

class FromArrayTask<T> {
  private active = true;
  constructor(
    private array: readonly T[],
    private sink: any,
  ) {}

  run(t: any) {
    const length = this.array.length;

    // The idea here is to create a comparison that removes the cost of the
    // scheduler framework from the equation so that we can improved reactive-js
    // operators to attempt to match that of most.
    const scheduler = VirtualTimeScheduler.create();

    let i = 0;
    scheduler[SchedulerLike_schedule](ctx => {
      while (i < length && this.active) {
        this.sink.event(t, this.array[i]);
        i++;
        ctx[ContinuationContextLike_yield]();
      }

      this.active && this.sink.end(t);
    });

    scheduler[VirtualTimeSchedulerLike_run]();
  }

  error(t: any, e: any) {
    this.sink.error(t, e);
  }

  dispose() {
    this.active = false;
  }
}

class FromArray<T> {
  constructor(private array: readonly T[]) {
    this.array = array;
  }
  run(sink: any, _scheduler: any) {
    const task = new FromArrayTask(this.array, sink);
    task.run(0);
    return task;
  }
}

export const fromArray = <T>(a: readonly T[]) => {
  return new FromArray(a);
};
