/// <reference types="./AsyncEnumerable.generate.d.ts" />

import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { pipe } from "../../../functions.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import AsyncEnumerable_create from "./AsyncEnumerable.create.js";
import AsyncEnumerable_generateLast from "./AsyncEnumerable.generateLast.js";
const AsyncEnumerable_generate = 
/*@__PURE__*/ (() => {
    const generateScanner = (generator) => (acc, _) => generator(acc);
    const asyncGeneratorScanner = (generator, options) => (acc) => pipe(acc, generator, Optional_toObservable(options));
    return (generator, initialValue, options) => {
        const { delay = 0 } = options ?? {};
        return delay > 0
            ? AsyncEnumerable_generateLast(asyncGeneratorScanner(generator, options), initialValue)
            : AsyncEnumerable_create(Observable_scan(generateScanner(generator), initialValue));
    };
})();
export default AsyncEnumerable_generate;
