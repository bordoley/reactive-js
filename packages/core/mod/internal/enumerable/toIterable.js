class EnumerableIterable {
    constructor(enumerable) {
        this.enumerable = enumerable;
    }
    *[Symbol.iterator]() {
        const enumerator = this.enumerable.enumerate();
        while (enumerator.move()) {
            yield enumerator.current;
        }
    }
}
export const toIterable = (source) => new EnumerableIterable(source);
