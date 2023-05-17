/// <reference types="./MulticastObservable.test.d.ts" />

import * as DeferredObservable from "../DeferredObservable.js";
import * as MulticastObservable from "../MulticastObservable.js";
import * as Scheduler from "../Scheduler.js";
import { testModule } from "../__internal__/testing.js";
import HigherOrderObservableTypeClassTests from "./fixtures/HigherOrderObservableTypeClassTests.js";
testModule("MulticastObservable", HigherOrderObservableTypeClassTests(MulticastObservable, () => DeferredObservable.share(Scheduler.createHostScheduler)));
((_) => { })(MulticastObservable);
