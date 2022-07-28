import { describe } from "../__internal__/testing";
import { toRunnable } from "../containers/ReadonlyArrayLike";
import { mapT, toReadonlyArrayT } from "../rx/RunnableLike";
import { mapTests } from "./operators.test";

export const RunnableLikeTests = describe(
  "RunnableLike",
  mapTests({
    fromArray: toRunnable,
    ...mapT,
    ...toReadonlyArrayT,
  }),
);
