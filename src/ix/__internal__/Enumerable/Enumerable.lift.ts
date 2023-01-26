import {
  Lift,
  TInteractive,
} from "../../../containers/__internal__/containers.internal";
import { Function1, newInstance, pipeUnsafe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import enumerate from "./Enumerable.enumerate";

const Enumerable$lift: Lift<EnumerableLike, TInteractive>["lift"] =
  /*@__PURE__*/ (() => {
    class LiftedEnumerable<TA, TB> implements EnumerableLike<TB> {
      constructor(
        readonly src: EnumerableLike<TA>,
        readonly operators: readonly Function1<
          EnumeratorLike<any>,
          EnumeratorLike<any>
        >[],
      ) {}

      [InteractiveContainerLike_interact](): EnumeratorLike<TB> {
        return pipeUnsafe(
          this.src,
          enumerate(),
          ...this.operators,
        ) as EnumeratorLike<TB>;
      }
    }

    return <TA, TB>(
        operator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
      ) =>
      (enumerable: EnumerableLike<TA>): EnumerableLike<TB> => {
        const src =
          enumerable instanceof LiftedEnumerable
            ? (enumerable.src as EnumerableLike<TA>)
            : enumerable;

        const allFunctions =
          enumerable instanceof LiftedEnumerable
            ? [...enumerable.operators, operator]
            : [operator];

        return newInstance<
          EnumerableLike<TB>,
          EnumerableLike<TA>,
          readonly Function1<EnumeratorLike<any>, EnumeratorLike<any>>[]
        >(LiftedEnumerable, src, allFunctions);
      };
  })();

export default Enumerable$lift;
