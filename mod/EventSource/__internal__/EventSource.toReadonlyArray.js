/// <reference types="./EventSource.toReadonlyArray.d.ts" />

import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../Disposable/__internal__/Disposable.onError.js";
import { pipe } from "../../functions.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
const EventSource_toReadonlyArrayAsync = () => (src) => new Promise((resolve, reject) => {
    const result = [];
    pipe(src, EventSource_addEventHandler(v => {
        result.push(v);
    }), Disposable_onComplete(() => resolve(result)), Disposable_onError(reject));
});
export default EventSource_toReadonlyArrayAsync;
