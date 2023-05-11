[Reactive-JS](../README.md) / [EventSource](../modules/EventSource.md) / Signature

# Interface: Signature

[EventSource](../modules/EventSource.md).Signature

## Hierarchy

- [`ContainerTypeClass`](type_classes.ContainerTypeClass.md)<[`Type`](EventSource.Type.md)\>

- [`StatefulContainerBaseTypeClass`](type_classes.StatefulContainerBaseTypeClass.md)<[`Type`](EventSource.Type.md)\>

- [`AsynchronousContainerBaseTypeClass`](type_classes.AsynchronousContainerBaseTypeClass.md)<[`Type`](EventSource.Type.md)\>

  ↳ **`Signature`**

## Table of contents

### Constructor Methods

- [create](EventSource.Signature.md#create)
- [generate](EventSource.Signature.md#generate)
- [zip](EventSource.Signature.md#zip)

### Operator Methods

- [distinctUntilChanged](EventSource.Signature.md#distinctuntilchanged)
- [flatMapIterable](EventSource.Signature.md#flatmapiterable)
- [forEach](EventSource.Signature.md#foreach)
- [ignoreElements](EventSource.Signature.md#ignoreelements)
- [keep](EventSource.Signature.md#keep)
- [keepType](EventSource.Signature.md#keeptype)
- [map](EventSource.Signature.md#map)
- [mapTo](EventSource.Signature.md#mapto)
- [pairwise](EventSource.Signature.md#pairwise)
- [pick](EventSource.Signature.md#pick)
- [scan](EventSource.Signature.md#scan)
- [skipFirst](EventSource.Signature.md#skipfirst)
- [takeFirst](EventSource.Signature.md#takefirst)
- [takeLast](EventSource.Signature.md#takelast)
- [takeWhile](EventSource.Signature.md#takewhile)
- [zipWith](EventSource.Signature.md#zipwith)

### Other Methods

- [addEventHandler](EventSource.Signature.md#addeventhandler)
- [toSharedObservable](EventSource.Signature.md#tosharedobservable)

### Transform Methods

- [firstAsync](EventSource.Signature.md#firstasync)
- [lastAsync](EventSource.Signature.md#lastasync)

## Constructor Methods

### create

▸ **create**<`T`\>(`setup`): [`EventSourceLike`](types.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`EventListenerLike`](types.EventListenerLike.md)<`T`\>\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<`T`\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EventSourceLike`](types.EventSourceLike.md)<`T`\>

Generates a Container from a generator function
that is applied to an accumulator value between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> | The generator function. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<`T`\>

#### Inherited from

[StatefulContainerBaseTypeClass](type_classes.StatefulContainerBaseTypeClass.md).[generate](type_classes.StatefulContainerBaseTypeClass.md#generate)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |
| `h` | [`EventSourceLike`](types.EventSourceLike.md)<`TH`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |
| `h` | [`EventSourceLike`](types.EventSourceLike.md)<`TH`\> |
| `i` | [`EventSourceLike`](types.EventSourceLike.md)<`TI`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[distinctUntilChanged](type_classes.ContainerTypeClass.md#distinctuntilchanged)

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[flatMapIterable](type_classes.ContainerTypeClass.md#flatmapiterable)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forEach](type_classes.ContainerTypeClass.md#foreach)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `unknown`, `T`\>

#### Inherited from

[StatefulContainerBaseTypeClass](type_classes.StatefulContainerBaseTypeClass.md).[ignoreElements](type_classes.StatefulContainerBaseTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[keep](type_classes.ContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[keepType](type_classes.ContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[map](type_classes.ContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[mapTo](type_classes.ContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pairwise](type_classes.ContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`[`TKey`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[scan](type_classes.ContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[skipFirst](type_classes.ContainerTypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeFirst](type_classes.ContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeLast](type_classes.ContainerTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeWhile](type_classes.ContainerTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |
| `h` | [`EventSourceLike`](types.EventSourceLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |
| `h` | [`EventSourceLike`](types.EventSourceLike.md)<`TH`\> |
| `i` | [`EventSourceLike`](types.EventSourceLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](EventSource.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

___

## Other Methods

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

___

### toSharedObservable

▸ **toSharedObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

#### Inherited from

[AsynchronousContainerBaseTypeClass](type_classes.AsynchronousContainerBaseTypeClass.md).[toSharedObservable](type_classes.AsynchronousContainerBaseTypeClass.md#tosharedobservable)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[firstAsync](type_classes.ContainerTypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[lastAsync](type_classes.ContainerTypeClass.md#lastasync)
