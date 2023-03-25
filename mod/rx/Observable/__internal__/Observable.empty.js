/// <reference types="./Observable.empty.d.ts" />

import { pipe } from "../../../functions.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import { DisposableLike_dispose } from "../../../util.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
const emptyEnumerable = /*@__PURE__*/ Enumerable_create(observer => {
    observer[DisposableLike_dispose]();
});
const Observable_empty = ((options) => {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.delay) !== null && _a !== void 0 ? _a : 0) > 0
        ? Runnable_create(observer => {
            pipe(observer, Observer_schedule(() => observer[DisposableLike_dispose](), options));
        })
        : emptyEnumerable;
});
export default Observable_empty;
