/// <reference types="./MulticastObservable.getObserverCount.d.ts" />
import { MulticastObservableLike_observerCount } from '../../../rx.mjs';

const MulticastObservable_getObserverCount = (obs) => obs[MulticastObservableLike_observerCount];

export { MulticastObservable_getObserverCount as default };
