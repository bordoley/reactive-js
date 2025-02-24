import {
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
} from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";
import DelegatingNonCompletingSink from "../../Sink/__internal__/DelegatingNonCompletingSink.js";

class ConcatManyDeferable<T> implements DeferableLike<T> {
  constructor(private readonly s: readonly DeferableLike<T>[]) {}

  [DeferableLike_eval](sink: SinkLike<T>): void {
    const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);

    for (const src of this.s) {
      src[DeferableLike_eval](delegatingSink);

      if (sink[SinkLike_isComplete]) {
        break;
      }
    }
    sink[SinkLike_complete]();
  }
}

const Deferable_concatMany: Deferable.Signature["concatMany"] = <T>(
  computations: readonly DeferableLike<T>[],
) => newInstance(ConcatManyDeferable<T>, computations);

export default Deferable_concatMany;
