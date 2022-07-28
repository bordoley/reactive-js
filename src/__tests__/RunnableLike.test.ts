import { describe } from "../__internal__/testing";
import { toRunnable } from "../containers/ReadonlyArrayLike";
import { keepT, mapT, scanT, toReadonlyArrayT } from "../rx/RunnableLike";
import { keepTests, mapTests, scanTests } from "./operators.test";

export const RunnableLikeTests = describe(
  "RunnableLike",
  keepTests({
    fromArray: toRunnable,
    ...keepT,
    ...toReadonlyArrayT,
  }),
  mapTests({
    fromArray: toRunnable,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  scanTests({
    fromArray: toRunnable,
    ...scanT,
    ...toReadonlyArrayT,
  }),
);
