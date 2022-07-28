/// <reference types="./RunnableLike.test.d.ts" />
import { describe as createDescribe } from '../__internal__/testing.mjs';
import { toRunnable } from '../containers/ReadonlyArrayLike.mjs';
import { keepT, toReadonlyArrayT, mapT, scanT } from '../rx/RunnableLike.mjs';
import { keepTests, mapTests, scanTests } from './operators.test.mjs';

const RunnableLikeTests = createDescribe("RunnableLike", keepTests({
    fromArray: toRunnable,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toRunnable,
    ...mapT,
    ...toReadonlyArrayT,
}), scanTests({
    fromArray: toRunnable,
    ...scanT,
    ...toReadonlyArrayT,
}));

export { RunnableLikeTests };
