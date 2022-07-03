import { getDelegate } from "../__internal__.liftable";
import { AbstractDelegatingObserver } from "../__internal__.observer";
import { everySatisfy, map } from "../__internal__.readonlyArray";
import { addTo, dispose, onComplete } from "../disposable";
import { getLength, newInstanceWith, pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Observer } from "../observer";
import { none } from "../option";
import { assertState, notify, sourceFrom } from "../source";
import { defer } from "./defer";
import { isEnumerable, tagEnumerable } from "./observable";

type LatestCtx = {
  completedCount: number;
  readonly observers: readonly LatestObserver[];
  readyCount: number;
};

export const enum LatestMode {
  Combine = 1,
  Zip = 2,
}

function onDispose(this: LatestObserver) {
  const { ctx } = this;
  ctx.completedCount++;

  if (ctx.completedCount === getLength(ctx.observers)) {
    pipe(this, getDelegate, dispose());
  }
}

class LatestObserver extends AbstractDelegatingObserver<
  unknown,
  readonly unknown[]
> {
  ready = false;
  latest: unknown = none;

  constructor(
    delegate: Observer<readonly unknown[]>,
    readonly ctx: LatestCtx,
    private readonly mode: LatestMode,
  ) {
    super(delegate);
  }

  notify(next: unknown) {
    assertState(this);

    const { ctx } = this;
    this.latest = next;

    if (!this.ready) {
      ctx.readyCount++;
      this.ready = true;
    }

    const observers = ctx.observers;
    if (ctx.readyCount === getLength(observers)) {
      const result = pipe(
        observers,
        map(observer => observer.latest),
      );
      pipe(this, getDelegate, notify(result));

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
  const isEnumerableTag = pipe(observables, everySatisfy(isEnumerable));

  const factory = () => (delegate: Observer<readonly unknown[]>) => {
    const observers: LatestObserver[] = [];
    const ctx = {
      completedCount: 0,
      observers,
      readyCount: 0,
    };

    for (const observable of observables) {
      const innerObserver = pipe(
        LatestObserver,
        newInstanceWith<
          LatestObserver,
          Observer<readonly unknown[]>,
          LatestCtx,
          LatestMode
        >(delegate, ctx, mode),
        addTo(delegate),
        onComplete(onDispose),
        sourceFrom(observable),
      );

      observers.push(innerObserver);
    }
  };

  return pipe(defer(factory), tagEnumerable(isEnumerableTag));
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
