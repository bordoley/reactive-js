import {
  Predicate,
  Equality,
  strictEquality,
  isEqualTo,
} from "../../functions";
import { RunnableLike } from "./interfaces";
import { AbstractSink } from "./sink";

class SomeSatisfySink<T> extends AbstractSink<T> {
  result = false;

  constructor(private readonly predicate: Predicate<T>) {
    super();
  }

  notify(next: T) {
    if (this.predicate(next)) {
      this.result = true;
      this.done();
    }
  }
}

export const someSatisfy = <T>(
  predicate: Predicate<T>,
): Predicate<RunnableLike<T>> => runnable => {
  const sink = new SomeSatisfySink(predicate);
  runnable.run(sink);
  return sink.result;
};

export const contains = <T>(
  value: T,
  equality: Equality<T> = strictEquality,
): Predicate<RunnableLike<T>> => someSatisfy(isEqualTo(value, equality));
