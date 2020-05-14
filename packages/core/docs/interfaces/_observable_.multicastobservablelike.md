[@reactive-js/core - v0.0.37](../README.md) › ["observable"](../modules/_observable_.md) › [MulticastObservableLike](_observable_.multicastobservablelike.md)

# Interface: MulticastObservableLike <**T**>

An `ObservableLike` that shares a common subscription to an underlying observable source.

## Type parameters

▪ **T**

## Hierarchy

* [ObservableLike](_observable_.observablelike.md)‹T›

* [DisposableLike](_disposable_.disposablelike.md)

  ↳ **MulticastObservableLike**

  ↳ [StreamLike](_observable_.streamlike.md)

## Index

### Properties

* [observerCount](_observable_.multicastobservablelike.md#observercount)

## Properties

###  observerCount

• **observerCount**: *number*

The number of observers currently observing.
