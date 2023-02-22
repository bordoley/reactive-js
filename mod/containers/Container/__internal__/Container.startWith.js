/// <reference types="./Container.startWith.d.ts" />

import { pipe } from "../../../functions.js";
const Container_startWith = (concatWith, fromReadonlyArray) => (...values) => container => pipe(values, fromReadonlyArray(), concatWith(container));
export default Container_startWith;
