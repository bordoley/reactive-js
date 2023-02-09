/// <reference types="./MulticastObservable.d.ts" />
import '../rx.mjs';
import MulticastObservable_getObserverCount from './__internal__/MulticastObservable/MulticastObservable.getObserverCount.mjs';
import MulticastObservable_getReplay from './__internal__/MulticastObservable/MulticastObservable.getReplay.mjs';

const getObserverCount = MulticastObservable_getObserverCount;
const getReplay = MulticastObservable_getReplay;
const MulticastObservable = {
    getObserverCount,
    getReplay,
};

export { MulticastObservable as default, getObserverCount, getReplay };
