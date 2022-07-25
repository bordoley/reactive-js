import { PauseableLike_pause, PauseableLike_resume } from "../util.mjs";
declare const pause: (pausable: {
    [PauseableLike_pause](): void;
}) => void;
declare const resume: (pausable: {
    [PauseableLike_resume](): void;
}) => void;
export { pause, resume };
