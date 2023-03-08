/// <reference types="./Flowable.test.d.ts" />

import { toObservableTests, toRunnableTests, } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import * as Flowable from "../Flowable.js";
testModule("Flowable", toObservableTests(Flowable), toRunnableTests(Flowable));
