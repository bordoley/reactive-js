/// <reference types="./ObserverLike.getDispatcher.d.ts" />
import { ObserverLike_dispatcher } from '../../../rx.mjs';

const ObserverLike__getDispatcher = (observer) => observer[ObserverLike_dispatcher];

export { ObserverLike__getDispatcher as default };
