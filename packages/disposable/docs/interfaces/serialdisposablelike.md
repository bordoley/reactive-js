
# Interface: SerialDisposableLike

A Disposable container that allows replacing a contained Disposable with another,
disposing the previously contained disposable in the process. Disposing the
container also disposes the contained disposable.

## Hierarchy

* [DisposableLike](disposablelike.md)

  ↳ **SerialDisposableLike**

## Index

### Properties

* [inner](serialdisposablelike.md#inner)

## Properties

###  inner

• **inner**: *[DisposableLike](disposablelike.md)*

The inner disposable that may be get or set.
