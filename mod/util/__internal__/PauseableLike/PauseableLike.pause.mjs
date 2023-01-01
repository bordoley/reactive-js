/// <reference types="./PauseableLike.pause.d.ts" />
import { PauseableLike_pause } from '../../../util.mjs';

const PauseableLike__pause = (pausable) => {
    pausable[PauseableLike_pause]();
    return pausable;
};

export { PauseableLike__pause as default };
