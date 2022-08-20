[Reactive-JS](../README.md) / ix

# Module: ix

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/ix.AsyncEnumerableLike.md)
- [AsyncEnumeratorLike](../interfaces/ix.AsyncEnumeratorLike.md)
- [EnumerableLike](../interfaces/ix.EnumerableLike.md)
- [InteractiveContainerLike](../interfaces/ix.InteractiveContainerLike.md)

### Type Aliases

- [ToAsyncEnumerable](ix.md#toasyncenumerable)
- [ToEnumerable](ix.md#toenumerable)

## Type Aliases

### ToAsyncEnumerable

Ƭ **ToAsyncEnumerable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toAsyncEnumerable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |

___

### ToEnumerable

Ƭ **ToEnumerable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toEnumerable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |
