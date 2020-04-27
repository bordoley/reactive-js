export const identity = <T>(v: T): T => v;

export const returns = <T>(v: T) => (..._args: unknown[]) => v;

export const alwaysFalse = returns(false);

export const alwaysTrue = returns(true);

export const alwaysVoid = returns<void>(undefined);

export const incr = (x: number) => x + 1;

export const decr = (x: number) => x

