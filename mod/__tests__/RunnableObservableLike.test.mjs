/// <reference types="./RunnableObservableLike.test.d.ts" />
import { describe as createDescribe } from '../__internal__/testing.mjs';
import { toObservable } from '../containers/ReadonlyArrayLike.mjs';
import { deferObservableT } from '../rx.mjs';
import { decodeWithCharsetT, mapT, toReadonlyArrayT, forEachT } from '../rx/RunnableObservableLike.mjs';
import { decodeWithCharsetTests, forEachTests, mapTests } from './operators.test.mjs';

const RunnableObservableLikeTests = createDescribe("RunnableObservableLike", decodeWithCharsetTests({
    fromArray: toObservable,
    ...decodeWithCharsetT,
    ...deferObservableT,
    ...mapT,
    ...toReadonlyArrayT,
}), forEachTests({
    fromArray: toObservable,
    ...forEachT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toObservable,
    ...mapT,
    ...toReadonlyArrayT,
}));

export { RunnableObservableLikeTests };
