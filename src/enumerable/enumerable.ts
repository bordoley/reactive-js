import { empty } from "../container";
import { EnumerableLike } from "../enumerable";
import { Factory, pipe } from "../functions";
import { AbstractLiftable } from "../liftable";
import { Enumerator, enumerate } from "./enumerator";
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
      const enumerator = pipe(
        empty<EnumerableLike<unknown>, T>(fromArrayT),
        enumerate,
      );
      enumerator.dispose({ cause });
      return enumerator;
    }
  }
}

export const createEnumerable = <T>(
  enumerate: Factory<Enumerator<T>>,
): EnumerableLike<T> => new CreateEnumerable(enumerate);
