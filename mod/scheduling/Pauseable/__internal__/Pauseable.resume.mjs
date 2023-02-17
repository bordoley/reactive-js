/// <reference types="./Pauseable.resume.d.ts" />
import { PauseableLike_resume } from '../../../scheduling.mjs';

const Pauseable_resume = (pausable) => {
    pausable[PauseableLike_resume]();
    return pausable;
};

export { Pauseable_resume as default };
