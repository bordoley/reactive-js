/// <reference types="./IterableLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals } from '../../__internal__/testing.mjs';
import { toObservable } from '../../containers/IterableLike.mjs';
import { pipeLazy } from '../../functions.mjs';
import { toReadonlyArray } from '../../rx/RunnableObservableLike.mjs';

const IterableLikeTests = createDescribe("IterableLike", createDescribe("toObservable", createTest("without delay", pipeLazy([1, 2, 3, 4, 5], toObservable(), toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), createTest("with delay", pipeLazy([1, 2, 3, 4, 5], toObservable({ delay: 1 }), toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5])))));

export { IterableLikeTests };
