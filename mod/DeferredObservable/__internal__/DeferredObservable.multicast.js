/// <reference types="./DeferredObservable.multicast.d.ts" />

import Observable_createPublisher from "../../Observable/__internal__/Observable.createPublisher.js";
import Observable_multicastImpl from "./DeferredObservable.multicastImpl.js";
const DeferredObservable_multicast = (schedulerOrFactory, options = {}) => Observable_multicastImpl(Observable_createPublisher, schedulerOrFactory, options);
export default DeferredObservable_multicast;
