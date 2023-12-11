import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import { none, pipe, returns } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_empty: Enumerable.Signature["empty"] = /*@__PURE__*/ (() => {
  const emptyEnumerator: EnumeratorLike = {
    [EnumeratorLike_current]: none,
    [EnumeratorLike_hasCurrent]: false,
    [EnumeratorLike_isCompleted]: true,
    [EnumeratorLike_move](): boolean {
      return false;
    },
  };

  return pipe(emptyEnumerator, returns, Enumerable_create, returns);
})() as Enumerable.Signature["empty"];

export default Enumerable_empty;
