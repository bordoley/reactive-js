import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
} from "../rx";
import MulticastObservable_getObserverCount from "./MulticastObservable/__internal__/MulticastObservable.getObserverCount";
import MulticastObservable_getReplay from "./MulticastObservable/__internal__/MulticastObservable.getReplay";

export const getObserverCount: (obs: {
  [MulticastObservableLike_observerCount]: number;
}) => number = MulticastObservable_getObserverCount;
export const getReplay: (obs: {
  [MulticastObservableLike_replay]: number;
}) => number = MulticastObservable_getReplay;

const MulticastObservable = {
  getObserverCount,
  getReplay,
};

export default MulticastObservable;
