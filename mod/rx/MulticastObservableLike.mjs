/// <reference types="./MulticastObservableLike.d.ts" />
import { M as MulticastObservableLike_observerCount, A as MulticastObservableLike_replay } from '../DisposableLike-45fa23bf.mjs';

const getObserverCount = (obs) => obs[MulticastObservableLike_observerCount];
const getReplay = (obs) => obs[MulticastObservableLike_replay];

export { getObserverCount, getReplay };
