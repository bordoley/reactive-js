/// <reference types="./StatefulContainer.distinctUntilChanged.d.ts" />
import { strictEquality, pipe, partial } from '../../../functions.mjs';
import StatefulContainer$lift from './StatefulContainer.lift.mjs';

const StatefulContainer$distinctUntilChanged = (m) => (operator) => (options) => {
    const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
    return pipe(operator, partial(equality), StatefulContainer$lift(m));
};

export { StatefulContainer$distinctUntilChanged as default };
