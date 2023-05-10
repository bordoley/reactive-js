import { Function1 } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_flatMapIterable: ReadonlyArray.Signature["flatMapIterable"] =

    <TA, TB>(selector: Function1<TA, Iterable<TB>>) =>
    (arr: ReadonlyArray<TA>) =>
      arr.flatMap(x => Array.from(selector(x)));

export default ReadonlyArray_flatMapIterable;
