import { Container, ObservableContainer } from "../../../core.js";
type ObservableRepeatOrRetry = <C extends ObservableContainer, T>(shouldRepeat: (count: number, error?: Error) => boolean) => Container.Operator<C, T, T>;
declare const Observable_repeatOrRetry: ObservableRepeatOrRetry;
export default Observable_repeatOrRetry;
