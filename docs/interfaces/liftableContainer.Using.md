[Reactive-JS](../README.md) / [liftableContainer](../modules/liftableContainer.md) / Using

# Interface: Using<C\>

[liftableContainer](../modules/liftableContainer.md).Using

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](liftableContainer.LiftableContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Using`**

## Table of contents

### Properties

- [TContainerOf](liftableContainer.Using.md#tcontainerof)

### Methods

- [using](liftableContainer.Using.md#using)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### using

▸ **using**<`TResource`, `T`\>(`resourceFactory`, `containerFactory`): [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource`\> |
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
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
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
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
| `TResource3` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource3`\> |
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
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
| `TResource3` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource3`\> |
| `TResource4` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource4`\> |
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
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
| `TResource3` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource3`\> |
| `TResource4` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource4`\> |
| `TResource5` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource5`\> |
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
| `TResource` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](../modules/functions.md#factory)<`TResource` \| readonly `TResource`[]\> |
| `runnableFactory` | (...`resources`: readonly `TResource`[]) => [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\> |

#### Returns

[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>
