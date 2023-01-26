import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
} from "../rx";
import MulticastObservable$getObserverCount from "./__internal__/MulticastObservable/MulticastObservable.getObserverCount";
import MulticastObservable$getReplay from "./__internal__/MulticastObservable/MulticastObservable.getReplay";

export const getObserverCount: (obs: {
  [MulticastObservableLike_observerCount]: number;
}) => number = MulticastObservable$getObserverCount;
export const getReplay: (obs: {
  [MulticastObservableLike_replay]: number;
}) => number = MulticastObservable$getReplay;
