/// <reference types="./AsyncEnumerable.generate.d.ts" />
import ReadonlyArray_toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe } from '../../../functions.mjs';
import Observable_scan from '../../../rx/__internal__/Observable/Observable.scan.mjs';
import Observable_scanAsync from '../../../rx/__internal__/Observable/Observable.scanAsync.mjs';
import { getDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import AsyncEnumerable_create from './AsyncEnumerable.create.mjs';

const AsyncEnumerable_generate = /*@__PURE__*/ (() => {
    const generateScanner = (generator) => (acc, _) => generator(acc);
    const asyncGeneratorScanner = (generator, options) => (acc, _) => pipe(acc, generator, x => [x], ReadonlyArray_toRunnableObservable(options));
    return (generator, initialValue, options) => {
        const delay = getDelay(options);
        return AsyncEnumerable_create(delay > 0
            ? Observable_scanAsync(asyncGeneratorScanner(generator, options), initialValue)
            : Observable_scan(generateScanner(generator), initialValue));
    };
})();

export { AsyncEnumerable_generate as default };
