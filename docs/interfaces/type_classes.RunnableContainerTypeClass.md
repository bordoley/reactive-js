[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / RunnableContainerTypeClass

# Interface: RunnableContainerTypeClass<C\>

[type-classes](../modules/type_classes.md).RunnableContainerTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- [`ContainerTypeClass`](type_classes.ContainerTypeClass.md)<`C`\>

  ↳ **`RunnableContainerTypeClass`**

  ↳↳ [`EnumeratorModule`](Enumerator.EnumeratorModule.md)

  ↳↳ [`RunnableModule`](Runnable.RunnableModule.md)

  ↳↳ [`EnumerableContainerTypeClass`](type_classes.EnumerableContainerTypeClass.md)

## Table of contents

### Operator Properties

- [concatAll](type_classes.RunnableContainerTypeClass.md#concatall)
- [concatMap](type_classes.RunnableContainerTypeClass.md#concatmap)
- [concatWith](type_classes.RunnableContainerTypeClass.md#concatwith)

### Transform Properties

- [contains](type_classes.RunnableContainerTypeClass.md#contains)

### Constructor Methods

- [concat](type_classes.RunnableContainerTypeClass.md#concat)
- [empty](type_classes.RunnableContainerTypeClass.md#empty)
- [fromEnumerable](type_classes.RunnableContainerTypeClass.md#fromenumerable)
- [fromEnumeratorFactory](type_classes.RunnableContainerTypeClass.md#fromenumeratorfactory)
- [fromFactory](type_classes.RunnableContainerTypeClass.md#fromfactory)
- [fromIterable](type_classes.RunnableContainerTypeClass.md#fromiterable)
- [fromOptional](type_classes.RunnableContainerTypeClass.md#fromoptional)
- [fromReadonlyArray](type_classes.RunnableContainerTypeClass.md#fromreadonlyarray)
- [fromValue](type_classes.RunnableContainerTypeClass.md#fromvalue)
- [zip](type_classes.RunnableContainerTypeClass.md#zip)

### Operator Methods

- [distinctUntilChanged](type_classes.RunnableContainerTypeClass.md#distinctuntilchanged)
- [endWith](type_classes.RunnableContainerTypeClass.md#endwith)
- [flatMapIterable](type_classes.RunnableContainerTypeClass.md#flatmapiterable)
- [forEach](type_classes.RunnableContainerTypeClass.md#foreach)
- [ignoreElements](type_classes.RunnableContainerTypeClass.md#ignoreelements)
- [keep](type_classes.RunnableContainerTypeClass.md#keep)
- [keepType](type_classes.RunnableContainerTypeClass.md#keeptype)
- [map](type_classes.RunnableContainerTypeClass.md#map)
- [mapTo](type_classes.RunnableContainerTypeClass.md#mapto)
- [pairwise](type_classes.RunnableContainerTypeClass.md#pairwise)
- [pick](type_classes.RunnableContainerTypeClass.md#pick)
- [scan](type_classes.RunnableContainerTypeClass.md#scan)
- [skipFirst](type_classes.RunnableContainerTypeClass.md#skipfirst)
- [startWith](type_classes.RunnableContainerTypeClass.md#startwith)
- [takeFirst](type_classes.RunnableContainerTypeClass.md#takefirst)
- [takeLast](type_classes.RunnableContainerTypeClass.md#takelast)
- [takeWhile](type_classes.RunnableContainerTypeClass.md#takewhile)
- [zipWith](type_classes.RunnableContainerTypeClass.md#zipwith)

### Other Methods

- [buffer](type_classes.RunnableContainerTypeClass.md#buffer)

### Transform Methods

- [everySatisfy](type_classes.RunnableContainerTypeClass.md#everysatisfy)
- [first](type_classes.RunnableContainerTypeClass.md#first)
- [last](type_classes.RunnableContainerTypeClass.md#last)
- [noneSatisfy](type_classes.RunnableContainerTypeClass.md#nonesatisfy)
- [reduce](type_classes.RunnableContainerTypeClass.md#reduce)
- [someSatisfy](type_classes.RunnableContainerTypeClass.md#somesatisfy)
- [toReadonlyArray](type_classes.RunnableContainerTypeClass.md#toreadonlyarray)

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `T`\>

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\>\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`\>\> |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`\>

___

### concatWith

• **concatWith**: <T\>(`snd`: [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, ...`tail`: readonly [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>[]) => [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\> |
| `...tail` | readonly [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>[] |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

___

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `boolean`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `boolean`\>

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

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\>

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[distinctUntilChanged](type_classes.ContainerTypeClass.md#distinctuntilchanged)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forEach](type_classes.ContainerTypeClass.md#foreach)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[ignoreElements](type_classes.ContainerTypeClass.md#ignoreelements)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[keep](type_classes.ContainerTypeClass.md#keep)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[keepType](type_classes.ContainerTypeClass.md#keeptype)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[map](type_classes.ContainerTypeClass.md#map)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[mapTo](type_classes.ContainerTypeClass.md#mapto)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pairwise](type_classes.ContainerTypeClass.md#pairwise)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[scan](type_classes.ContainerTypeClass.md#scan)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[skipFirst](type_classes.ContainerTypeClass.md#skipfirst)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeFirst](type_classes.ContainerTypeClass.md#takefirst)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeWhile](type_classes.ContainerTypeClass.md#takewhile)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[buffer](type_classes.ContainerTypeClass.md#buffer)

___

## Transform Methods

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

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, readonly `T`[]\>
