import {
  EnumerableLike,
  EnumerableLike_enumerate,
} from "../../../collections.js";
import { invoke, pipeLazy } from "../../../functions.js";
import Enumerator_zipMany from "../../Enumerator/__internal__/Enumerator.zipMany.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_zipMany = (observables: readonly EnumerableLike<unknown>[]) =>
  Enumerable_create(
    pipeLazy(
      observables.map(invoke(EnumerableLike_enumerate)),
      Enumerator_zipMany,
    ),
  );

export default Enumerable_zipMany;
