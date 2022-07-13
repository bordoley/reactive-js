[Reactive-JS](../README.md) / rx/RunnableLike

# Module: rx/RunnableLike

## Table of contents

### Interfaces

- [RunnableLike](../interfaces/rx_RunnableLike.RunnableLike.md)

### Type Aliases

- [ToRunnable](rx_RunnableLike.md#torunnable)

## Type Aliases

### ToRunnable

Ƭ **ToRunnable**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `toRunnable`: <T\>() => [`Function1`](util_functions.md#function1)<[`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, [`RunnableLike`](../interfaces/rx_RunnableLike.RunnableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |
