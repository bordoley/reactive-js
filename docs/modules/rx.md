[Reactive-JS](../README.md) / rx

# Module: rx

## Table of contents

### Interfaces

- [EnumerableObservableLike](../interfaces/rx.EnumerableObservableLike.md)
- [MulticastObservableLike](../interfaces/rx.MulticastObservableLike.md)
- [ObservableLike](../interfaces/rx.ObservableLike.md)
- [ObserverLike](../interfaces/rx.ObserverLike.md)
- [ReactiveContainerLike](../interfaces/rx.ReactiveContainerLike.md)
- [RunnableLike](../interfaces/rx.RunnableLike.md)
- [RunnableObservableLike](../interfaces/rx.RunnableObservableLike.md)
- [SinkLike](../interfaces/rx.SinkLike.md)
- [SubjectLike](../interfaces/rx.SubjectLike.md)

### Type Aliases

- [AsyncReducer](rx.md#asyncreducer)
- [FromEnumerableObservable](rx.md#fromenumerableobservable)
- [FromRunnableObservable](rx.md#fromrunnableobservable)
- [Retry](rx.md#retry)
- [ScanAsync](rx.md#scanasync)
- [TakeUntil](rx.md#takeuntil)
- [Throttle](rx.md#throttle)
- [ThrottleMode](rx.md#throttlemode)
- [Timeout](rx.md#timeout)
- [ToEnumerableObservable](rx.md#toenumerableobservable)
- [ToObservable](rx.md#toobservable)
- [ToRunnable](rx.md#torunnable)
- [ToRunnableObservable](rx.md#torunnableobservable)
- [WithLatestFrom](rx.md#withlatestfrom)
- [ZipLatest](rx.md#ziplatest)
- [ZipWithLatestFrom](rx.md#zipwithlatestfrom)

### Variables

- [ThrottleMode\_first](rx.md#throttlemode_first)
- [ThrottleMode\_interval](rx.md#throttlemode_interval)
- [ThrottleMode\_last](rx.md#throttlemode_last)

## Type Aliases

### AsyncReducer

Ƭ **AsyncReducer**<`C`, `T`, `TAcc`\>: [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ContainerOf`](containers.md#containerof)<`C`, `TAcc`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |
| `T` | `T` |
| `TAcc` | `TAcc` |

___

### FromEnumerableObservable

Ƭ **FromEnumerableObservable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromEnumerableObservable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### FromRunnableObservable

Ƭ **FromRunnableObservable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromRunnableObservable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### Retry

Ƭ **Retry**<`C`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retry` | <T\>() => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\><T\>(`predicate`: [`Function2`](functions.md#function2)<`number`, `unknown`, `boolean`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\> |

___

### ScanAsync

Ƭ **ScanAsync**<`C`, `CInner`\>: [`Container`](containers.md#container)<`C`\> & { `scanAsync`: <T, TAcc\>(`scanner`: [`AsyncReducer`](rx.md#asyncreducer)<`CInner`, `T`, `TAcc`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `TAcc`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `CInner` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |

___

### TakeUntil

Ƭ **TakeUntil**<`C`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `takeUntil` | <T\>(`notifier`: `C`) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\> |

___

### Throttle

Ƭ **Throttle**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `throttle`: <T\>(`duration`: [`Function1`](functions.md#function1)<`T`, `C`\>, `options?`: { `mode?`: [`ThrottleMode`](rx.md#throttlemode)  }) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\><T\>(`duration`: `number`, `options?`: { `mode?`: [`ThrottleMode`](rx.md#throttlemode)  }) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |

___

### ThrottleMode

Ƭ **ThrottleMode**: typeof [`ThrottleMode_first`](rx.md#throttlemode_first) \| typeof [`ThrottleMode_last`](rx.md#throttlemode_last) \| typeof [`ThrottleMode_interval`](rx.md#throttlemode_interval)

___

### Timeout

Ƭ **Timeout**<`C`\>: [`Container`](containers.md#container)<`C`\> & { `timeout`: <T\>(`duration`: `number`) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\><T\>(`duration`: `C`) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `T`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |

___

### ToEnumerableObservable

Ƭ **ToEnumerableObservable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toEnumerableObservable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToObservable

Ƭ **ToObservable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toObservable`: <T\>(`options?`: `O` & { `delay?`: `number` ; `delayStart?`: `boolean`  }) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `unknown` |

___

### ToRunnable

Ƭ **ToRunnable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toRunnable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToRunnableObservable

Ƭ **ToRunnableObservable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toRunnableObservable`: <T\>(`options?`: `O` & { `delay?`: `number` ; `delayStart?`: `boolean`  }) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `unknown` |

___

### WithLatestFrom

Ƭ **WithLatestFrom**<`C`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `withLatestFrom` | <TA, TB, T\>(`other`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `selector`: [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `T`\> |

___

### ZipLatest

Ƭ **ZipLatest**<`C`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `zipLatest` | [`Zip`](containers.md#zip)<`C`\>[``"zip"``] |

___

### ZipWithLatestFrom

Ƭ **ZipWithLatestFrom**<`C`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `zipWithLatestFrom` | <TA, TB, T\>(`other`: [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>, `selector`: [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\>) => [`ContainerOperator`](containers.md#containeroperator)<`C`, `TA`, `T`\> |

## Variables

### ThrottleMode\_first

• `Const` **ThrottleMode\_first**: unique `symbol`

___

### ThrottleMode\_interval

• `Const` **ThrottleMode\_interval**: unique `symbol`

___

### ThrottleMode\_last

• `Const` **ThrottleMode\_last**: unique `symbol`
