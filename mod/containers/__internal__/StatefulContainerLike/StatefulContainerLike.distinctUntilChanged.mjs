/// <reference types="./StatefulContainerLike.distinctUntilChanged.d.ts" />
import { strictEquality, pipe, partial } from '../../../functions.mjs';
import lift from './StatefulContainerLike.lift.mjs';

const distinctUntilChanged = (m) => (operator) => (options) => {
    const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
    return pipe(operator, partial(equality), lift(m));
};

export { distinctUntilChanged as default };
