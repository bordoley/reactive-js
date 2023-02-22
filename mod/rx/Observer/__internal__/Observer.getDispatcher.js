/// <reference types="./Observer.getDispatcher.d.ts" />

import { ObserverLike_dispatcher } from "../../../rx.js";
const Observer_getDispatcher = (observer) => observer[ObserverLike_dispatcher];
export default Observer_getDispatcher;
