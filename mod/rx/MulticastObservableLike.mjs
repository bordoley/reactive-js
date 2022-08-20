/// <reference types="./MulticastObservableLike.d.ts" />
import { M as MulticastObservableLike_observerCount, m as MulticastObservableLike_replay } from '../rx-fdbb13e3.mjs';

const getObserverCount = (obs) => obs[MulticastObservableLike_observerCount];
const getReplay = (obs) => obs[MulticastObservableLike_replay];

export { getObserverCount, getReplay };
