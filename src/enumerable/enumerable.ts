import { empty } from "../container";
import { dispose } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { Enumerator } from "../enumerator";
import { Factory, newInstance, pipe, raise } from "../functions";
import { fromArrayT } from "./fromArray";

export const enumerate = <T>(enumerable: EnumerableLike<T>): Enumerator<T> =>
  enumerable.enumerate();

export abstract class AbstractEnumerable<T> implements EnumerableLike<T> {
  get T(): T {
    return raise();
  }
  get TContainerOf(): EnumerableLike<this["T"]> {
    return this;
  }
  get TLiftableState(): Enumerator<this["T"]> {
    return raise();
  }

  abstract enumerate(this: EnumerableLike<T>): Enumerator<T>;

  source(_: void): Enumerator<T> {
    return pipe(this, enumerate);
  }
}

class CreateEnumerable<T> extends AbstractEnumerable<T> {
  constructor(readonly _enumerate: Factory<Enumerator<T>>) {
    super();
  }

  enumerate(): Enumerator<T> {
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
  enumerate: Factory<Enumerator<T>>,
): EnumerableLike<T> => newInstance(CreateEnumerable, enumerate);
