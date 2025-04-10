import { EventSourceLike, EventSourceLike_subscribe } from "../computations.js";
import {
  AsyncFunction1,
  Factory,
  Function1,
  Optional,
  Reducer,
  SideEffect1,
  isFunction,
  isSome,
  none,
} from "../functions.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import * as CurrentScheduler from "../utils/__internal__/CurrentScheduler.js";
import * as Observer from "../utils/__internal__/Observer.js";
import {
  CollectionEnumeratorLike_peek,
  DisposableLike,
  SchedulerLike,
} from "../utils.js";

export interface Signature {
  lastAsync<T>(options?: {
    scheduler?: SchedulerLike;
  }): AsyncFunction1<EventSourceLike<T>, Optional<T>>;

  reduceAsync<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
    options?: { scheduler?: SchedulerLike },
  ): AsyncFunction1<EventSourceLike<T>, TAcc>;

  subscribe<T>(
    onNotify: SideEffect1<T>,
    options?: {
      scheduler?: SchedulerLike;
    },
  ): Function1<EventSourceLike<T>, DisposableLike>;
  subscribe<T>(options?: {
    scheduler?: SchedulerLike;
  }): Function1<EventSourceLike<T>, DisposableLike>;

  toReadonlyArrayAsync<T>(options?: {
    scheduler?: SchedulerLike;
  }): AsyncFunction1<EventSourceLike<T>, ReadonlyArray<T>>;
}

export const lastAsync: Signature["lastAsync"] =
  <T>(options?: { scheduler: SchedulerLike }) =>
  async (src: EventSourceLike<T>) => {
    const scheduler = options?.scheduler ?? CurrentScheduler.get();
    const observer = Observer.takeLast<T>(1, scheduler);

    src[EventSourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);

    return observer[CollectionEnumeratorLike_peek];
  };

export const reduceAsync: Signature["reduceAsync"] =
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
    options?: { scheduler: SchedulerLike },
  ) =>
  async (src: EventSourceLike<T>) => {
    const scheduler = options?.scheduler ?? CurrentScheduler.get();
    const ref: [TAcc] = [initialValue()];
    const observer = Observer.reducer(reducer, ref, scheduler);

    src[EventSourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);

    return ref[0];
  };

export const subscribe: Signature["subscribe"] =
  <T>(
    optionsOrEffect?: SideEffect1<T> | { scheduler?: SchedulerLike },
    options?: { scheduler?: SchedulerLike },
  ) =>
  (src: EventSourceLike<T>) => {
    const effect = isFunction(optionsOrEffect) ? optionsOrEffect : none;
    const scheduler =
      (isFunction(optionsOrEffect) ? options : optionsOrEffect)?.scheduler ??
      CurrentScheduler.get();

    const observer = isSome(effect)
      ? Observer.create(effect, scheduler)
      : Observer.takeLast(0, scheduler);

    src[EventSourceLike_subscribe](observer);

    return observer;
  };

export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  <T>(options?: { scheduler: SchedulerLike }) =>
  async (src: EventSourceLike<T>) => {
    const scheduler = options?.scheduler ?? CurrentScheduler.get();
    const buffer: T[] = [];
    const observer = Observer.collect<T>(buffer, scheduler);
    src[EventSourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);

    return buffer;
  };
