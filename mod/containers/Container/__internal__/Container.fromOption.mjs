/// <reference types="./Container.fromOption.d.ts" />
import { pipe, isSome } from '../../../functions.mjs';

const Container_fromOption = ({ fromReadonlyArray }, options) => {
    const { start, count, ...tail } = (options !== null && options !== void 0 ? options : {});
    return option => pipe(isSome(option) ? [option] : [], fromReadonlyArray(tail));
};

export { Container_fromOption as default };
