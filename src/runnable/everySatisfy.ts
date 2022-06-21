import { Predicate, compose, negate } from "../functions";
import { RunnableLike } from "../runnable";
import { run } from "./run";
import { Sink } from "./sinks";

class EverySatisfySink<T> extends Sink<T> {
  result = true;

  constructor(private readonly predicate: Predicate<T>) {
    super();
  }

  notify(next: T) {
    if (!this.predicate(next)) {
      this.result = false;
      this.dispose();
    }
  }
}

export const everySatisfy = <T>(
  predicate: Predicate<T>,
): Predicate<RunnableLike<T>> => {
  const createSink = () => new EverySatisfySink<T>(predicate);
  return run<T, boolean>(createSink);
};

export const noneSatisfy = <T>(
  predicate: Predicate<T>,
): Predicate<RunnableLike<T>> => everySatisfy(compose(predicate, negate));
