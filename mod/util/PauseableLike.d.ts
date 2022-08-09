import { PauseableLike_pause, PauseableLike_resume } from "../util.mjs";
declare const pause: <TPauseable extends {
    [PauseableLike_pause](): void;
}>(pausable: TPauseable) => TPauseable;
declare const resume: <TPauseable extends {
    [PauseableLike_resume](): void;
}>(pausable: TPauseable) => TPauseable;
export { pause, resume };
