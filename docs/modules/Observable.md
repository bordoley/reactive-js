[Reactive-JS](../README.md) / Observable

# Module: Observable

## Table of contents

### Namespaces

- [Animation](Observable.Animation.md)

### Interfaces

- [Signature](../interfaces/Observable.Signature.md)
- [Type](../interfaces/Observable.Type.md)

### Type Aliases

- [Animation](Observable.md#animation)
- [DeferredObservableUpperBoundObservableOperator](Observable.md#deferredobservableupperboundobservableoperator)
- [EnumerableUpperBoundObservableOperator](Observable.md#enumerableupperboundobservableoperator)
- [RunnableUpperBoundObservableOperator](Observable.md#runnableupperboundobservableoperator)

### Functions

- [backpressureStrategy](Observable.md#backpressurestrategy)
- [concat](Observable.md#concat)
- [concatMany](Observable.md#concatmany)
- [concatWith](Observable.md#concatwith)
- [create](Observable.md#create)
- [decodeWithCharset](Observable.md#decodewithcharset)
- [defer](Observable.md#defer)
- [dispatchTo](Observable.md#dispatchto)
- [distinctUntilChanged](Observable.md#distinctuntilchanged)
- [empty](Observable.md#empty)
- [encodeUtf8](Observable.md#encodeutf8)
- [endWith](Observable.md#endwith)
- [enqueue](Observable.md#enqueue)
- [firstAsync](Observable.md#firstasync)
- [forEach](Observable.md#foreach)
- [fromFactory](Observable.md#fromfactory)
- [ignoreElements](Observable.md#ignoreelements)
- [isDeferredObservable](Observable.md#isdeferredobservable)
- [isEnumerable](Observable.md#isenumerable)
- [isRunnable](Observable.md#isrunnable)
- [isSharedObservable](Observable.md#issharedobservable)
- [keep](Observable.md#keep)
- [keepType](Observable.md#keeptype)
- [lastAsync](Observable.md#lastasync)
- [map](Observable.md#map)
- [mapTo](Observable.md#mapto)
- [merge](Observable.md#merge)
- [mergeMany](Observable.md#mergemany)
- [mergeWith](Observable.md#mergewith)
- [never](Observable.md#never)
- [onSubscribe](Observable.md#onsubscribe)
- [pairwise](Observable.md#pairwise)
- [pick](Observable.md#pick)
- [scan](Observable.md#scan)
- [skipFirst](Observable.md#skipfirst)
- [startWith](Observable.md#startwith)
- [subscribe](Observable.md#subscribe)
- [subscribeOn](Observable.md#subscribeon)
- [takeFirst](Observable.md#takefirst)
- [takeLast](Observable.md#takelast)
- [takeWhile](Observable.md#takewhile)
- [throwIfEmpty](Observable.md#throwifempty)
- [throws](Observable.md#throws)
- [toEventSource](Observable.md#toeventsource)
- [withCurrentTime](Observable.md#withcurrenttime)
- [withLatestFrom](Observable.md#withlatestfrom)

## Type Aliases

### Animation

Ƭ **Animation**<`T`\>: [`Delay`](../interfaces/Observable.Animation.Delay.md) \| [`Loop`](../interfaces/Observable.Animation.Loop.md)<`T`\> \| `T` extends `number` ? [`KeyFrame`](../interfaces/Observable.Animation.KeyFrame.md) \| [`Spring`](../interfaces/Observable.Animation.Spring.md) \| [`Frame`](../interfaces/Observable.Animation.Frame.md) & { `selector?`: `never`  } : [`KeyFrame`](../interfaces/Observable.Animation.KeyFrame.md) \| [`Spring`](../interfaces/Observable.Animation.Spring.md) \| [`Frame`](../interfaces/Observable.Animation.Frame.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

___

### DeferredObservableUpperBoundObservableOperator

Ƭ **DeferredObservableUpperBoundObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

___

### EnumerableUpperBoundObservableOperator

Ƭ **EnumerableUpperBoundObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

___

### RunnableUpperBoundObservableOperator

Ƭ **RunnableUpperBoundObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TIn`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TOut`\> : `never`

## Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |
| `backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`observables`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>] |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

___

### create

▸ **create**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/types.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`T`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **empty**<`T`\>(`options`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**<`TObservableIn`\>(`observable`): `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`string`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`string`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`string`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`string`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`Uint8Array`\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`string`, `TObservableIn`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

#### Returns

`TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`string`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`string`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`string`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`Uint8Array`\> : `TObservableIn` extends [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`string`\> ? [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`Uint8Array`\> : `never`

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/types.QueueableLike.md)<`T`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromFactory**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`unknown`, `T`\>

___

### isDeferredObservable

▸ **isDeferredObservable**<`T`\>(`obs`): obs is DeferredObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is DeferredObservableLike<T\>

___

### isEnumerable

▸ **isEnumerable**<`T`\>(`obs`): obs is EnumerableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is EnumerableLike<T\>

___

### isRunnable

▸ **isRunnable**<`T`\>(`obs`): obs is RunnableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is RunnableLike<T\>

___

### isSharedObservable

▸ **isSharedObservable**<`T`\>(`obs`): obs is SharedObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is SharedObservableLike<T\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TB` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\> \| [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |
| `snd` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\> \| [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |
| `...tail` | readonly ([`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\> \| [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>)[] |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`observables`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly ([`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\> \| [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>)[] |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\> \| [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |
| `...tail` | readonly ([`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\> \| [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>)[] |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>

___

### never

▸ **never**<`T`\>(): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](types.md#disposableorteardown)\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKey`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |
| `TKeyC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |
| `keyC` | `TKeyC` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |
| `options?` | `undefined` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### throws

▸ **throws**<`T`\>(): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.raise` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.raise?` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

___

### withCurrentTime

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`number`, `TA`, `TB`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](Observable.md#enumerableupperboundobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>
