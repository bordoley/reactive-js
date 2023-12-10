/// <reference types="./Observable.buffer.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createBufferObserver from "../../Observer/__internal__/Observer.createBufferObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_buffer = (options) => pipe((Observer_createBufferObserver), partial(options?.count), Observable_liftPure);
export default Observable_buffer;
