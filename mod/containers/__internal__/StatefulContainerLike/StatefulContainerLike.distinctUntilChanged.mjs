/// <reference types="./StatefulContainerLike.distinctUntilChanged.d.ts" />
import { strictEquality, pipe, partial } from '../../../functions.mjs';
import StatefulContainerLike__lift from './StatefulContainerLike.lift.mjs';

const StatefulContainerLike__distinctUntilChanged = (m) => (operator) => (options) => {
    const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
    return pipe(operator, partial(equality), StatefulContainerLike__lift(m));
};

export { StatefulContainerLike__distinctUntilChanged as default };
