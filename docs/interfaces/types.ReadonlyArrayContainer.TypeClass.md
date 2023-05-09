[Reactive-JS](../README.md) / [types](../modules/types.md) / [ReadonlyArrayContainer](../modules/types.ReadonlyArrayContainer.md) / TypeClass

# Interface: TypeClass

[types](../modules/types.md).[ReadonlyArrayContainer](../modules/types.ReadonlyArrayContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](types.KeyedContainers.TypeClass.md)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md)\>

- [`TypeClass`](types.DeferredContainers.TypeClass.md)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md)\>

- [`TypeClass`](types.RunnableContainers.TypeClass.md)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Constructor Properties

- [empty](types.ReadonlyArrayContainer.TypeClass.md#empty)
- [fromReadonlyArray](types.ReadonlyArrayContainer.TypeClass.md#fromreadonlyarray)
- [fromRunnable](types.ReadonlyArrayContainer.TypeClass.md#fromrunnable)

### Operator Properties

- [concatAll](types.ReadonlyArrayContainer.TypeClass.md#concatall)
- [concatMap](types.ReadonlyArrayContainer.TypeClass.md#concatmap)
- [concatWith](types.ReadonlyArrayContainer.TypeClass.md#concatwith)

### Transform Properties

- [contains](types.ReadonlyArrayContainer.TypeClass.md#contains)
- [reduce](types.ReadonlyArrayContainer.TypeClass.md#reduce)
- [toReadonlyArray](types.ReadonlyArrayContainer.TypeClass.md#toreadonlyarray)
- [toRunnable](types.ReadonlyArrayContainer.TypeClass.md#torunnable)

### Constructor Methods

- [concat](types.ReadonlyArrayContainer.TypeClass.md#concat)
- [fromEntries](types.ReadonlyArrayContainer.TypeClass.md#fromentries)
- [fromEnumerable](types.ReadonlyArrayContainer.TypeClass.md#fromenumerable)
- [fromEnumeratorFactory](types.ReadonlyArrayContainer.TypeClass.md#fromenumeratorfactory)
- [fromFactory](types.ReadonlyArrayContainer.TypeClass.md#fromfactory)
- [fromIterable](types.ReadonlyArrayContainer.TypeClass.md#fromiterable)
- [fromOptional](types.ReadonlyArrayContainer.TypeClass.md#fromoptional)
- [generate](types.ReadonlyArrayContainer.TypeClass.md#generate)

### Operator Methods

- [endWith](types.ReadonlyArrayContainer.TypeClass.md#endwith)
- [forEach](types.ReadonlyArrayContainer.TypeClass.md#foreach)
- [forEachWithKey](types.ReadonlyArrayContainer.TypeClass.md#foreachwithkey)
- [forkConcat](types.ReadonlyArrayContainer.TypeClass.md#forkconcat)
- [identity](types.ReadonlyArrayContainer.TypeClass.md#identity)
- [keep](types.ReadonlyArrayContainer.TypeClass.md#keep)
- [keepType](types.ReadonlyArrayContainer.TypeClass.md#keeptype)
- [keepWithKey](types.ReadonlyArrayContainer.TypeClass.md#keepwithkey)
- [map](types.ReadonlyArrayContainer.TypeClass.md#map)
- [mapWithKey](types.ReadonlyArrayContainer.TypeClass.md#mapwithkey)
- [repeat](types.ReadonlyArrayContainer.TypeClass.md#repeat)
- [retry](types.ReadonlyArrayContainer.TypeClass.md#retry)
- [startWith](types.ReadonlyArrayContainer.TypeClass.md#startwith)

### Transform Methods

- [entries](types.ReadonlyArrayContainer.TypeClass.md#entries)
- [everySatisfy](types.ReadonlyArrayContainer.TypeClass.md#everysatisfy)
- [first](types.ReadonlyArrayContainer.TypeClass.md#first)
- [flow](types.ReadonlyArrayContainer.TypeClass.md#flow)
- [keySet](types.ReadonlyArrayContainer.TypeClass.md#keyset)
- [keys](types.ReadonlyArrayContainer.TypeClass.md#keys)
- [last](types.ReadonlyArrayContainer.TypeClass.md#last)
- [noneSatisfy](types.ReadonlyArrayContainer.TypeClass.md#nonesatisfy)
- [reduceWithKey](types.ReadonlyArrayContainer.TypeClass.md#reducewithkey)
- [someSatisfy](types.ReadonlyArrayContainer.TypeClass.md#somesatisfy)
- [values](types.ReadonlyArrayContainer.TypeClass.md#values)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[empty](types.DeferredContainers.TypeClass.md#empty)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromReadonlyArray](types.DeferredContainers.TypeClass.md#fromreadonlyarray)

___

### fromRunnable

• **fromRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, readonly `T`[]\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, readonly `T`[]\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[fromRunnable](types.DeferredContainers.TypeClass.md#fromrunnable)

___

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), readonly `T`[], `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), readonly `T`[], `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), readonly `T`[], `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[concatAll](types.DeferredContainers.TypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, readonly `TB`[]\>) => [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[concatMap](types.DeferredContainers.TypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: readonly `T`[], ...`tail`: readonly readonly T[][]) => [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[concatWith](types.DeferredContainers.TypeClass.md#concatwith)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[contains](types.RunnableContainers.TypeClass.md#contains)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[reduce](types.RunnableContainers.TypeClass.md#reduce)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[toReadonlyArray](types.RunnableContainers.TypeClass.md#toreadonlyarray)

___

### toRunnable

• **toRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](types.RunnableContainers.TypeClass.md).[toRunnable](types.RunnableContainers.TypeClass.md#torunnable)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[concat](types.DeferredContainers.TypeClass.md#concat)

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

[TypeClass](types.KeyedContainers.TypeClass.md).[fromEntries](types.KeyedContainers.TypeClass.md#fromentries)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromEnumerable](types.DeferredContainers.TypeClass.md#fromenumerable)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromEnumeratorFactory](types.DeferredContainers.TypeClass.md#fromenumeratorfactory)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromFactory](types.DeferredContainers.TypeClass.md#fromfactory)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromIterable](types.DeferredContainers.TypeClass.md#fromiterable)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromOptional](types.DeferredContainers.TypeClass.md#fromoptional)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[generate](types.DeferredContainers.TypeClass.md#generate)

___

## Operator Methods

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[endWith](types.DeferredContainers.TypeClass.md#endwith)

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

Returns a Containers.Operator that applies the side effect function to each
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

[`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](types.KeyedContainers.TypeClass.md).[forEach](types.KeyedContainers.TypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

Returns a KeyedContainers.Operator that applies the side effect function to each
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

[`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](types.KeyedContainers.TypeClass.md).[forEachWithKey](types.KeyedContainers.TypeClass.md#foreachwithkey)

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[forkConcat](types.DeferredContainers.TypeClass.md#forkconcat)

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](types.KeyedContainers.TypeClass.md).[identity](types.KeyedContainers.TypeClass.md#identity)

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
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

[`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](types.KeyedContainers.TypeClass.md).[keep](types.KeyedContainers.TypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

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

[`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](types.KeyedContainers.TypeClass.md).[keepType](types.KeyedContainers.TypeClass.md#keeptype)

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
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

[`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](types.KeyedContainers.TypeClass.md).[keepWithKey](types.KeyedContainers.TypeClass.md#keepwithkey)

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

Returns a Containers.Operator that applies the `selector` function to each
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

[`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](types.KeyedContainers.TypeClass.md).[map](types.KeyedContainers.TypeClass.md#map)

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

Returns a Containers.Operator that applies the `selector` function to each
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

[`Operator`](../modules/types.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](types.KeyedContainers.TypeClass.md).[mapWithKey](types.KeyedContainers.TypeClass.md#mapwithkey)

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[repeat](types.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[repeat](types.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[repeat](types.DeferredContainers.TypeClass.md#repeat)

___

### retry

▸ **retry**<`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[retry](types.DeferredContainers.TypeClass.md#retry)

▸ **retry**<`T`\>(`predicate`): [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, resubscrbing
if the source completes with an error which satisfies the predicate function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`number`, `unknown`, `boolean`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[retry](types.DeferredContainers.TypeClass.md#retry)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`ReadonlyArrayContainer`](types.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[startWith](types.DeferredContainers.TypeClass.md#startwith)

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

[TypeClass](types.KeyedContainers.TypeClass.md).[entries](types.KeyedContainers.TypeClass.md#entries)

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `boolean`\>

Determines whether all the members of an Container satisfy the predicate.
The predicate function is invoked for each element in the Container until the
it returns false, or until the end of the Containers.

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

[TypeClass](types.RunnableContainers.TypeClass.md).[everySatisfy](types.RunnableContainers.TypeClass.md#everysatisfy)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[first](types.RunnableContainers.TypeClass.md#first)

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

#### Inherited from

[TypeClass](types.RunnableContainers.TypeClass.md).[flow](types.RunnableContainers.TypeClass.md#flow)

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

[TypeClass](types.KeyedContainers.TypeClass.md).[keySet](types.KeyedContainers.TypeClass.md#keyset)

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

[TypeClass](types.KeyedContainers.TypeClass.md).[keys](types.KeyedContainers.TypeClass.md#keys)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[last](types.RunnableContainers.TypeClass.md#last)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[noneSatisfy](types.RunnableContainers.TypeClass.md#nonesatisfy)

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

[TypeClass](types.KeyedContainers.TypeClass.md).[reduceWithKey](types.KeyedContainers.TypeClass.md#reducewithkey)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[someSatisfy](types.RunnableContainers.TypeClass.md#somesatisfy)

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

[TypeClass](types.KeyedContainers.TypeClass.md).[values](types.KeyedContainers.TypeClass.md#values)
