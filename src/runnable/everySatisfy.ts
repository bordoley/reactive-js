import { Predicate, compose, negate } from "../functions";
import { RunnableLike } from "../runnable";
import { AbstractSink } from "./sink";

class EverySatisfySink<T> extends AbstractSink<T> {
  result = true;

  constructor(private readonly predicate: Predicate<T>) {
    super();
  }

  notify(next: T) {
    if (!this.predicate(next)) {
      this.result = false;
      this.done();
    }
  }
}

export const everySatisfy =
  <T>(predicate: Predicate<T>): Predicate<RunnableLike<T>> =>
  runnable => {
    const sink = new EverySatisfySink(predicate);
    runnable.run(sink);
    return sink.result;
  };

export const noneSatisfy = <T>(
  predicate: Predicate<T>,
): Predicate<RunnableLike<T>> => everySatisfy(compose(predicate, negate));
