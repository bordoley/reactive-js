import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
} from "../rx";

export const getObserverCount = (obs: {
  [MulticastObservableLike_observerCount]: number;
}) => obs[MulticastObservableLike_observerCount];

export const getReplay = (obs: { [MulticastObservableLike_replay]: number }) =>
  obs[MulticastObservableLike_replay];
