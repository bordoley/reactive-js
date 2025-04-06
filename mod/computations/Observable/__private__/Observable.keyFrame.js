/// <reference types="./Observable.keyFrame.d.ts" />

import { identity } from "../../../functions.js";
import { ClockLike_now } from "../../../utils.js";
import { Observable_genPure } from "./Observable.gen.js";
const Observable_keyFrame = ((duration, options) => {
    const { easing = identity } = options ?? {};
    return Observable_genPure(function* keyFrame(clock) {
        const startTime = clock[ClockLike_now];
        let elapsed = clock[ClockLike_now] - startTime;
        while (elapsed <= duration) {
            const next = easing(elapsed / duration);
            yield next;
            elapsed = clock[ClockLike_now] - startTime;
        }
    });
});
export default Observable_keyFrame;
