import { PauseableLike_pause, PauseableLike_resume } from "../scheduling.js";
declare const pause: <TPauseable extends {
    [PauseableLike_pause](): void;
}>(pausable: TPauseable) => TPauseable;
declare const resume: <TPauseable extends {
    [PauseableLike_resume](): void;
}>(pausable: TPauseable) => TPauseable;
/** @ignore */
declare const Pauseable: {
    pause: <TPauseable extends {
        [PauseableLike_pause](): void;
    }>(pausable: TPauseable) => TPauseable;
    resume: <TPauseable_1 extends {
        [PauseableLike_resume](): void;
    }>(pausable: TPauseable_1) => TPauseable_1;
};
export { Pauseable as default, pause, resume };
