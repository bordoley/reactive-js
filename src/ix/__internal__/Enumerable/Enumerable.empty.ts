import { Empty } from "../../../containers";
import { EnumerableLike } from "../../../ix";
import Enumerator$empty from "../Enumerator/Enumerator.empty";
import Enumerable$create from "./Enumerable.create";

const Enumerable$empty: Empty<EnumerableLike>["empty"] = /*@__PURE__*/ (
  <T>() =>
  () =>
    Enumerable$create<T>(Enumerator$empty)
)();

export default Enumerable$empty;
