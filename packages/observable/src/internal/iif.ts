import { ObservableOperatorLike } from "./interfaces";
import { map } from "./map";

export const iif = <TCtx, T>(
  trueCase: (ctx: TCtx) => T,
  falseCase: (ctx: TCtx) => T,
  ctx: TCtx,
): ObservableOperatorLike<boolean, T> =>
  map(v => (v ? trueCase(ctx) : falseCase(ctx)));
