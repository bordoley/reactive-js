import { Empty } from "../../../containers";
import { EnumerableLike } from "../../../ix";
import Enumerator_empty from "../Enumerator/Enumerator.empty";
import Enumerable_create from "./Enumerable.create";

const Enumerable_empty: Empty<EnumerableLike>["empty"] = /*@__PURE__*/ (
  <T>() =>
  () =>
    Enumerable_create<T>(Enumerator_empty)
)();

export default Enumerable_empty;
