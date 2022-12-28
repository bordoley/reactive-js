/// <reference types="./MulticastObservableLike.d.ts" />
import '../rx.mjs';
import getObserverCount$1 from './__internal__/MulticastObservableLike/MulticastObservableLike.getObserverCount.mjs';
import getReplay$1 from './__internal__/MulticastObservableLike/MulticastObservableLike.getReplay.mjs';

const getObserverCount = getObserverCount$1;
const getReplay = getReplay$1;

export { getObserverCount, getReplay };
