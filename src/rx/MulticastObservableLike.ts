import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
} from "../rx";
import MulticastObservableLike__getObserverCount from "./__internal__/MulticastObservableLike/MulticastObservableLike.getObserverCount";
import MulticastObservableLike__getReplay from "./__internal__/MulticastObservableLike/MulticastObservableLike.getReplay";

export const getObserverCount: (obs: {
  [MulticastObservableLike_observerCount]: number;
}) => number = MulticastObservableLike__getObserverCount;
export const getReplay: (obs: {
  [MulticastObservableLike_replay]: number;
}) => number = MulticastObservableLike__getReplay;
