import { Empty } from "../../../containers";
import { EnumerableLike } from "../../../ix";
import EnumeratorLike__empty from "../EnumeratorLike/EnumeratorLike.empty";
import EnumerableLike__create from "./EnumerableLike.create";

const EnumerableLike__empty: Empty<EnumerableLike>["empty"] = /*@__PURE__*/ (
  <T>() =>
  () =>
    EnumerableLike__create<T>(EnumeratorLike__empty)
)();

export default EnumerableLike__empty;
