[Reactive-JS](../README.md) / util/EventSource

# Module: util/EventSource

## Table of contents

### Operator Functions

- [keep](util_EventSource.md#keep)
- [map](util_EventSource.md#map)

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
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`unknown`\>, `TA`, `TB`\>

Returns a ContainerOperator that applies the `mapper` function to each
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
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `undefined` | - |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`unknown`\>, `TA`, `TB`\>
