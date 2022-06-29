import { empty } from "../container";
import { dispose } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { Enumerator } from "../enumerator";
import { Factory, newInstance, pipe } from "../functions";
import { AbstractLiftable } from "../liftable";
import { fromArrayT } from "./fromArray";

export abstract class AbstractEnumerable<T>
  extends AbstractLiftable<Enumerator<T>>
  implements EnumerableLike<T>
{
  abstract enumerate(this: EnumerableLike<T>): Enumerator<T>;
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

export const enumerate = <T>(enumerable: EnumerableLike<T>): Enumerator<T> =>
  enumerable.enumerate();
