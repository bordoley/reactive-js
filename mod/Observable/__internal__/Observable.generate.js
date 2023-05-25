/// <reference types="./Observable.generate.d.ts" />

import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import { pipe } from "../../functions.js";
const Observable_generate = (generator, initialValue) => {
    const generateEnumerator = (generator, initialValue) => () => {
        const iter = function* () {
            let acc = initialValue();
            while (true) {
                acc = generator(acc);
                yield acc;
            }
        };
        return pipe(iter(), Iterable_enumerate());
    };
    return Enumerable_create(generateEnumerator(generator, initialValue), true);
};
export default Observable_generate;
