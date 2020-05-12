import { none } from "../../option.js";
import { enumerate } from "./enumerator.js";
export const first = (enumerable) => {
    const enumerator = enumerate(enumerable);
    return enumerator.move() ? enumerator.current : none;
};
