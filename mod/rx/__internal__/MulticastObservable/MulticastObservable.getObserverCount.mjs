/// <reference types="./MulticastObservable.getObserverCount.d.ts" />
import { MulticastObservableLike_observerCount } from '../../../rx.mjs';

const MulticastObservable$getObserverCount = (obs) => obs[MulticastObservableLike_observerCount];

export { MulticastObservable$getObserverCount as default };
