/// <reference types="./MulticastObservableLike.d.ts" />
import { M as MulticastObservableLike_observerCount, H as MulticastObservableLike_replay } from '../DisposableLike-f9476215.mjs';

const getObserverCount = (obs) => obs[MulticastObservableLike_observerCount];
const getReplay = (obs) => obs[MulticastObservableLike_replay];

export { getObserverCount, getReplay };
