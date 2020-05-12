import { enumerate } from "./enumerator.js";
export const forEach = (f) => enumerable => {
    const enumerator = enumerate(enumerable);
    while (enumerator.move()) {
        f(enumerator.current);
    }
};
