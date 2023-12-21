/// <reference types="./Enumerable.fromIteratorFactory.d.ts" />

import { pipe, returns } from "../../../functions.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import Enumerable_create from "./Enumerable.create.js";
const Enumerable_fromIteratorFactory = /*@__PURE__*/ (() => returns((f) => Enumerable_create(() => pipe(f(), Enumerator_fromIterator()))))();
export default Enumerable_fromIteratorFactory;
