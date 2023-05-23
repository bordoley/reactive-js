/// <reference types="./Observable.multicast.d.ts" />

import Observable_createPublisher from "./Observable.createPublisher.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";
const Observable_multicast = (schedulerOrFactory, options = {}) => Observable_multicastImpl(Observable_createPublisher, schedulerOrFactory, options);
export default Observable_multicast;
