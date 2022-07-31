import { describe } from "../__internal__/testing";
import { toObservable } from "../containers/ReadonlyArrayLike";
import { forEachT, mapT, toReadonlyArrayT } from "../rx/RunnableObservableLike";
import { forEachTests, mapTests } from "./operators.test";

export const RunnableObservableLikeTests = describe(
  "RunnableObservableLike",
  forEachTests({
    fromArray: toObservable,
    ...forEachT,
    ...toReadonlyArrayT,
  }),
  mapTests({
    fromArray: toObservable,
    ...mapT,
    ...toReadonlyArrayT,
  }),
);
