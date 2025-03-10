/// <reference types="./Runnable.generate.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { newInstance, none, } from "../../../functions.js";
import { SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../utils.js";
class GeneratorRunnable {
    generator;
    count;
    initialValue;
    [ComputationLike_isPure] = true;
    constructor(generator, count, initialValue) {
        this.generator = generator;
        this.count = count;
        this.initialValue = initialValue;
    }
    [RunnableLike_eval](sink) {
        const { count, generator } = this;
        let acc = this.initialValue();
        for (let cnt = 0; (count === none || cnt < count) && !sink[SinkLike_isComplete]; cnt++) {
            acc = generator(acc);
            sink[SinkLike_next](acc);
        }
        sink[SinkLike_complete]();
    }
}
const Runnable_generate = (generator, initialValue, options) => newInstance((GeneratorRunnable), generator, options?.count, initialValue);
export default Runnable_generate;
