import { Runnable_compute } from "./Observable/__internal__/Observable.compute.js";
import Runnable_run from "./Observable/__internal__/Observable.run.js";
import Runnable_concatAll from "./Runnable/__internal__/Runnable.concatAll.js";
import Runnable_concatMap from "./Runnable/__internal__/Runnable.concatMap.js";
import Runnable_exhaust from "./Runnable/__internal__/Runnable.exhaust.js";
import Runnable_exhaustMap from "./Runnable/__internal__/Runnable.exhaustMap.js";
import Runnable_mergeAll from "./Runnable/__internal__/Runnable.mergeAll.js";
import Runnable_mergeMap from "./Runnable/__internal__/Runnable.mergeMap.js";
import Runnable_switchAll from "./Runnable/__internal__/Runnable.switchAll.js";
import Runnable_switchMap from "./Runnable/__internal__/Runnable.switchMap.js";
import { Factory, Function1, SideEffect1 } from "./functions.js";
import {
  Container,
  Container_T,
  Container_type,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableBaseLike,
  RunnableLike,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface RunnableContainer extends Container {
  readonly [Container_type]?: RunnableLike<this[typeof Container_T]>;
}

export type Type = RunnableContainer;

/**
 * @noInheritDoc
 * @category Module
 */
export interface RunnableModule {
  /**
   * @category Constructor
   */
  compute<T>(
    computation: Factory<T>,
    options?: {
      mode?: "batched" | "combine-latest";
    },
  ): RunnableLike<T>;

  /**
   * @category Operator
   */
  concatAll<T>(): Function1<
    RunnableBaseLike<RunnableBaseLike<T>>,
    RunnableLike<T>
  >;

  /**
   * @category Operator
   */
  concatMap<TA, TB>(
    selector: Function1<TA, RunnableBaseLike<TB>>,
  ): Function1<RunnableBaseLike<TA>, RunnableLike<TB>>;

  /**
   * @category Operator
   */
  exhaust<T>(): Function1<
    RunnableBaseLike<RunnableBaseLike<T>>,
    RunnableLike<T>
  >;

  /**
   * @category Operator
   */
  exhaustMap<TA, TB>(
    selector: Function1<TA, RunnableBaseLike<TB>>,
  ): Function1<RunnableBaseLike<TA>, RunnableLike<TB>>;
  /**
   * @category Operator
   */
  mergeAll<T>(options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  }): Function1<RunnableBaseLike<RunnableBaseLike<T>>, RunnableLike<T>>;

  /**
   * @category Operator
   */
  mergeMap<TA, TB>(
    selector: Function1<TA, RunnableBaseLike<TB>>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ): Function1<RunnableBaseLike<TA>, RunnableLike<TB>>;

  run<T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }): SideEffect1<RunnableBaseLike<T>>;

  /**
   *
   * @category Operator
   */
  switchAll<T>(): Function1<
    RunnableBaseLike<RunnableBaseLike<T>>,
    RunnableLike<T>
  >;

  /**
   * @category Operator
   */
  switchMap<TA, TB>(
    selector: Function1<TA, RunnableBaseLike<TB>>,
  ): Function1<RunnableBaseLike<TA>, RunnableLike<TB>>;
}

export type Signature = RunnableModule;

export const compute: Signature["compute"] = Runnable_compute;
export const concatAll: Signature["concatAll"] = Runnable_concatAll;
export const concatMap: Signature["concatMap"] = Runnable_concatMap;
export const exhaust: Signature["exhaust"] = Runnable_exhaust;
export const exhaustMap: Signature["exhaustMap"] = Runnable_exhaustMap;
export const mergeAll: Signature["mergeAll"] = Runnable_mergeAll;
export const mergeMap: Signature["mergeMap"] = Runnable_mergeMap;
export const run: Signature["run"] = Runnable_run;
export const switchAll: Signature["switchAll"] = Runnable_switchAll;
export const switchMap: Signature["switchMap"] = Runnable_switchMap;
