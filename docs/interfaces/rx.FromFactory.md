[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FromFactory

# Interface: FromFactory<C\>

[rx](../modules/rx.md).FromFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`FromFactory`](containers.FromFactory.md)<`C`\>

  ↳ **`FromFactory`**

## Table of contents

### Constructor Methods

- [fromFactory](rx.FromFactory.md#fromfactory)

## Constructor Methods

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Overrides

[FromFactory](containers.FromFactory.md).[fromFactory](containers.FromFactory.md#fromfactory)
