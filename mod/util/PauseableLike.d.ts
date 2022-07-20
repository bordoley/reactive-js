declare const PauseableLike_pause: unique symbol;
declare const PauseableLike_resume: unique symbol;
interface PauseableLike {
    [PauseableLike_pause](): void;
    [PauseableLike_resume](): void;
}
declare const pause: (pausable: {
    [PauseableLike_pause](): void;
}) => void;
declare const resume: (pausable: {
    [PauseableLike_resume](): void;
}) => void;
export { PauseableLike, PauseableLike_pause, PauseableLike_resume, pause, resume };
