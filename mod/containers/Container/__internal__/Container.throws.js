/// <reference types="./Container.throws.d.ts" />

import { error, raise } from "../../../functions.js";
import Container_compute from "./Container.compute.js";
const Container_throws = (m, options) => {
    const { raise: factory = raise } = options !== null && options !== void 0 ? options : {};
    return Container_compute(m, () => raise(error(factory())), options);
};
export default Container_throws;
