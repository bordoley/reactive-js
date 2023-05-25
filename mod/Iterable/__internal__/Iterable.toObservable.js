/// <reference types="./Iterable.toObservable.d.ts" />

import EnumerableBase_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import { pipeLazy } from "../../functions.js";
import { ObservableLike_isPure, } from "../../types.js";
import Iterable_enumerate from "./Iterable.enumerate.js";
const Iterable_toObservable = () => (iterable) => EnumerableBase_create(pipeLazy(iterable, Iterable_enumerate()), {
    [ObservableLike_isPure]: false,
});
export default Iterable_toObservable;
