[Reactive-JS](../README.md) / [rx](../modules/rx.md) / DispatchTo

# Interface: DispatchTo<C, O\>

[rx](../modules/rx.md).DispatchTo

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`DispatchTo`**

## Table of contents

### Operator Methods

- [dispatchTo](rx.DispatchTo.md#dispatchto)

## Operator Methods

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`QueueableLike`](util.QueueableLike.md)<`T`\> \| [`Function1`](../modules/functions.md#function1)<`T`, `boolean`\> |
| `options?` | `O` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
