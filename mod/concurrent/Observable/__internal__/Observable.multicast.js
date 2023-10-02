/// <reference types="./Observable.multicast.d.ts" />

import ReplayPublisher_create from "../../ReplayPublisher/__internal__/ReplayPublisher.create.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";
const Observable_multicast = (schedulerOrFactory, options = {}) => Observable_multicastImpl(ReplayPublisher_create, schedulerOrFactory, options);
export default Observable_multicast;
