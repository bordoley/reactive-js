/// <reference types="./DeferredObservable.multicast.d.ts" />

import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";
import Observable_multicastImpl from "./DeferredObservable.multicastImpl.js";
const DeferredObservable_multicast = (schedulerOrFactory, options = {}) => Observable_multicastImpl(Publisher_create, schedulerOrFactory, options);
export default DeferredObservable_multicast;
