/// <reference types="./IterableLike.test.d.ts" />
import { toObservable } from '../../containers/IterableLike.mjs';
import { pipeLazy } from '../../functions.mjs';
import { a as toReadonlyArray } from '../../ObservableLike-0a1b87fb.mjs';
import { testModule, describe as createDescribe, test as createTest, expectArrayEquals } from '../testing.mjs';

testModule("IterableLike", createDescribe("toObservable", createTest("without delay", pipeLazy([1, 2, 3, 4, 5], toObservable(), toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), createTest("with delay", pipeLazy([1, 2, 3, 4, 5], toObservable({ delay: 1 }), toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5])))));
