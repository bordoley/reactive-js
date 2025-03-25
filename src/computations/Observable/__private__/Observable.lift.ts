import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { Function1, none, pipeUnsafe } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import {
  ConsumerLike,
  DisposableContainerLike,
  ObserverLike,
} from "../../../utils.js";
import {
  LiftedOperatorLike,
  LiftedSourceLike,
  LiftedSourceLike_operators,
  LiftedSourceLike_source,
} from "../../__internal__/LiftedSource.js";
import LiftedOperatorToObserverMixin from "../../__mixins__/LiftedOperatorToObserverMixin.js";

interface LiftedObservableLike<TIn, TOut>
  extends LiftedSourceLike<
      TIn,
      TOut,
      ConsumerLike<TIn>,
      ConsumerLike<TOut>,
      ObservableLike<TIn>
    >,
    ObservableLike<TOut> {
  readonly [ComputationLike_isDeferred]: true;
  readonly [ComputationLike_isPure]?: boolean;
  readonly [ComputationLike_isSynchronous]: false;

  readonly [LiftedSourceLike_source]: ObservableLike<TIn>;
  readonly [LiftedSourceLike_operators]: ReadonlyArray<
    Function1<LiftedOperatorLike<any>, LiftedOperatorLike<any>>
  >;

  [SourceLike_subscribe](listener: ConsumerLike<TOut>): void;
}

const operatorToObserver: <T>(
  delegate: ConsumerLike,
) => Function1<LiftedOperatorLike<any>, ConsumerLike<T>> = /*@__PURE__*/ (<
  T,
>() => {
  const createOperatorToObserver = mixInstanceFactory(
    include(LiftedOperatorToObserverMixin()),
    function OperatorToObserver(
      this: unknown,
      delegate: ConsumerLike,
      operator: LiftedOperatorLike<any>,
    ): ObserverLike<T> {
      init(LiftedOperatorToObserverMixin(), this, operator, delegate);

      return this;
    },
  );

  return delegate => operator => createOperatorToObserver(delegate, operator);
})();

const createLiftedObservable: <TIn, TOut>(
  src: ObservableLike<TIn>,
  op: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>,
) => ObservableLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedSourceLike_source]: ObservableLike<TIn>;
    [LiftedSourceLike_operators]: ReadonlyArray<
      Function1<LiftedOperatorLike<any>, LiftedOperatorLike<any>>
    >;
  };

  type TPrototype = Omit<
    LiftedObservableLike<TIn, TOut>,
    | keyof DisposableContainerLike
    | typeof LiftedSourceLike_source
    | typeof LiftedSourceLike_operators
  >;

  return mixInstanceFactory(
    function LiftedObservable(
      this: TProperties & TPrototype,
      source: ObservableLike<TIn>,
      op: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>,
    ): ObservableLike<TOut> {
      const liftedSource: ObservableLike<TIn> =
        (source as any)[LiftedSourceLike_source] ?? source;
      const ops = [op, ...((source as any)[LiftedSourceLike_operators] ?? [])];

      this[LiftedSourceLike_source] = liftedSource;
      this[LiftedSourceLike_operators] = ops;

      return this;
    },
    props<TProperties>({
      [LiftedSourceLike_source]: none,
      [LiftedSourceLike_operators]: none,
    }),
    proto<TPrototype>({
      [ComputationLike_isPure]: true as const,
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      [SourceLike_subscribe](this: TProperties, observer: ObserverLike<TOut>) {
        const source = this[LiftedSourceLike_source];
        const destinationOp: ObserverLike<TIn> = pipeUnsafe(
          observer,
          Sink.toOperator(),
          ...this[LiftedSourceLike_operators],
          operatorToObserver(observer),
        );
        source[SourceLike_subscribe](destinationOp);
      },
    }),
  );
})();

const Observable_lift =
  <TIn, TOut>(
    operator: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>,
  ) =>
  (source: ObservableLike<TIn>): ObservableLike<TOut> => {
    return createLiftedObservable(source, operator);
  };

export default Observable_lift;
