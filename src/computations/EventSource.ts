import { EventSourceLike, EventSourceLike_subscribe } from "../computations.js";
import { Function1, Optional } from "../functions.js";
import * as DefaultScheduler from "../utils/DefaultScheduler.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import * as Observer from "../utils/__internal__/Observer.js";
import {
  CollectionEnumeratorLike_peek,
  DisposableLike,
  SchedulerLike,
} from "../utils.js";

export interface Signature {
  lastAsync<T>(options?: {
    scheduler: SchedulerLike;
  }): Function1<EventSourceLike<T>, Promise<Optional<T>>>;

  subscribe<T>(options?: {
    scheduler: SchedulerLike;
  }): Function1<EventSourceLike<T>, DisposableLike>;

  toReadonlyArrayAsync<T>(options?: {
    scheduler: SchedulerLike;
  }): Function1<EventSourceLike<T>, Promise<ReadonlyArray<T>>>;
}

export const lastAsync: Signature["lastAsync"] =
  <T>(options?: { scheduler: SchedulerLike }) =>
  async (src: EventSourceLike<T>) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const observer = Observer.takeLast<T>(1, scheduler);

    src[EventSourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);

    return observer[CollectionEnumeratorLike_peek];
  };

export const subscribe: Signature["subscribe"] =
  <T>(options?: { scheduler: SchedulerLike }) =>
  (src: EventSourceLike<T>) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const observer = Observer.takeLast(0, scheduler);
    src[EventSourceLike_subscribe](observer);

    return observer;
  };

export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  <T>(options?: { scheduler: SchedulerLike }) =>
  async (src: EventSourceLike<T>) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const buffer: T[] = [];
    const observer = Observer.collect<T>(buffer, scheduler);
    src[EventSourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);

    return buffer;
  };
