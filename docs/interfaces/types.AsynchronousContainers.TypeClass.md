[Reactive-JS](../README.md) / [types](../modules/types.md) / [AsynchronousContainers](../modules/types.AsynchronousContainers.md) / TypeClass

# Interface: TypeClass<C\>

[types](../modules/types.md).[AsynchronousContainers](../modules/types.AsynchronousContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- **`TypeClass`**

  ↳ [`TypeClass`](types.ObservableContainer.TypeClass.md)

## Table of contents

### Constructor Methods

- [fromAsyncIterable](types.AsynchronousContainers.TypeClass.md#fromasynciterable)

## Constructor Methods

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>\>
