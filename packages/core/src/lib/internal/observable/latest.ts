import {
  dispose,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
} from "../../disposable";
import { none } from "../../option";
import { ObservableLike, ObserverLike } from "./interfaces";
import { createScheduledObservable, observe } from "./observable";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";

type LatestCtx = {
  completedCount: number;
  readonly observers: readonly LatestObserver[];
  readyCount: number;
};

export const enum LatestMode {
  Combine = 1,
  Zip = 2,
}

class LatestObserver extends AbstractDelegatingObserver<unknown, readonly unknown[]> {
  ready = false;
  latest: unknown = none;

  constructor(
    delegate: ObserverLike<readonly unknown[]>,
    private readonly ctx: LatestCtx,
    private readonly mode: LatestMode,
  ) {
    super(delegate);
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, () => {
      const ctx = this.ctx;
      ctx.completedCount++;

      if (ctx.completedCount === ctx.observers.length) {
        dispose(delegate);
      }
    });
  }

  notify(next: unknown) {
    assertObserverState(this);

    const ctx = this.ctx;
    this.latest = next;

    if (!this.ready) {
      ctx.readyCount++;
      this.ready = true;
    }

    const observers = ctx.observers;
    if (ctx.readyCount === observers.length) {
      const result = observers.map(sub => sub.latest);
      this.delegate.notify(result);

      if (this.mode === LatestMode.Zip) {
        for (const sub of observers) {
          sub.ready = false;
          sub.latest = none as any;
        }
        ctx.readyCount = 0;
      }
    }
  }
}

export const latest = (
  observables: readonly ObservableLike<any>[],
  mode: LatestMode,
): ObservableLike<readonly unknown[]> => {
  const factory = (observer: ObserverLike<readonly unknown[]>) => () => {
    const observers: LatestObserver[] = [];
    const ctx = {
      completedCount: 0,
      observers,
      readyCount: 0,
    };

    for (const observable of observables) {
      const innerObserver = new LatestObserver(observer, ctx, mode);
      observers.push(innerObserver);
      observe(observable, innerObserver);
    }
  };

  return createScheduledObservable(
    factory,
    observables.every(obs => obs.isSynchronous),
  );
};
