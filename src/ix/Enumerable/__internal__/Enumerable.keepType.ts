import { KeepType } from "../../../containers.js";
import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_keep from "./Enumerable.keep.js";

const Enumerable_keepType: KeepType<EnumerableLike>["keepType"] =
  /*@__PURE__*/ Container_keepType(
    Enumerable_keep,
  ) as KeepType<EnumerableLike>["keepType"];

export default Enumerable_keepType;
