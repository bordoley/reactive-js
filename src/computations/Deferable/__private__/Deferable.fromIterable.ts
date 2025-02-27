import {
  ComputationLike_isPure,
  DeferableLike,
  DeferableLike_eval,
  IterableLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";

class FromIterableDeferable<T> implements DeferableLike<T> {
  readonly [ComputationLike_isPure]: boolean;

  constructor(private readonly i: IterableLike<T>) {
    this[ComputationLike_isPure] = i[ComputationLike_isPure] ?? true;
  }

  [DeferableLike_eval](sink: SinkLike<T>): void {
    for (const v of this.i) {
      if (sink[SinkLike_isComplete]) {
        break;
      }

      sink[SinkLike_next](v);
    }

    sink[SinkLike_complete]();
  }
}

const Deferable_fromIterable: Deferable.Signature["fromIterable"] = (<T>() =>
  (iterable: IterableLike<T>) =>
    newInstance(
      FromIterableDeferable<T>,
      iterable,
    )) as Deferable.Signature["fromIterable"];

export default Deferable_fromIterable;
