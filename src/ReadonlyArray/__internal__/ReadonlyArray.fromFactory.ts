import { Factory } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_fromFactory: ReadonlyArray.Signature["fromFactory"] = <T>(
  f: Factory<T>,
) => {
  const v = f();
  return [v];
};

export default ReadonlyArray_fromFactory;
