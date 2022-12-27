import { ContainerOperator, SequenceLike } from "../../../containers.mjs";
declare const seek: <T>(count: number) => ContainerOperator<SequenceLike<unknown>, T, T>;
export { seek as default };
