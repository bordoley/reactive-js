/// <reference types="./Observable.toReadonlyArray.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_buffer from "./Observable.buffer.js";
import Observable_first from "./Observable.first.js";
const Observable_toReadonlyArray = (options) => observable => pipe(observable, Observable_buffer(), Observable_first(options)) ?? [];
export default Observable_toReadonlyArray;
