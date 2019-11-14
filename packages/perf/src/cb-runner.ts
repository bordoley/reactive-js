export const run = (source: any) => {
  const sink = (t: any, d: any) => {};
  source(0, sink);
};
