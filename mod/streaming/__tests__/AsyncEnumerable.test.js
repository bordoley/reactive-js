/// <reference types="./AsyncEnumerable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import { fromReadonlyArrayTests, keepTests, mapTests, scanTests, takeWhileTests, toObservableTests, } from "../../__tests__/operators.js";
import * as AsyncEnumerable from "../AsyncEnumerable.js";
testModule("AsyncEnumerable", toObservableTests(AsyncEnumerable), fromReadonlyArrayTests(AsyncEnumerable), keepTests(AsyncEnumerable), mapTests(AsyncEnumerable), scanTests(AsyncEnumerable), 
/*
scanLastTests<AsyncEnumerableLike, RunnableLike>(
  AsyncEnumerable,
  Runnable,
),*/
takeWhileTests(AsyncEnumerable));
