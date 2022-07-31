import { describe } from "../__internal__/testing";
import { toObservable } from "../containers/ReadonlyArrayLike";
import { deferObservableT } from "../rx";
import {
  decodeWithCharsetT,
  forEachT,
  mapT,
  toReadonlyArrayT,
} from "../rx/RunnableObservableLike";
import {
  decodeWithCharsetTests,
  forEachTests,
  mapTests,
} from "./operators.test";

export const RunnableObservableLikeTests = describe(
  "RunnableObservableLike",
  decodeWithCharsetTests({
    fromArray: toObservable,
    ...decodeWithCharsetT,
    ...deferObservableT,
    ...mapT,
    ...toReadonlyArrayT,
  }),
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
