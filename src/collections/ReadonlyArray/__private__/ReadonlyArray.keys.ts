import { Array_length } from "../../../__internal__/constants.js";
import { EnumerableLike } from "../../../collections.js";
import { sequence } from "../../../computations.js";
import { pipe, returns } from "../../../functions.js";
import * as Enumerable from "../../Enumerable.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_keys: ReadonlyArray.Signature["keys"] =
  /*@__PURE__*/ returns(
    <TKey>(arr: readonly unknown[]) =>
      pipe(
        sequence<Enumerable.EnumerableComputation>(Enumerable.generate)(0),
        Enumerable.takeFirst({ count: arr[Array_length] }),
      ) as EnumerableLike<TKey>,
  ) as ReadonlyArray.Signature["keys"];

export default ReadonlyArray_keys;
