/// <reference types="./AsyncEnumerable.test.d.ts" />

import { fromReadonlyArrayTests, keepTests, mapTests, scanTests, takeWhileTests, toObservableTests, } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import * as AsyncEnumerable from "../AsyncEnumerable.js";
testModule("AsyncEnumerable", toObservableTests(AsyncEnumerable), fromReadonlyArrayTests(AsyncEnumerable), keepTests(AsyncEnumerable), mapTests(AsyncEnumerable), scanTests(AsyncEnumerable), 
/*
scanAsyncTests<AsyncEnumerableLike, RunnableLike>(
  AsyncEnumerable,
  Runnable,
),*/
takeWhileTests(AsyncEnumerable));
