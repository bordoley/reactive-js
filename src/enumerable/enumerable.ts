import { EnumerableLike } from "../enumerable";
import { Factory } from "../functions";
import { AbstractLiftable } from "../liftable";
import { Enumerator } from "./enumerator";

export abstract class AbstractEnumerable<T>
  extends AbstractLiftable<Enumerator<T>>
  implements EnumerableLike<T>
{
  abstract enumerate(this: EnumerableLike<T>): Enumerator<T>;
}

class CreateEnumerable<T> extends AbstractEnumerable<T> {
  constructor(readonly f: Factory<Enumerator<T>>) {
    super();
  }
  enumerate(): Enumerator<T> {
    return this.f();
  }
}

export const createEnumerable = <T>(
  f: Factory<Enumerator<T>>,
): EnumerableLike<T> => new CreateEnumerable(f);
