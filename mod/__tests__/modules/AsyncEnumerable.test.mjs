/// <reference types="./AsyncEnumerable.test.d.ts" />
import AsyncEnumerable from '../../ix/AsyncEnumerable.mjs';
import { toObservableTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

/*
import { RunnableObservableLike } from "../../rx";
import RunnableObservable from "../../rx/RunnableObservable";
import {
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  scanAsyncTests,
  scanTests,
  takeWhileTests,
} from "../operators";

*/
testModule("AsyncEnumerable", toObservableTests(AsyncEnumerable));
