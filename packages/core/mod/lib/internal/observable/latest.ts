import { dispose, add } from "../../disposable.ts";

import { isSome, none } from "../../option.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";
import { createScheduledObservable } from "./observable.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

type LatestCtx = {
  completedCount: number;
  readonly subscribers: readonly LatestSubscriber[];
  readyCount: number;
};

export const enum LatestMode {
  Combine = 1,
  Zip = 2,
}

class LatestSubscriber extends AbstractDelegatingSubscriber<
  unknown,
  unknown[]
> {
  ready = false;
  latest: unknown = none;

  constructor(
    delegate: SubscriberLike<unknown[]>,
    private readonly ctx: LatestCtx,
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
      const result = subscribers.map(sub => sub.latest);
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

export const latest = (
  observables: ObservableLike<any>[],
  mode: LatestMode,
): ObservableLike<unknown[]> => {
  const factory = (subscriber: SubscriberLike<unknown[]>) => () => {
    const subscribers: LatestSubscriber[] = [];
    const ctx = {
      completedCount: 0,
      subscribers,
      readyCount: 0,
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
