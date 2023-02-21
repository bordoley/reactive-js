import {
  Lift,
  TInteractive,
} from "../../../containers/__internal__/containers.internal.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix.js";
import enumerate from "./Enumerable.enumerate.js";

const LiftedEnumerable_src = Symbol("LiftedEnumerable_src");
const LiftedEnumerable_operators = Symbol("LiftedEnumerable_src");
class LiftedEnumerable<TA, TB> implements EnumerableLike<TB> {
  readonly [LiftedEnumerable_src]: EnumerableLike<TA>;
  readonly [LiftedEnumerable_operators]: readonly Function1<
    EnumeratorLike<any>,
    EnumeratorLike<any>
  >[];

  constructor(
    src: EnumerableLike<TA>,
    operators: readonly Function1<EnumeratorLike<any>, EnumeratorLike<any>>[],
  ) {
    this[LiftedEnumerable_src] = src;
    this[LiftedEnumerable_operators] = operators;
  }

  [InteractiveContainerLike_interact](): EnumeratorLike<TB> {
    return pipeUnsafe(
      this[LiftedEnumerable_src],
      enumerate(),
      ...this[LiftedEnumerable_operators],
    ) as EnumeratorLike<TB>;
  }
}

const Enumerable_lift: Lift<EnumerableLike, TInteractive>["lift"] =
  <TA, TB>(operator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>) =>
  (enumerable: EnumerableLike<TA>): EnumerableLike<TB> => {
    const src =
      enumerable instanceof LiftedEnumerable
        ? (enumerable[LiftedEnumerable_src] as EnumerableLike<TA>)
        : enumerable;

    const allFunctions =
      enumerable instanceof LiftedEnumerable
        ? [...enumerable[LiftedEnumerable_operators], operator]
        : [operator];

    return newInstance<
      EnumerableLike<TB>,
      EnumerableLike<TA>,
      readonly Function1<EnumeratorLike<any>, EnumeratorLike<any>>[]
    >(LiftedEnumerable, src, allFunctions);
  };

export default Enumerable_lift;
