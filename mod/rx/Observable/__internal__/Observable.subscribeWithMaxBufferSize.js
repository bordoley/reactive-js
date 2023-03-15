/// <reference types="./Observable.subscribeWithMaxBufferSize.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { max } from "../../../__internal__/math.js";
import { pipe } from "../../../functions.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";
import sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
const Observable_subscribeWithMaxBufferSize = (scheduler, maxBufferSize) => {
    maxBufferSize = max(maxBufferSize !== null && maxBufferSize !== void 0 ? maxBufferSize : MAX_SAFE_INTEGER, 1);
    return observable => pipe(Observer_create(scheduler, maxBufferSize), Disposable_addToIgnoringChildErrors(scheduler), sourceFrom(observable));
};
export default Observable_subscribeWithMaxBufferSize;
