import { DeferredObservableLike } from "../../../concurrent.js";
import type * as Observable from "../../Observable.js";
type ObservableRepeatOrRetry = <T>(shouldRepeat: (count: number, error?: Error) => boolean) => Observable.PureDeferredObservableOperator<T, T, DeferredObservableLike<T>>;
declare const Observable_repeatOrRetry: ObservableRepeatOrRetry;
export default Observable_repeatOrRetry;
