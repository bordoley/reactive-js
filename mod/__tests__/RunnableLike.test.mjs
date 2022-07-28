/// <reference types="./RunnableLike.test.d.ts" />
import { describe as createDescribe } from '../__internal__/testing.mjs';
import { toRunnable } from '../containers/ReadonlyArrayLike.mjs';
import { keepT, toReadonlyArrayT, mapT, scanT, skipFirstT, takeFirstT, takeLastT, takeWhileT } from '../rx/RunnableLike.mjs';
import { keepTests, mapTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests } from './operators.test.mjs';

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
}), skipFirstTests({
    fromArray: toRunnable,
    ...skipFirstT,
    ...toReadonlyArrayT,
}), takeFirstTests({
    fromArray: toRunnable,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), takeLastTests({
    fromArray: toRunnable,
    ...takeLastT,
    ...toReadonlyArrayT,
}), takeWhileTests({
    fromArray: toRunnable,
    ...takeWhileT,
    ...toReadonlyArrayT,
}));

export { RunnableLikeTests };
