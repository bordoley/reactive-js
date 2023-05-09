[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [DeferredContainers](../modules/containers.DeferredContainers.md) / TypeClass

# Interface: TypeClass<C\>

[containers](../modules/containers.md).[DeferredContainers](../modules/containers.DeferredContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container.md) |

## Hierarchy

- **`TypeClass`**

  ↳ [`TypeClass`](containers.DeferredObservableContainers.TypeClass.md)

  ↳ [`TypeClass`](containers.EnumeratorContainer.TypeClass.md)

  ↳ [`TypeClass`](containers.IterableContainer.TypeClass.md)

  ↳ [`TypeClass`](containers.ReadonlyArrayContainer.TypeClass.md)

## Table of contents

### Constructor Properties

- [fromRunnable](containers.DeferredContainers.TypeClass.md#fromrunnable)

### Operator Properties

- [concatAll](containers.DeferredContainers.TypeClass.md#concatall)
- [concatMap](containers.DeferredContainers.TypeClass.md#concatmap)
- [concatWith](containers.DeferredContainers.TypeClass.md#concatwith)

### Constructor Methods

- [concat](containers.DeferredContainers.TypeClass.md#concat)
- [empty](containers.DeferredContainers.TypeClass.md#empty)
- [fromEnumerable](containers.DeferredContainers.TypeClass.md#fromenumerable)
- [fromEnumeratorFactory](containers.DeferredContainers.TypeClass.md#fromenumeratorfactory)
- [fromFactory](containers.DeferredContainers.TypeClass.md#fromfactory)
- [fromIterable](containers.DeferredContainers.TypeClass.md#fromiterable)
- [fromOptional](containers.DeferredContainers.TypeClass.md#fromoptional)
- [fromReadonlyArray](containers.DeferredContainers.TypeClass.md#fromreadonlyarray)
- [generate](containers.DeferredContainers.TypeClass.md#generate)

### Operator Methods

- [endWith](containers.DeferredContainers.TypeClass.md#endwith)
- [forkConcat](containers.DeferredContainers.TypeClass.md#forkconcat)
- [repeat](containers.DeferredContainers.TypeClass.md#repeat)
- [retry](containers.DeferredContainers.TypeClass.md#retry)
- [startWith](containers.DeferredContainers.TypeClass.md#startwith)

## Constructor Properties

### fromRunnable

• **fromRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

___

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### concatWith

• **concatWith**: <T\>(`snd`: [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, ...`tail`: readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[]) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[] |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `snd` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[] |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

___

### empty

▸ **empty**<`T`\>(): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

___

## Operator Methods

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

___

### retry

▸ **retry**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>
