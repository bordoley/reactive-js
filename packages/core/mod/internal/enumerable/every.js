export const every = (predicate) => enumerable => {
    const enumerator = enumerable.enumerate();
    while (enumerator.move()) {
        if (!predicate(enumerator.current)) {
            return false;
        }
    }
    return true;
};
export const none = (predicate) => every(next => !predicate(next));
