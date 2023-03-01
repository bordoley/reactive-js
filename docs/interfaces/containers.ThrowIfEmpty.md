[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ThrowIfEmpty

# Interface: ThrowIfEmpty<C, O\>

[containers](../modules/containers.md).ThrowIfEmpty

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ThrowIfEmpty`**

## Table of contents

### Operator Methods

- [throwIfEmpty](containers.ThrowIfEmpty.md#throwifempty)

## Operator Methods

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

Returns a ContainerLike that emits an error if the source completes without emitting a value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`unknown`\> | A factory function invoked to produce the error to be thrown. |
| `options?` | `O` | - |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
