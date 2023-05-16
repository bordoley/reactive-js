import type * as Iterable from "../../Iterable.js";
import { identity, returns } from "../../functions.js";

const Iterable_toIterable: Iterable.Signature["toIterable"] =
  /*@__PURE__*/ returns(identity) as Iterable.Signature["toIterable"];

export default Iterable_toIterable;
