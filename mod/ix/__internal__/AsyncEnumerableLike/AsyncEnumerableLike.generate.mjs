/// <reference types="./AsyncEnumerableLike.generate.d.ts" />
import { getDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import { pipe } from '../../../functions.mjs';
import ObservableLike__scan from '../../../rx/__internal__/ObservableLike/ObservableLike.scan.mjs';
import ObservableLike__scanAsync from '../../../rx/__internal__/ObservableLike/ObservableLike.scanAsync.mjs';
import AsyncEnumerableLike__create from './AsyncEnumerableLike.create.mjs';

const AsyncEnumerableLike__generate = /*@__PURE__*/ (() => {
    const generateScanner = (generator) => (acc, _) => generator(acc);
    const asyncGeneratorScanner = (generator, options) => (acc, _) => pipe(acc, generator, x => [x], ReadonlyArrayLike__toRunnableObservable(options));
    return (generator, initialValue, options) => {
        const delay = getDelay(options);
        return AsyncEnumerableLike__create(delay > 0
            ? ObservableLike__scanAsync(asyncGeneratorScanner(generator, options), initialValue)
            : ObservableLike__scan(generateScanner(generator), initialValue));
    };
})();

export { AsyncEnumerableLike__generate as default };
