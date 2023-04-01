/// <reference types="./Container.throws.d.ts" />

import { error, raise } from "../../../functions.js";
const Container_throws = (fromFactory) => (options) => {
    const { raise: factory = raise } = options ?? {};
    return fromFactory(() => raise(error(factory())), options);
};
export default Container_throws;
