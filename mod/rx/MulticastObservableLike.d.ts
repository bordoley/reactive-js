import { MulticastObservableLike_observerCount, MulticastObservableLike_replay } from "../rx.mjs";
declare const getObserverCount: (obs: {
    [MulticastObservableLike_observerCount]: number;
}) => number;
declare const getReplay: (obs: {
    [MulticastObservableLike_replay]: number;
}) => number;
export { getObserverCount, getReplay };
