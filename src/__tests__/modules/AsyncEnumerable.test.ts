import { describe } from "../../__internal__/__internal__testing";
import {
  fromArray,
  keepT,
  mapT,
  toReadonlyArrayT,
} from "../../ix/AsyncEnumerableLike";
import { keepTests, mapTests } from "../operators";

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
);
