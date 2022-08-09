/// <reference types="./PauseableLike.d.ts" />
import { PauseableLike_pause, PauseableLike_resume } from '../util.mjs';

const pause = (pausable) => {
    pausable[PauseableLike_pause]();
    return pausable;
};
const resume = (pausable) => {
    pausable[PauseableLike_resume]();
    return pausable;
};

export { pause, resume };
