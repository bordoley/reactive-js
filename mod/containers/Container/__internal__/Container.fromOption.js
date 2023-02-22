/// <reference types="./Container.fromOption.d.ts" />

import { isSome, pipe } from "../../../functions.js";
const Container_fromOption = ({ fromReadonlyArray }, options) => {
    const { start, count, ...tail } = (options !== null && options !== void 0 ? options : {});
    return option => pipe(isSome(option) ? [option] : [], fromReadonlyArray(tail));
};
export default Container_fromOption;
