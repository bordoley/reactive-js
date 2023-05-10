import Container_pick from "../../Container/__internal__/Container.pick.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";
import ReadonlyArray_map from "./ReadonlyArray.map.js";

const ReadonlyArray_pick: ReadonlyArray.Signature["pick"] =
  /*@__PURE__*/ Container_pick(ReadonlyArray_map);

export default ReadonlyArray_pick;
