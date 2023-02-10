import { PauseableLike_resume } from "../../../util.js";
declare const Pauseable_resume: <TPauseable extends {
    [PauseableLike_resume](): void;
}>(pausable: TPauseable) => TPauseable;
export { Pauseable_resume as default };
