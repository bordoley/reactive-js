/// <reference types="./Enumerable.empty.d.ts" />

import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import Enumerable_create from "./Enumerable.create.js";
const Enumerable_empty = /*@__PURE__*/ (() => () => Enumerable_create(Enumerator_empty))();
export default Enumerable_empty;
