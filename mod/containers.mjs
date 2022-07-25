/// <reference types="./containers.d.ts" />
import { identity } from './functions.mjs';

const emptyReadonlyArray = 
/*@__PURE__*/ (() => {
    const _empty = [];
    return () => _empty;
})();
const emptyReadonlyArrayT = {
    empty: emptyReadonlyArray,
};
const fromArrayReadonlyArray = () => identity;
const fromArrayReadonlyArrayT = {
    fromArray: fromArrayReadonlyArray,
};
const generateSequence = 
/*@__PURE__*/ (() => {
    const _generate = (generator, data) => () => ({ data, next: _generate(generator, generator(data)) });
    return (generator, initialValue) => () => {
        const acc = generator(initialValue());
        return _generate(generator, acc)();
    };
})();
const generateSequenceT = {
    generate: generateSequence,
};

export { emptyReadonlyArray, emptyReadonlyArrayT, fromArrayReadonlyArray, fromArrayReadonlyArrayT, generateSequence, generateSequenceT };
