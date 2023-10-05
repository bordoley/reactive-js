import { ObservableLike, ReplayObservableLike } from "../../../concurrent.js";
declare const Observable_isReplayObservable: <T = unknown>(o: ObservableLike<T>) => o is ReplayObservableLike<T>;
export default Observable_isReplayObservable;
