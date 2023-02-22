/// <reference types="./Streamable.createLifted.d.ts" />

import { composeUnsafe, getLength } from "../../../functions.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createLifted = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return Streamable_create((scheduler, options) => Stream_create(op, scheduler, options));
};
export default Streamable_createLifted;
