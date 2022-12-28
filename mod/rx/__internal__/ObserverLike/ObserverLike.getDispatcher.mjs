/// <reference types="./ObserverLike.getDispatcher.d.ts" />
import { ObserverLike_dispatcher } from '../../../rx.mjs';

const getDispatcher = (observer) => observer[ObserverLike_dispatcher];

export { getDispatcher as default };
