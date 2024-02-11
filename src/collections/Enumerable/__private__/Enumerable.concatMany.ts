import { Array_length } from "../../../__internal__/constants.js";
import { pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";
import Enumerable_empty from "./Enumerable.empty.js";
import Enumerable_fromReadonlyArray from "./Enumerable.fromReadonlyArray.js";

const Enumerable_concatMany: Enumerable.Signature["concatMany"] =
  enumerables =>
    enumerables[Array_length] === 0
      ? Enumerable_empty()
      : pipe(
          enumerables,
          Enumerable_fromReadonlyArray(),
          Enumerable_concatAll(),
        );

export default Enumerable_concatMany;
