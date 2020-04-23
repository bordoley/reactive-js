[@reactive-js/async-enumerable - v0.0.37](../README.md) › [StreamSinkLike](streamsinklike.md)

# Interface: StreamSinkLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [AsyncEnumerableLike](asyncenumerablelike.md)‹[StreamEvent](../README.md#streamevent)‹T›, [StreamMode](../enums/streammode.md)›

  ↳ **StreamSinkLike**

## Index

### Methods

* [enumerateAsync](streamsinklike.md#enumerateasync)

## Methods

###  enumerateAsync

▸ **enumerateAsync**(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *[AsyncEnumeratorLike](asyncenumeratorlike.md)‹[StreamEvent](../README.md#streamevent)‹T›, [StreamMode](../enums/streammode.md)›*

*Inherited from [AsyncEnumerableLike](asyncenumerablelike.md).[enumerateAsync](asyncenumerablelike.md#enumerateasync)*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *[AsyncEnumeratorLike](asyncenumeratorlike.md)‹[StreamEvent](../README.md#streamevent)‹T›, [StreamMode](../enums/streammode.md)›*
