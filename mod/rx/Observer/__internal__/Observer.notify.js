/// <reference types="./Observer.notify.d.ts" />

import { ObserverLike_notify } from "../../../rx.js";
const Observer_notify = (v) => (sink) => {
    sink[ObserverLike_notify](v);
    return sink;
};
export default Observer_notify;
