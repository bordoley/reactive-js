import { PauseableLike } from "../scheduling.js";
declare const pause: <TPauseable extends PauseableLike>(pauseable: TPauseable) => TPauseable;
declare const resume: <TPauseable extends PauseableLike>(pauseable: TPauseable) => TPauseable;
/** @ignore */
declare const Pauseable: {
    pause: <TPauseable extends PauseableLike>(pauseable: TPauseable) => TPauseable;
    resume: <TPauseable_1 extends PauseableLike>(pauseable: TPauseable_1) => TPauseable_1;
};
export { Pauseable as default, pause, resume };
