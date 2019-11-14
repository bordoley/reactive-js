# @reactive-js/ix-operators

## Usage

## API

### Static Functions

*`distinctUntilChanged<TReq, T>(equals?: (a: T, b: T) => boolean): Operator<TReq, T, TReq, T>`*

*`map<TSrc, TReq, T>(mapper: (v: TSrc) => T): Operator<TReq, TSrc, TReq, T>`*

*`mapRequest<TSrcReq, TReq, T>(mapper: (v: TReq) => TSrcReq): Operator<TSrcReq, T, TReq, T>`*

*`scan<TReq, T, TAcc>(scanner: (acc: TAcc, next: T) => TAcc, initialValue: TAcc): Operator<TReq, T, TReq, TAcc>`*
