import { describe } from "../../__internal__/__internal__testing";
import {
  fromArray,
  keepT,
  toReadonlyArrayT,
} from "../../ix/AsyncEnumerableLike";
import { keepTests } from "../operators";

export default describe(
  "AsyncEnumerableLike",
  keepTests({
    fromArray: fromArray,
    ...keepT,
    ...toReadonlyArrayT,
  }),
);
