/// <reference types="./Enumerable.create.d.ts" />

import EnumerableBase_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import { ObservableLike_isPure, } from "../../types.js";
const Enumerable_create = (enumerate) => EnumerableBase_create(enumerate, { [ObservableLike_isPure]: true });
export default Enumerable_create;
