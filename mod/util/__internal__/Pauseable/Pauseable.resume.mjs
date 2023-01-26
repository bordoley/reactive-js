/// <reference types="./Pauseable.resume.d.ts" />
import { PauseableLike_resume } from '../../../util.mjs';

const Pauseable$resume = (pausable) => {
    pausable[PauseableLike_resume]();
    return pausable;
};

export { Pauseable$resume as default };
