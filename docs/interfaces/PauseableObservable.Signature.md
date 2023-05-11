[Reactive-JS](../README.md) / [PauseableObservable](../modules/PauseableObservable.md) / Signature

# Interface: Signature

[PauseableObservable](../modules/PauseableObservable.md).Signature

## Hierarchy

- [`ContainerTypeClass`](type_classes.ContainerTypeClass.md)<[`Type`](../modules/PauseableObservable.md#type)\>

  ↳ **`Signature`**

## Table of contents

### Constructor Methods

- [zip](PauseableObservable.Signature.md#zip)

### Operator Methods

- [distinctUntilChanged](PauseableObservable.Signature.md#distinctuntilchanged)
- [flatMapIterable](PauseableObservable.Signature.md#flatmapiterable)
- [forEach](PauseableObservable.Signature.md#foreach)
- [keep](PauseableObservable.Signature.md#keep)
- [keepType](PauseableObservable.Signature.md#keeptype)
- [map](PauseableObservable.Signature.md#map)
- [mapTo](PauseableObservable.Signature.md#mapto)
- [pairwise](PauseableObservable.Signature.md#pairwise)
- [pick](PauseableObservable.Signature.md#pick)
- [scan](PauseableObservable.Signature.md#scan)
- [skipFirst](PauseableObservable.Signature.md#skipfirst)
- [takeFirst](PauseableObservable.Signature.md#takefirst)
- [takeLast](PauseableObservable.Signature.md#takelast)
- [takeWhile](PauseableObservable.Signature.md#takewhile)
- [zipWith](PauseableObservable.Signature.md#zipwith)

### Other Methods

- [dispatchTo](PauseableObservable.Signature.md#dispatchto)
- [enqueue](PauseableObservable.Signature.md#enqueue)
- [sinkInto](PauseableObservable.Signature.md#sinkinto)

### Transform Methods

- [firstAsync](PauseableObservable.Signature.md#firstasync)
- [lastAsync](PauseableObservable.Signature.md#lastasync)

## Constructor Methods

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |
| `i` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TI`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[distinctUntilChanged](type_classes.ContainerTypeClass.md#distinctuntilchanged)

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[flatMapIterable](type_classes.ContainerTypeClass.md#flatmapiterable)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forEach](type_classes.ContainerTypeClass.md#foreach)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[keep](type_classes.ContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[keepType](type_classes.ContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[map](type_classes.ContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[mapTo](type_classes.ContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pairwise](type_classes.ContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`[`TKey`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[scan](type_classes.ContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[skipFirst](type_classes.ContainerTypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeFirst](type_classes.ContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeLast](type_classes.ContainerTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeWhile](type_classes.ContainerTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |
| `i` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

___

## Other Methods

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](types.PauseableObservableContainer.md), `T`, `T`\>

___

### sinkInto

▸ **sinkInto**<`T`\>(`sink`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`void`\>\>

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[firstAsync](type_classes.ContainerTypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[lastAsync](type_classes.ContainerTypeClass.md#lastasync)
