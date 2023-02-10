/// <reference types="./MulticastObservable.d.ts" />
import '../rx.mjs';
import MulticastObservable_getObserverCount from './MulticastObservable/__internal__/MulticastObservable.getObserverCount.mjs';
import MulticastObservable_getReplay from './MulticastObservable/__internal__/MulticastObservable.getReplay.mjs';

const getObserverCount = MulticastObservable_getObserverCount;
const getReplay = MulticastObservable_getReplay;
const MulticastObservable = {
    getObserverCount,
    getReplay,
};

export { MulticastObservable as default, getObserverCount, getReplay };
