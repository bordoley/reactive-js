import { Container, ObservableContainer } from "../../containers.js";
type ObservableRepeatOrRetry = <C extends ObservableContainer.Type, T>(shouldRepeat: (count: number, error?: Error) => boolean) => Container.Operator<C, T, T>;
declare const Observable_repeatOrRetry: ObservableRepeatOrRetry;
export default Observable_repeatOrRetry;
