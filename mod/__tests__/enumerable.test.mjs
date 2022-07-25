/// <reference types="./enumerable.test.d.ts" />
import { describe as createDescribe } from '../__internal__/testing.mjs';
import { toEnumerable } from '../containers/ReadonlyArrayLike.mjs';
import { distinctUntilChangedT, toReadonlyArrayT, keepT, mapT, scanT } from '../ix/EnumerableLike.mjs';
import { distinctUntilChangedTest, keepTests, mapTests, scanTests } from './operators.test.mjs';

const tests = createDescribe("enumerable", distinctUntilChangedTest({
    fromArray: toEnumerable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), keepTests({
    fromArray: toEnumerable,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toEnumerable,
    ...mapT,
    ...toReadonlyArrayT,
}), scanTests({
    fromArray: toEnumerable,
    ...scanT,
    ...toReadonlyArrayT,
}));

export { tests };
