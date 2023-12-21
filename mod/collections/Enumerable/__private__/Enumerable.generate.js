/// <reference types="./Enumerable.generate.d.ts" />

import { pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "./Enumerable.fromIteratorFactory.js";
const Enumerable_generate = (generator, initialValue) => pipe(function* () {
    let acc = initialValue();
    while (true) {
        acc = generator(acc);
        yield acc;
    }
}, Enumerable_fromIteratorFactory());
export default Enumerable_generate;
