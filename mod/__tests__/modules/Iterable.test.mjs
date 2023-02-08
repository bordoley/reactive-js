/// <reference types="./Iterable.test.d.ts" />
import { toObservable } from '../../containers/Iterable.mjs';
import { pipeLazy } from '../../functions.mjs';
import Observable from '../../rx/Observable.mjs';
import { testModule, describe as createDescribe, test as createTest, expectArrayEquals } from '../testing.mjs';

testModule("Iterable", createDescribe("toObservable", createTest("without delay", pipeLazy([1, 2, 3, 4, 5], toObservable(), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), createTest("with delay", pipeLazy([1, 2, 3, 4, 5], toObservable({ delay: 1 }), Observable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5])))));
