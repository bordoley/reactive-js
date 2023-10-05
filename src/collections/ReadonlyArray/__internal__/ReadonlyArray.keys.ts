import { returns } from "../../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

function* iterate<TKey>(arr: readonly unknown[]) {
  for (let i = 0; i < arr.length; i++) {
    yield i as TKey;
  }
}

const ReadonlyArray_keys: ReadonlyArray.Signature["keys"] =
  /*@__PURE__*/ returns(iterate) as ReadonlyArray.Signature["keys"];

export default ReadonlyArray_keys;
