class FromArrayTask<T> {
  private active = true;
  constructor(
    private array: readonly T[],
    private sink: any,
  ) {}

  run(t: any) {
    const length =  this.array.length;
    for (let i = 0; i < length && this.active; i++) {
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
  run(sink: any, _scheduler: any) {
    const task = new FromArrayTask(this.array, sink);
    task.run(0);
    return task;
  }
}

export const fromArray = <T>(a: readonly T[]) => {
  return new FromArray(a);
};
