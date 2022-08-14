/// <reference types="./containers.d.ts" />
/**  @ignore */
const ContainerLike_T = Symbol("ContainerLike_T");
/**  @ignore */
const ContainerLike_type = Symbol("ContainerLike_type");
/**  @ignore */
const StatefulContainerLike_state = Symbol("StatefulContainerLike_state");
const emptyReadonlyArray = 
/*@__PURE__*/ (() => {
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

export { ContainerLike_T, ContainerLike_type, StatefulContainerLike_state, emptyReadonlyArray, emptyReadonlyArrayT, generateSequence, generateSequenceT };
