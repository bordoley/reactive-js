/// <reference types="./MulticastObservableLike.d.ts" />
const MulticastObservableLike_observerCount = Symbol("MulticastObservableLike_observerCount");
const MulticastObservableLike_replay = Symbol("MulticastObservableLike_replay");
const getObserverCount = (obs) => obs[MulticastObservableLike_observerCount];
const getReplay = (obs) => obs[MulticastObservableLike_replay];

export { MulticastObservableLike_observerCount, MulticastObservableLike_replay, getObserverCount, getReplay };
