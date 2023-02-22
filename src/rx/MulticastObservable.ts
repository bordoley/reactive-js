import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
} from "../rx.js";
import MulticastObservable_getObserverCount from "./MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "./MulticastObservable/__internal__/MulticastObservable.getReplay.js";

export const getObserverCount: (obs: {
  [MulticastObservableLike_observerCount]: number;
}) => number = MulticastObservable_getObserverCount;
export const getReplay: (obs: {
  [MulticastObservableLike_replay]: number;
}) => number = MulticastObservable_getReplay;
