/// <reference types="./RunnableObservableLike.test.d.ts" />
import { describe as createDescribe } from '../__internal__/testing.mjs';
import { toObservable } from '../containers/ReadonlyArrayLike.mjs';
import { forEachT, toReadonlyArrayT, mapT } from '../rx/RunnableObservableLike.mjs';
import { forEachTests, mapTests } from './operators.test.mjs';

const RunnableObservableLikeTests = createDescribe("RunnableObservableLike", forEachTests({
    fromArray: toObservable,
    ...forEachT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toObservable,
    ...mapT,
    ...toReadonlyArrayT,
}));

export { RunnableObservableLikeTests };
