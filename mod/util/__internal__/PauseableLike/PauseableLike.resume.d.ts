import { PauseableLike_resume } from "../../../util.mjs";
declare const resume: <TPauseable extends {
    [PauseableLike_resume](): void;
}>(pausable: TPauseable) => TPauseable;
export { resume };
