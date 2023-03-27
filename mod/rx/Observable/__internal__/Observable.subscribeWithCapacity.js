/// <reference types="./Observable.subscribeWithCapacity.d.ts" />

import { pipe } from "../../../functions.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";
import sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
const Observable_subscribeWithCapacity = (scheduler, capacity) => observable => pipe(Observer_create(scheduler, capacity), Disposable_addToIgnoringChildErrors(scheduler), sourceFrom(observable));
export default Observable_subscribeWithCapacity;
