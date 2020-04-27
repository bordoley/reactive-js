[@reactive-js/core - v0.0.37](../README.md) › ["flowable"](../modules/_flowable_.md) › [FlowableLike](_flowable_.flowablelike.md)

# Interface: FlowableLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [StreamableLike](_streamable_.streamablelike.md)‹[FlowMode](../enums/_flowable_.flowmode.md), [FlowEvent](../modules/_flowable_.md#flowevent)‹T››

  ↳ **FlowableLike**

## Index

### Methods

* [stream](_flowable_.flowablelike.md#stream)

## Methods

###  stream

▸ **stream**(`scheduler`: [SchedulerLike](_scheduler_.schedulerlike.md), `replayCount?`: number): *[StreamLike](_observable_.streamlike.md)‹[FlowMode](../enums/_flowable_.flowmode.md), [FlowEvent](../modules/_flowable_.md#flowevent)‹T››*

*Inherited from [AsyncEnumerableLike](_asyncenumerable_.asyncenumerablelike.md).[stream](_asyncenumerable_.asyncenumerablelike.md#stream)*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | [SchedulerLike](_scheduler_.schedulerlike.md) |
`replayCount?` | number |

**Returns:** *[StreamLike](_observable_.streamlike.md)‹[FlowMode](../enums/_flowable_.flowmode.md), [FlowEvent](../modules/_flowable_.md#flowevent)‹T››*
