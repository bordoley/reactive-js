import { PauseableLike_pause } from "../../../util.mjs";
declare const pause: <TPauseable extends {
    [PauseableLike_pause](): void;
}>(pausable: TPauseable) => TPauseable;
export { pause };
