/// <reference types="./Flowable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import { toObservableTests, toRunnableTests, } from "../../__tests__/operators.js";
import * as Flowable from "../Flowable.js";
testModule("Flowable", toObservableTests(Flowable), toRunnableTests(Flowable));
