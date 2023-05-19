[Reactive-JS](../README.md) / [types](../modules/types.md) / RunnableTypeClass

# Interface: RunnableTypeClass<C\>

[types](../modules/types.md).RunnableTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- [`ContainerTypeClass`](types.ContainerTypeClass.md)<`C`\>

- [`FlowableTypeClass`](types.FlowableTypeClass.md)<`C`\>

  ↳ **`RunnableTypeClass`**

  ↳↳ [`RunnableModule`](Runnable.RunnableModule.md)

  ↳↳ [`EnumerableTypeClass`](types.EnumerableTypeClass.md)

## Table of contents

### Constructor Methods

- [concat](types.RunnableTypeClass.md#concat)
- [empty](types.RunnableTypeClass.md#empty)
- [fromEnumerable](types.RunnableTypeClass.md#fromenumerable)
- [fromEnumeratorFactory](types.RunnableTypeClass.md#fromenumeratorfactory)
- [fromFactory](types.RunnableTypeClass.md#fromfactory)
- [fromIterable](types.RunnableTypeClass.md#fromiterable)
- [fromOptional](types.RunnableTypeClass.md#fromoptional)
- [fromReadonlyArray](types.RunnableTypeClass.md#fromreadonlyarray)
- [fromValue](types.RunnableTypeClass.md#fromvalue)
- [zip](types.RunnableTypeClass.md#zip)

### Operator Methods

- [buffer](types.RunnableTypeClass.md#buffer)
- [concatAll](types.RunnableTypeClass.md#concatall)
- [concatMap](types.RunnableTypeClass.md#concatmap)
- [concatWith](types.RunnableTypeClass.md#concatwith)
- [distinctUntilChanged](types.RunnableTypeClass.md#distinctuntilchanged)
- [endWith](types.RunnableTypeClass.md#endwith)
- [flatMapIterable](types.RunnableTypeClass.md#flatmapiterable)
- [forEach](types.RunnableTypeClass.md#foreach)
- [ignoreElements](types.RunnableTypeClass.md#ignoreelements)
- [keep](types.RunnableTypeClass.md#keep)
- [keepType](types.RunnableTypeClass.md#keeptype)
- [map](types.RunnableTypeClass.md#map)
- [mapTo](types.RunnableTypeClass.md#mapto)
- [pairwise](types.RunnableTypeClass.md#pairwise)
- [pick](types.RunnableTypeClass.md#pick)
- [repeat](types.RunnableTypeClass.md#repeat)
- [scan](types.RunnableTypeClass.md#scan)
- [skipFirst](types.RunnableTypeClass.md#skipfirst)
- [startWith](types.RunnableTypeClass.md#startwith)
- [takeFirst](types.RunnableTypeClass.md#takefirst)
- [takeLast](types.RunnableTypeClass.md#takelast)
- [takeWhile](types.RunnableTypeClass.md#takewhile)
- [zipWith](types.RunnableTypeClass.md#zipwith)

### Other Methods

- [flow](types.RunnableTypeClass.md#flow)

### Transform Methods

- [contains](types.RunnableTypeClass.md#contains)
- [everySatisfy](types.RunnableTypeClass.md#everysatisfy)
- [first](types.RunnableTypeClass.md#first)
- [last](types.RunnableTypeClass.md#last)
- [noneSatisfy](types.RunnableTypeClass.md#nonesatisfy)
- [reduce](types.RunnableTypeClass.md#reduce)
- [someSatisfy](types.RunnableTypeClass.md#somesatisfy)
- [toObservable](types.RunnableTypeClass.md#toobservable)
- [toReadonlyArray](types.RunnableTypeClass.md#toreadonlyarray)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\> |
| `snd` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\> |
| `...tail` | readonly [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>[] |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

___

### empty

▸ **empty**<`T`\>(): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`]\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`\> |
| `h` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TH`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`\> |
| `h` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TH`\> |
| `i` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TI`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, readonly `T`[]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, readonly `T`[]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[buffer](types.ContainerTypeClass.md#buffer)

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\> |
| `...tail` | readonly [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

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
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[distinctUntilChanged](types.ContainerTypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[forEach](types.ContainerTypeClass.md#foreach)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `unknown`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[ignoreElements](types.ContainerTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[keep](types.ContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[keepType](types.ContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

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
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[map](types.ContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[mapTo](types.ContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, readonly [`T`, `T`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pairwise](types.ContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKey`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pick](types.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pick](types.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[pick](types.ContainerTypeClass.md#pick)

___

### repeat

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `TAcc`\>

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
| `scanner` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[scan](types.ContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[skipFirst](types.ContainerTypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[takeFirst](types.ContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

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
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](types.ContainerTypeClass.md).[takeWhile](types.ContainerTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`\> |
| `h` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TH`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`\> |
| `h` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TH`\> |
| `i` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TI`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Other Methods

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[FlowableTypeClass](types.FlowableTypeClass.md).[flow](types.FlowableTypeClass.md#flow)

___

## Transform Methods

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `boolean`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `boolean`\>

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
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `boolean`\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, readonly `T`[]\>
