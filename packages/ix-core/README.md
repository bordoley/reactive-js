# @reactive-js/ix-core

## API

### Interfaces

*AsyncIteratorLike*

### Static Functions

*`AsyncIterator.lift<TReq>(iterator: AsyncIteratorLike<TReq, any>, operator: Operator<any, any>, ...operators: readonly Operator<any, any>[]): AsyncIteratorLike<TReq, any>`*

*`AsyncIterator.mapRequest = <TSrcReq, TReq, T>(delegate: AsyncIteratorLike<TSrcReq, T>, mapper: (v: TReq) => TSrcReq,): AsyncIteratorLike<TReq, any>`*

