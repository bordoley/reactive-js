import { describe } from "../../__internal__/__internal__testing";
import {
  fromArray,
  keepT,
  mapT,
  scanT,
  takeWhileT,
  toReadonlyArrayT,
} from "../../ix/AsyncEnumerableLike";
import { keepTests, mapTests, scanTests, takeWhileTests } from "../operators";

export default describe(
  "AsyncEnumerableLike",
  keepTests({
    fromArray: fromArray,
    ...keepT,
    ...toReadonlyArrayT,
  }),
  mapTests({
    fromArray: fromArray,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  scanTests({
    fromArray: fromArray,
    ...scanT,
    ...toReadonlyArrayT,
  }),
  takeWhileTests({
    fromArray: fromArray,
    ...takeWhileT,
    ...toReadonlyArrayT,
  }),
);
