/// <reference types="./Enumerable.generate.d.ts" />

import { pipe } from "../../../functions.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import Enumerable_create from "./Enumerable.create.js";
const Enumerable_generate = (generator, initialValue) => {
    const generateEnumerator = () => {
        const iter = function* () {
            let acc = initialValue();
            while (true) {
                acc = generator(acc);
                yield acc;
            }
        };
        return pipe(iter(), Enumerator_fromIterator());
    };
    return Enumerable_create(generateEnumerator);
};
export default Enumerable_generate;
