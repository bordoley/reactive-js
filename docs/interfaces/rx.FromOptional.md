[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FromOptional

# Interface: FromOptional<C\>

[rx](../modules/rx.md).FromOptional

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`FromOptional`](containers.FromOptional.md)<`C`\>

  ↳ **`FromOptional`**

## Table of contents

### Constructor Methods

- [fromOptional](rx.FromOptional.md#fromoptional)

## Constructor Methods

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Overrides

[FromOptional](containers.FromOptional.md).[fromOptional](containers.FromOptional.md#fromoptional)
