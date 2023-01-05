import { PauseableLike_resume } from "../../../util.mjs";
declare const PauseableLike__resume: <TPauseable extends {
    [PauseableLike_resume](): void;
}>(pausable: TPauseable) => TPauseable;
export { PauseableLike__resume as default };
