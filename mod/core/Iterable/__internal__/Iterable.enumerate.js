/// <reference types="./Iterable.enumerate.d.ts" />

import { pipe, returns } from "../../../functions.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
const Iterable_enumerate = 
/*@__PURE__*/ (() => returns((iterable) => pipe(iterable[Symbol.iterator](), Iterator_enumerate())))();
export default Iterable_enumerate;
