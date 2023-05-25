import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import type {
  ObservableOperatorWithSideEffects,
  PureObservableOperator,
} from "../../Observable.js";
import Observable_liftMixin from "../../Observable/__internal__/Observable.liftMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __LiftedEnumerable_ops } from "../../__internal__/symbols.js";
import {
  LiftedLike,
  LiftedLike_operators,
  LiftedLike_source,
} from "../../__internal__/types.js";
import { Function1, none, pipeUnsafe } from "../../functions.js";
import {
  EnumerableBaseLike,
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../types.js";

const createLiftedEnumerable: <TIn, TOut>(
  source: EnumerableBaseLike<TIn>,
  observerOps: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  enumeratorOps: readonly Function1<EnumeratorLike<any>, EnumeratorLike<any>>[],
  isPure: boolean,
) => EnumerableBaseLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [__LiftedEnumerable_ops]: ReadonlyArray<
      Function1<EnumeratorLike<any>, EnumeratorLike<any>>
    >;
  };
  return createInstanceFactory(
    mix(
      include(Observable_liftMixin(), Delegating_mixin()),
      function LiftedEnumerable(
        instance: TProperties &
          Pick<
            EnumerableBaseLike<TOut>,
            typeof ObservableLike_isEnumerable | typeof EnumerableLike_enumerate
          >,
        source: EnumerableBaseLike<TIn>,
        observerOps: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
        enumeratorOps: readonly Function1<
          EnumeratorLike<any>,
          EnumeratorLike<any>
        >[],
        isPure: boolean,
      ): EnumerableLike<TOut> {
        instance[__LiftedEnumerable_ops] = enumeratorOps;

        init(Observable_liftMixin<TIn, TOut>(), instance, source, observerOps, {
          [ObservableLike_isDeferred]: true,
          [ObservableLike_isRunnable]: true,
          [ObservableLike_isPure]: isPure,
        });
        init(Delegating_mixin(), instance, source);

        return instance as EnumerableLike<TOut>;
      },
      props<TProperties>({
        [__LiftedEnumerable_ops]: none,
      }),
      {
        [ObservableLike_isEnumerable]: true as const,

        [EnumerableLike_enumerate](
          this: TProperties &
            EnumerableLike<TIn> &
            LiftedLike<EnumerableLike<TIn>, ObserverLike>,
        ): EnumeratorLike<TOut> {
          return pipeUnsafe(
            this[LiftedLike_source][EnumerableLike_enumerate](),
            ...this[__LiftedEnumerable_ops],
          ) as EnumeratorLike<TOut>;
        },
      },
    ),
  );
})();

interface EnumerableBaseLift {
  lift<TA, TB>(
    observerOp: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    isPure: true,
  ): PureObservableOperator<TA, TB>;
  lift<TA, TB>(
    observerOp: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    isPure: false,
  ): ObservableOperatorWithSideEffects<TA, TB>;
  lift<TA, TB>(
    observerOp: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    isPure: boolean,
  ): Function1<EnumerableBaseLike<TA>, EnumerableBaseLike<TB>>;
}

const EnumerableBase_lift: EnumerableBaseLift["lift"] = (<TA, TB>(
    observerOp: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    isPure: boolean,
  ): Function1<EnumerableBaseLike<TA>, EnumerableBaseLike<TB>> =>
  source => {
    const sourceSource = (source as any)[LiftedLike_source] ?? source;

    const observerOps = [
      observerOp,
      ...((source as any)[LiftedLike_operators] ?? []),
    ];

    const enumeratorOps = [
      ...((source as any)[__LiftedEnumerable_ops] ?? []),
      enumeratorOp,
    ];

    const isOpPure = sourceSource[ObservableLike_isPure] && isPure;

    return createLiftedEnumerable<TA, TB>(
      sourceSource,
      observerOps,
      enumeratorOps,
      isOpPure,
    );
  }) as EnumerableBaseLift["lift"];

export default EnumerableBase_lift;
