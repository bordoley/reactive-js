interface DelegatingLike<TDelegate> {
    readonly delegate: TDelegate;
}
declare const getDelegate: <TDelegate>(s: DelegatingLike<TDelegate>) => TDelegate;
export { DelegatingLike, getDelegate };
