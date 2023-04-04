import { create } from "../../../__internal__/Object.js";
import { returns } from "../../../functions.js";
import { Empty, ReadonlyRecordLike } from "../../../keyed-containers.js";

const ReadonlyRecord_empty: Empty<ReadonlyRecordLike>["empty"] =
  /*@__PURE__*/ returns(create(null)) as Empty<ReadonlyRecordLike>["empty"];

export default ReadonlyRecord_empty;
