/// <reference types="./Observable.subscribe.d.ts" />

import { pipe } from "../../../functions.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";
import sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
const Observable_subscribe = scheduler => observable => pipe(scheduler, Observer_create, Disposable_addToIgnoringChildErrors(scheduler), sourceFrom(observable));
export default Observable_subscribe;
