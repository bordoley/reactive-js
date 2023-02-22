/// <reference types="./Iterable.test.d.ts" />

import Iterable from "../../containers/Iterable.js";
import { toEnumerableObservableTests, toEnumerableTests, toRunnableObservableTests, } from "../operators.js";
import { testModule } from "../testing.js";
testModule("Iterable", toEnumerableTests(Iterable), toEnumerableObservableTests(Iterable), toRunnableObservableTests(Iterable));
