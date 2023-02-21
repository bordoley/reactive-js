import { Empty } from "../../../containers.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_empty: Empty<EnumerableLike>["empty"] = /*@__PURE__*/ (
  <T>() =>
  () =>
    Enumerable_create<T>(Enumerator_empty)
)();

export default Enumerable_empty;
