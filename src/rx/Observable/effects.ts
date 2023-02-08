import { Factory } from "react";
import {
  Equality,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  Function6,
  Optional,
  SideEffect,
  SideEffect1,
  SideEffect2,
  SideEffect3,
  SideEffect4,
  SideEffect5,
  SideEffect6,
  Updater,
  isSome,
  none,
  pipe,
} from "../../functions";
import { ObservableLike } from "../../rx";
import { SchedulerLike } from "../../scheduling";
import { StreamLike, StreamableLike } from "../../streaming";
import Streamable_createStateStore from "../../streaming/__internal__/Streamable/Streamable.createStateStore";
import Streamable_stream from "../../streaming/__internal__/Streamable/Streamable.stream";
import { DisposableLike } from "../../util";
import Disposable_dispose from "../../util/__internal__/Disposable/Disposable.dispose";
import {
  AsyncContext_awaitOrObserve,
  AsyncContext_memoOrUse,
  AsyncContext_observer,
  assertCurrentContext,
} from "../__internal__/Observable/Observable.async";
import Observable_create from "../__internal__/Observable/Observable.create";
import Observable_subscribe from "../__internal__/Observable/Observable.subscribe";
import Observer_getScheduler from "../__internal__/Observer/Observer.getScheduler";
import Observer_schedule from "../__internal__/Observer/Observer.schedule";
import Sink_notify from "../__internal__/Sink/Sink.notify";

interface __Memo {
  <T>(fn: Factory<T>): T;
  <TA, T>(fn: Function1<TA, T>, a: TA): T;
  <TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
  <TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
  <TA, TB, TC, TD, T>(
    fn: Function4<TA, TB, TC, TD, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): T;
  <TA, TB, TC, TD, TE, T>(
    fn: Function5<TA, TB, TC, TD, TE, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): T;
  <TA, TB, TC, TD, TE, TF, T>(
    fn: Function6<TA, TB, TC, TD, TE, TF, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): T;
}
export const __memo: __Memo = <T>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[AsyncContext_memoOrUse](false, f, ...args);
};

export const __await = <T>(observable: ObservableLike<T>): T => {
  const ctx = assertCurrentContext();
  return ctx[AsyncContext_awaitOrObserve](observable, true) as T;
};

export const __observe = <T>(observable: ObservableLike<T>): Optional<T> => {
  const ctx = assertCurrentContext();
  return ctx[AsyncContext_awaitOrObserve](observable, false);
};

interface __Do {
  (fn: SideEffect): void;
  <TA>(fn: SideEffect1<TA>, a: TA): void;
  <TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
  <TA, TB, TC>(fn: SideEffect3<TA, TB, TC>, a: TA, b: TB, c: TC): void;
  <TA, TB, TC, TD>(
    fn: SideEffect4<TA, TB, TC, TD>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): void;
  <TA, TB, TC, TD, TE>(
    fn: SideEffect5<TA, TB, TC, TD, TE>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): void;
  <TA, TB, TC, TD, TE, TF>(
    fn: SideEffect6<TA, TB, TC, TD, TE, TF>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): void;
}
export const __do: __Do = /*@__PURE__*/ (() => {
  const deferSideEffect = (f: (...args: any[]) => void, ...args: unknown[]) =>
    Observable_create(observer => {
      const callback = () => {
        f(...args);
        pipe(observer, Sink_notify(none), Disposable_dispose());
      };

      pipe(observer, Observer_schedule(callback));
    });

  return (f: (...args: any[]) => void, ...args: unknown[]): void => {
    const ctx = assertCurrentContext();

    const scheduler = Observer_getScheduler(ctx[AsyncContext_observer]);
    const observable = ctx[AsyncContext_memoOrUse](
      false,
      deferSideEffect,
      f,
      ...args,
    );
    const subscribeOnScheduler = ctx[AsyncContext_memoOrUse](
      false,
      Observable_subscribe,
      scheduler,
    );
    ctx[AsyncContext_memoOrUse](true, subscribeOnScheduler, observable);
  };
})();

interface __Using {
  <T extends DisposableLike>(fn: Factory<T>): T;
  <TA, T extends DisposableLike>(fn: Function1<TA, T>, a: TA): T;
  <TA, TB, T extends DisposableLike>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
  <TA, TB, TC, T extends DisposableLike>(
    fn: Function3<TA, TB, TC, T>,
    a: TA,
    b: TB,
    c: TC,
  ): T;
  <TA, TB, TC, TD, T extends DisposableLike>(
    fn: Function4<TA, TB, TC, TD, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
  ): T;
  <TA, TB, TC, TD, TE, T extends DisposableLike>(
    fn: Function5<TA, TB, TC, TD, TE, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
  ): T;
  <TA, TB, TC, TD, TE, TF, T extends DisposableLike>(
    fn: Function6<TA, TB, TC, TD, TE, TF, T>,
    a: TA,
    b: TB,
    c: TC,
    d: TD,
    e: TE,
    f: TF,
  ): T;
}
export const __using: __Using = <T extends DisposableLike>(
  f: (...args: any[]) => T,
  ...args: unknown[]
): T => {
  const ctx = assertCurrentContext();
  return ctx[AsyncContext_memoOrUse](true, f, ...args);
};

export function __currentScheduler(): SchedulerLike {
  const ctx = assertCurrentContext();
  return Observer_getScheduler(ctx[AsyncContext_observer]);
}

export const __stream = /*@__PURE__*/ (() => {
  const streamOnSchedulerFactory = <
    TReq,
    T,
    TStream extends StreamLike<TReq, T>,
  >(
    streamable: StreamableLike<TReq, T, TStream>,
    scheduler: SchedulerLike,
    replay: number,
  ) => pipe(streamable, Streamable_stream(scheduler, { replay }));

  return <TReq, T, TStream extends StreamLike<TReq, T>>(
    streamable: StreamableLike<TReq, T, TStream>,
    {
      replay = 0,
      scheduler,
    }: { readonly replay?: number; readonly scheduler?: SchedulerLike } = {},
  ): TStream => {
    const currentScheduler = __currentScheduler();
    return __using(
      streamOnSchedulerFactory,
      streamable,
      scheduler ?? currentScheduler,
      replay,
    );
  };
})();

export const __state = /*@__PURE__*/ (() => {
  const createStateOptions = <T>(equality: Optional<Equality<T>>) =>
    isSome(equality) ? { equality } : none;

  return <T>(
    initialState: () => T,
    options: {
      readonly equality?: Optional<Equality<T>>;
    } = {},
  ): StreamLike<Updater<T>, T> => {
    const { equality } = options;
    const optionsMemo = __memo(createStateOptions, equality);
    const streamable = __memo(
      Streamable_createStateStore,
      initialState,
      optionsMemo,
    );
    return __stream(streamable);
  };
})();
