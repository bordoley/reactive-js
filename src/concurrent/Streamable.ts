import { ReadonlyObjectMapLike } from "../collections.js";
import {
  AnimationGroupStreamLike,
  AnimationStreamLike,
  DeferredObservableLike,
  PureDeferredObservableLike,
  PureRunnableLike,
  SchedulerLike,
  StreamLike,
  StreamableLike,
} from "../concurrent.js";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Reducer,
  Updater,
} from "../functions.js";
import { BackpressureStrategy } from "../utils.js";
import Streamable_actionReducer from "./Streamable/__private__/Streamable.actionReducer.js";
import Streamable_animation from "./Streamable/__private__/Streamable.animation.js";
import Streamable_animationGroup from "./Streamable/__private__/Streamable.animationGroup.js";
import Streamable_create from "./Streamable/__private__/Streamable.create.js";
import Streamable_eventHandler from "./Streamable/__private__/Streamable.eventHandler.js";
import Streamable_identity from "./Streamable/__private__/Streamable.identity.js";
import Streamable_stateStore from "./Streamable/__private__/Streamable.stateStore.js";
import Streamable_syncState from "./Streamable/__private__/Streamable.syncState.js";

/**
 * @noInheritDoc
 */
export interface StreamableModule {
  actionReducer<TAction, T>(
    reducer: Reducer<TAction, T>,
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ): StreamableLike<TAction, T>;

  animation<T, TEvent = unknown>(
    animation: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>,
    options?: { readonly animationScheduler?: SchedulerLike },
  ): StreamableLike<TEvent, boolean, AnimationStreamLike<T, TEvent>>;

  animationGroup<T, TEvent = unknown, TKey extends string = string>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
    >,
    options?: { readonly animationScheduler?: SchedulerLike },
  ): StreamableLike<TEvent, boolean, AnimationGroupStreamLike<T, TEvent, TKey>>;

  create<TReq, T>(
    op: Function1<PureDeferredObservableLike<TReq>, DeferredObservableLike<T>>,
  ): StreamableLike<TReq, T, StreamLike<TReq, T>>;

  eventHandler<TEventType>(
    op: Function1<TEventType, DeferredObservableLike>,
    options?:
      | { readonly mode: "switching" }
      | { readonly mode: "blocking" }
      | {
          readonly mode: "queueing";
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly capacity?: number;
        },
  ): StreamableLike<TEventType, boolean>;

  identity<T>(): StreamableLike<T, T, StreamLike<T, T>>;

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
    onInit: Function1<T, DeferredObservableLike<Updater<T>>>,
    onChange: Function2<T, T, DeferredObservableLike<Updater<T>>>,
    options?: {
      readonly throttleDuration?: number;
    },
  ): Function1<StreamableLike<Updater<T>, T>, StreamableLike<Updater<T>, T>>;
}

export type Signature = StreamableModule;

export const create: Signature["create"] = Streamable_create;
export const actionReducer: Signature["actionReducer"] =
  Streamable_actionReducer;
export const animation: Signature["animation"] = Streamable_animation;
export const animationGroup: Signature["animationGroup"] =
  Streamable_animationGroup;
export const eventHandler: Signature["eventHandler"] = Streamable_eventHandler;
export const identity: Signature["identity"] = Streamable_identity;
export const stateStore: Signature["stateStore"] = Streamable_stateStore;
export const syncState: Signature["syncState"] = Streamable_syncState;
