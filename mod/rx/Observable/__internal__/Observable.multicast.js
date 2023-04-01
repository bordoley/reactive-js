/// <reference types="./Observable.multicast.d.ts" />

import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";
const Observable_multicast = (schedulerOrFactory, options = {}) => Observable_multicastImpl(Publisher_create, schedulerOrFactory, options);
export default Observable_multicast;
