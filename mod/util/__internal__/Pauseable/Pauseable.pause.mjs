/// <reference types="./Pauseable.pause.d.ts" />
import { PauseableLike_pause } from '../../../util.mjs';

const Pauseable$pause = (pausable) => {
    pausable[PauseableLike_pause]();
    return pausable;
};

export { Pauseable$pause as default };
