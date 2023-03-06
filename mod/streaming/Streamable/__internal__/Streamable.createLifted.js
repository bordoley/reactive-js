/// <reference types="./Streamable.createLifted.d.ts" />

import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createLifted = ((op, isInteractive, isEnumerable, isRunnable) => Streamable_create((scheduler, options) => Stream_create(op, scheduler, options), isInteractive, isEnumerable, isRunnable));
export default Streamable_createLifted;
