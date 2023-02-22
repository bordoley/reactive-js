/// <reference types="./Pauseable.d.ts" />

import Pauseable_pause from "./Pauseable/__internal__/Pauseable.pause.js";
import Pauseable_resume from "./Pauseable/__internal__/Pauseable.resume.js";
export const pause = Pauseable_pause;
export const resume = Pauseable_resume;
/** @ignore */
const Pauseable = {
    pause,
    resume,
};
export default Pauseable;
