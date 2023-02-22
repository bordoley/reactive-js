import { PauseableLike } from "../scheduling.js";
export declare const pause: <TPauseable extends PauseableLike>(pauseable: TPauseable) => TPauseable;
export declare const resume: <TPauseable extends PauseableLike>(pauseable: TPauseable) => TPauseable;
