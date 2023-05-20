import * as Enumerable from "../Enumerable.js";
import * as Observable from "../Observable.js";
import { testModule } from "../__internal__/testing.js";
import EnumerableTypeClassTests from "./fixtures/EnumerableTypeClassTests.js";
import StatefulTypeClassTests from "./fixtures/StatefulTypeClassTests.js";

testModule(
  "Enumerable",
  EnumerableTypeClassTests(Enumerable),
  StatefulTypeClassTests<Enumerable.Type>(
    Enumerable,
    Observable.toReadonlyArrayAsync,
  ),
);

((_: Enumerable.Signature) => {})(Enumerable);
