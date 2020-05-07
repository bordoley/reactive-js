import { none } from "../../option.js";
export const first = (enumerable) => {
    const enumerator = enumerable.enumerate();
    return enumerator.move() ? enumerator.current : none;
};
