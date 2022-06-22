import { Error, addDisposable, addTeardown, dispose } from "../disposable";
import { pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Option, isSome, none } from "../option";
import { everySatisfy, map } from "../readonlyArray";
import { sinkInto } from "../source";
import { defer, deferSynchronous } from "./defer";
import { Observer } from "./observer";

type LatestCtx = {
  completedCount: number;
  readonly observers: readonly LatestObserver[];
  readyCount: number;
};

const enum LatestMode {
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
  const factory = () => (delegate: Observer<readonly unknown[]>) => {
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
      pipe(observable, sinkInto(innerObserver));
    }
  };

  const isSynchronous = pipe(
    observables,
    everySatisfy(obs => obs.isSynchronous ?? false),
  );

  return isSynchronous ? deferSynchronous(factory) : defer(factory);
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

export const combineLatestWith =
  <TA, TB>(snd: ObservableLike<TB>): ObservableOperator<TA, [TA, TB]> =>
  fst =>
    combineLatest(fst, snd);

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

export const zipLatestWith =
  <TA, TB>(snd: ObservableLike<TB>): ObservableOperator<TA, [TA, TB]> =>
  fst =>
    zipLatest(fst, snd);
