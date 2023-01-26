import { PauseableLike_pause } from "../../../util.js";
declare const Pauseable$pause: <TPauseable extends {
    [PauseableLike_pause](): void;
}>(pausable: TPauseable) => TPauseable;
export { Pauseable$pause as default };
