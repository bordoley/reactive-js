/// <reference types="./Enumerable.concatAll.d.ts" />

import { EnumerableLike_enumerate, } from "../../../collections.js";
import { invoke, pipe } from "../../../functions.js";
import Enumerator_concatAll from "../../Enumerator/__private__/Enumerator.concatAll.js";
import Enumerable_create from "./Enumerable.create.js";
import Enumerable_map from "./Enumerable.map.js";
const Enumerable_concatAll = () => (enumerable) => Enumerable_create(() => pipe(enumerable, Enumerable_map(invoke(EnumerableLike_enumerate)), invoke(EnumerableLike_enumerate), Enumerator_concatAll()));
export default Enumerable_concatAll;
