export const everySatisfy = (predicate) => enumerable => {
    const enumerator = enumerable.enumerate();
    while (enumerator.move()) {
        if (!predicate(enumerator.current)) {
            return false;
        }
    }
    return true;
};
export const noneSatisfy = (predicate) => everySatisfy(next => !predicate(next));
