[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [AsynchronousContainers](../modules/containers.AsynchronousContainers.md) / TypeClass

# Interface: TypeClass<C\>

[containers](../modules/containers.md).[AsynchronousContainers](../modules/containers.AsynchronousContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container.md) |

## Hierarchy

- **`TypeClass`**

  ↳ [`TypeClass`](containers.ObservableContainer.TypeClass.md)

## Table of contents

### Constructor Methods

- [fromAsyncIterable](containers.AsynchronousContainers.TypeClass.md#fromasynciterable)

## Constructor Methods

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>
