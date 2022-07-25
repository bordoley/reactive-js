/// <reference types="./enumerable.test.d.ts" />
import { describe as createDescribe } from '../__internal__/testing.mjs';
import { toEnumerable } from '../containers/ReadonlyArrayLike.mjs';
import { distinctUntilChangedT, toReadonlyArrayT, keepT } from '../ix/EnumerableLike.mjs';
import { distinctUntilChanged } from './operators/distinctUntilChanged.test.mjs';
import { keep } from './operators/keep.test.mjs';

const tests = createDescribe("enumerable", distinctUntilChanged({
    fromArray: toEnumerable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), keep({
    fromArray: toEnumerable,
    ...keepT,
    ...toReadonlyArrayT,
}));

export { tests };
