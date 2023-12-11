/// <reference types="./Observable.multicast.d.ts" />

import * as Subject from "../../Subject.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";
const Observable_multicast = (schedulerOrFactory, options = {}) => Observable_multicastImpl(Subject.create, schedulerOrFactory, options);
export default Observable_multicast;
