[Reactive-JS](../README.md) / [container](../modules/container.md) / Using

# Interface: Using<C\>

[container](../modules/container.md).Using

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Using`**

## Table of contents

### Properties

- [type](container.Using.md#type)

### Methods

- [using](container.Using.md#using)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### using

▸ **using**<`TResource`, `T`\>(`resourceFactory`, `containerFactory`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](../modules/functions.md#factory)<`TResource`\> |
| `containerFactory` | [`Function1`](../modules/functions.md#function1)<`TResource`, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\> |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

▸ **using**<`TResource1`, `TResource2`, `T`\>(`resourceFactory`, `containerFactory`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](../modules/functions.md#factory)<[`TResource1`, `TResource2`]\> |
| `containerFactory` | [`Function2`](../modules/functions.md#function2)<`TResource1`, `TResource2`, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\> |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `T`\>(`resourceFactory`, `containerFactory`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](../modules/functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`]\> |
| `containerFactory` | [`Function3`](../modules/functions.md#function3)<`TResource1`, `TResource2`, `TResource3`, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\> |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `T`\>(`resourceFactory`, `containerFactory`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](../modules/functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`]\> |
| `containerFactory` | [`Function4`](../modules/functions.md#function4)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\> |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, `T`\>(`resourceFactory`, `containerFactory`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `TResource5` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](../modules/functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`]\> |
| `containerFactory` | [`Function5`](../modules/functions.md#function5)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\> |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

▸ **using**<`TResource`, `T`\>(`resourceFactory`, `runnableFactory`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](../modules/functions.md#factory)<`TResource` \| readonly `TResource`[]\> |
| `runnableFactory` | (...`resources`: readonly `TResource`[]) => [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\> |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>
