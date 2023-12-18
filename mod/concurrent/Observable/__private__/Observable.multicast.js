/// <reference types="./Observable.multicast.d.ts" />

import * as Subject from "../../Subject.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";
const Observable_multicast = (scheduler, options = {}) => Observable_multicastImpl(Subject.create, scheduler, options);
export default Observable_multicast;
