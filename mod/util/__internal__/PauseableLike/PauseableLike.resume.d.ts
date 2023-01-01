import { PauseableLike_resume } from "../../../util.mjs";
declare const auseableLike__resume: <TPauseable extends {
    [PauseableLike_resume](): void;
}>(pausable: TPauseable) => TPauseable;
export { auseableLike__resume as default };
