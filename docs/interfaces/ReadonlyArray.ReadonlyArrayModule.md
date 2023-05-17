[Reactive-JS](../README.md) / [ReadonlyArray](../modules/ReadonlyArray.md) / ReadonlyArrayModule

# Interface: ReadonlyArrayModule

[ReadonlyArray](../modules/ReadonlyArray.md).ReadonlyArrayModule

## Hierarchy

- [`ConcreteKeyedContainerTypeClass`](type_classes.ConcreteKeyedContainerTypeClass.md)<[`Type`](../modules/ReadonlyArray.md#type)\>

- `Omit`<[`EnumerableContainerTypeClass`](type_classes.EnumerableContainerTypeClass.md)<[`Type`](../modules/ReadonlyArray.md#type)\>, keyof [`ConcreteKeyedContainerTypeClass`](type_classes.ConcreteKeyedContainerTypeClass.md)<[`Type`](../modules/ReadonlyArray.md#type)\> \| ``"enumerate"`` \| ``"keepType"``\>

  ↳ **`ReadonlyArrayModule`**

## Table of contents

### Operator Properties

- [concatAll](ReadonlyArray.ReadonlyArrayModule.md#concatall)
- [concatMap](ReadonlyArray.ReadonlyArrayModule.md#concatmap)
- [concatWith](ReadonlyArray.ReadonlyArrayModule.md#concatwith)

### Transform Properties

- [contains](ReadonlyArray.ReadonlyArrayModule.md#contains)

### Constructor Methods

- [concat](ReadonlyArray.ReadonlyArrayModule.md#concat)
- [empty](ReadonlyArray.ReadonlyArrayModule.md#empty)
- [fromEnumerable](ReadonlyArray.ReadonlyArrayModule.md#fromenumerable)
- [fromEnumeratorFactory](ReadonlyArray.ReadonlyArrayModule.md#fromenumeratorfactory)
- [fromFactory](ReadonlyArray.ReadonlyArrayModule.md#fromfactory)
- [fromIterable](ReadonlyArray.ReadonlyArrayModule.md#fromiterable)
- [fromOptional](ReadonlyArray.ReadonlyArrayModule.md#fromoptional)
- [fromReadonlyArray](ReadonlyArray.ReadonlyArrayModule.md#fromreadonlyarray)
- [fromValue](ReadonlyArray.ReadonlyArrayModule.md#fromvalue)
- [zip](ReadonlyArray.ReadonlyArrayModule.md#zip)

### Operator Methods

- [distinctUntilChanged](ReadonlyArray.ReadonlyArrayModule.md#distinctuntilchanged)
- [endWith](ReadonlyArray.ReadonlyArrayModule.md#endwith)
- [flatMapIterable](ReadonlyArray.ReadonlyArrayModule.md#flatmapiterable)
- [forEach](ReadonlyArray.ReadonlyArrayModule.md#foreach)
- [forEachWithKey](ReadonlyArray.ReadonlyArrayModule.md#foreachwithkey)
- [ignoreElements](ReadonlyArray.ReadonlyArrayModule.md#ignoreelements)
- [keep](ReadonlyArray.ReadonlyArrayModule.md#keep)
- [keepType](ReadonlyArray.ReadonlyArrayModule.md#keeptype)
- [keepWithKey](ReadonlyArray.ReadonlyArrayModule.md#keepwithkey)
- [map](ReadonlyArray.ReadonlyArrayModule.md#map)
- [mapTo](ReadonlyArray.ReadonlyArrayModule.md#mapto)
- [mapWithKey](ReadonlyArray.ReadonlyArrayModule.md#mapwithkey)
- [pairwise](ReadonlyArray.ReadonlyArrayModule.md#pairwise)
- [pick](ReadonlyArray.ReadonlyArrayModule.md#pick)
- [scan](ReadonlyArray.ReadonlyArrayModule.md#scan)
- [skipFirst](ReadonlyArray.ReadonlyArrayModule.md#skipfirst)
- [startWith](ReadonlyArray.ReadonlyArrayModule.md#startwith)
- [takeFirst](ReadonlyArray.ReadonlyArrayModule.md#takefirst)
- [takeLast](ReadonlyArray.ReadonlyArrayModule.md#takelast)
- [takeWhile](ReadonlyArray.ReadonlyArrayModule.md#takewhile)
- [zipWith](ReadonlyArray.ReadonlyArrayModule.md#zipwith)

### Other Methods

- [buffer](ReadonlyArray.ReadonlyArrayModule.md#buffer)
- [flow](ReadonlyArray.ReadonlyArrayModule.md#flow)

### Transform Methods

- [entries](ReadonlyArray.ReadonlyArrayModule.md#entries)
- [enumerate](ReadonlyArray.ReadonlyArrayModule.md#enumerate)
- [everySatisfy](ReadonlyArray.ReadonlyArrayModule.md#everysatisfy)
- [first](ReadonlyArray.ReadonlyArrayModule.md#first)
- [last](ReadonlyArray.ReadonlyArrayModule.md#last)
- [noneSatisfy](ReadonlyArray.ReadonlyArrayModule.md#nonesatisfy)
- [reduce](ReadonlyArray.ReadonlyArrayModule.md#reduce)
- [reduceWithKey](ReadonlyArray.ReadonlyArrayModule.md#reducewithkey)
- [someSatisfy](ReadonlyArray.ReadonlyArrayModule.md#somesatisfy)
- [toIterable](ReadonlyArray.ReadonlyArrayModule.md#toiterable)
- [toObservable](ReadonlyArray.ReadonlyArrayModule.md#toobservable)
- [toReadonlyArray](ReadonlyArray.ReadonlyArrayModule.md#toreadonlyarray)
- [values](ReadonlyArray.ReadonlyArrayModule.md#values)

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), readonly `T`[], `T`\>

#### Type declaration

▸ <`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), readonly `T`[], `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), readonly `T`[], `T`\>

#### Inherited from

Omit.concatAll

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, readonly `TB`[]\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, readonly `TB`[]\> |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, `TB`\>

#### Inherited from

Omit.concatMap

___

### concatWith

• **concatWith**: <T\>(`snd`: readonly `T`[], ...`tail`: readonly readonly T[][]) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | readonly `T`[] |
| `...tail` | readonly readonly T[][] |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

#### Inherited from

Omit.concatWith

___

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<readonly `T`[], `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `boolean`\>

#### Inherited from

Omit.contains

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): readonly `T`[]

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | readonly `T`[] |
| `snd` | readonly `T`[] |
| `...tail` | readonly readonly T[][] |

#### Returns

readonly `T`[]

#### Inherited from

Omit.concat

___

### empty

▸ **empty**<`T`\>(): readonly `T`[]

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

readonly `T`[]

#### Inherited from

Omit.empty

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

#### Inherited from

Omit.fromEnumerable

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, readonly `T`[]\>

#### Inherited from

Omit.fromEnumeratorFactory

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, readonly `T`[]\>

#### Inherited from

Omit.fromFactory

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

#### Inherited from

Omit.fromIterable

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, readonly `T`[]\>

#### Inherited from

Omit.fromOptional

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Inherited from

Omit.fromReadonlyArray

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, readonly `T`[]\>

#### Inherited from

Omit.fromValue

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): readonly readonly [`TA`, `TB`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |

#### Returns

readonly readonly [`TA`, `TB`][]

#### Inherited from

Omit.zip

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): readonly readonly [`TA`, `TB`, `TC`][]

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`][]

#### Inherited from

Omit.zip

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): readonly readonly [`TA`, `TB`, `TC`, `TD`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`][]

#### Inherited from

Omit.zip

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`][]

#### Inherited from

Omit.zip

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`][]

#### Inherited from

Omit.zip

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`][]

#### Inherited from

Omit.zip

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |
| `h` | readonly `TH`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`][]

#### Inherited from

Omit.zip

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |
| `h` | readonly `TH`[] |
| `i` | readonly `TI`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`][]

#### Inherited from

Omit.zip

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

#### Inherited from

Omit.distinctUntilChanged

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

#### Inherited from

Omit.endWith

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, `TB`\>

#### Inherited from

Omit.flatMapIterable

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[forEach](type_classes.ConcreteKeyedContainerTypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[forEachWithKey](type_classes.ConcreteKeyedContainerTypeClass.md#foreachwithkey)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `unknown`, `T`\>

#### Inherited from

Omit.ignoreElements

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[keep](type_classes.ConcreteKeyedContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, `TB`\>

#### Overrides

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[keepType](type_classes.ConcreteKeyedContainerTypeClass.md#keeptype)

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

#### Overrides

ConcreteKeyedContainerTypeClass.keepType

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[keepWithKey](type_classes.ConcreteKeyedContainerTypeClass.md#keepwithkey)

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[map](type_classes.ConcreteKeyedContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, `TB`\>

#### Inherited from

Omit.mapTo

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[mapWithKey](type_classes.ConcreteKeyedContainerTypeClass.md#mapwithkey)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

Omit.pairwise

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`[`TKey`]\>

#### Inherited from

Omit.pick

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

Omit.pick

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

Omit.pick

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `TAcc`\>

#### Inherited from

Omit.scan

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

#### Inherited from

Omit.skipFirst

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

#### Inherited from

Omit.startWith

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

#### Inherited from

Omit.takeFirst

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

#### Inherited from

Omit.takeLast

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, `T`\>

#### Inherited from

Omit.takeWhile

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | readonly `TB`[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

Omit.zipWith

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

Omit.zipWith

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

Omit.zipWith

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

Omit.zipWith

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

Omit.zipWith

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

Omit.zipWith

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |
| `h` | readonly `TH`[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

Omit.zipWith

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |
| `h` | readonly `TH`[] |
| `i` | readonly `TI`[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

Omit.zipWith

___

## Other Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer.md), `T`, readonly `T`[]\>

#### Inherited from

Omit.buffer

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[entries](type_classes.ConcreteKeyedContainerTypeClass.md#entries)

___

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

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

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `boolean`\>

#### Inherited from

Omit.everySatisfy

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

Omit.first

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

Omit.last

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `boolean`\>

#### Inherited from

Omit.noneSatisfy

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `TAcc`\>

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[reduce](type_classes.ConcreteKeyedContainerTypeClass.md#reduce)

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `TAcc`\>

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[reduceWithKey](type_classes.ConcreteKeyedContainerTypeClass.md#reducewithkey)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `boolean`\>

#### Inherited from

Omit.someSatisfy

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

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

#### Overrides

Omit.toIterable

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |
| `options.start` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.start` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count?` | `number` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Inherited from

Omit.toReadonlyArray

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[ConcreteKeyedContainerTypeClass](type_classes.ConcreteKeyedContainerTypeClass.md).[values](type_classes.ConcreteKeyedContainerTypeClass.md#values)
