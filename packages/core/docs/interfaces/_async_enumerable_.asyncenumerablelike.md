[@reactive-js/core - v0.0.37](../README.md) › ["async-enumerable"](../modules/_async_enumerable_.md) › [AsyncEnumerableLike](_async_enumerable_.asyncenumerablelike.md)

# Interface: AsyncEnumerableLike <**TReq, T**>

## Type parameters

▪ **TReq**

▪ **T**

## Hierarchy

* **AsyncEnumerableLike**

  ↳ [StreamLike](_async_enumerable_.streamlike.md)

  ↳ [StreamSinkLike](_async_enumerable_.streamsinklike.md)

## Index

### Methods

* [enumerateAsync](_async_enumerable_.asyncenumerablelike.md#enumerateasync)

## Methods

###  enumerateAsync

▸ **enumerateAsync**(`scheduler`: [SchedulerLike](_scheduler_.schedulerlike.md), `replayCount?`: number): *[AsyncEnumeratorLike](_async_enumerable_.asyncenumeratorlike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | [SchedulerLike](_scheduler_.schedulerlike.md) |
`replayCount?` | number |

**Returns:** *[AsyncEnumeratorLike](_async_enumerable_.asyncenumeratorlike.md)‹TReq, T›*
