export const run = (source: any) => {
  const sink = (_t: any, _d: any) => {};
  source(0, sink);
};
