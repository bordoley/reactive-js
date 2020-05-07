export const forEach = (f) => enumerable => {
    const enumerator = enumerable.enumerate();
    while (enumerator.move()) {
        f(enumerator.current);
    }
};
