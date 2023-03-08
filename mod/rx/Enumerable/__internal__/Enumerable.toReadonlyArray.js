/// <reference types="./Enumerable.toReadonlyArray.d.ts" />

import Enumerator_toReadonlyArray from "../../../containers/Enumerator/__internal__/Enumerator.toArray.js";
import { pipe } from "../../../functions.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
const Enumerable_toReadonlyArray = () => (enumerable) => pipe(enumerable, Enumerable_enumerate(), Enumerator_toReadonlyArray());
export default Enumerable_toReadonlyArray;
