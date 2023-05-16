[Reactive-JS](../README.md) / Runnable

# Module: Runnable

## Table of contents

### Interfaces

- [RunnableModule](../interfaces/Runnable.RunnableModule.md)

### Type Aliases

- [Signature](Runnable.md#signature)
- [Type](Runnable.md#type)

### Constructor Functions

- [concat](Runnable.md#concat)
- [empty](Runnable.md#empty)
- [fromEnumeratorFactory](Runnable.md#fromenumeratorfactory)
- [fromFactory](Runnable.md#fromfactory)
- [fromIterable](Runnable.md#fromiterable)
- [fromOptional](Runnable.md#fromoptional)
- [fromReadonlyArray](Runnable.md#fromreadonlyarray)
- [fromValue](Runnable.md#fromvalue)
- [zip](Runnable.md#zip)

### Operator Functions

- [concatAll](Runnable.md#concatall)
- [concatMap](Runnable.md#concatmap)
- [concatWith](Runnable.md#concatwith)
- [distinctUntilChanged](Runnable.md#distinctuntilchanged)
- [endWith](Runnable.md#endwith)
- [exhaust](Runnable.md#exhaust)
- [exhaustMap](Runnable.md#exhaustmap)
- [flatMapIterable](Runnable.md#flatmapiterable)
- [forEach](Runnable.md#foreach)
- [keep](Runnable.md#keep)
- [keepType](Runnable.md#keeptype)
- [map](Runnable.md#map)
- [mapTo](Runnable.md#mapto)
- [mergeAll](Runnable.md#mergeall)
- [mergeMap](Runnable.md#mergemap)
- [pairwise](Runnable.md#pairwise)
- [pick](Runnable.md#pick)
- [scan](Runnable.md#scan)
- [skipFirst](Runnable.md#skipfirst)
- [startWith](Runnable.md#startwith)
- [switchAll](Runnable.md#switchall)
- [switchMap](Runnable.md#switchmap)
- [takeFirst](Runnable.md#takefirst)
- [takeLast](Runnable.md#takelast)
- [takeWhile](Runnable.md#takewhile)
- [zipWith](Runnable.md#zipwith)

### Other Functions

- [compute](Runnable.md#compute)
- [flow](Runnable.md#flow)
- [run](Runnable.md#run)

### Transform Functions

- [contains](Runnable.md#contains)
- [everySatisfy](Runnable.md#everysatisfy)
- [first](Runnable.md#first)
- [last](Runnable.md#last)
- [noneSatisfy](Runnable.md#nonesatisfy)
- [reduce](Runnable.md#reduce)
- [someSatisfy](Runnable.md#somesatisfy)
- [toReadonlyArray](Runnable.md#toreadonlyarray)

## Type Aliases

### Signature

Ƭ **Signature**: [`RunnableModule`](../interfaces/Runnable.RunnableModule.md)

___

### Type

Ƭ **Type**: [`RunnableContainer`](../interfaces/types.RunnableContainer.md)

## Constructor Functions

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

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

___

### empty

▸ **empty**<`T`\>(): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](functions.md#function1)<`T`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `T`\>

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, `TB`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`RunnableContainer`](../interfaces/types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Other Functions

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](functions.md#sideeffect1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

## Transform Functions

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

Determines whether all the members of an Container satisfy the predicate.
The predicate function is invoked for each element in the Container until the
it returns false, or until the end of the Container.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, `boolean`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>, readonly `T`[]\>
