import { MulticastObservableLike_observerCount, MulticastObservableLike_replay } from "../rx.js";
export declare const getObserverCount: (obs: {
    [MulticastObservableLike_observerCount]: number;
}) => number;
export declare const getReplay: (obs: {
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
export default MulticastObservable;
