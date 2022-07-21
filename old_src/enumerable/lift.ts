import { Lift, TInteractive, interactive } from "../__internal__.liftable";
import { EnumerableLike, EnumerableOperator } from "../enumerable";
import { EnumeratorLike } from "../enumerator";
import { Function1, newInstance, pipe } from "../functions";
import { AbstractEnumerable, enumerate } from "./enumerable";

class LiftedEnumerable<T> extends AbstractEnumerable<T> {
  constructor(
    readonly src: EnumerableLike<any>,
    readonly operators: readonly Function1<
      EnumeratorLike<any>,
      EnumeratorLike<any>
    >[],
  ) {
    super();
  }

  enumerate(): EnumeratorLike<T> {
    return pipe(this.src, enumerate, ...this.operators) as EnumeratorLike<T>;
  }
}
