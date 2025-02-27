/// <reference types="./Deferable.generate.d.ts" />

import { ComputationLike_isPure, DeferableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { newInstance, none, } from "../../../functions.js";
class GeneratorDeferable {
    generator;
    count;
    initialValue;
    [ComputationLike_isPure] = true;
    constructor(generator, count, initialValue) {
        this.generator = generator;
        this.count = count;
        this.initialValue = initialValue;
    }
    [DeferableLike_eval](sink) {
        const { count, generator } = this;
        let acc = this.initialValue();
        for (let cnt = 0; (count === none || cnt < count) && !sink[SinkLike_isComplete]; cnt++) {
            acc = generator(acc);
            sink[SinkLike_next](acc);
        }
        sink[SinkLike_complete]();
    }
}
const Deferable_generate = (generator, initialValue, options) => newInstance((GeneratorDeferable), generator, options?.count, initialValue);
export default Deferable_generate;
