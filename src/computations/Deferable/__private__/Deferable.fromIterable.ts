import {
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";

class FromIterableDeferable<T> implements DeferableLike<T> {
  constructor(private readonly i: Iterable<T>) {}

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

const Deferable_fromIterable: Deferable.Signature["fromIterable"] =
  <T>() =>
  (iterable: Iterable<T>) =>
    newInstance(FromIterableDeferable, iterable);

export default Deferable_fromIterable;
