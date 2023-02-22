/// <reference types="./Flowable.test.d.ts" />

import { toObservableTests } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import Flowable from "../Flowable.js";
testModule("Flowable", toObservableTests(Flowable));
