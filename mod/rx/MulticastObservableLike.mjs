/// <reference types="./MulticastObservableLike.d.ts" />
import { h as MulticastObservableLike_observerCount, M as MulticastObservableLike_replay } from '../rx-31e22181.mjs';

const getObserverCount = (obs) => obs[MulticastObservableLike_observerCount];
const getReplay = (obs) => obs[MulticastObservableLike_replay];

export { getObserverCount, getReplay };
