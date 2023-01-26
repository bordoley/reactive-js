/// <reference types="./Pauseable.pause.d.ts" />
import { PauseableLike_pause } from '../../../util.mjs';

const Pauseable_pause = (pausable) => {
    pausable[PauseableLike_pause]();
    return pausable;
};

export { Pauseable_pause as default };
