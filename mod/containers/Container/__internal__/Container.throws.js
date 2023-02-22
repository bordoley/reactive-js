/// <reference types="./Container.throws.d.ts" />

import { error, raise } from "../../../functions.js";
const Container_throws = (compute) => (options) => {
    const { raise: factory = raise } = options !== null && options !== void 0 ? options : {};
    return compute(() => raise(error(factory())), options);
};
export default Container_throws;
