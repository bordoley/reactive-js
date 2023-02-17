import { PauseableLike_pause } from "../../../scheduling.js";
declare const Pauseable_pause: <TPauseable extends {
    [PauseableLike_pause](): void;
}>(pausable: TPauseable) => TPauseable;
export { Pauseable_pause as default };
