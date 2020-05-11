import { none } from "../../option.js";
import { enumerate } from "./enumerate.js";
export const first = (enumerable) => {
    const enumerator = enumerate(enumerable);
    return enumerator.move() ? enumerator.current : none;
};
