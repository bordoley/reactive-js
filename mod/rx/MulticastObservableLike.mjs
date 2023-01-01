/// <reference types="./MulticastObservableLike.d.ts" />
import '../rx.mjs';
import MulticastObservableLike__getObserverCount from './__internal__/MulticastObservableLike/MulticastObservableLike.getObserverCount.mjs';
import MulticastObservableLike__getReplay from './__internal__/MulticastObservableLike/MulticastObservableLike.getReplay.mjs';

const getObserverCount = MulticastObservableLike__getObserverCount;
const getReplay = MulticastObservableLike__getReplay;

export { getObserverCount, getReplay };
