import { dispose, add } from "../../disposable.ts";

import { isSome, none } from "../../option.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";
import { createScheduledObservable } from "./observable.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

type LatestCtx<T> = {
  completedCount: number;
  readonly subscribers: readonly LatestSubscriber<T>[];
  readyCount: number;
  readonly selector: (...values: unknown[]) => T;
};

export const enum LatestMode {
  Combine = 1,
  Zip = 2,
}

class LatestSubscriber<T> extends AbstractDelegatingSubscriber<unknown, T> {
  ready = false;
  latest: unknown = none;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly ctx: LatestCtx<T>,
    private readonly mode: LatestMode,
  ) {
    super(delegate);
    add(this, error => {
      const ctx = this.ctx;
      ctx.completedCount++;

      if (isSome(error) || ctx.completedCount === ctx.subscribers.length) {
        dispose(this.delegate, error);
      }
    });
  }

  notify(next: unknown) {
    assertSubscriberNotifyInContinuation(this);

    const ctx = this.ctx;
    this.latest = next;

    if (!this.ready) {
      ctx.readyCount++;
      this.ready = true;
    }

    const subscribers = ctx.subscribers;
    if (ctx.readyCount === subscribers.length) {
      const latest = subscribers.map(sub => sub.latest);
      const result = ctx.selector(...latest);
      this.delegate.notify(result);

      if (this.mode === LatestMode.Zip) {
        for (const sub of subscribers) {
          sub.ready = false;
          sub.latest = none as any;
        }
        ctx.readyCount = 0;
      }
    }
  }
}

export const latest = <T>(
  observables: ObservableLike<any>[],
  mode: LatestMode,
  selector: (...values: unknown[]) => T,
): ObservableLike<T> => {
  const factory = (subscriber: SubscriberLike<T>) => () => {
    const subscribers: LatestSubscriber<T>[] = [];
    const ctx = {
      completedCount: 0,
      subscribers,
      readyCount: 0,
      selector,
    };

    for (const observable of observables) {
      const innerSubscriber = new LatestSubscriber(subscriber, ctx, mode);
      subscribers.push(innerSubscriber);
      observable.subscribe(innerSubscriber);
    }
  };

  return createScheduledObservable(
    factory,
    observables.every(obs => obs.isSynchronous),
  );
};
