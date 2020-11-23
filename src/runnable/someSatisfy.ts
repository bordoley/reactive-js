import { Predicate, Equality, strictEquality, isEqualTo } from "../functions";
import { RunnableLike } from "../runnable";
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
  options: { readonly equality?: Equality<T> } = {},
): Predicate<RunnableLike<T>> => {
  const { equality = strictEquality } = options;
  return someSatisfy(isEqualTo(value, equality));
};
