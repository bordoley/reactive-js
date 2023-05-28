[Reactive-JS](../README.md) / [types](../modules/types.md) / EnumerableContainerModule

# Interface: EnumerableContainerModule<C\>

[types](../modules/types.md).EnumerableContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`IndexedContainer`](types.IndexedContainer.md) |

## Hierarchy

- [`FlowableContainerModule`](types.FlowableContainerModule.md)<`C`, [`Type`](../modules/Enumerable.md#type)\>

  ↳ **`EnumerableContainerModule`**

  ↳↳ [`EnumerableModule`](Enumerable.EnumerableModule.md)

## Table of contents

### Constructor Methods

- [concat](types.EnumerableContainerModule.md#concat)
- [zip](types.EnumerableContainerModule.md#zip)

### Operator Methods

- [concatAll](types.EnumerableContainerModule.md#concatall)
- [concatMap](types.EnumerableContainerModule.md#concatmap)
- [concatWith](types.EnumerableContainerModule.md#concatwith)
- [endWith](types.EnumerableContainerModule.md#endwith)
- [repeat](types.EnumerableContainerModule.md#repeat)
- [startWith](types.EnumerableContainerModule.md#startwith)
- [zipWith](types.EnumerableContainerModule.md#zipwith)

### Transform Methods

- [contains](types.EnumerableContainerModule.md#contains)
- [enumerate](types.EnumerableContainerModule.md#enumerate)
- [everySatisfy](types.EnumerableContainerModule.md#everysatisfy)
- [first](types.EnumerableContainerModule.md#first)
- [last](types.EnumerableContainerModule.md#last)
- [noneSatisfy](types.EnumerableContainerModule.md#nonesatisfy)
- [reduce](types.EnumerableContainerModule.md#reduce)
- [reduceWithKey](types.EnumerableContainerModule.md#reducewithkey)
- [someSatisfy](types.EnumerableContainerModule.md#somesatisfy)
- [toIterable](types.EnumerableContainerModule.md#toiterable)
- [toReadonlyArray](types.EnumerableContainerModule.md#toreadonlyarray)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `snd` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `...tail` | readonly [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>[] |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `h` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TH`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `a` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TA`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `h` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TH`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `i` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TI`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

___

## Operator Methods

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `...tail` | readonly [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

___

### repeat

▸ **repeat**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `h` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TH`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

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
| `b` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TB`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `c` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TC`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `d` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TD`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `e` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TE`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `f` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TF`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `g` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TG`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `h` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TH`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |
| `i` | [`ContainerOf`](../modules/types.md#containerof)<`C`, `TI`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`], [`KeyOf`](../modules/types.md#keyof)<`C`\>\>

___

## Transform Methods

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `boolean`\>

___

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `TAcc`\>

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `number`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `boolean`\>

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, `Iterable`<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`, [`KeyOf`](../modules/types.md#keyof)<`C`\>\>, readonly `T`[]\>
