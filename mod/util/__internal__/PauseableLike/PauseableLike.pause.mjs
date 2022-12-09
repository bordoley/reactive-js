/// <reference types="./PauseableLike.pause.d.ts" />
import { PauseableLike_pause } from '../../../util.mjs';

const pause = (pausable) => {
    pausable[PauseableLike_pause]();
    return pausable;
};

export { pause };
