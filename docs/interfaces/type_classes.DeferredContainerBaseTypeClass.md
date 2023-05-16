[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / DeferredContainerBaseTypeClass

# Interface: DeferredContainerBaseTypeClass<C\>

[type-classes](../modules/type_classes.md).DeferredContainerBaseTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- **`DeferredContainerBaseTypeClass`**

  ↳ [`DeferredContainerTypeClass`](type_classes.DeferredContainerTypeClass.md)

## Table of contents

### Operator Properties

- [concatAll](type_classes.DeferredContainerBaseTypeClass.md#concatall)
- [concatMap](type_classes.DeferredContainerBaseTypeClass.md#concatmap)
- [concatWith](type_classes.DeferredContainerBaseTypeClass.md#concatwith)

### Constructor Methods

- [concat](type_classes.DeferredContainerBaseTypeClass.md#concat)
- [zip](type_classes.DeferredContainerBaseTypeClass.md#zip)

### Operator Methods

- [endWith](type_classes.DeferredContainerBaseTypeClass.md#endwith)
- [flatMapIterable](type_classes.DeferredContainerBaseTypeClass.md#flatmapiterable)
- [startWith](type_classes.DeferredContainerBaseTypeClass.md#startwith)
- [takeLast](type_classes.DeferredContainerBaseTypeClass.md#takelast)
- [zipWith](type_classes.DeferredContainerBaseTypeClass.md#zipwith)

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
