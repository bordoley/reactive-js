[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReadonlyArrayContainer](../modules/core.ReadonlyArrayContainer.md) / TypeClass

# Interface: TypeClass

[core](../modules/core.md).[ReadonlyArrayContainer](../modules/core.ReadonlyArrayContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](core.KeyedContainers.TypeClass.md)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md)\>

- [`TypeClass`](core.DeferredContainers.TypeClass.md)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md)\>

- [`TypeClass`](core.RunnableContainers.TypeClass.md)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Constructor Properties

- [empty](core.ReadonlyArrayContainer.TypeClass.md#empty)
- [fromReadonlyArray](core.ReadonlyArrayContainer.TypeClass.md#fromreadonlyarray)
- [fromRunnable](core.ReadonlyArrayContainer.TypeClass.md#fromrunnable)

### Operator Properties

- [concatAll](core.ReadonlyArrayContainer.TypeClass.md#concatall)
- [concatMap](core.ReadonlyArrayContainer.TypeClass.md#concatmap)
- [concatWith](core.ReadonlyArrayContainer.TypeClass.md#concatwith)

### Transform Properties

- [contains](core.ReadonlyArrayContainer.TypeClass.md#contains)
- [reduce](core.ReadonlyArrayContainer.TypeClass.md#reduce)
- [toReadonlyArray](core.ReadonlyArrayContainer.TypeClass.md#toreadonlyarray)
- [toRunnable](core.ReadonlyArrayContainer.TypeClass.md#torunnable)

### Constructor Methods

- [concat](core.ReadonlyArrayContainer.TypeClass.md#concat)
- [fromEntries](core.ReadonlyArrayContainer.TypeClass.md#fromentries)
- [fromEnumerable](core.ReadonlyArrayContainer.TypeClass.md#fromenumerable)
- [fromEnumeratorFactory](core.ReadonlyArrayContainer.TypeClass.md#fromenumeratorfactory)
- [fromFactory](core.ReadonlyArrayContainer.TypeClass.md#fromfactory)
- [fromIterable](core.ReadonlyArrayContainer.TypeClass.md#fromiterable)
- [fromOptional](core.ReadonlyArrayContainer.TypeClass.md#fromoptional)
- [generate](core.ReadonlyArrayContainer.TypeClass.md#generate)

### Operator Methods

- [endWith](core.ReadonlyArrayContainer.TypeClass.md#endwith)
- [forEach](core.ReadonlyArrayContainer.TypeClass.md#foreach)
- [forEachWithKey](core.ReadonlyArrayContainer.TypeClass.md#foreachwithkey)
- [forkConcat](core.ReadonlyArrayContainer.TypeClass.md#forkconcat)
- [identity](core.ReadonlyArrayContainer.TypeClass.md#identity)
- [keep](core.ReadonlyArrayContainer.TypeClass.md#keep)
- [keepType](core.ReadonlyArrayContainer.TypeClass.md#keeptype)
- [keepWithKey](core.ReadonlyArrayContainer.TypeClass.md#keepwithkey)
- [map](core.ReadonlyArrayContainer.TypeClass.md#map)
- [mapWithKey](core.ReadonlyArrayContainer.TypeClass.md#mapwithkey)
- [repeat](core.ReadonlyArrayContainer.TypeClass.md#repeat)
- [retry](core.ReadonlyArrayContainer.TypeClass.md#retry)
- [startWith](core.ReadonlyArrayContainer.TypeClass.md#startwith)

### Transform Methods

- [entries](core.ReadonlyArrayContainer.TypeClass.md#entries)
- [everySatisfy](core.ReadonlyArrayContainer.TypeClass.md#everysatisfy)
- [first](core.ReadonlyArrayContainer.TypeClass.md#first)
- [flow](core.ReadonlyArrayContainer.TypeClass.md#flow)
- [keySet](core.ReadonlyArrayContainer.TypeClass.md#keyset)
- [keys](core.ReadonlyArrayContainer.TypeClass.md#keys)
- [last](core.ReadonlyArrayContainer.TypeClass.md#last)
- [noneSatisfy](core.ReadonlyArrayContainer.TypeClass.md#nonesatisfy)
- [reduceWithKey](core.ReadonlyArrayContainer.TypeClass.md#reducewithkey)
- [someSatisfy](core.ReadonlyArrayContainer.TypeClass.md#somesatisfy)
- [values](core.ReadonlyArrayContainer.TypeClass.md#values)

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

[TypeClass](core.DeferredContainers.TypeClass.md).[empty](core.DeferredContainers.TypeClass.md#empty)

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

[TypeClass](core.DeferredContainers.TypeClass.md).[fromReadonlyArray](core.DeferredContainers.TypeClass.md#fromreadonlyarray)

___

### fromRunnable

• **fromRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, readonly `T`[]\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, readonly `T`[]\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[fromRunnable](core.DeferredContainers.TypeClass.md#fromrunnable)

___

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), readonly `T`[], `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), readonly `T`[], `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), readonly `T`[], `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[concatAll](core.DeferredContainers.TypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, readonly `TB`[]\>) => [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[concatMap](core.DeferredContainers.TypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: readonly `T`[], ...`tail`: readonly readonly T[][]) => [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[concatWith](core.DeferredContainers.TypeClass.md#concatwith)

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

[TypeClass](core.RunnableContainers.TypeClass.md).[contains](core.RunnableContainers.TypeClass.md#contains)

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

[TypeClass](core.RunnableContainers.TypeClass.md).[reduce](core.RunnableContainers.TypeClass.md#reduce)

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

[TypeClass](core.RunnableContainers.TypeClass.md).[toReadonlyArray](core.RunnableContainers.TypeClass.md#toreadonlyarray)

___

### toRunnable

• **toRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[toRunnable](core.RunnableContainers.TypeClass.md#torunnable)

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

[TypeClass](core.DeferredContainers.TypeClass.md).[concat](core.DeferredContainers.TypeClass.md#concat)

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<[`TKey`, `T`]\>, readonly `T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<[`TKey`, `T`]\>, readonly `T`[]\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[fromEntries](core.KeyedContainers.TypeClass.md#fromentries)

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](core.EnumerableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](core.EnumerableLike.md)<`T`\>, readonly `T`[]\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[fromEnumerable](core.DeferredContainers.TypeClass.md#fromenumerable)

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
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\> |

#### Returns

readonly `T`[]

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[fromEnumeratorFactory](core.DeferredContainers.TypeClass.md#fromenumeratorfactory)

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

[TypeClass](core.DeferredContainers.TypeClass.md).[fromFactory](core.DeferredContainers.TypeClass.md#fromfactory)

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

[TypeClass](core.DeferredContainers.TypeClass.md).[fromIterable](core.DeferredContainers.TypeClass.md#fromiterable)

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

[TypeClass](core.DeferredContainers.TypeClass.md).[fromOptional](core.DeferredContainers.TypeClass.md#fromoptional)

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

[TypeClass](core.DeferredContainers.TypeClass.md).[generate](core.DeferredContainers.TypeClass.md#generate)

___

## Operator Methods

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[endWith](core.DeferredContainers.TypeClass.md#endwith)

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

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

[`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[forEach](core.KeyedContainers.TypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

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

[`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[forEachWithKey](core.KeyedContainers.TypeClass.md#foreachwithkey)

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TIn`, `TOut`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[forkConcat](core.DeferredContainers.TypeClass.md#forkconcat)

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[identity](core.KeyedContainers.TypeClass.md#identity)

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

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

[`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[keep](core.KeyedContainers.TypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

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

[`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[keepType](core.KeyedContainers.TypeClass.md#keeptype)

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

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

[`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[keepWithKey](core.KeyedContainers.TypeClass.md#keepwithkey)

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

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

[`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[map](core.KeyedContainers.TypeClass.md#map)

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

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

[`Operator`](../modules/core.KeyedContainers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[mapWithKey](core.KeyedContainers.TypeClass.md#mapwithkey)

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[repeat](core.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[repeat](core.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[repeat](core.DeferredContainers.TypeClass.md#repeat)

___

### retry

▸ **retry**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[retry](core.DeferredContainers.TypeClass.md#retry)

▸ **retry**<`T`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[retry](core.DeferredContainers.TypeClass.md#retry)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`ReadonlyArrayContainer`](core.ReadonlyArrayContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[startWith](core.DeferredContainers.TypeClass.md#startwith)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](core.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](core.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[entries](core.KeyedContainers.TypeClass.md#entries)

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

[TypeClass](core.RunnableContainers.TypeClass.md).[everySatisfy](core.RunnableContainers.TypeClass.md#everysatisfy)

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

[TypeClass](core.RunnableContainers.TypeClass.md).[first](core.RunnableContainers.TypeClass.md#first)

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[flow](core.RunnableContainers.TypeClass.md#flow)

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

[TypeClass](core.KeyedContainers.TypeClass.md).[keySet](core.KeyedContainers.TypeClass.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<readonly `unknown`[], [`EnumeratorLike`](core.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `unknown`[], [`EnumeratorLike`](core.EnumeratorLike.md)<`TKey`\>\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[keys](core.KeyedContainers.TypeClass.md#keys)

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

[TypeClass](core.RunnableContainers.TypeClass.md).[last](core.RunnableContainers.TypeClass.md#last)

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

[TypeClass](core.RunnableContainers.TypeClass.md).[noneSatisfy](core.RunnableContainers.TypeClass.md#nonesatisfy)

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

[TypeClass](core.KeyedContainers.TypeClass.md).[reduceWithKey](core.KeyedContainers.TypeClass.md#reducewithkey)

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

[TypeClass](core.RunnableContainers.TypeClass.md).[someSatisfy](core.RunnableContainers.TypeClass.md#somesatisfy)

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.KeyedContainers.TypeClass.md).[values](core.KeyedContainers.TypeClass.md#values)
