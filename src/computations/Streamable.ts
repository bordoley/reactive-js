import { DictionaryLike, ReadonlyObjectMapLike } from "../collections.js";
import {
  BroadcasterLike,
  ObservableLike,
  PureObservableLike,
  PureSynchronousObservableLike,
  StoreLike,
  StreamLike,
  StreamableLike,
} from "../computations.js";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Reducer,
  Updater,
} from "../functions.js";
import { PauseableLike, SchedulerLike } from "../utils.js";
//import Streamable_scanDistinct from "./Streamable/__private__/Streamable.scanDistinct.js";
//import Streamable_animation from "./Streamable/__private__/Streamable.animation.js";
//import Streamable_animationGroup from "./Streamable/__private__/Streamable.animationGroup.js";
import Streamable_create from "./Streamable/__private__/Streamable.create.js";
import Streamable_identity from "./Streamable/__private__/Streamable.identity.js";
//import Streamable_spring from "./Streamable/__private__/Streamable.spring.js";
//import Streamable_stateStore from "./Streamable/__private__/Streamable.stateStore.js";
//import Streamable_syncState from "./Streamable/__private__/Streamable.syncState.js";

export const AnimationLike_isRunning = Symbol("AnimationLike_isRunning");
/**
 * @noInheritDoc
 */
export interface AnimationLike<TEvent, out T>
  extends StreamLike<TEvent, T>,
    PauseableLike {
  readonly [AnimationLike_isRunning]: StoreLike<boolean>;
}

/**
 * @noInheritDoc
 */
export interface AnimationGroupLike<TEvent, TKey extends string, out T>
  extends AnimationLike<TEvent, number>,
    DictionaryLike<TKey, BroadcasterLike<T>> {}

export type SpringCommand =
  | number
  | ReadonlyArray<number>
  | {
      readonly from: number;
      readonly to: number | ReadonlyArray<number>;
      readonly stiffness?: number;
      readonly damping?: number;
      readonly precision?: number;
    };

export type SpringEvent = SpringCommand | Function1<number, SpringCommand>;

export interface SpringStreamLike extends AnimationLike<SpringEvent, number> {}

/**
 * @noInheritDoc
 */
export interface StreamableModule {
  scanDistinct<TAction, T>(
    reducer: Reducer<TAction, T>,
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ): StreamableLike<TAction, T>;

  animation<T>(
    animation: PureSynchronousObservableLike<T>,
    options?: { readonly animationScheduler?: SchedulerLike },
  ): StreamableLike<void, T, AnimationLike<void, T>>;
  animation<T, TEvent>(
    animation:
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>,
    options?: { readonly animationScheduler?: SchedulerLike },
  ): StreamableLike<TEvent, T, AnimationLike<TEvent, T>>;

  animationGroup<T, TKey extends string = string>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      PureSynchronousObservableLike<T>
    >,
    options?: { readonly animationScheduler?: SchedulerLike },
  ): StreamableLike<void, number, AnimationGroupLike<void, TKey, T>>;
  animationGroup<T, TKey extends string, TEvent>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>
    >,
    options?: { readonly animationScheduler?: SchedulerLike },
  ): StreamableLike<TEvent, number, AnimationGroupLike<TEvent, TKey, T>>;

  create<TReq, T>(
    op: Function1<PureObservableLike<TReq>, ObservableLike<T>>,
  ): StreamableLike<TReq, T, StreamLike<TReq, T>>;

  identity<T>(): StreamableLike<T, T, StreamLike<T, T>>;

  spring(options?: {
    readonly animationScheduler?: SchedulerLike;
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  }): StreamableLike<SpringEvent, number, SpringStreamLike>;

  /**
   * Returns a new `StateStoreLike` instance that stores state which can
   * be updated by notifying the instance with a `StateUpdater` that computes a
   * new state based upon the previous state.
   *
   * @param initialState - The initial accumulation value.
   * @param equals - Optional equality function that is used to compare
   * if a state value is distinct from the previous one.
   *
   */
  stateStore<T>(
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ): StreamableLike<Updater<T>, T>;

  syncState<T>(
    onInit: Function1<T, ObservableLike<Updater<T>>>,
    onChange: Function2<T, T, ObservableLike<Updater<T>>>,
    options?: {
      readonly throttleDuration?: number;
    },
  ): Function1<StreamableLike<Updater<T>, T>, StreamableLike<Updater<T>, T>>;
}

export type Signature = StreamableModule;

export const create: Signature["create"] = Streamable_create;
//export const scanDistinct: Signature["scanDistinct"] =
//  Streamable_scanDistinct;
//export const animation: Signature["animation"] = Streamable_animation;
//export const animationGroup: Signature["animationGroup"] = Streamable_animationGroup;
export const identity: Signature["identity"] = Streamable_identity;
//export const spring: Signature["spring"] = Streamable_spring;
//export const stateStore: Signature["stateStore"] = Streamable_stateStore;
//export const syncState: Signature["syncState"] = Streamable_syncState;
