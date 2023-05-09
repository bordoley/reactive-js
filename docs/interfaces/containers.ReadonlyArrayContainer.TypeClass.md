[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [ReadonlyArrayContainer](../modules/containers.ReadonlyArrayContainer.md) / TypeClass

# Interface: TypeClass

[containers](../modules/containers.md).[ReadonlyArrayContainer](../modules/containers.ReadonlyArrayContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](containers.KeyedContainers.TypeClass.md)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md)\>

- [`TypeClass`](containers.DeferredContainers.TypeClass.md)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md)\>

- [`TypeClass`](containers.RunnableContainers.TypeClass.md)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Constructor Properties

- [empty](containers.ReadonlyArrayContainer.TypeClass.md#empty)
- [fromReadonlyArray](containers.ReadonlyArrayContainer.TypeClass.md#fromreadonlyarray)
- [fromRunnable](containers.ReadonlyArrayContainer.TypeClass.md#fromrunnable)

### Operator Properties

- [concatAll](containers.ReadonlyArrayContainer.TypeClass.md#concatall)
- [concatMap](containers.ReadonlyArrayContainer.TypeClass.md#concatmap)
- [concatWith](containers.ReadonlyArrayContainer.TypeClass.md#concatwith)

### Transform Properties

- [contains](containers.ReadonlyArrayContainer.TypeClass.md#contains)
- [reduce](containers.ReadonlyArrayContainer.TypeClass.md#reduce)
- [toReadonlyArray](containers.ReadonlyArrayContainer.TypeClass.md#toreadonlyarray)
- [toRunnable](containers.ReadonlyArrayContainer.TypeClass.md#torunnable)

### Constructor Methods

- [concat](containers.ReadonlyArrayContainer.TypeClass.md#concat)
- [fromEntries](containers.ReadonlyArrayContainer.TypeClass.md#fromentries)
- [fromEnumerable](containers.ReadonlyArrayContainer.TypeClass.md#fromenumerable)
- [fromEnumeratorFactory](containers.ReadonlyArrayContainer.TypeClass.md#fromenumeratorfactory)
- [fromFactory](containers.ReadonlyArrayContainer.TypeClass.md#fromfactory)
- [fromIterable](containers.ReadonlyArrayContainer.TypeClass.md#fromiterable)
- [fromOptional](containers.ReadonlyArrayContainer.TypeClass.md#fromoptional)
- [generate](containers.ReadonlyArrayContainer.TypeClass.md#generate)

### Operator Methods

- [endWith](containers.ReadonlyArrayContainer.TypeClass.md#endwith)
- [forEach](containers.ReadonlyArrayContainer.TypeClass.md#foreach)
- [forEachWithKey](containers.ReadonlyArrayContainer.TypeClass.md#foreachwithkey)
- [forkConcat](containers.ReadonlyArrayContainer.TypeClass.md#forkconcat)
- [identity](containers.ReadonlyArrayContainer.TypeClass.md#identity)
- [keep](containers.ReadonlyArrayContainer.TypeClass.md#keep)
- [keepType](containers.ReadonlyArrayContainer.TypeClass.md#keeptype)
- [keepWithKey](containers.ReadonlyArrayContainer.TypeClass.md#keepwithkey)
- [map](containers.ReadonlyArrayContainer.TypeClass.md#map)
- [mapWithKey](containers.ReadonlyArrayContainer.TypeClass.md#mapwithkey)
- [repeat](containers.ReadonlyArrayContainer.TypeClass.md#repeat)
- [retry](containers.ReadonlyArrayContainer.TypeClass.md#retry)
- [startWith](containers.ReadonlyArrayContainer.TypeClass.md#startwith)

### Transform Methods

- [entries](containers.ReadonlyArrayContainer.TypeClass.md#entries)
- [everySatisfy](containers.ReadonlyArrayContainer.TypeClass.md#everysatisfy)
- [first](containers.ReadonlyArrayContainer.TypeClass.md#first)
- [flow](containers.ReadonlyArrayContainer.TypeClass.md#flow)
- [keySet](containers.ReadonlyArrayContainer.TypeClass.md#keyset)
- [keys](containers.ReadonlyArrayContainer.TypeClass.md#keys)
- [last](containers.ReadonlyArrayContainer.TypeClass.md#last)
- [noneSatisfy](containers.ReadonlyArrayContainer.TypeClass.md#nonesatisfy)
- [reduceWithKey](containers.ReadonlyArrayContainer.TypeClass.md#reducewithkey)
- [someSatisfy](containers.ReadonlyArrayContainer.TypeClass.md#somesatisfy)
- [values](containers.ReadonlyArrayContainer.TypeClass.md#values)

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

[TypeClass](containers.DeferredContainers.TypeClass.md).[empty](containers.DeferredContainers.TypeClass.md#empty)

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

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromReadonlyArray](containers.DeferredContainers.TypeClass.md#fromreadonlyarray)

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

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromRunnable](containers.DeferredContainers.TypeClass.md#fromrunnable)

___

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), readonly `T`[], `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), readonly `T`[], `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), readonly `T`[], `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[concatAll](containers.DeferredContainers.TypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, readonly `TB`[]\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[concatMap](containers.DeferredContainers.TypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: readonly `T`[], ...`tail`: readonly readonly T[][]) => [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[concatWith](containers.DeferredContainers.TypeClass.md#concatwith)

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

[TypeClass](containers.RunnableContainers.TypeClass.md).[contains](containers.RunnableContainers.TypeClass.md#contains)

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

[TypeClass](containers.RunnableContainers.TypeClass.md).[reduce](containers.RunnableContainers.TypeClass.md#reduce)

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

[TypeClass](containers.RunnableContainers.TypeClass.md).[toReadonlyArray](containers.RunnableContainers.TypeClass.md#toreadonlyarray)

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

[TypeClass](containers.RunnableContainers.TypeClass.md).[toRunnable](containers.RunnableContainers.TypeClass.md#torunnable)

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

[TypeClass](containers.DeferredContainers.TypeClass.md).[concat](containers.DeferredContainers.TypeClass.md#concat)

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

[TypeClass](containers.KeyedContainers.TypeClass.md).[fromEntries](containers.KeyedContainers.TypeClass.md#fromentries)

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

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromEnumerable](containers.DeferredContainers.TypeClass.md#fromenumerable)

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

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromEnumeratorFactory](containers.DeferredContainers.TypeClass.md#fromenumeratorfactory)

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

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromFactory](containers.DeferredContainers.TypeClass.md#fromfactory)

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

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromIterable](containers.DeferredContainers.TypeClass.md#fromiterable)

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

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromOptional](containers.DeferredContainers.TypeClass.md#fromoptional)

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

[TypeClass](containers.DeferredContainers.TypeClass.md).[generate](containers.DeferredContainers.TypeClass.md#generate)

___

## Operator Methods

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[endWith](containers.DeferredContainers.TypeClass.md#endwith)

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[forEach](containers.KeyedContainers.TypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[forEachWithKey](containers.KeyedContainers.TypeClass.md#foreachwithkey)

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[forkConcat](containers.DeferredContainers.TypeClass.md#forkconcat)

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[identity](containers.KeyedContainers.TypeClass.md#identity)

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[keep](containers.KeyedContainers.TypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[keepType](containers.KeyedContainers.TypeClass.md#keeptype)

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[keepWithKey](containers.KeyedContainers.TypeClass.md#keepwithkey)

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[map](containers.KeyedContainers.TypeClass.md#map)

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[mapWithKey](containers.KeyedContainers.TypeClass.md#mapwithkey)

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[repeat](containers.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[repeat](containers.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[repeat](containers.DeferredContainers.TypeClass.md#repeat)

___

### retry

▸ **retry**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[retry](containers.DeferredContainers.TypeClass.md#retry)

▸ **retry**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[retry](containers.DeferredContainers.TypeClass.md#retry)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`ReadonlyArrayContainer`](containers.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[startWith](containers.DeferredContainers.TypeClass.md#startwith)

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

[TypeClass](containers.KeyedContainers.TypeClass.md).[entries](containers.KeyedContainers.TypeClass.md#entries)

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

[TypeClass](containers.RunnableContainers.TypeClass.md).[everySatisfy](containers.RunnableContainers.TypeClass.md#everysatisfy)

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

[TypeClass](containers.RunnableContainers.TypeClass.md).[first](containers.RunnableContainers.TypeClass.md#first)

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

[TypeClass](containers.RunnableContainers.TypeClass.md).[flow](containers.RunnableContainers.TypeClass.md#flow)

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

[TypeClass](containers.KeyedContainers.TypeClass.md).[keySet](containers.KeyedContainers.TypeClass.md#keyset)

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

[TypeClass](containers.KeyedContainers.TypeClass.md).[keys](containers.KeyedContainers.TypeClass.md#keys)

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

[TypeClass](containers.RunnableContainers.TypeClass.md).[last](containers.RunnableContainers.TypeClass.md#last)

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

[TypeClass](containers.RunnableContainers.TypeClass.md).[noneSatisfy](containers.RunnableContainers.TypeClass.md#nonesatisfy)

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

[TypeClass](containers.KeyedContainers.TypeClass.md).[reduceWithKey](containers.KeyedContainers.TypeClass.md#reducewithkey)

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

[TypeClass](containers.RunnableContainers.TypeClass.md).[someSatisfy](containers.RunnableContainers.TypeClass.md#somesatisfy)

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

[TypeClass](containers.KeyedContainers.TypeClass.md).[values](containers.KeyedContainers.TypeClass.md#values)
