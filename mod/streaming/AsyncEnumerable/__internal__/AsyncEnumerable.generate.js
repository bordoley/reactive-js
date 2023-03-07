/// <reference types="./AsyncEnumerable.generate.d.ts" />

import Optional_toObservable from "../../../containers/Optional/__internal__/Optional_toObservable.js";
import { pipe } from "../../../functions.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Observable_scanAsync from "../../../rx/Observable/__internal__/Observable.scanAsync.js";
import { getDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";
const AsyncEnumerable_generate = /*@__PURE__*/ (() => {
    const generateScanner = (generator) => (acc, _) => generator(acc);
    const asyncGeneratorScanner = (generator, options) => (acc, _) => pipe(acc, generator, Optional_toObservable(options));
    return (generator, initialValue, options) => {
        const delay = getDelay(options);
        return Streamable_createLifted(delay > 0
            ? Observable_scanAsync(asyncGeneratorScanner(generator, options), initialValue)
            : Observable_scan(generateScanner(generator), initialValue), true, false, false);
    };
})();
export default AsyncEnumerable_generate;
