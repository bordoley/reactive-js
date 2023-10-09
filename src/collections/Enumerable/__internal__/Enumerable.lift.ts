import {
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike,
} from "../../../collections.js";
import { Function1, none, pipeUnsafe } from "../../../functions.js";
import EnumerableIterablePrototypeBase from "../../__mixins__/EnumerableIterablePrototypeBase.js";

const LiftedEnumerable_source = Symbol("LiftedEnumerable_source");
const LiftedEnumerable_ops = Symbol("LiftedEnumerable_ops");

const createLiftedEnumerable: <TIn, TOut>(
  source: EnumerableLike<TIn>,
  ops: readonly Function1<EnumeratorLike<any>, EnumeratorLike<any>>[],
) => EnumerableLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedEnumerable_source]: EnumerableLike<any>;
    [LiftedEnumerable_ops]: ReadonlyArray<
      Function1<EnumeratorLike<any>, EnumeratorLike<any>>
    >;
  };
  return createInstanceFactory(
    mix(
      function LiftedEnumerable(
        instance: TProperties & EnumerableLike<TOut>,

        source: EnumerableLike<TIn>,
        ops: readonly Function1<EnumeratorLike<any>, EnumeratorLike<any>>[],
      ): EnumerableLike<TOut> {
        instance[LiftedEnumerable_source] = source;
        instance[LiftedEnumerable_ops] = ops;

        return instance as EnumerableLike<TOut>;
      },
      props<TProperties>({
        [LiftedEnumerable_source]: none,
        [LiftedEnumerable_ops]: none,
      }),
      {
        ...EnumerableIterablePrototypeBase<TOut>(),

        [EnumerableLike_enumerate](
          this: TProperties & EnumerableLike<TIn>,
        ): EnumeratorLike<TOut> {
          return pipeUnsafe(
            this[LiftedEnumerable_source][EnumerableLike_enumerate](),
            ...this[LiftedEnumerable_ops],
          );
        },
      },
    ),
  );
})();

const Enumerable_lift =
  <TA, TB>(
    enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
  ): Function1<EnumerableLike<TA>, EnumerableLike<TB>> =>
  source => {
    const sourceSource = (source as any)[LiftedEnumerable_source] ?? source;

    const enumeratorOps = [
      ...((source as any)[LiftedEnumerable_ops] ?? []),
      enumeratorOp,
    ];

    return createLiftedEnumerable<TA, TB>(sourceSource, enumeratorOps);
  };

export default Enumerable_lift;
