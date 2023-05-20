import * as EnumeratorFactory from "../EnumeratorFactory.js";
import { testModule } from "../__internal__/testing.js";
import { EnumeratorFactoryLike } from "../types.js";

import EnumerableContainerModuleTests from "./fixtures/EnumerableContainerModuleTests.js";
import StatefulContainerModuleTests from "./fixtures/StatefulContainerModuleTests.js";

testModule(
  "EnumeratorFactory",
  ...EnumerableContainerModuleTests(EnumeratorFactory),
  StatefulContainerModuleTests<EnumeratorFactory.Type>(
    EnumeratorFactory,
    <T>() =>
      async (f: EnumeratorFactoryLike<T>) =>
        EnumeratorFactory.toReadonlyArray<T>()(f),
  ),
);

((_: EnumeratorFactory.Signature) => {})(EnumeratorFactory);
