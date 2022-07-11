export interface DelegatingLike<TDelegate> {
  readonly delegate: TDelegate;
}

export const getDelegate = <TDelegate>(
  s: DelegatingLike<TDelegate>,
): TDelegate => s.delegate;
