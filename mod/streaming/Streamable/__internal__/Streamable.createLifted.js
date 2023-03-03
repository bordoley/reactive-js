/// <reference types="./Streamable.createLifted.d.ts" />

import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createLifted = (op) => Streamable_create((scheduler, options) => Stream_create(op, scheduler, options));
export default Streamable_createLifted;
