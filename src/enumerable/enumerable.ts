import { empty } from "../container";
import { dispose } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { EnumeratorLike } from "../enumerator";
import { Factory, newInstance, pipe, raise } from "../functions";
import { CreateInteractiveContainer } from "../interactiveContainer";
import { none } from "../option";
import { fromArrayT } from "./fromArray";

export const enumerate = <T>(
  enumerable: EnumerableLike<T>,
): EnumeratorLike<T> => enumerable.enumerate();

export abstract class AbstractEnumerable<T> implements EnumerableLike<T> {
  get T(): T {
    return raise();
  }

  get TContainerOf(): EnumerableLike<this["T"]> {
    return this;
  }

  get TLiftableContainerState(): EnumeratorLike<this["T"]> {
    return raise();
  }

  get TCtx(): void {
    return none;
  }

  abstract enumerate(this: EnumerableLike<T>): EnumeratorLike<T>;

  interact(_: void): EnumeratorLike<T> {
    return pipe(this, enumerate);
  }
}

class CreateEnumerable<T> extends AbstractEnumerable<T> {
  constructor(readonly _enumerate: Factory<EnumeratorLike<T>>) {
    super();
  }

  enumerate(): EnumeratorLike<T> {
    try {
      return this._enumerate();
    } catch (cause) {
      return pipe(
        empty<EnumerableLike<unknown>, T>(fromArrayT),
        enumerate,
        dispose({ cause }),
      );
    }
  }
}

export const createEnumerable = <T>(
  enumerate: Factory<EnumeratorLike<T>>,
): EnumerableLike<T> => newInstance(CreateEnumerable, enumerate);

export const createT: CreateInteractiveContainer<EnumerableLike<unknown>> = {
  create: <T>(source: (_: void) => EnumeratorLike<T>) =>
    createEnumerable<T>(() => source(none)),
};
