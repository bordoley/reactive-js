import { Error, addTeardown, dispose, addDisposable } from "../disposable";
import { pipe } from "../functions";
import { ObservableLike } from "../observable";
import { Option, isSome, none } from "../option";
import { everySatisfy, map } from "../readonlyArray";
import { defer, deferSynchronous } from "./observable";
import { Observer, sink } from "./observer";

type LatestCtx = {
  completedCount: number;
  readonly observers: readonly LatestObserver[];
  readyCount: number;
};

export const enum LatestMode {
  Combine = 1,
  Zip = 2,
}

function onDispose(this: LatestObserver, error: Option<Error>) {
  const { ctx } = this;
  ctx.completedCount++;

  if (isSome(error) || ctx.completedCount === ctx.observers.length) {
    pipe(this.delegate, dispose(error));
  }
}

class LatestObserver extends Observer<unknown> {
  ready = false;
  latest: unknown = none;

  constructor(
    readonly delegate: Observer<readonly unknown[]>,
    readonly ctx: LatestCtx,
    private readonly mode: LatestMode,
  ) {
    super(delegate);
  }

  notify(next: unknown) {
    this.assertState();

    const ctx = this.ctx;
    this.latest = next;

    if (!this.ready) {
      ctx.readyCount++;
      this.ready = true;
    }

    const observers = ctx.observers;
    if (ctx.readyCount === observers.length) {
      const result = pipe(
        observers,
        map(observer => observer.latest),
      );
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
  const factory = (delegate: Observer<readonly unknown[]>) => () => {
    const observers: LatestObserver[] = [];
    const ctx = {
      completedCount: 0,
      observers,
      readyCount: 0,
    };

    for (const observable of observables) {
      const innerObserver = new LatestObserver(delegate, ctx, mode);
      addTeardown(innerObserver, onDispose);
      addDisposable(delegate, innerObserver);

      observers.push(innerObserver);
      pipe(observable, sink(innerObserver));
    }
  };

  const isSynchronous = pipe(
    observables,
    everySatisfy(obs => obs.isSynchronous),
  );

  return isSynchronous ? deferSynchronous(factory) : defer(factory);
};
