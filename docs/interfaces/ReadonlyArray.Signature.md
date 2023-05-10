[Reactive-JS](../README.md) / [ReadonlyArray](../modules/ReadonlyArray.md) / Signature

# Interface: Signature

[ReadonlyArray](../modules/ReadonlyArray.md).Signature

## Hierarchy

- [`KeyedContainerTypeClass`](type_classes.KeyedContainerTypeClass.md)<[`Type`](ReadonlyArray.Type.md)\>

- [`DeferredTypeClass`](type_classes.DeferredTypeClass.md)<[`Type`](ReadonlyArray.Type.md)\>

- [`RunnableTypeClass`](type_classes.RunnableTypeClass.md)<[`Type`](ReadonlyArray.Type.md)\>

  ↳ **`Signature`**

## Table of contents

### Constructor Properties

- [empty](ReadonlyArray.Signature.md#empty)
- [fromReadonlyArray](ReadonlyArray.Signature.md#fromreadonlyarray)

### Operator Properties

- [concatAll](ReadonlyArray.Signature.md#concatall)
- [concatMap](ReadonlyArray.Signature.md#concatmap)
- [concatWith](ReadonlyArray.Signature.md#concatwith)

### Transform Properties

- [contains](ReadonlyArray.Signature.md#contains)
- [reduce](ReadonlyArray.Signature.md#reduce)
- [toReadonlyArray](ReadonlyArray.Signature.md#toreadonlyarray)

### Constructor Methods

- [concat](ReadonlyArray.Signature.md#concat)
- [fromEntries](ReadonlyArray.Signature.md#fromentries)
- [fromEnumerable](ReadonlyArray.Signature.md#fromenumerable)
- [fromEnumeratorFactory](ReadonlyArray.Signature.md#fromenumeratorfactory)
- [fromFactory](ReadonlyArray.Signature.md#fromfactory)
- [fromIterable](ReadonlyArray.Signature.md#fromiterable)
- [fromOptional](ReadonlyArray.Signature.md#fromoptional)
- [fromValue](ReadonlyArray.Signature.md#fromvalue)
- [generate](ReadonlyArray.Signature.md#generate)

### Operator Methods

- [endWith](ReadonlyArray.Signature.md#endwith)
- [forEach](ReadonlyArray.Signature.md#foreach)
- [forEachWithKey](ReadonlyArray.Signature.md#foreachwithkey)
- [forkConcat](ReadonlyArray.Signature.md#forkconcat)
- [identity](ReadonlyArray.Signature.md#identity)
- [keep](ReadonlyArray.Signature.md#keep)
- [keepType](ReadonlyArray.Signature.md#keeptype)
- [keepWithKey](ReadonlyArray.Signature.md#keepwithkey)
- [map](ReadonlyArray.Signature.md#map)
- [mapWithKey](ReadonlyArray.Signature.md#mapwithkey)
- [repeat](ReadonlyArray.Signature.md#repeat)
- [startWith](ReadonlyArray.Signature.md#startwith)

### Other Methods

- [fromAsyncIterable](ReadonlyArray.Signature.md#fromasynciterable)

### Transform Methods

- [entries](ReadonlyArray.Signature.md#entries)
- [enumerate](ReadonlyArray.Signature.md#enumerate)
- [everySatisfy](ReadonlyArray.Signature.md#everysatisfy)
- [first](ReadonlyArray.Signature.md#first)
- [keySet](ReadonlyArray.Signature.md#keyset)
- [keys](ReadonlyArray.Signature.md#keys)
- [last](ReadonlyArray.Signature.md#last)
- [noneSatisfy](ReadonlyArray.Signature.md#nonesatisfy)
- [reduceWithKey](ReadonlyArray.Signature.md#reducewithkey)
- [someSatisfy](ReadonlyArray.Signature.md#somesatisfy)
- [toIterable](ReadonlyArray.Signature.md#toiterable)
- [values](ReadonlyArray.Signature.md#values)

## Constructor Properties

### empty

• **empty**: <T, TKey\>() => readonly `T`[]

#### Type declaration

▸ <`T`, `TKey`\>(): readonly `T`[]

Return an Container that emits no items.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

##### Returns

readonly `T`[]

#### Overrides

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[empty](type_classes.DeferredTypeClass.md#empty)

___

### fromReadonlyArray

• **fromReadonlyArray**: <T, TKey\>(`options?`: { `count?`: `number` ; `start?`: `number`  }) => [`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Type declaration

▸ <`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

##### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Overrides

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromReadonlyArray](type_classes.DeferredTypeClass.md#fromreadonlyarray)

___

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), readonly `T`[], `T`\>

#### Type declaration

▸ <`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), readonly `T`[], `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), readonly `T`[], `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[concatAll](type_classes.DeferredTypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, readonly `TB`[]\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `TA`, `TB`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[concatMap](type_classes.DeferredTypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: readonly `T`[], ...`tail`: readonly readonly T[][]) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[concatWith](type_classes.DeferredTypeClass.md#concatwith)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[contains](type_classes.RunnableTypeClass.md#contains)

___

### reduce

• **reduce**: <T, TAcc, TKey\>(`reducer`: [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Function1`](../modules/functions.md#function1)<readonly `T`[], `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `TAcc`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `number` = `number` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `TAcc`\>

#### Overrides

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[reduce](type_classes.RunnableTypeClass.md#reduce)

___

### toReadonlyArray

• **toReadonlyArray**: <T, TKey\>() => [`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Type declaration

▸ <`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

##### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Overrides

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[toReadonlyArray](type_classes.RunnableTypeClass.md#toreadonlyarray)

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

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[concat](type_classes.DeferredTypeClass.md#concat)

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, readonly `T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, readonly `T`[]\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[fromEntries](type_classes.KeyedContainerTypeClass.md#fromentries)

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

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromEnumerable](type_classes.DeferredTypeClass.md#fromenumerable)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): readonly `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\> |

#### Returns

readonly `T`[]

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromEnumeratorFactory](type_classes.DeferredTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`): readonly `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

readonly `T`[]

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromFactory](type_classes.DeferredTypeClass.md#fromfactory)

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

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromIterable](type_classes.DeferredTypeClass.md#fromiterable)

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

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromOptional](type_classes.DeferredTypeClass.md#fromoptional)

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

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromValue](type_classes.DeferredTypeClass.md#fromvalue)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): readonly `T`[]

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

readonly `T`[]

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[generate](type_classes.DeferredTypeClass.md#generate)

___

## Operator Methods

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[endWith](type_classes.DeferredTypeClass.md#endwith)

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[forEach](type_classes.KeyedContainerTypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[forEachWithKey](type_classes.KeyedContainerTypeClass.md#foreachwithkey)

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `TIn`, `TOut`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[forkConcat](type_classes.DeferredTypeClass.md#forkconcat)

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[identity](type_classes.KeyedContainerTypeClass.md#identity)

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[keep](type_classes.KeyedContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[keepType](type_classes.KeyedContainerTypeClass.md#keeptype)

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[keepWithKey](type_classes.KeyedContainerTypeClass.md#keepwithkey)

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[map](type_classes.KeyedContainerTypeClass.md#map)

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](ReadonlyArray.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[mapWithKey](type_classes.KeyedContainerTypeClass.md#mapwithkey)

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[repeat](type_classes.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[repeat](type_classes.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[repeat](type_classes.DeferredTypeClass.md#repeat)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](ReadonlyArray.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[startWith](type_classes.DeferredTypeClass.md#startwith)

___

## Other Methods

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, readonly `T`[]\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromAsyncIterable](type_classes.DeferredTypeClass.md#fromasynciterable)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[entries](type_classes.KeyedContainerTypeClass.md#entries)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[everySatisfy](type_classes.RunnableTypeClass.md#everysatisfy)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[first](type_classes.RunnableTypeClass.md#first)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<readonly `unknown`[], `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `unknown`[], `ReadonlySet`<`TKey`\>\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[keySet](type_classes.KeyedContainerTypeClass.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<readonly `unknown`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `unknown`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[keys](type_classes.KeyedContainerTypeClass.md#keys)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[last](type_classes.RunnableTypeClass.md#last)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[noneSatisfy](type_classes.RunnableTypeClass.md#nonesatisfy)

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `TAcc`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[reduceWithKey](type_classes.KeyedContainerTypeClass.md#reducewithkey)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[someSatisfy](type_classes.RunnableTypeClass.md#somesatisfy)

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

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[values](type_classes.KeyedContainerTypeClass.md#values)
