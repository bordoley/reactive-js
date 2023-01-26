/// <reference types="./Pauseable.d.ts" />
import '../util.mjs';
import Pauseable_pause from './__internal__/Pauseable/Pauseable.pause.mjs';
import Pauseable_resume from './__internal__/Pauseable/Pauseable.resume.mjs';

const pause = Pauseable_pause;
const resume = Pauseable_resume;

export { pause, resume };
