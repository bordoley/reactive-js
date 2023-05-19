/// <reference types="./Enumerator.generate.d.ts" />

import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import { pipe } from "../../functions.js";
const Enumerator_generate = (generator, initialValue) => {
    const iter = function* () {
        let acc = initialValue();
        while (true) {
            acc = generator(acc);
            yield acc;
        }
    };
    return pipe(iter(), Iterable_enumerate());
};
export default Enumerator_generate;
