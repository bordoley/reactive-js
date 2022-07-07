import { getDelegate } from "../__internal__.delegating";
import { map } from "../__internal__.readonlyArray";
import { Zip } from "../container";
import { addTo, dispose, onComplete } from "../disposable";
import { getLength, newInstanceWith, pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { ObserverLike, getScheduler } from "../observer";
import { none } from "../option";
import { sourceFrom } from "../reactiveContainer";
import { assertState, notify } from "../reactiveSink";
import { SchedulerLike } from "../scheduler";
import { defer } from "./defer";
import { computeMinTag, tagObservableType } from "./observable";
import { Observer } from "./observer";

const enum LatestMode {
  Combine = 1,
  Zip = 2,
}

class LatestCtx {
  private completedCount = 0;
  private readonly observers: LatestObserver[] = [];
  readyCount = 0;

  constructor(
    readonly delegate: ObserverLike<readonly unknown[]>,
    private readonly mode: LatestMode,
  ) {}

  add(observer: LatestObserver): void {
    this.observers.push(observer);
  }

  notify() {
    const { mode, observers, readyCount } = this;

    if (readyCount === getLength(observers)) {
      const result = pipe(
        observers,
        map(observer => observer.latest),
      );
      pipe(this, getDelegate, notify(result));

      if (mode === LatestMode.Zip) {
        for (const sub of observers) {
          sub.ready = false;
          sub.latest = none as any;
        }
        this.readyCount = 0;
      }
    }
  }

  onCompleted() {
    this.completedCount++;

    if (this.completedCount === getLength(this.observers)) {
      pipe(this, getDelegate, dispose());
    }
  }
}

class LatestObserver extends Observer<unknown> {
  ready = false;
  latest: unknown = none;

  constructor(scheduler: SchedulerLike, readonly ctx: LatestCtx) {
    super(scheduler);
  }

  notify(next: unknown) {
    assertState(this);

    const { ctx } = this;
    this.latest = next;

    if (!this.ready) {
      ctx.readyCount++;
      this.ready = true;
    }

    ctx.notify();
  }
}

export const latest = (
  observables: readonly ObservableLike<any>[],
  mode: LatestMode,
): ObservableLike<readonly unknown[]> => {
  const factory = () => (delegate: ObserverLike<readonly unknown[]>) => {
    const latestCtxDelegate = new LatestCtx(delegate, mode);
    const onCompleteCb = () => {
      latestCtxDelegate.onCompleted();
    };

    const scheduler = getScheduler(delegate);

    for (const observable of observables) {
      const innerObserver = pipe(
        LatestObserver,
        newInstanceWith<LatestObserver, SchedulerLike, LatestCtx>(
          scheduler,
          latestCtxDelegate,
        ),
        addTo(delegate),
        onComplete(onCompleteCb),
        sourceFrom(observable),
      );

      latestCtxDelegate.add(innerObserver);
    }
  };

  return pipe(defer(factory), tagObservableType(computeMinTag(observables)));
};

export function combineLatest<TA, TB>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
): ObservableLike<[TA, TB]>;
export function combineLatest<TA, TB, TC, T>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
): ObservableLike<[TA, TB, TC]>;
export function combineLatest<TA, TB, TC, TD>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
): ObservableLike<[TA, TB, TC, TD]>;
export function combineLatest<TA, TB, TC, TD, TE>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
): ObservableLike<[TA, TB, TC, TD, TE]>;
export function combineLatest<TA, TB, TC, TD, TE, TF>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
): ObservableLike<[TA, TB, TC, TD, TE, TF]>;
export function combineLatest<TA, TB, TC, TD, TE, TF, TG>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG]>;
export function combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
  h: ObservableLike<TH>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
export function combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
  h: ObservableLike<TH>,
  i: ObservableLike<TI>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
export function combineLatest(
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> {
  return latest(observables, LatestMode.Combine);
}

export const combineLatestT: Zip<ObservableLike<unknown>> = {
  zip: combineLatest,
};

export function zipLatest<TA, TB>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
): ObservableLike<[TA, TB]>;
export function zipLatest<TA, TB, TC, T>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
): ObservableLike<[TA, TB, TC]>;
export function zipLatest<TA, TB, TC, TD>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
): ObservableLike<[TA, TB, TC, TD]>;
export function zipLatest<TA, TB, TC, TD, TE>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
): ObservableLike<[TA, TB, TC, TD, TE]>;
export function zipLatest<TA, TB, TC, TD, TE, TF>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
): ObservableLike<[TA, TB, TC, TD, TE, TF]>;
export function zipLatest<TA, TB, TC, TD, TE, TF, TG>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG]>;
export function zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
  h: ObservableLike<TH>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
export function zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
  h: ObservableLike<TH>,
  i: ObservableLike<TI>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
export function zipLatest(
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> {
  return latest(observables, LatestMode.Zip);
}

export const zipLatestT: Zip<ObservableLike<unknown>> = {
  zip: zipLatest,
};

export function forkCombineLatest<T, TA, TB>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
): ObservableOperator<T, [TA, TB]>;
export function forkCombineLatest<T, TA, TB, TC>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
): ObservableOperator<T, [TA, TB, TC]>;
export function forkCombineLatest<T, TA, TB, TC, TD>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
): ObservableOperator<T, [TA, TB, TC, TD]>;
export function forkCombineLatest<T, TA, TB, TC, TD, TE>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
  e: ObservableOperator<T, TE>,
): ObservableOperator<T, [TA, TB, TC, TD, TE]>;
export function forkCombineLatest<T, TA, TB, TC, TD, TE, TF>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
  e: ObservableOperator<T, TE>,
  f: ObservableOperator<T, TF>,
): ObservableOperator<T, [TA, TB, TC, TD, TE, TF]>;
export function forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
  e: ObservableOperator<T, TE>,
  f: ObservableOperator<T, TF>,
  g: ObservableOperator<T, TG>,
): ObservableOperator<T, [TA, TB, TC, TD, TE, TF, TG]>;
export function forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
  e: ObservableOperator<T, TE>,
  f: ObservableOperator<T, TF>,
  g: ObservableOperator<T, TG>,
  h: ObservableOperator<T, TH>,
): ObservableOperator<T, [TA, TB, TC, TD, TE, TF, TG, TH]>;
export function forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
  e: ObservableOperator<T, TE>,
  f: ObservableOperator<T, TF>,
  g: ObservableOperator<T, TG>,
  h: ObservableOperator<T, TH>,
  i: ObservableOperator<T, TI>,
): ObservableOperator<T, [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
export function forkCombineLatest<T>(
  ...ops: readonly ObservableOperator<T, unknown>[]
): ObservableOperator<T, readonly unknown[]> {
  return (obs: ObservableLike<T>) =>
    latest(
      pipe(
        ops,
        map(op => pipe(obs, op)),
      ),
      LatestMode.Combine,
    );
}

export function forkZipLatest<T, TA, TB>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
): ObservableOperator<T, [TA, TB]>;
export function forkZipLatest<T, TA, TB, TC>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
): ObservableOperator<T, [TA, TB, TC]>;
export function forkZipLatest<T, TA, TB, TC, TD>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
): ObservableOperator<T, [TA, TB, TC, TD]>;
export function forkZipLatest<T, TA, TB, TC, TD, TE>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
  e: ObservableOperator<T, TE>,
): ObservableOperator<T, [TA, TB, TC, TD, TE]>;
export function forkZipLatest<T, TA, TB, TC, TD, TE, TF>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
  e: ObservableOperator<T, TE>,
  f: ObservableOperator<T, TF>,
): ObservableOperator<T, [TA, TB, TC, TD, TE, TF]>;
export function forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
  e: ObservableOperator<T, TE>,
  f: ObservableOperator<T, TF>,
  g: ObservableOperator<T, TG>,
): ObservableOperator<T, [TA, TB, TC, TD, TE, TF, TG]>;
export function forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
  e: ObservableOperator<T, TE>,
  f: ObservableOperator<T, TF>,
  g: ObservableOperator<T, TG>,
  h: ObservableOperator<T, TH>,
): ObservableOperator<T, [TA, TB, TC, TD, TE, TF, TG, TH]>;
export function forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: ObservableOperator<T, TA>,
  b: ObservableOperator<T, TB>,
  c: ObservableOperator<T, TC>,
  d: ObservableOperator<T, TD>,
  e: ObservableOperator<T, TE>,
  f: ObservableOperator<T, TF>,
  g: ObservableOperator<T, TG>,
  h: ObservableOperator<T, TH>,
  i: ObservableOperator<T, TI>,
): ObservableOperator<T, [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
export function forkZipLatest<T>(
  ...ops: readonly ObservableOperator<T, unknown>[]
): ObservableOperator<T, readonly unknown[]> {
  return (obs: ObservableLike<T>) =>
    latest(
      pipe(
        ops,
        map(op => pipe(obs, op)),
      ),
      LatestMode.Zip,
    );
}
