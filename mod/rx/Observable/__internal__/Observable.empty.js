/// <reference types="./Observable.empty.d.ts" />

import { pipe } from "../../../functions.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { DisposableLike_dispose } from "../../../util.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
const Observable_empty = (options) => hasDelay(options)
    ? Runnable_create(observer => {
        pipe(observer, Observer_schedule(() => observer[DisposableLike_dispose](), options));
    })
    : Enumerable_create(observer => {
        observer[DisposableLike_dispose]();
    });
export default Observable_empty;
