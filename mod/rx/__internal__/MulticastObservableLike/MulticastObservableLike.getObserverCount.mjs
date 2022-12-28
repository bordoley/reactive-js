/// <reference types="./MulticastObservableLike.getObserverCount.d.ts" />
import { MulticastObservableLike_observerCount } from '../../../rx.mjs';

const getObserverCount = (obs) => obs[MulticastObservableLike_observerCount];

export { getObserverCount as default };
