/// <reference types="./AsyncEnumerable.generate.d.ts" />

import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { pipe } from "../../../functions.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { getDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";
import AsyncEnumerable_generateAsync from "./AsyncEnumerable.generateAsync.js";
const AsyncEnumerable_generate = /*@__PURE__*/ (() => {
    const generateScanner = (generator) => (acc, _) => generator(acc);
    const asyncGeneratorScanner = (generator, options) => (acc) => pipe(acc, generator, Optional_toObservable(options));
    return (generator, initialValue, options) => {
        const delay = getDelay(options);
        return delay > 0
            ? AsyncEnumerable_generateAsync(asyncGeneratorScanner(generator, options), initialValue)
            : Streamable_createLifted(Observable_scan(generateScanner(generator), initialValue), true, true, true);
    };
})();
export default AsyncEnumerable_generate;
