/// <reference types="./PauseableObservable.sinkInto.d.ts" />

import { pipe } from "../../../functions.js";
import { EventEmitterLike_addListener, PauseableLike_pause, PauseableLike_resume, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import EventListener_create from "../../../util/EventListener/__internal__/EventListener.create.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_dispatchTo from "../../Observable/__internal__/Observable.dispatchTo.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
const PauseableObservable_sinkInto = (sink) => pauseableObservable => Observable_create(observer => {
    const eventListener = pipe(EventListener_create(ev => {
        if (ev === "wait" || ev === "complete") {
            pauseableObservable[PauseableLike_pause]();
        }
        else {
            pauseableObservable[PauseableLike_resume]();
        }
    }), Disposable_addTo(observer));
    sink[EventEmitterLike_addListener](eventListener);
    pipe(pauseableObservable, Observable_dispatchTo(sink), Observable_subscribe(observer), Disposable_addTo(observer));
});
export default PauseableObservable_sinkInto;
