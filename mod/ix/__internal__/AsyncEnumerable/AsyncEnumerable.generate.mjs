/// <reference types="./AsyncEnumerable.generate.d.ts" />
import ReadonlyArray$toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe } from '../../../functions.mjs';
import Observable$scan from '../../../rx/__internal__/Observable/Observable.scan.mjs';
import Observable$scanAsync from '../../../rx/__internal__/Observable/Observable.scanAsync.mjs';
import { getDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import AsyncEnumerable$create from './AsyncEnumerable.create.mjs';

const AsyncEnumerable$generate = /*@__PURE__*/ (() => {
    const generateScanner = (generator) => (acc, _) => generator(acc);
    const asyncGeneratorScanner = (generator, options) => (acc, _) => pipe(acc, generator, x => [x], ReadonlyArray$toRunnableObservable(options));
    return (generator, initialValue, options) => {
        const delay = getDelay(options);
        return AsyncEnumerable$create(delay > 0
            ? Observable$scanAsync(asyncGeneratorScanner(generator, options), initialValue)
            : Observable$scan(generateScanner(generator), initialValue));
    };
})();

export { AsyncEnumerable$generate as default };
