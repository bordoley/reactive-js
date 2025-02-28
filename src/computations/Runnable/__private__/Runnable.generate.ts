import {
  ComputationLike_isInteractive,
  ComputationLike_isPure,
  PureRunnableLike,
  RunnableLike_eval,
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
import type * as Runnable from "../../Runnable.js";

class GeneratorRunnable<T> implements PureRunnableLike<T> {
  readonly [ComputationLike_isPure]: true = true as const;
  readonly [ComputationLike_isInteractive]: false = false as const;

  constructor(
    private readonly generator: Updater<T>,
    private readonly count: Optional<number>,
    private readonly initialValue: Factory<T>,
  ) {}

  [RunnableLike_eval](sink: SinkLike<T>): void {
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

const Runnable_generate: Runnable.Signature["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: {
    count?: number;
  },
) => newInstance(GeneratorRunnable<T>, generator, options?.count, initialValue);

export default Runnable_generate;
