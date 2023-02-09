import { MulticastObservableLike_observerCount, MulticastObservableLike_replay } from "../rx.js";
declare const getObserverCount: (obs: {
    [MulticastObservableLike_observerCount]: number;
}) => number;
declare const getReplay: (obs: {
    [MulticastObservableLike_replay]: number;
}) => number;
declare const MulticastObservable: {
    getObserverCount: (obs: {
        [MulticastObservableLike_observerCount]: number;
    }) => number;
    getReplay: (obs: {
        [MulticastObservableLike_replay]: number;
    }) => number;
};
export { MulticastObservable as default, getObserverCount, getReplay };
