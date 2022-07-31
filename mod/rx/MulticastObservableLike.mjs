/// <reference types="./MulticastObservableLike.d.ts" />
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay } from '../rx.mjs';

const getObserverCount = (obs) => obs[MulticastObservableLike_observerCount];
const getReplay = (obs) => obs[MulticastObservableLike_replay];

export { getObserverCount, getReplay };
