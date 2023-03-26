[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Enqueue

# Interface: Enqueue<C, O\>

[rx](../modules/rx.md).Enqueue

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Enqueue`**

## Table of contents

### Operator Methods

- [enqueue](rx.Enqueue.md#enqueue)

## Operator Methods

### enqueue

▸ **enqueue**<`T`\>(`queue`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](util.QueueableLike.md)<`T`\> \| [`Function1`](../modules/functions.md#function1)<`T`, `boolean`\> |
| `options?` | `O` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
