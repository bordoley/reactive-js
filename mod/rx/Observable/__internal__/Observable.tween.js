/// <reference types="./Observable.tween.d.ts" />

import { MAX_VALUE } from "../../../__internal__/constants.js";
import { identity, pipe, returns } from "../../../functions.js";
import Observable_generate from "./Observable.generate.js";
import Observable_map from "./Observable.map.js";
import Observable_takeWhile from "./Observable.takeWhile.js";
const Observable_tween = (start, finish, options) => {
    const { duration = 400, easing = identity } = options !== null && options !== void 0 ? options : {};
    return pipe(Observable_generate(([start, prev], now) => {
        if (start > now) {
            return [now, prev];
        }
        else {
            const elapsed = now - start;
            const next = elapsed > duration
                ? finish
                : prev + (finish - prev) * easing(elapsed / duration);
            return [start, next];
        }
    }, returns([MAX_VALUE, start])), Observable_map(([, value]) => value), Observable_takeWhile(value => value !== finish, {
        inclusive: true,
    }));
};
export default Observable_tween;
