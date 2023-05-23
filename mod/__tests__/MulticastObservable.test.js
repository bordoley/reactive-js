/// <reference types="./MulticastObservable.test.d.ts" />

import * as MulticastObservable from "../MulticastObservable.js";
import * as Observable from "../Observable.js";
import * as Scheduler from "../Scheduler.js";
import { testModule } from "../__internal__/testing.js";
import HigherOrderObservableModuleTests from "./fixtures/HigherOrderObservableModuleTests.js";
testModule("MulticastObservable", HigherOrderObservableModuleTests(MulticastObservable, () => Observable.share(Scheduler.createHostScheduler)));
((_) => { })(MulticastObservable);
