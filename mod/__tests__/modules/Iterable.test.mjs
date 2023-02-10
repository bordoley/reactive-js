/// <reference types="./Iterable.test.d.ts" />
import Iterable from '../../containers/Iterable.mjs';
import { pipeLazy } from '../../functions.mjs';
import RunnableObservable from '../../rx/RunnableObservable.mjs';
import { testModule, describe as createDescribe, test as createTest, expectArrayEquals } from '../testing.mjs';

testModule("Iterable", createDescribe("toObservable", createTest("without delay", pipeLazy([1, 2, 3, 4, 5], Iterable.toRunnableObservable(), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5]))), createTest("with delay", pipeLazy([1, 2, 3, 4, 5], Iterable.toRunnableObservable({ delay: 1 }), RunnableObservable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5])))));
