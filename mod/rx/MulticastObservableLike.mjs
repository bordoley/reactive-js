/// <reference types="./MulticastObservableLike.d.ts" />
import { M as MulticastObservableLike_observerCount, m as MulticastObservableLike_replay } from '../DisposableLike-c856ff07.mjs';

const getObserverCount = (obs) => obs[MulticastObservableLike_observerCount];
const getReplay = (obs) => obs[MulticastObservableLike_replay];

export { getObserverCount, getReplay };
