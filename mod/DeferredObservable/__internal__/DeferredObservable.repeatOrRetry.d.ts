import type * as DeferredObservable from "../../DeferredObservable.js";
type DeferredObservableRepeatOrRetry = <T>(shouldRepeat: (count: number, error?: Error) => boolean) => DeferredObservable.EnumerableUpperBoundObservableOperator<T, T>;
declare const DeferredObservable_repeatOrRetry: DeferredObservableRepeatOrRetry;
export default DeferredObservable_repeatOrRetry;
