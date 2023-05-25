/// <reference types="./Iterable.toObservable.d.ts" />

import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import { pipeLazy } from "../../functions.js";
import Iterable_enumerate from "./Iterable.enumerate.js";
const Iterable_toObservable = () => (iterable) => Enumerable_create(pipeLazy(iterable, Iterable_enumerate()), false);
export default Iterable_toObservable;
