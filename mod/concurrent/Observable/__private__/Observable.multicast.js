/// <reference types="./Observable.multicast.d.ts" />

import Subject_create from "../../Subject/__private__/Subject.create.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";
const Observable_multicast = (schedulerOrFactory, options = {}) => Observable_multicastImpl(Subject_create, schedulerOrFactory, options);
export default Observable_multicast;
