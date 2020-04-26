[@reactive-js/core - v0.0.37](../README.md) › ["flowable"](../modules/_flowable_.md) › [FlowableSinkLike](_flowable_.flowablesinklike.md)

# Interface: FlowableSinkLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [StreamableLike](_streamable_.streamablelike.md)‹[FlowEvent](../modules/_flowable_.md#flowevent)‹T›, [FlowMode](../enums/_flowable_.flowmode.md)›

  ↳ **FlowableSinkLike**

## Index

### Methods

* [stream](_flowable_.flowablesinklike.md#stream)

## Methods

###  stream

▸ **stream**(`scheduler`: [SchedulerLike](_scheduler_.schedulerlike.md), `replayCount?`: number): *[StreamLike](_observable_.streamlike.md)‹[FlowEvent](../modules/_flowable_.md#flowevent)‹T›, [FlowMode](../enums/_flowable_.flowmode.md)›*

*Inherited from [AsyncEnumerableLike](_async_enumerable_.asyncenumerablelike.md).[stream](_async_enumerable_.asyncenumerablelike.md#stream)*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | [SchedulerLike](_scheduler_.schedulerlike.md) |
`replayCount?` | number |

**Returns:** *[StreamLike](_observable_.streamlike.md)‹[FlowEvent](../modules/_flowable_.md#flowevent)‹T›, [FlowMode](../enums/_flowable_.flowmode.md)›*
