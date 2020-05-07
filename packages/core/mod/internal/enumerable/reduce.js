export const reduce = (reducer, initialValue) => enumerable => {
    const enumerator = enumerable.enumerate();
    let acc = initialValue();
    while (enumerator.move()) {
        acc = reducer(acc, enumerator.current);
    }
    return acc;
};
