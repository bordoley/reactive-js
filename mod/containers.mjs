/// <reference types="./containers.d.ts" />
const emptyReadonlyArray = /*@__PURE__*/ (() => {
    const _empty = [];
    return () => _empty;
})();
const emptyReadonlyArrayT = {
    empty: emptyReadonlyArray,
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

export { emptyReadonlyArray, emptyReadonlyArrayT, generateSequence, generateSequenceT };
