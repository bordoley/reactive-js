/// <reference types="./StatefulContainer.distinctUntilChanged.d.ts" />
import { strictEquality, pipe, partial } from '../../../functions.mjs';
import StatefulContainer_lift from './StatefulContainer.lift.mjs';

const StatefulContainer_distinctUntilChanged = (m) => (operator) => (options) => {
    const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
    return pipe(operator, partial(equality), StatefulContainer_lift(m));
};

export { StatefulContainer_distinctUntilChanged as default };
