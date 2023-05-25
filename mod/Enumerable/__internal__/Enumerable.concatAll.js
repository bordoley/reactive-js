/// <reference types="./Enumerable.concatAll.d.ts" />

import Enumerator_concatAll from "../../Enumerator/__internal__/Enumerator.concatAll.js";
import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import { invoke, pipe } from "../../functions.js";
import { EnumerableLike_enumerate } from "../../types.js";
import Enumerable_create from "./Enumerable.create.js";
const Enumerable_concatAll = () => (enumerable) => Enumerable_create(() => pipe(enumerable[EnumerableLike_enumerate](), Enumerator_map(invoke(EnumerableLike_enumerate)), Enumerator_concatAll()));
export default Enumerable_concatAll;
