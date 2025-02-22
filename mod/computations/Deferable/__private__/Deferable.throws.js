/// <reference types="./Deferable.throws.d.ts" />

import { DeferableLike_eval, } from "../../../computations.js";
import { error, newInstance, raise } from "../../../functions.js";
class ThrowsDeferable {
    r;
    constructor(r) {
        this.r = r;
    }
    [DeferableLike_eval](_) {
        raise(error(this.r()));
    }
}
const Deferable_throws = (options) => {
    const { raise: factory = raise } = options ?? {};
    return newInstance((ThrowsDeferable), factory);
};
export default Deferable_throws;
