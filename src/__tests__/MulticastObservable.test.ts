import * as DeferredObservable from "../DeferredObservable.js";
import * as MulticastObservable from "../MulticastObservable.js";
import * as Scheduler from "../Scheduler.js";
import { testModule } from "../__internal__/testing.js";
import HigherOrderObservableBaseTypeClassTests from "./fixtures/HigherOrderObservableBaseTypeClassTests.js";

testModule(
  "MulticastObservable",
  HigherOrderObservableBaseTypeClassTests<MulticastObservable.Type>(
    MulticastObservable,
    () => DeferredObservable.share(Scheduler.createHostScheduler),
  ),
);

((_: MulticastObservable.Signature) => {})(MulticastObservable);
