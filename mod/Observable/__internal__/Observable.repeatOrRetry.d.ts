import { Containers, ObservableContainer } from "../../containers.js";
type ObservableRepeatOrRetry = <C extends ObservableContainer.Type, T>(shouldRepeat: (count: number, error?: Error) => boolean) => Containers.Operator<C, T, T>;
declare const Observable_repeatOrRetry: ObservableRepeatOrRetry;
export default Observable_repeatOrRetry;
