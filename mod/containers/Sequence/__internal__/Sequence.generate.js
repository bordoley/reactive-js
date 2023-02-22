/// <reference types="./Sequence.generate.d.ts" />

import { SequenceLike_data, SequenceLike_next, } from "../../../containers.js";
const Sequence_generate = 
/*@__PURE__*/ (() => {
    const _generate = (generator, data) => () => ({
        [SequenceLike_data]: data,
        [SequenceLike_next]: _generate(generator, generator(data)),
    });
    return (generator, initialValue) => () => {
        const acc = generator(initialValue());
        return _generate(generator, acc)();
    };
})();
export default Sequence_generate;
