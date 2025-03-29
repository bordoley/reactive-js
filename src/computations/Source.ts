import { SourceLike, SourceLike_subscribe } from "../computations.js";
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
  }): Function1<SourceLike<T>, Promise<Optional<T>>>;

  subscribe<T>(options?: {
    scheduler: SchedulerLike;
  }): Function1<SourceLike<T>, DisposableLike>;

  toReadonlyArrayAsync<T>(options?: {
    scheduler: SchedulerLike;
  }): Function1<SourceLike<T>, Promise<ReadonlyArray<T>>>;
}

export const lastAsync: Signature["lastAsync"] =
  <T>(options?: { scheduler: SchedulerLike }) =>
  async (src: SourceLike<T>) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const observer = Observer.takeLast<T>(scheduler, 1);

    src[SourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);

    return observer[CollectionEnumeratorLike_peek];
  };

export const subscribe: Signature["subscribe"] =
  <T>(options?: { scheduler: SchedulerLike }) =>
  (src: SourceLike<T>) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const observer = Observer.takeLast(scheduler, 0);
    src[SourceLike_subscribe](observer);

    return observer;
  };

export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  <T>(options?: { scheduler: SchedulerLike }) =>
  async (src: SourceLike<T>) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const observer = Observer.create<T>(scheduler);
    src[SourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);

    return Array.from(observer);
  };
