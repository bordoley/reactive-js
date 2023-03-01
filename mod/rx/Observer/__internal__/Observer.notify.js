/// <reference types="./Observer.notify.d.ts" />

import { ObserverLike_notify } from "../../../rx.js";
const Observer_notify = (v) => (observer) => {
    observer[ObserverLike_notify](v);
    return observer;
};
export default Observer_notify;
