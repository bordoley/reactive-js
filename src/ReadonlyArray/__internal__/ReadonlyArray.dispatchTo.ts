import type * as ReadonlyArray from "../../ReadonlyArray.js";
import { compose } from "../../functions.js";
import { DispatcherLike, DispatcherLike_complete } from "../../types.js";
import ReadonlyArray_enqueue from "./ReadonlyArray.enqueue.js";

const ReadonlyArray_dispatchTo: ReadonlyArray.Signature["dispatchTo"] = <T>(
  dispatcher: DispatcherLike<T>,
) =>
  compose(ReadonlyArray_enqueue(dispatcher), (result: ReadonlyArray<T>) => {
    dispatcher[DispatcherLike_complete]();
    return result;
  });

export default ReadonlyArray_dispatchTo;
