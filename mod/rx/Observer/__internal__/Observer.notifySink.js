/// <reference types="./Observer.notifySink.d.ts" />

import { ObserverLike_notify } from "../../../rx.js";
const Observer_notifyObserver = (sink) => (next) => sink[ObserverLike_notify](next);
export default Observer_notifyObserver;
