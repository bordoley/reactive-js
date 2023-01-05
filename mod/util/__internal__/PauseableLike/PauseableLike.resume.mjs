/// <reference types="./PauseableLike.resume.d.ts" />
import { PauseableLike_resume } from '../../../util.mjs';

const PauseableLike__resume = (pausable) => {
    pausable[PauseableLike_resume]();
    return pausable;
};

export { PauseableLike__resume as default };
