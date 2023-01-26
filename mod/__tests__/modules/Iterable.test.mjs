/// <reference types="./Iterable.test.d.ts" />
import { toObservable } from '../../containers/Iterable.mjs';
import { pipeLazy } from '../../functions.mjs';
import { toReadonlyArray } from '../../rx/Observable.mjs';
import { testModule, describe as createDescribe, test as createTest, expectArrayEquals } from '../testing.mjs';

testModule("Iterable", createDescribe("toObservable", createTest("without delay", pipeLazy([1, 2, 3, 4, 5], toObservable(), toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), createTest("with delay", pipeLazy([1, 2, 3, 4, 5], toObservable({ delay: 1 }), toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5])))));
