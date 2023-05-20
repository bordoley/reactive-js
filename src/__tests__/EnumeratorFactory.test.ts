import * as EnumeratorFactory from "../EnumeratorFactory.js";
import { testModule } from "../__internal__/testing.js";
import { EnumeratorFactoryLike } from "../types.js";

import EnumerableTypeClassTests from "./fixtures/EnumerableTypeClassTests.js";
import StatefulTypeClassTests from "./fixtures/StatefulTypeClassTests.js";

testModule(
  "EnumeratorFactory",
  ...EnumerableTypeClassTests(EnumeratorFactory),
  StatefulTypeClassTests<EnumeratorFactory.Type>(
    EnumeratorFactory,
    <T>() =>
      async (f: EnumeratorFactoryLike<T>) =>
        EnumeratorFactory.toReadonlyArray<T>()(f),
  ),
);

((_: EnumeratorFactory.Signature) => {})(EnumeratorFactory);
