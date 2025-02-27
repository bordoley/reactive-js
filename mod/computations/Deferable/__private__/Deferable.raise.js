/// <reference types="./Deferable.raise.d.ts" />

import { DeferableLike_eval, } from "../../../computations.js";
import { error, newInstance, raise } from "../../../functions.js";
class RaiseDeferable {
    r;
    constructor(r) {
        this.r = r;
    }
    [DeferableLike_eval](_) {
        raise(error(this.r()));
    }
}
const Deferable_raise = (options) => {
    const { raise: factory = raise } = options ?? {};
    return newInstance((RaiseDeferable), factory);
};
export default Deferable_raise;
