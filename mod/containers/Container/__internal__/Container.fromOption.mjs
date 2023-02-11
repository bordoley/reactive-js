/// <reference types="./Container.fromOption.d.ts" />
import { pipe, isSome } from '../../../functions.mjs';

const Container_fromOption = ({ fromArray }, options) => {
    const { start, count, ...tail } = (options !== null && options !== void 0 ? options : {});
    return option => pipe(isSome(option) ? [option] : [], fromArray(tail));
};

export { Container_fromOption as default };
