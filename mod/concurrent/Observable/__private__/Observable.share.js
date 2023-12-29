/// <reference types="./Observable.share.d.ts" />

import * as Subject from "../../Subject.js";
import Observable_multicastImpl from "./Observable.multicastImpl.js";
const Observable_share = (scheduler, options) => Observable_multicastImpl(Subject.create, scheduler, {
    ...options,
    autoDispose: true,
});
export default Observable_share;
