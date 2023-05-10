[Reactive-JS](../README.md) / [Enumerator](../modules/Enumerator.md) / Signature

# Interface: Signature

[Enumerator](../modules/Enumerator.md).Signature

## Hierarchy

- [`BlockingContainerTypeClass`](type_classes.BlockingContainerTypeClass.md)<[`Type`](Enumerator.Type.md)\>

  ↳ **`Signature`**

## Table of contents

### Operator Properties

- [flatMapIterable](Enumerator.Signature.md#flatmapiterable)

### Constructor Methods

- [empty](Enumerator.Signature.md#empty)
- [fromEnumerable](Enumerator.Signature.md#fromenumerable)
- [fromEnumeratorFactory](Enumerator.Signature.md#fromenumeratorfactory)
- [fromFactory](Enumerator.Signature.md#fromfactory)
- [fromIterable](Enumerator.Signature.md#fromiterable)
- [fromOptional](Enumerator.Signature.md#fromoptional)
- [fromReadonlyArray](Enumerator.Signature.md#fromreadonlyarray)
- [fromValue](Enumerator.Signature.md#fromvalue)
- [generate](Enumerator.Signature.md#generate)
- [zip](Enumerator.Signature.md#zip)

### Operator Methods

- [distinctUntilChanged](Enumerator.Signature.md#distinctuntilchanged)
- [forEach](Enumerator.Signature.md#foreach)
- [ignoreElements](Enumerator.Signature.md#ignoreelements)
- [keep](Enumerator.Signature.md#keep)
- [keepType](Enumerator.Signature.md#keeptype)
- [map](Enumerator.Signature.md#map)
- [mapTo](Enumerator.Signature.md#mapto)
- [pairwise](Enumerator.Signature.md#pairwise)
- [pick](Enumerator.Signature.md#pick)
- [scan](Enumerator.Signature.md#scan)
- [skipFirst](Enumerator.Signature.md#skipfirst)
- [takeFirst](Enumerator.Signature.md#takefirst)
- [takeLast](Enumerator.Signature.md#takelast)
- [takeWhile](Enumerator.Signature.md#takewhile)
- [zipWith](Enumerator.Signature.md#zipwith)

### Transform Methods

- [firstAsync](Enumerator.Signature.md#firstasync)
- [lastAsync](Enumerator.Signature.md#lastasync)
- [toReadonlyArray](Enumerator.Signature.md#toreadonlyarray)

## Operator Properties

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[flatMapIterable](type_classes.BlockingContainerTypeClass.md#flatmapiterable)

## Constructor Methods

### empty

▸ **empty**<`T`\>(): [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[empty](type_classes.BlockingContainerTypeClass.md#empty)

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[fromEnumerable](type_classes.BlockingContainerTypeClass.md#fromenumerable)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[fromEnumeratorFactory](type_classes.BlockingContainerTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`): [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[fromFactory](type_classes.BlockingContainerTypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[fromIterable](type_classes.BlockingContainerTypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[fromOptional](type_classes.BlockingContainerTypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[fromReadonlyArray](type_classes.BlockingContainerTypeClass.md#fromreadonlyarray)

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[fromValue](type_classes.BlockingContainerTypeClass.md#fromvalue)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

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

[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[generate](type_classes.BlockingContainerTypeClass.md#generate)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zip](type_classes.BlockingContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zip](type_classes.BlockingContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zip](type_classes.BlockingContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zip](type_classes.BlockingContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zip](type_classes.BlockingContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zip](type_classes.BlockingContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TH`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zip](type_classes.BlockingContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TH`\> |
| `i` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TI`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zip](type_classes.BlockingContainerTypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[distinctUntilChanged](type_classes.BlockingContainerTypeClass.md#distinctuntilchanged)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[forEach](type_classes.BlockingContainerTypeClass.md#foreach)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `unknown`, `T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[ignoreElements](type_classes.BlockingContainerTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[keep](type_classes.BlockingContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[keepType](type_classes.BlockingContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[map](type_classes.BlockingContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[mapTo](type_classes.BlockingContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[pairwise](type_classes.BlockingContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKey`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[pick](type_classes.BlockingContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[pick](type_classes.BlockingContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[pick](type_classes.BlockingContainerTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TAcc`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[scan](type_classes.BlockingContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[skipFirst](type_classes.BlockingContainerTypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[takeFirst](type_classes.BlockingContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[takeLast](type_classes.BlockingContainerTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[takeWhile](type_classes.BlockingContainerTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zipWith](type_classes.BlockingContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zipWith](type_classes.BlockingContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zipWith](type_classes.BlockingContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zipWith](type_classes.BlockingContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zipWith](type_classes.BlockingContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zipWith](type_classes.BlockingContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zipWith](type_classes.BlockingContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TH`\> |
| `i` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[zipWith](type_classes.BlockingContainerTypeClass.md#zipwith)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[firstAsync](type_classes.BlockingContainerTypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[lastAsync](type_classes.BlockingContainerTypeClass.md#lastasync)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, readonly `T`[]\>

#### Inherited from

[BlockingContainerTypeClass](type_classes.BlockingContainerTypeClass.md).[toReadonlyArray](type_classes.BlockingContainerTypeClass.md#toreadonlyarray)
