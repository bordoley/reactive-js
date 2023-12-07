import type * as Observable from "../../Observable.js";
type ObservableRepeatOrRetry = <T>(shouldRepeat: (count: number, error?: Error) => boolean) => Observable.PureDeferredSideEffectsObservableOperator<T, T>;
declare const Observable_repeatOrRetry: ObservableRepeatOrRetry;
export default Observable_repeatOrRetry;
