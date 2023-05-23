[Reactive-JS](../README.md) / DeferredObservable

# Module: DeferredObservable

## Table of contents

### Container Interfaces

- [DeferredObservableContainer](../interfaces/DeferredObservable.DeferredObservableContainer.md)

### Module Interfaces

- [DeferredObservableModule](../interfaces/DeferredObservable.DeferredObservableModule.md)

### Type Aliases

- [DeferredObservableOperator](DeferredObservable.md#deferredobservableoperator)
- [Signature](DeferredObservable.md#signature)
- [Type](DeferredObservable.md#type)

### Constructor Functions

- [compute](DeferredObservable.md#compute)
- [concat](DeferredObservable.md#concat)
- [empty](DeferredObservable.md#empty)
- [fromEnumerable](DeferredObservable.md#fromenumerable)
- [fromFactory](DeferredObservable.md#fromfactory)
- [fromIterable](DeferredObservable.md#fromiterable)
- [fromOptional](DeferredObservable.md#fromoptional)
- [fromReadonlyArray](DeferredObservable.md#fromreadonlyarray)
- [fromValue](DeferredObservable.md#fromvalue)
- [zip](DeferredObservable.md#zip)

### Operator Functions

- [buffer](DeferredObservable.md#buffer)
- [catchError](DeferredObservable.md#catcherror)
- [concatAll](DeferredObservable.md#concatall)
- [concatMap](DeferredObservable.md#concatmap)
- [concatWith](DeferredObservable.md#concatwith)
- [distinctUntilChanged](DeferredObservable.md#distinctuntilchanged)
- [endWith](DeferredObservable.md#endwith)
- [exhaust](DeferredObservable.md#exhaust)
- [exhaustMap](DeferredObservable.md#exhaustmap)
- [flatMapIterable](DeferredObservable.md#flatmapiterable)
- [keep](DeferredObservable.md#keep)
- [keepType](DeferredObservable.md#keeptype)
- [map](DeferredObservable.md#map)
- [mapTo](DeferredObservable.md#mapto)
- [mergeAll](DeferredObservable.md#mergeall)
- [mergeMap](DeferredObservable.md#mergemap)
- [pairwise](DeferredObservable.md#pairwise)
- [pick](DeferredObservable.md#pick)
- [repeat](DeferredObservable.md#repeat)
- [retry](DeferredObservable.md#retry)
- [scan](DeferredObservable.md#scan)
- [scanLast](DeferredObservable.md#scanlast)
- [scanMany](DeferredObservable.md#scanmany)
- [skipFirst](DeferredObservable.md#skipfirst)
- [startWith](DeferredObservable.md#startwith)
- [switchAll](DeferredObservable.md#switchall)
- [switchMap](DeferredObservable.md#switchmap)
- [takeFirst](DeferredObservable.md#takefirst)
- [takeLast](DeferredObservable.md#takelast)
- [takeWhile](DeferredObservable.md#takewhile)
- [zipWith](DeferredObservable.md#zipwith)

### Other Functions

- [toObservable](DeferredObservable.md#toobservable)

## Type Aliases

### DeferredObservableOperator

Ƭ **DeferredObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `never`

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `never`

___

### Signature

Ƭ **Signature**: [`DeferredObservableModule`](../interfaces/DeferredObservable.DeferredObservableModule.md)

___

### Type

Ƭ **Type**: [`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md)

## Constructor Functions

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

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

___

### empty

▸ **empty**<`T`\>(): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](functions.md#function1)<`T`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

Combines multiple sources to create a Container whose values are calculated from the values,
in order, of each of its input sources.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function2`](functions.md#function2)<`Error`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

Returns a ContainerOperator that emits all items emitted by the source that
are distinct by comparison from the previous item.

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`DeferredObservableOperator`](DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

[`DeferredObservableOperator`](DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`DeferredObservableOperator`](DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`DeferredObservableOperator`](DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`DeferredObservableOperator`](DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableOperator`](DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

___

### retry

▸ **retry**<`T`\>(`shouldRetry`): [`DeferredObservableOperator`](DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`DeferredObservableOperator`](DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `TAcc`\>

Returns a Container that applies an accumulator function over the source,
and emits each intermediate result.

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `TAcc`\>

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `TAcc`\>

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

Returns a Container that skips the first count items emitted by the source.

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

Returns a Container that only emits the first `count` values emitted by the source.

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

Returns a Container that only emits the last `count` items emitted by the source.

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

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

Returns a Container which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/DeferredObservable.DeferredObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Other Functions

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>
