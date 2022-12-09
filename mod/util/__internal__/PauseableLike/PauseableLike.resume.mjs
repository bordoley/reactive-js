/// <reference types="./PauseableLike.resume.d.ts" />
import { PauseableLike_resume } from '../../../util.mjs';

const resume = (pausable) => {
    pausable[PauseableLike_resume]();
    return pausable;
};

export { resume };
