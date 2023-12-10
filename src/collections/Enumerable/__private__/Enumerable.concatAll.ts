import {
  EnumerableLike,
  EnumerableLike_enumerate,
} from "../../../collections.js";
import { invoke, pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerator_concatAll from "../../Enumerator/__private__/Enumerator.concatAll.js";
import Enumerable_create from "./Enumerable.create.js";
import Enumerable_map from "./Enumerable.map.js";

const Enumerable_concatAll: Enumerable.Signature["concatAll"] =
  <T>() =>
  (enumerable: EnumerableLike<EnumerableLike<T>>): EnumerableLike<T> =>
    Enumerable_create<T>(() =>
      pipe(
        enumerable,
        Enumerable_map(invoke(EnumerableLike_enumerate)),
        invoke(EnumerableLike_enumerate),
        Enumerator_concatAll(),
      ),
    );

export default Enumerable_concatAll;
