import * as EnumeratorFactory from "../EnumeratorFactory.js";
import { testModule } from "../__internal__/testing.js";

import EnumerableContainerTypeClassTests from "./fixtures/EnumerableContainerTypeClassTests.js";

testModule(
  "EnumeratorFactory",
  EnumerableContainerTypeClassTests(EnumeratorFactory),
);

((_: EnumeratorFactory.Signature) => {})(EnumeratorFactory);
