/// <reference types="./Enumerable.concatMany.d.ts" />

import { EnumerableLike_enumerate } from "../../../collections.js";
import { invoke, pipeLazy } from "../../../functions.js";
import Enumerator_concatAll from "../../Enumerator/__internal__/Enumerator.concatAll.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import Enumerable_create from "./Enumerable.create.js";
import Enumerable_empty from "./Enumerable.empty.js";
const Enumerable_concatMany = enumerables => enumerables.length === 0
    ? Enumerable_empty()
    : Enumerable_create(pipeLazy(enumerables.map(invoke(EnumerableLike_enumerate)), invoke(Symbol.iterator), Enumerator_fromIterator(), Enumerator_concatAll()));
export default Enumerable_concatMany;
