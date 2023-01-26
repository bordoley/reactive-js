/// <reference types="./Pauseable.d.ts" />
import '../util.mjs';
import Pauseable$pause from './__internal__/Pauseable/Pauseable.pause.mjs';
import Pauseable$resume from './__internal__/Pauseable/Pauseable.resume.mjs';

const pause = Pauseable$pause;
const resume = Pauseable$resume;

export { pause, resume };
