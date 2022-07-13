import { DisposableLike } from "../util/DisposableLike";
import { ObservableLike } from "./ObservableLike";

export const MulticastObservableLike_observerCount = Symbol(
  "MulticastObservableLike_observerCount",
);
export const MulticastObservableLike_replay = Symbol(
  "MulticastObservableLike_replay",
);

export interface MulticastObservableLike<T = unknown>
  extends ObservableLike<T>,
    DisposableLike {
  /**
   * The number of observers currently observing.
   */
  readonly [MulticastObservableLike_observerCount]: number;
  readonly [MulticastObservableLike_replay]: number;
}

export const getObserverCount = (obs: MulticastObservableLike) =>
  obs[MulticastObservableLike_observerCount];

export const getReplay = (obs: MulticastObservableLike) =>
  obs[MulticastObservableLike_replay];
