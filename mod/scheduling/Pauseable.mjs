/// <reference types="./Pauseable.d.ts" />
import '../scheduling.mjs';
import Pauseable_pause from './Pauseable/__internal__/Pauseable.pause.mjs';
import Pauseable_resume from './Pauseable/__internal__/Pauseable.resume.mjs';

const pause = Pauseable_pause;
const resume = Pauseable_resume;
/** @ignore */
const Pauseable = {
    pause,
    resume,
};

export { Pauseable as default, pause, resume };
