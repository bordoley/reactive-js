[@reactive-js/async-enumerable - v0.0.34](../README.md) › [StreamLike](streamlike.md)

# Interface: StreamLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [AsyncEnumerableLike](asyncenumerablelike.md)‹[StreamMode](../enums/streammode.md), [StreamEvent](../README.md#streamevent)‹T››

  ↳ **StreamLike**

## Index

### Methods

* [enumerateAsync](streamlike.md#enumerateasync)

## Methods

###  enumerateAsync

▸ **enumerateAsync**(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *[AsyncEnumeratorLike](asyncenumeratorlike.md)‹[StreamMode](../enums/streammode.md), [StreamEvent](../README.md#streamevent)‹T››*

*Inherited from [AsyncEnumerableLike](asyncenumerablelike.md).[enumerateAsync](asyncenumerablelike.md#enumerateasync)*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *[AsyncEnumeratorLike](asyncenumeratorlike.md)‹[StreamMode](../enums/streammode.md), [StreamEvent](../README.md#streamevent)‹T››*
