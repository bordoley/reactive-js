/// <reference types="./Container.startWith.d.ts" />

import { pipe } from "../../../functions.js";
import Container_concatWith from "./Container.concatWith.js";
const Container_startWith = (m, ...values) => container => pipe(values, m.fromReadonlyArray(), Container_concatWith(m, container));
export default Container_startWith;
