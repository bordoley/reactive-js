import { PauseableLike_pause } from "../../../util.js";
declare const Pauseable_pause: <TPauseable extends {
    [PauseableLike_pause](): void;
}>(pausable: TPauseable) => TPauseable;
export { Pauseable_pause as default };
