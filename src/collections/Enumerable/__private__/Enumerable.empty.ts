import { pipe, returns } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_empty: Enumerable.Signature["empty"] = /*@__PURE__*/ (<T>() =>
  pipe(
    () => {
      const iter = function* (): Iterator<T, any, undefined> {};
      return pipe(iter(), Enumerator_fromIterator<T>());
    },
    Enumerable_create,
    returns,
  ))() as Enumerable.Signature["empty"];

export default Enumerable_empty;
