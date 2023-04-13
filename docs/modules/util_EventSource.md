[Reactive-JS](../README.md) / util/EventSource

# Module: util/EventSource

## Table of contents

### Constructor Functions

- [empty](util_EventSource.md#empty)

### Operator Functions

- [keep](util_EventSource.md#keep)
- [map](util_EventSource.md#map)

### Transform Functions

- [toObservable](util_EventSource.md#toobservable)

## Constructor Functions

### empty

▸ **empty**<`T`\>(`options?`): [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>

Return an ContainerLike that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>

___

## Operator Functions

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`unknown`\>, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`unknown`\>, `TA`, `TB`\>

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
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `Object` | - |
| `options.replay?` | `number` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`unknown`\>, `TA`, `TB`\>

___

## Transform Functions

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>
