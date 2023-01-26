/// <reference types="./Observer.getDispatcher.d.ts" />
import { ObserverLike_dispatcher } from '../../../rx.mjs';

const Observer$getDispatcher = (observer) => observer[ObserverLike_dispatcher];

export { Observer$getDispatcher as default };
