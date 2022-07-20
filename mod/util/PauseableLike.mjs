/// <reference types="./PauseableLike.d.ts" />
const PauseableLike_pause = Symbol("PausableLike_pause");
const PauseableLike_resume = Symbol("PausableLike_resume");
const pause = (pausable) => pausable[PauseableLike_pause]();
const resume = (pausable) => pausable[PauseableLike_resume]();

export { PauseableLike_pause, PauseableLike_resume, pause, resume };
