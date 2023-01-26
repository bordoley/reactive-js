/// <reference types="./Observer.getDispatcher.d.ts" />
import { ObserverLike_dispatcher } from '../../../rx.mjs';

const Observer_getDispatcher = (observer) => observer[ObserverLike_dispatcher];

export { Observer_getDispatcher as default };
