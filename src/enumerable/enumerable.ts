import { EnumerableLike } from "../enumerable";
import { AbstractLiftable } from "../liftable";
import { Enumerator } from "./enumerator";

export abstract class AbstractEnumerable<T>
  extends AbstractLiftable<Enumerator<T>>
  implements EnumerableLike<T>
{
  abstract enumerate(this: EnumerableLike<T>): Enumerator<T>;
}
