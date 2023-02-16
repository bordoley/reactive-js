/// <reference types="./Flowable.test.d.ts" />
import Flowable from '../../streaming/Flowable.mjs';
import { toObservableTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("Flowable", toObservableTests(Flowable));
