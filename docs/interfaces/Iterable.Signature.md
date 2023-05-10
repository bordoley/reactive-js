[Reactive-JS](../README.md) / [Iterable](../modules/Iterable.md) / Signature

# Interface: Signature

[Iterable](../modules/Iterable.md).Signature

## Hierarchy

- [`EnumerableTypeClass`](type_classes.EnumerableTypeClass.md)<[`Type`](Iterable.Type.md)\>

  ↳ **`Signature`**

## Table of contents

### Operator Properties

- [concatAll](Iterable.Signature.md#concatall)
- [concatMap](Iterable.Signature.md#concatmap)
- [concatWith](Iterable.Signature.md#concatwith)
- [flatMapIterable](Iterable.Signature.md#flatmapiterable)

### Transform Properties

- [contains](Iterable.Signature.md#contains)

### Constructor Methods

- [concat](Iterable.Signature.md#concat)
- [empty](Iterable.Signature.md#empty)
- [fromEnumerable](Iterable.Signature.md#fromenumerable)
- [fromEnumeratorFactory](Iterable.Signature.md#fromenumeratorfactory)
- [fromFactory](Iterable.Signature.md#fromfactory)
- [fromIterable](Iterable.Signature.md#fromiterable)
- [fromOptional](Iterable.Signature.md#fromoptional)
- [fromReadonlyArray](Iterable.Signature.md#fromreadonlyarray)
- [fromValue](Iterable.Signature.md#fromvalue)
- [generate](Iterable.Signature.md#generate)
- [zip](Iterable.Signature.md#zip)

### Operator Methods

- [distinctUntilChanged](Iterable.Signature.md#distinctuntilchanged)
- [endWith](Iterable.Signature.md#endwith)
- [forEach](Iterable.Signature.md#foreach)
- [ignoreElements](Iterable.Signature.md#ignoreelements)
- [keep](Iterable.Signature.md#keep)
- [keepType](Iterable.Signature.md#keeptype)
- [map](Iterable.Signature.md#map)
- [mapTo](Iterable.Signature.md#mapto)
- [pairwise](Iterable.Signature.md#pairwise)
- [pick](Iterable.Signature.md#pick)
- [repeat](Iterable.Signature.md#repeat)
- [scan](Iterable.Signature.md#scan)
- [skipFirst](Iterable.Signature.md#skipfirst)
- [startWith](Iterable.Signature.md#startwith)
- [takeFirst](Iterable.Signature.md#takefirst)
- [takeLast](Iterable.Signature.md#takelast)
- [takeWhile](Iterable.Signature.md#takewhile)
- [zipWith](Iterable.Signature.md#zipwith)

### Transform Methods

- [enumerate](Iterable.Signature.md#enumerate)
- [everySatisfy](Iterable.Signature.md#everysatisfy)
- [first](Iterable.Signature.md#first)
- [firstAsync](Iterable.Signature.md#firstasync)
- [last](Iterable.Signature.md#last)
- [lastAsync](Iterable.Signature.md#lastasync)
- [noneSatisfy](Iterable.Signature.md#nonesatisfy)
- [reduce](Iterable.Signature.md#reduce)
- [someSatisfy](Iterable.Signature.md#somesatisfy)
- [toIterable](Iterable.Signature.md#toiterable)
- [toReadonlyArray](Iterable.Signature.md#toreadonlyarray)

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `Iterable`<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `Iterable`<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `Iterable`<`T`\>, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[concatAll](type_classes.EnumerableTypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[concatMap](type_classes.EnumerableTypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: `Iterable`<`T`\>, ...`tail`: readonly `Iterable`<`T`\>[]) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | `Iterable`<`T`\> |
| `...tail` | readonly `Iterable`<`T`\>[] |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[concatWith](type_classes.EnumerableTypeClass.md#concatwith)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[flatMapIterable](type_classes.EnumerableTypeClass.md#flatmapiterable)

___

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[contains](type_classes.EnumerableTypeClass.md#contains)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): `Iterable`<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | `Iterable`<`T`\> |
| `snd` | `Iterable`<`T`\> |
| `...tail` | readonly `Iterable`<`T`\>[] |

#### Returns

`Iterable`<`T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[concat](type_classes.EnumerableTypeClass.md#concat)

___

### empty

▸ **empty**<`T`\>(): `Iterable`<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Iterable`<`T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[empty](type_classes.EnumerableTypeClass.md#empty)

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[fromEnumerable](type_classes.EnumerableTypeClass.md#fromenumerable)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\> |

#### Returns

`Iterable`<`T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[fromEnumeratorFactory](type_classes.EnumerableTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[fromFactory](type_classes.EnumerableTypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[fromIterable](type_classes.EnumerableTypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[fromOptional](type_classes.EnumerableTypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[fromReadonlyArray](type_classes.EnumerableTypeClass.md#fromreadonlyarray)

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, `Iterable`<`T`\>\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[fromValue](type_classes.EnumerableTypeClass.md#fromvalue)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): `Iterable`<`T`\>

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

`Iterable`<`T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[generate](type_classes.EnumerableTypeClass.md#generate)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): `Iterable`<readonly [`TA`, `TB`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zip](type_classes.EnumerableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): `Iterable`<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zip](type_classes.EnumerableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zip](type_classes.EnumerableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zip](type_classes.EnumerableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zip](type_classes.EnumerableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zip](type_classes.EnumerableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |
| `h` | `Iterable`<`TH`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zip](type_classes.EnumerableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |
| `h` | `Iterable`<`TH`\> |
| `i` | `Iterable`<`TI`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zip](type_classes.EnumerableTypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[distinctUntilChanged](type_classes.EnumerableTypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[endWith](type_classes.EnumerableTypeClass.md#endwith)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[forEach](type_classes.EnumerableTypeClass.md#foreach)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `unknown`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[ignoreElements](type_classes.EnumerableTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[keep](type_classes.EnumerableTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[keepType](type_classes.EnumerableTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[map](type_classes.EnumerableTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, `TB`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[mapTo](type_classes.EnumerableTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[pairwise](type_classes.EnumerableTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`[`TKey`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[pick](type_classes.EnumerableTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[pick](type_classes.EnumerableTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[pick](type_classes.EnumerableTypeClass.md#pick)

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

Returns a Container that mirrors the source, repeating it whenever the predicate returns true.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[repeat](type_classes.EnumerableTypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

Returns a Container that mirrors the source, repeating it `count` times.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[repeat](type_classes.EnumerableTypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[repeat](type_classes.EnumerableTypeClass.md#repeat)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `TAcc`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[scan](type_classes.EnumerableTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[skipFirst](type_classes.EnumerableTypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[startWith](type_classes.EnumerableTypeClass.md#startwith)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[takeFirst](type_classes.EnumerableTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[takeLast](type_classes.EnumerableTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[takeWhile](type_classes.EnumerableTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Iterable`<`TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zipWith](type_classes.EnumerableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zipWith](type_classes.EnumerableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zipWith](type_classes.EnumerableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zipWith](type_classes.EnumerableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zipWith](type_classes.EnumerableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zipWith](type_classes.EnumerableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |
| `h` | `Iterable`<`TH`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zipWith](type_classes.EnumerableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |
| `h` | `Iterable`<`TH`\> |
| `i` | `Iterable`<`TI`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Iterable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[zipWith](type_classes.EnumerableTypeClass.md#zipwith)

___

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[enumerate](type_classes.EnumerableTypeClass.md#enumerate)

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[everySatisfy](type_classes.EnumerableTypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[first](type_classes.EnumerableTypeClass.md#first)

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[firstAsync](type_classes.EnumerableTypeClass.md#firstasync)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[last](type_classes.EnumerableTypeClass.md#last)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[lastAsync](type_classes.EnumerableTypeClass.md#lastasync)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[noneSatisfy](type_classes.EnumerableTypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `TAcc`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[reduce](type_classes.EnumerableTypeClass.md#reduce)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[someSatisfy](type_classes.EnumerableTypeClass.md#somesatisfy)

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[toIterable](type_classes.EnumerableTypeClass.md#toiterable)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

#### Inherited from

[EnumerableTypeClass](type_classes.EnumerableTypeClass.md).[toReadonlyArray](type_classes.EnumerableTypeClass.md#toreadonlyarray)
