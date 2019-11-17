# @reactive-js/operators



## Usage

```typescript
```

## API

### Static Functions

*`concat<T>(): Operator<ObservableLike<T>, T>`*

*`debounceTime<T>(dueTime: number, priority?: number): Operator<T, T>`*

*`delay<T>(dueTime: number, priority?: number): Operator<T, T>`*

*`distinctUntilChanged<T>(equals?: (a: T, b: T) => boolean): Operator<T, T>`*

*`exhaust<T>(): Operator<ObservableLike<T>, T>`*

*`ignoreElements<TA, TB>(): Operator<TA, TB>`*

*`keep<T>(predicate: (data: T) => boolean): Operator<T, T>`*

*`last<T>(): Operator<T, T>`*

*`map<A, B>(mapper: (data: A) => B): Operator<A, B>`*

*`mapTo<A, B>(value: B): Operator<A, B>`*

*`merge<T>(options?: { maxBufferSize?: number; maxConcurrency?: number}): Operator<ObservableLike<T>, T>`*

*`observe<T>(observer: ObserverLike<T>): Operator<T, T>`*

*`onComplete<T>(onComplete: (err?: Error) => void): Operator<T, T>`*

*`onNext<T>(onNext: (data: T) => void): Operator<T, T>`*

*`onError<T>(onError: (error: Error) => void): Operator<T, T>`*

*`scan<T, TAcc>(scanner: (acc: TAcc, next: T) => TAcc, initialValue: TAcc): Operator<T, TAcc>`*

*`switch_<T>(): Operator<ObservableLike<T>, T>`*

*`withLatestFrom<TA, TB, TC>(other: ObservableLike<TB>, selector: (a: TA, b: TB) => TC): Operator<TA, TC>`*
