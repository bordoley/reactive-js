import { asap } from "@most/scheduler";

class FromArrayTask<T> {
  private active = true;
  constructor(private array: readonly T[], private sink: any) {}

  run(t: any) {
    for (let i = 0, l = this.array.length; i < l && this.active; ++i) {
      this.sink.event(t, this.array[i]);
    }

    this.active && this.sink.end(t);
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
  run(sink: any, scheduler: any) {
    return asap(new FromArrayTask(this.array, sink), scheduler);
  }
}

export const fromArray = <T>(a: readonly T[]) => {
  return new FromArray(a);
};
