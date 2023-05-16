import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import type * as Enumerator from "../../Enumerator.js";
import Enumerator_keep from "./Enumerator.keep.js";

const Enumerator_keepType: Enumerator.Signature["keepType"] =
  /*@__PURE__*/ Container_keepType<Enumerator.Type>(
    Enumerator_keep,
  ) as Enumerator.Signature["keepType"];

export default Enumerator_keepType;
