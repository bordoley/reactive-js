import { compose, returns } from "../../functions.js";
import { scan, concatMap, fromValue as fromValueObs, takeFirst, } from "../../observable.js";
import { createStreamable } from "../../streamable.js";
const fromArrayScanner = (acc, _) => acc + 1;
export const fromArray = (options = {}) => values => {
    var _a, _b;
    const valuesLength = values.length;
    const startIndex = Math.min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = Math.max(Math.min((_b = options.endIndex) !== null && _b !== void 0 ? _b : valuesLength, valuesLength), 0);
    const fromValueWithDelay = fromValueObs(options);
    return createStreamable(compose(scan(fromArrayScanner, returns(startIndex - 1)), concatMap(i => fromValueWithDelay(values[i])), takeFirst({ count: endIndex - startIndex })));
};
