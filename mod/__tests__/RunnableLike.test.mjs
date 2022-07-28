/// <reference types="./RunnableLike.test.d.ts" />
import { describe as createDescribe } from '../__internal__/testing.mjs';
import { toRunnable } from '../containers/ReadonlyArrayLike.mjs';
import { mapT, toReadonlyArrayT } from '../rx/RunnableLike.mjs';
import { mapTests } from './operators.test.mjs';

const RunnableLikeTests = createDescribe("RunnableLike", mapTests({
    fromArray: toRunnable,
    ...mapT,
    ...toReadonlyArrayT,
}));

export { RunnableLikeTests };
