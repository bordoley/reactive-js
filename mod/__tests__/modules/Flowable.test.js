/// <reference types="./Flowable.test.d.ts" />

import Flowable from "../../streaming/Flowable.js";
import { toObservableTests } from "../operators.js";
import { testModule } from "../testing.js";
testModule("Flowable", toObservableTests(Flowable));
