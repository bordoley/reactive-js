import {
  ComputationLike_isPure,
  DeferableLike_eval,
  PureDeferableLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import {
  Factory,
  Optional,
  Updater,
  newInstance,
  none,
} from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";

class GeneratorDeferable<T> implements PureDeferableLike<T> {
  readonly [ComputationLike_isPure]: true = true as const;

  constructor(
    private readonly generator: Updater<T>,
    private readonly count: Optional<number>,
    private readonly initialValue: Factory<T>,
  ) {}

  [DeferableLike_eval](sink: SinkLike<T>): void {
    const { count, generator } = this;
    let acc = this.initialValue();

    for (
      let cnt = 0;
      (count === none || cnt < count) && !sink[SinkLike_isComplete];
      cnt++
    ) {
      acc = generator(acc);
      sink[SinkLike_next](acc);
    }
    sink[SinkLike_complete]();
  }
}

const Deferable_generate: Deferable.Signature["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: {
    count?: number;
  },
) =>
  newInstance(GeneratorDeferable<T>, generator, options?.count, initialValue);

export default Deferable_generate;
