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
import * as Computation from "../../Computation.js";
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
      ObserverLike<TIn>,
      ObserverLike<TOut>,
      ObservableLike<TIn>
    >,
    ObservableLike<TOut> {
  readonly [ComputationLike_isDeferred]: true;
  readonly [ComputationLike_isPure]?: boolean;
  readonly [ComputationLike_isSynchronous]: false;

  readonly [LiftedSourceLike_source]: ObservableLike<TIn>;
  readonly [LiftedSourceLike_operators]: ReadonlyArray<
    Function1<
      LiftedOperatorLike<ObserverLike, any>,
      LiftedOperatorLike<ObserverLike, any>
    >
  >;

  [SourceLike_subscribe](listener: ConsumerLike<TOut>): void;
}

export const operatorToObserver: <T>(
  delegate: LiftedOperatorLike<ObserverLike, any>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedOperatorToObserverMixin()),
    function OperatorToObserver(
      this: unknown,
      operator: LiftedOperatorLike<ObserverLike, any>,
    ): ObserverLike<T> {
      init(
        LiftedOperatorToObserverMixin(),
        this,
        operator,
      );

      return this;
    },
  ))();

const createLiftedObservable: <TIn, TOut>(
  src: ObservableLike<TIn>,
  op: Function1<
    LiftedOperatorLike<ObserverLike, TOut>,
    LiftedOperatorLike<ObserverLike, TIn>
  >,
  config?: {
    [ComputationLike_isPure]?: boolean;
    [ComputationLike_isSynchronous]?: boolean;
  },
) => ObservableLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
    [LiftedSourceLike_source]: ObservableLike<TIn>;
    [LiftedSourceLike_operators]: ReadonlyArray<
      Function1<
        LiftedOperatorLike<any, ObserverLike>,
        LiftedOperatorLike<any, ObserverLike>
      >
    >;
  };

  type TPrototype = Omit<
    LiftedObservableLike<TIn, TOut>,
    | keyof DisposableContainerLike
    | typeof LiftedSourceLike_source
    | typeof LiftedSourceLike_operators
    | typeof ComputationLike_isPure
    | typeof ComputationLike_isSynchronous
  >;

  return mixInstanceFactory(
    function LiftedObservable(
      this: TProperties & TPrototype,
      source: ObservableLike<TIn>,
      op: Function1<
        LiftedOperatorLike<ObserverLike, TOut>,
        LiftedOperatorLike<ObserverLike, TIn>
      >,
      config?: {
        [ComputationLike_isPure]?: boolean;
        [ComputationLike_isSynchronous]?: boolean;
      },
    ): ObservableLike<TOut> {
      const liftedSource: ObservableLike<TIn> =
        (source as any)[LiftedSourceLike_source] ?? source;
      const ops = [op, ...((source as any)[LiftedSourceLike_operators] ?? [])];

      this[LiftedSourceLike_source] = liftedSource;
      this[LiftedSourceLike_operators] = ops;
      this[ComputationLike_isSynchronous] =
        Computation.isSynchronous(source) &&
        Computation.isSynchronous(config ?? {});
      this[ComputationLike_isPure] =
        Computation.isPure(source) && Computation.isPure(config ?? {});

      return this;
    },
    props<TProperties>({
      [LiftedSourceLike_source]: none,
      [LiftedSourceLike_operators]: none,
      [ComputationLike_isPure]: false,
      [ComputationLike_isSynchronous]: false,
    }),
    proto<TPrototype>({
      [ComputationLike_isDeferred]: true as const,

      [SourceLike_subscribe](this: TProperties, observer: ObserverLike<TOut>) {
        const source = this[LiftedSourceLike_source];
        const destinationOp: ObserverLike<TIn> = pipeUnsafe(
          observer,
          Sink.toOperator(),
          ...this[LiftedSourceLike_operators],
          operatorToObserver,
        );
        source[SourceLike_subscribe](destinationOp);
      },
    }),
  );
})();

const Observable_lift =
  <TIn, TOut>(config?: {
    [ComputationLike_isPure]?: boolean;
    [ComputationLike_isSynchronous]?: boolean;
  }) =>
  (
    operator: Function1<
      LiftedOperatorLike<ObserverLike, TOut>,
      LiftedOperatorLike<ObserverLike, TIn>
    >,
  ) =>
  (source: ObservableLike<TIn>): ObservableLike<TOut> => {
    return createLiftedObservable(source, operator, config);
  };

export default Observable_lift;
