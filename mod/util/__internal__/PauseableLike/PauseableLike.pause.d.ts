import { PauseableLike_pause } from "../../../util.js";
declare const PauseableLike__pause: <TPauseable extends {
    [PauseableLike_pause](): void;
}>(pausable: TPauseable) => TPauseable;
export { PauseableLike__pause as default };
