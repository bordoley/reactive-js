[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FromEnumeratorFactory

# Interface: FromEnumeratorFactory<C\>

[rx](../modules/rx.md).FromEnumeratorFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |

## Hierarchy

- [`FromEnumeratorFactory`](containers.FromEnumeratorFactory.md)<`C`\>

  ↳ **`FromEnumeratorFactory`**

## Table of contents

### Constructor Methods

- [fromEnumeratorFactory](rx.FromEnumeratorFactory.md#fromenumeratorfactory)

## Constructor Methods

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](containers.EnumeratorLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Overrides

[FromEnumeratorFactory](containers.FromEnumeratorFactory.md).[fromEnumeratorFactory](containers.FromEnumeratorFactory.md#fromenumeratorfactory)
