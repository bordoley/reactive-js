[@reactive-js/async-enumerable - v0.0.34](../README.md) › [AsyncEnumerableLike](asyncenumerablelike.md)

# Interface: AsyncEnumerableLike <**TReq, T**>

## Type parameters

▪ **TReq**

▪ **T**

## Hierarchy

* **AsyncEnumerableLike**

  ↳ [StreamLike](streamlike.md)

  ↳ [StreamSinkLike](streamsinklike.md)

## Index

### Methods

* [enumerateAsync](asyncenumerablelike.md#enumerateasync)

## Methods

###  enumerateAsync

▸ **enumerateAsync**(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *[AsyncEnumeratorLike](asyncenumeratorlike.md)‹TReq, T›*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *[AsyncEnumeratorLike](asyncenumeratorlike.md)‹TReq, T›*
