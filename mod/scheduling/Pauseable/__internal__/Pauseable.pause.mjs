/// <reference types="./Pauseable.pause.d.ts" />
import { PauseableLike_pause } from '../../../scheduling.mjs';

const Pauseable_pause = (pausable) => {
    pausable[PauseableLike_pause]();
    return pausable;
};

export { Pauseable_pause as default };
