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
  constructor(readonly enumerate: Factory<Enumerator<T>>) {
    super();
  }
}

export const createEnumerable = <T>(
  enumerate: Factory<Enumerator<T>>,
): EnumerableLike<T> => new CreateEnumerable(enumerate);
