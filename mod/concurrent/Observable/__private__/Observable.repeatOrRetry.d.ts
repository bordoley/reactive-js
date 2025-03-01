import { DeferredObservableLike } from "../../../concurrent.js";
import type { ObservableOperator } from "../../Observable.js";
type ObservableRepeatOrRetry = <T>(shouldRepeat: (count: number, error?: Error) => boolean) => ObservableOperator<T, T, DeferredObservableLike>;
declare const Observable_repeatOrRetry: ObservableRepeatOrRetry;
export default Observable_repeatOrRetry;
