/// <reference types="./RunnableAsyncEnumerable.test.d.ts" />

import { fromReadonlyArrayTests, keepTests, mapTests, scanTests, takeWhileTests, } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import * as RunnableAsyncEnumerable from "../RunnableAsyncEnumerable.js";
testModule("RunnableAsyncEnumerable", 
//toObservableTests<RunnableAsyncEnumerableLike>(RunnableAsyncEnumerable),
fromReadonlyArrayTests(RunnableAsyncEnumerable), keepTests(RunnableAsyncEnumerable), mapTests(RunnableAsyncEnumerable), scanTests(RunnableAsyncEnumerable), 
/*
scanAsyncTests<AsyncEnumerableLike, RunnableObservableLike>(
  AsyncEnumerable,
  RunnableObservable,
),*/
takeWhileTests(RunnableAsyncEnumerable));
