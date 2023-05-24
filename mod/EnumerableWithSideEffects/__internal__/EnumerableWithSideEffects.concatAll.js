/// <reference types="./EnumerableWithSideEffects.concatAll.d.ts" />

import EnumerableBase_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Enumerator_concatAll from "../../Enumerator/__internal__/Enumerator.concatAll.js";
import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import { invoke, pipe } from "../../functions.js";
import { EnumerableLike_enumerate, } from "../../types.js";
const EnumerableWithSideEffects_concatAll = () => (enumerable) => EnumerableBase_create(() => pipe(enumerable[EnumerableLike_enumerate](), Enumerator_map(invoke(EnumerableLike_enumerate)), Enumerator_concatAll()), false);
export default EnumerableWithSideEffects_concatAll;
