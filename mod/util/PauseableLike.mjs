/// <reference types="./PauseableLike.d.ts" />
import '../util.mjs';
import { pause as pause$1 } from './__internal__/PauseableLike/PauseableLike.pause.mjs';
import { resume as resume$1 } from './__internal__/PauseableLike/PauseableLike.resume.mjs';

const pause = pause$1;
const resume = resume$1;

export { pause, resume };
