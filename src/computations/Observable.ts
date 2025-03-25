import {
  ComputationModule,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  ConcurrentComputationModule,
  ConcurrentDeferredComputationModule,
  ConcurrentReactiveComputationModule,
  DeferredReactiveComputationModule,
  ObservableLike,
  ObservableWithSideEffectsLike,
  PureAsynchronousComputationOperator,
  PureComputationOperator,
  PureObservableLike,
  PureSynchronousObservableLike,
  SequentialComputationModule,
  SequentialReactiveComputationModule,
  SynchronousComputationModule,
  SynchronousObservableWithSideEffectsLike,
} from "../computations.js";
import { Function1, Function2 } from "../functions.js";
import { BackpressureStrategy, ObserverLike, SchedulerLike } from "../utils.js";
import Observable_distinctUntilChanged from "./Observable/__private__/Observable.distinctUntilChanged.js";
import {
  Observable_gen,
  Observable_genPure,
} from "./Observable/__private__/Observable.gen.js";
import Observable_keep from "./Observable/__private__/Observable.keep.js";
import Observable_toProducer from "./Observable/__private__/Observable.toProducer.js";
import Observable_toReadonlyArrayAsync from "./Observable/__private__/Observable.toReadonlyArrayAsync.js";
import Observable_map from "./Observable/__private__/Producer.map.js";

/**
 * @noInheritDoc
 */
export interface ObservableComputation extends ComputationType {
  readonly [Computation_baseOfT]?: ObservableLike<this[typeof Computation_T]>;

  readonly [Computation_pureSynchronousOfT]?: PureSynchronousObservableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousObservableWithSideEffectsLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_pureDeferredOfT]?: PureObservableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_deferredWithSideEffectsOfT]?: ObservableWithSideEffectsLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_multicastOfT]?: never;
}

export type Computation = ObservableComputation;

export interface ObservableModule
  extends ComputationModule<
      ObservableComputation,
      {
        empty: {
          readonly delay: number;
        };
        firstAsync: {
          readonly scheduler?: SchedulerLike;
        };
        fromIterable: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
        fromReadonlyArray: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
        fromValue: {
          readonly delay: number;
        };
        gen: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
        genPure: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
        lastAsync: {
          readonly scheduler?: SchedulerLike;
        };
        raise: {
          readonly delay?: number;
        };
        reduceAsync: {
          readonly scheduler?: SchedulerLike;
        };
        runAsync: {
          readonly scheduler?: SchedulerLike;
        };
        toReadonlyArrayAsync: {
          readonly scheduler?: SchedulerLike;
        };
      }
    >,
    ConcurrentDeferredComputationModule<
      ObservableComputation,
      {
        broadcast: {
          scheduler?: SchedulerLike;
        };
        toProducer: {
          scheduler?: SchedulerLike;
        };
      }
    >,
    ConcurrentReactiveComputationModule<ObservableComputation>,
    SequentialComputationModule<ObservableComputation>,
    SequentialReactiveComputationModule<ObservableComputation>,
    SynchronousComputationModule<
      ObservableComputation,
      {
        first: {
          readonly maxMicroTaskTicks?: number;
        };
        last: {
          readonly maxMicroTaskTicks?: number;
        };
        reduce: {
          readonly maxMicroTaskTicks?: number;
        };
        run: {
          readonly maxMicroTaskTicks?: number;
        };
        toReadonlyArray: {
          readonly maxMicroTaskTicks?: number;
        };
        toRunnable: {
          readonly maxMicroTaskTicks?: number;
        };
      }
    >,
    ConcurrentComputationModule<ObservableComputation>,
    DeferredReactiveComputationModule<
      ObservableComputation,
      {
        subscribe: {
          scheduler?: SchedulerLike;
        };
      }
    > {
  backpressureStrategy<T>(options: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  }): PureComputationOperator<ObservableComputation, T, T>;

  create<T>(
    f: (observer: ObserverLike<T>) => void,
  ): ObservableWithSideEffectsLike<T>;

  currentTime: PureSynchronousObservableLike<number>;

  keyFrame(
    duration: number,
    options?: {
      readonly easing?: Function1<number, number>;
    },
  ): PureSynchronousObservableLike<number>;

  spring(options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  }): PureSynchronousObservableLike<number>;

  subscribeOn<T>(
    scheduler: SchedulerLike,
  ): PureAsynchronousComputationOperator<ObservableComputation, T, T>;
  /*
  throttle<T>(
    duration: number,
    options?: { readonly mode?: ThrottleMode },
  ): PureComputationOperator<ObservableComputation, T, T>;
*/
  withCurrentTime<TA, TB>(
    selector: Function2<number, TA, TB>,
  ): PureComputationOperator<ObservableComputation, TA, TB>;
}

export type Signature = ObservableModule;

export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const gen: Signature["gen"] = Observable_gen;
export const genPure: Signature["genPure"] = Observable_genPure;
export const keep: Signature["keep"] = Observable_keep;
export const map: Signature["map"] = Observable_map;
export const toProducer: Signature["toProducer"] = Observable_toProducer;
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  Observable_toReadonlyArrayAsync;
