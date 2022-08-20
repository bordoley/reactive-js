/// <reference types="./MulticastObservableLike.d.ts" />
import { M as MulticastObservableLike_observerCount, m as MulticastObservableLike_replay } from '../rx-fcdda9a1.mjs';

const getObserverCount = (obs) => obs[MulticastObservableLike_observerCount];
const getReplay = (obs) => obs[MulticastObservableLike_replay];

export { getObserverCount, getReplay };
