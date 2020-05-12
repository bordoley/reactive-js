import { enumerate } from "./enumerator.js";
class EnumerableIterable {
    constructor(enumerable) {
        this.enumerable = enumerable;
    }
    *[Symbol.iterator]() {
        const enumerator = enumerate(this.enumerable);
        while (enumerator.move()) {
            yield enumerator.current;
        }
    }
}
export const toIterable = (source) => new EnumerableIterable(source);
