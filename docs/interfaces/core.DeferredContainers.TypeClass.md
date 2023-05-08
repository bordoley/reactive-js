[Reactive-JS](../README.md) / [core](../modules/core.md) / [DeferredContainers](../modules/core.DeferredContainers.md) / TypeClass

# Interface: TypeClass<C\>

[core](../modules/core.md).[DeferredContainers](../modules/core.DeferredContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container.md) |

## Hierarchy

- [`TypeClass`](core.Containers.TypeClass.md)<`C`\>

  ↳ **`TypeClass`**

  ↳↳ [`TypeClass`](core.ReactiveContainers.TypeClass.md)

## Table of contents

### Operator Properties

- [concatAll](core.DeferredContainers.TypeClass.md#concatall)
- [concatMap](core.DeferredContainers.TypeClass.md#concatmap)
- [concatWith](core.DeferredContainers.TypeClass.md#concatwith)

### Constructor Methods

- [concat](core.DeferredContainers.TypeClass.md#concat)

### Operator Methods

- [endWith](core.DeferredContainers.TypeClass.md#endwith)
- [forkConcat](core.DeferredContainers.TypeClass.md#forkconcat)
- [repeat](core.DeferredContainers.TypeClass.md#repeat)
- [startWith](core.DeferredContainers.TypeClass.md#startwith)

### Transform Methods

- [flow](core.DeferredContainers.TypeClass.md#flow)

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `T`\>

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### concatWith

• **concatWith**: <T\>(`snd`: [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, ...`tail`: readonly [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>[]) => [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Of`](../modules/core.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>[] |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Of`](../modules/core.Containers.md#of)<`C`, `T`\> |
| `snd` | [`Of`](../modules/core.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>[] |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

## Operator Methods

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/core.Containers.md#operator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TIn`, `TOut`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

## Transform Methods

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>
