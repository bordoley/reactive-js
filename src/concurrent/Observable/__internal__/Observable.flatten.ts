import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../../concurrent.js";
import Observable_lift from "./Observable.lift.js";

const Observable_flatten =
  (op: <T>(o: ObserverLike<T>) => ObserverLike<ObservableLike<T>>) =>
  <T>(options?: {
    readonly [ObservableLike_isDeferred]?: boolean;
    readonly [ObservableLike_isPure]?: boolean;
    readonly [ObservableLike_isRunnable]?: boolean;
  }) =>
    Observable_lift({
      [ObservableLike_isDeferred]: false,
      [ObservableLike_isPure]: false,
      [ObservableLike_isRunnable]: false,
      ...(options ?? {}),
    })(op<T>);

export default Observable_flatten;
