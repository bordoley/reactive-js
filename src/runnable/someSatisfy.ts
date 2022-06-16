import { Equality, Predicate, isEqualTo, strictEquality } from "../functions";
import { RunnableLike } from "../runnable";
import { AbstractSink } from "../sink";
import { run } from "./run";

class SomeSatisfySink<T> extends AbstractSink<T> {
  result = false;

  constructor(private readonly predicate: Predicate<T>) {
    super();
  }

  notify(next: T) {
    if (this.predicate(next)) {
      this.result = true;
      this.dispose();
    }
  }
}

export const someSatisfy = <T>(
  predicate: Predicate<T>,
): Predicate<RunnableLike<T>> => {
  const createSink = () => new SomeSatisfySink<T>(predicate);
  return run<T, boolean>(createSink);
};

export const contains = <T>(
  value: T,
  options: { readonly equality?: Equality<T> } = {},
): Predicate<RunnableLike<T>> => {
  const { equality = strictEquality } = options;
  return someSatisfy(isEqualTo(value, equality));
};
