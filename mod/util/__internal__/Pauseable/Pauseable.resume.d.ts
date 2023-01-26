import { PauseableLike_resume } from "../../../util.js";
declare const Pauseable$resume: <TPauseable extends {
    [PauseableLike_resume](): void;
}>(pausable: TPauseable) => TPauseable;
export { Pauseable$resume as default };
