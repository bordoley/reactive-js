export interface RelativeURI {
  readonly fragment: string;
  readonly path: string;
  readonly query: string;
}

export const empty: RelativeURI = {
  path: "",
  query: "",
  fragment: "",
};

export const equals = (a: RelativeURI, b: RelativeURI): boolean =>
  a === b ||
  (a.path === b.path && a.query === b.query && a.fragment === b.fragment);
