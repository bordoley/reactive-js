/// <reference types="./MulticastObservable.d.ts" />
import '../rx.mjs';
import MulticastObservable$getObserverCount from './__internal__/MulticastObservable/MulticastObservable.getObserverCount.mjs';
import MulticastObservable$getReplay from './__internal__/MulticastObservable/MulticastObservable.getReplay.mjs';

const getObserverCount = MulticastObservable$getObserverCount;
const getReplay = MulticastObservable$getReplay;

export { getObserverCount, getReplay };
