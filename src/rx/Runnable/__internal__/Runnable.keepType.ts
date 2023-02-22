import { KeepType } from "../../../containers.js";
import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_keep from "./Runnable.keep.js";

const Runnable_keepType: KeepType<RunnableLike>["keepType"] =
  /*@__PURE__*/ Container_keepType(
    Runnable_keep,
  ) as KeepType<RunnableLike>["keepType"];

export default Runnable_keepType;
