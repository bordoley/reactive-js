/// <reference types="./StatefulContainer.decodeWithCharset.d.ts" />
import { pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_decodeWithCharset = (m) => (operator) => options => {
    var _a;
    const charset = (_a = options === null || options === void 0 ? void 0 : options.charset) !== null && _a !== void 0 ? _a : "utf-8";
    return pipe(operator, partial(charset), StatefulContainer_lift(m));
};

export { StatefulContainer_decodeWithCharset as default };
