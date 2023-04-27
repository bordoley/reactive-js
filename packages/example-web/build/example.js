!(function (t, e, r) {
  "use strict";
  const {
      MAX_SAFE_INTEGER: n,
      MAX_VALUE: s,
      MIN_SAFE_INTEGER: i,
      MIN_VALUE: o,
    } = Number,
    c = t => t.length,
    u = (...t) => !1,
    a = (...t) => !0,
    l = (t, e) => t.bind(e),
    h = (t, e) => l(t[e], t),
    f = (t, e, ...r) => t.call(e, ...r),
    d =
      (...t) =>
      e =>
        M(e, ...t),
    p = t => t,
    y = (...t) => {},
    g = t => t + 1,
    m =
      (t, ...e) =>
      r =>
        r[t](...e),
    v = Array.isArray,
    b = (
      () =>
      (t, e = { equality: O }) => {
        const r = e.equality ?? O;
        return r === O
          ? (
              t => e =>
                e !== t
            )(t)
          : e => !r(e, t);
      }
    )(),
    E = t => "function" == typeof t || t instanceof Function,
    w = t => "number" == typeof t,
    k = t => t === R,
    S = t => t !== R,
    C = t => t,
    x = (t, ...e) => new t(...e),
    R = void 0,
    _ =
      (...t) =>
      e =>
      r =>
        e(r, ...t),
    M = (t, ...e) => {
      let r = t;
      const n = c(e);
      for (let t = 0; t < n; t++) r = e[t](r);
      return r;
    },
    L = M,
    A =
      (t, ...e) =>
      () =>
        M(t, ...e),
    q = t => {
      const e = "string" == typeof (r = t) || r instanceof String;
      var r;
      const n = t instanceof Error,
        s = e ? t : "",
        i = e || n || !S(t) ? R : { cause: t };
      return n ? t : x(Error, s, i);
    },
    N = t => {
      throw t;
    },
    I = t => N(q(R)),
    P =
      t =>
      (...e) =>
        t,
    O = (t, e) => t === e,
    B = t => Symbol(R),
    W = B(),
    z = B(),
    U = B(),
    D = B(),
    F = B(),
    T = B(),
    $ = B(),
    j = B(),
    X = B(),
    G = B(),
    V = B(),
    Y = B(),
    H = B(),
    J = B(),
    K = B(),
    Q = B(),
    Z = B(),
    tt = B(),
    et = B(),
    rt = B(),
    nt = B(),
    st = B(),
    it = B(),
    ot = B(),
    ct = B(),
    ut = B(),
    at = B(),
    lt = B(),
    ht = B(),
    ft = B(),
    dt = B(),
    pt = B(),
    yt = B(),
    gt = B(),
    mt = B(),
    vt = B(),
    bt = B(),
    Et = B(),
    wt = B(),
    kt = B(),
    St = B(),
    Ct = B(),
    xt = B(),
    Rt = B(),
    _t = B(),
    Mt = B(),
    Lt = B(),
    At = B(),
    qt = B(),
    Nt = B(),
    It = B(),
    Pt = B(),
    Ot = B(),
    Bt = B(),
    Wt = B(),
    zt = B(),
    Ut = B(),
    Dt = B(),
    Ft = B(),
    Tt = B(),
    $t = B(),
    jt = B(),
    Xt = B(),
    Gt = B(),
    Vt = B(),
    Yt = B(),
    Ht = B(),
    Jt = B(),
    Kt = B(),
    Qt = B(),
    Zt = B(),
    te = B(),
    ee = B(),
    re = B(),
    ne = B(),
    se = B(),
    ie = B(),
    oe = B(),
    ce = B(),
    ue = B(),
    ae = B(),
    le = B(),
    he = B(),
    fe = B(),
    de = B(),
    pe = B(),
    ye = B(),
    ge = B(),
    me = B(),
    ve = B(),
    be = B(),
    Ee = B(),
    we = B(),
    ke = B(),
    Se = B(),
    Ce = B(),
    xe = B(),
    Re = B(),
    _e = B(),
    Me = B(),
    Le = B(),
    Ae = B(),
    qe = B(),
    Ne = B(),
    Ie = B(),
    Pe = B(),
    Oe = B(),
    Be = B(),
    We = B(),
    ze = B(),
    Ue = B(),
    De = B(),
    Fe = B(),
    Te = B(),
    $e = B(),
    je = B(),
    Xe = B(),
    Ge = B(),
    Ve = B(),
    Ye = B(),
    He = B(),
    Je = B(),
    Ke = B(),
    Qe = B(),
    Ze = B(),
    tr = B(),
    er = B(),
    rr = B(),
    nr = B(),
    sr = B(),
    ir = B(),
    or = B(),
    cr = B(),
    ur = B(),
    ar = B(),
    lr = B(),
    hr = B(),
    fr = B(),
    dr = B(),
    pr = B(),
    yr = B(),
    gr = B(),
    mr = B(),
    vr = B(),
    br = B(),
    Er = B(),
    { create: wr, getOwnPropertyDescriptors: kr, prototype: Sr } = Object,
    Cr = (t, e) => Sr.hasOwnProperty.call(t, e);
  function xr(t, e, ...r) {
    (0, t[Je])(e, ...r);
  }
  const Rr = xr,
    _r = (...t) => {
      const e = c(t);
      if (1 == e) return t[0];
      {
        let r = {},
          n = {};
        for (let s = 0; s < e; s++) {
          const e = t[s];
          (r = { ...r, ...kr(e[Ke]) }), (n = { ...n, ...kr(e[Qe]) });
        }
        return { [Ke]: wr(Sr, r), [Qe]: wr(Sr, n) };
      }
    },
    Mr = (t, e, r, n) => {
      if (E(t)) return { [Je]: t, [Ke]: e ?? {}, [Qe]: r ?? {} };
      return { ..._r(t, { [Ke]: r ?? {}, [Qe]: n ?? {} }), [Je]: e };
    },
    Lr = t => {
      const e = kr(t[Ke]),
        r = kr(t[Qe]),
        n = wr(Sr, r);
      return (...r) => {
        const s = wr(n, e);
        return xr(t, s, ...r), s;
      };
    },
    Ar = t => t[Qe],
    qr = (() =>
      Lr(
        Mr(
          function (t, e, r) {
            return (t[qe] = e), (t[et] = r[et]), (t[rt] = r[et] || r[rt]), t;
          },
          { [qe]: R, [rt]: !1, [et]: !1 },
          {
            [tt](t) {
              try {
                this[qe](t);
              } catch (e) {
                t[F](q(e));
              }
            },
          },
        ),
      ))(),
    Nr = t => qr(t, { [et]: !0, [rt]: !0 }),
    Ir = t => qr(t, { [et]: !1, [rt]: !0 }),
    Pr = t => e => (
      e[D](e => {
        S(e) && t(e);
      }),
      e
    ),
    Or = t => e => (t[D](e), L(e, Pr(h(t, F))), e),
    { abs: Br, floor: Wr, max: zr, min: Ur, random: Dr } = Math,
    Fr = (t, e, r) => (e > r ? r : e < t ? t : e),
    Tr = t => Wr(Fr(0, t, n)),
    $r = t => e => r => {
      const s = c(r),
        { start: i, count: o = n, ...u } = e ?? {},
        a = o >= 0 ? Fr(0, i ?? 0, s) : Fr(-1, i ?? s - 1, s - 1),
        l = o >= 0 ? Fr(0, o, s - a) : -Ur(Br(o), a + 1);
      return t(r, a, l, u);
    },
    jr = $r((t, e, r, n) => {
      const { delay: s = 0, delayStart: i = !1 } = n ?? {},
        o = o => {
          let c = e,
            u = r;
          L(
            o[yt](
              e => {
                for (; !o[$] && 0 !== u; ) {
                  const r = t[c];
                  u > 0 ? (c++, u--) : (c--, u++), o[Z](r), e[mt](s);
                }
                o[F]();
              },
              i ? n : R,
            ),
            Or(o),
          );
        };
      return s > 0 ? Ir(o) : Nr(o);
    }),
    Xr = t => {
      const { delay: e = 0 } = t ?? {};
      return d(
        t => (S(t) ? [t] : []),
        jr(e > 0 ? { delay: e, delayStart: !0 } : R),
      );
    },
    Gr = (() =>
      L(
        Mr(
          function (t, e) {
            return (t[Lt] = e), t;
          },
          { [Lt]: R },
          {},
        ),
        P,
      ))(),
    Vr = t => e => (
      e[D](e => {
        k(e) && t();
      }),
      e
    ),
    Yr = t => e => (t[D](e), e),
    Hr = (() =>
      Mr(
        function (t, e) {
          return (t[jt] = e), t;
        },
        { [jt]: R },
        {
          get [ht]() {
            return this[jt][ht];
          },
          get [ft]() {
            return this[jt][ft];
          },
          get [dt]() {
            return this[jt][dt];
          },
          get [gt]() {
            return this[jt][gt];
          },
          [pt]() {
            this[jt][pt]();
          },
          [yt](t, e) {
            return L(this[jt][yt](t, e), Yr(this));
          },
          [mt](t) {
            this[jt][mt](t);
          },
        },
      ))(),
    Jr = (t, e) => {
      const r = t[T];
      if (E(e))
        try {
          e(r);
        } catch (t) {}
      else e[F](r);
    },
    Kr = Mr(
      function (t) {
        return (t[Xt] = x(Set)), t;
      },
      { [T]: R, [$]: !1, [Xt]: R },
      {
        [F](t) {
          if (!this[$]) {
            (this[T] = t), (this[$] = !0);
            const e = this[Xt];
            for (const t of e) e.delete(t), Jr(this, t);
          }
        },
        [D](t) {
          const e = this[Xt];
          this !== t &&
            (this[$]
              ? Jr(this, t)
              : e.has(t) ||
                (e.add(t),
                E(t) ||
                  t[D](r => {
                    e.delete(t);
                  })));
        },
      },
    ),
    Qr = Lr(Kr),
    Zr = (() => {
      const t = Qr();
      return t[F](), t;
    })(),
    tn = (() => {
      const t = (t, e, r, n) => {
          const s = t.length,
            i = x(Array, n);
          let o = 0,
            c = e >= r ? s : r;
          for (let r = e; r < c; r++) i[o++] = t[r];
          c = e >= r ? r : 0;
          for (let e = 0; e < c; e++) i[o++] = t[e];
          return i;
        },
        e = e => {
          const r = e[Ht] ?? [],
            n = r.length,
            s = e[z];
          if (s >= n >> 2 || n <= 32) return;
          const i = e[Gt],
            o = e[Vt],
            c = n >> 1;
          if (o >= i && o < c) r.length >>= 1;
          else {
            const n = t(r, i, o, c);
            (e[Ht] = n), (e[Gt] = 0), (e[Vt] = s);
          }
          e[Yt] = c - 1;
        };
      return L(
        Mr(
          function (t, e, r) {
            return (t[at] = r), (t[W] = Tr(e)), t;
          },
          {
            [z]: 0,
            [at]: "overflow",
            [W]: n,
            [Gt]: 0,
            [Vt]: 0,
            [Yt]: 0,
            [Ht]: R,
          },
          {
            get [Ot]() {
              const t = this[Gt],
                e = this[Ht] ?? [];
              return t === this[Vt] ? R : e[t];
            },
            get [Ut]() {
              const t = this[Gt],
                e = this[Vt],
                r = this[Ht] ?? [],
                n = e > 0 ? e - 1 : r.length - 1;
              return t === e ? R : r[n];
            },
            [Bt]() {
              const t = this[Vt],
                r = this[Ht] ?? [];
              let n = this[Gt];
              const s = n === t ? R : r[n];
              return (
                n !== t &&
                  ((r[n] = R),
                  (n = (n + 1) & this[Yt]),
                  (this[Gt] = n),
                  this[z]--),
                e(this),
                s
              );
            },
            [zt]() {
              const t = this[Gt],
                r = this[Ht] ?? [],
                n = r.length;
              let s = this[Vt];
              const i =
                t === s
                  ? R
                  : ((s = (s - 1 + n) & this[Yt]),
                    (this[Vt] = s),
                    this[z]--,
                    r[s]);
              return (r[s] = R), e(this), i;
            },
            [Q](t) {
              const e = this[z],
                r = this[Ht]?.length ?? 0,
                n = t + this[Gt],
                s = n - r;
              return (this[Ht] ?? [])[t < 0 || t >= e ? I() : n < r ? n : s];
            },
            [qt](t, e) {
              const r = this[z],
                n = this[Ht]?.length ?? 0,
                s = this[Gt],
                i = this[Ht] ?? [],
                o = t + s,
                c = o - n,
                u = t < 0 || t >= r ? I() : o < n ? o : c,
                a = i[u];
              return (i[u] = e), a;
            },
            [ut](e) {
              const r = this[at];
              let n = this[z];
              const s = this[W];
              if ("drop-latest" === r && n >= s) return !1;
              "drop-oldest" === r && n >= s
                ? this[Bt]()
                : "throw" === r && n >= s && I();
              const i =
                  this[Ht] ??
                  ((this[Yt] = 31), (this[Ht] = x(Array, 32)), this[Ht]),
                o = this[Yt];
              let c = this[Vt];
              return (
                (i[c] = e),
                this[z]++,
                (c = (c + 1) & o),
                (this[Vt] = c),
                (e => {
                  const r = e[Gt],
                    n = e[Vt];
                  if (n !== r && 0 !== n) return;
                  const s = e[Ht] ?? [],
                    i = s.length,
                    o = e[Yt],
                    c = e[z];
                  if (0 === r || (0 === n && r < i >> 2))
                    (s.length <<= 1), (e[Vt] = c + r);
                  else {
                    const o = t(s, r, n, i << 1);
                    (e[Ht] = o), (e[Gt] = 0), (e[Vt] = c);
                  }
                  e[Yt] = (o << 1) | 1;
                })(this),
                this[z] < this[W]
              );
            },
          },
        ),
        P,
      );
    })(),
    en = (() => {
      const t = Ar(tn());
      return P(
        Mr(
          _r(tn()),
          function (t, e) {
            return Rr(tn(), t, e[W], e[at]), t;
          },
          { [Kt]: !1, [Jt]: Zr },
          {
            [ut](e) {
              if (!this[Kt] && !this[$]) {
                const r = f(t[ut], this, e);
                return (
                  (t => {
                    if (t[Jt][$]) {
                      const e = e => {
                        for (; t[z] > 0; ) {
                          const r = t[Bt]();
                          t[Z](r), t[z] > 0 && e[mt]();
                        }
                        t[Kt] && t[F]();
                      };
                      t[Jt] = L(t[yt](e), Or(t));
                    }
                  })(this),
                  r
                );
              }
              return !0;
            },
            [U]() {
              const t = this[Kt];
              (this[Kt] = !0), this[Jt][$] && !t && this[F]();
            },
          },
        ),
      );
    })(),
    rn = (() =>
      P(
        Mr(
          _r(en(), Hr, Kr),
          function (t, e, r) {
            return Rr(Kr, t), Rr(Hr, t, e), Rr(en(), t, r), t;
          },
          {},
          { [Z](t) {} },
        ),
      ))(),
    nn = t => e => (t[tt](e), e);
  class sn {
    [re];
    [ne];
    [et];
    [rt];
    constructor(t, e, r, n) {
      (this[re] = t), (this[ne] = e), (this[et] = r), (this[rt] = n);
    }
    [tt](t) {
      M(t, ...this[ne], nn(this[re]));
    }
  }
  const on = t => e => r => {
      const n = r[re] ?? r,
        s = [e, ...(r[ne] ?? [])],
        i = t[et] && n[et],
        o = (t[et] || t[rt]) && n[rt];
      return x(sn, n, s, i, o);
    },
    cn = on({ [et]: !0, [rt]: !0 }),
    un = (() => Lr(tn()))(),
    an = t => e => (e[D](t), e),
    ln = (() =>
      Mr(
        function (t, e) {
          return (
            (t[Ft] = e),
            L(
              e,
              an(e => {
                t[$] = !0;
              }),
            ),
            t
          );
        },
        { [Ft]: R, [$]: !1 },
        {
          get [T]() {
            return this[Ft][T];
          },
          [D](t) {
            this[Ft][D](t);
          },
          [F](t) {
            this[Ft][F](t);
          },
        },
      ))(),
    hn = (() =>
      P(
        Mr(
          _r(en(), Hr, ln),
          function (t, e, r) {
            return Rr(ln, t, e), Rr(Hr, t, e), Rr(en(), t, r), t;
          },
          {},
          {},
        ),
      ))(),
    fn = (() => {
      const t = Lr(
        Mr(
          _r(hn(), Gr()),
          function (t, e, r) {
            return Rr(hn(), t, e, e), Rr(Gr(), t, e), (t[Be] = r), t;
          },
          { [Be]: R },
          {
            [Z](t) {
              this[Be](t) || this[pt](), this[Lt][Z](t);
            },
          },
        ),
      );
      return e => {
        const r = E(e) ? e : h(e, ut);
        return L(t, _(r), cn);
      };
    })(),
    dn = t => fn(d(t, a)),
    pn = (() => Lr(rn()))(),
    yn = (t, e) => r => L(pn(t, e), nn(r)),
    gn = (t, e) => {
      Rr(rn(), t, e, e), L(t, Or(e));
    },
    mn = t => {
      const e = (() => {
        const t = (t, e) => {
          t[Xe]++, L(e, dn(h(t[Lt], Z)), yn(t[Lt], t), Or(t[Lt]), Vr(t[Ve]));
        };
        return Lr(
          Mr(
            _r(rn(), Gr()),
            function (e, r, n, s, i) {
              return (
                gn(e, r),
                Rr(Gr(), e, r),
                (e[Ye] = un(n, s)),
                (e[Ge] = i),
                (e[Xe] = 0),
                (e[Ve] = () => {
                  e[Xe]--;
                  const r = e[Ye][Bt]();
                  S(r) ? t(e, r) : e[$] && e[Xe] <= 0 && e[Lt][F]();
                }),
                L(
                  e,
                  Vr(() => {
                    r[$] || (e[Ye][z] + e[Xe] === 0 && r[F]());
                  }),
                ),
                e
              );
            },
            { [Xe]: 0, [Ge]: 0, [Ve]: R, [Ye]: R },
            {
              [Z](e) {
                this[Xe] < this[Ge] ? t(this, e) : this[Ye][ut](e);
              },
            },
          ),
        );
      })();
      return (r = {}) => {
        const s = ((i = r.concurrency ?? n), Wr(Fr(1, i, n)));
        var i;
        const o = Tr(r.capacity ?? n),
          c = L(e, _(o, r.backpressureStrategy ?? "overflow", s));
        return t(c);
      };
    },
    vn = (t, e) => (r, n) => d(t(r), e(n)),
    bn = (() => {
      const t = Lr(
        Mr(
          _r(hn(), Gr()),
          function (t, e, r) {
            return Rr(hn(), t, e, e), Rr(Gr(), t, e), (t[se] = r), t;
          },
          { [se]: R },
          {
            [Z](t) {
              const e = this[se](t);
              this[Lt][Z](e);
            },
          },
        ),
      );
      return e => L(t, _(e), cn);
    })(),
    En = t => e =>
      t(t => {
        e()[tt](t);
      }),
    wn = (() => mn(on({ [et]: !1, [rt]: !1 })))(),
    kn = () => wn({ concurrency: 1 }),
    Sn = (() =>
      L(
        Mr(
          function (t) {
            return t;
          },
          { [We]: R, [G]: !1 },
          {
            get [X]() {
              return this[G] ? this[We] : I();
            },
            set [X](t) {
              (this[We] = t), (this[G] = !0);
            },
            [At]() {
              (this[We] = R), (this[G] = !1);
            },
          },
        ),
        P,
      ))(),
    Cn = (() => {
      const t = Lr(
        Mr(
          _r(Sn()),
          function (t, e) {
            return Rr(Sn(), t), (t[Fe] = e), t;
          },
          { [Fe]: R },
          {
            [j]() {
              this[At]();
              const t = this[Fe].next();
              return t.done || (this[X] = t.value), this[G];
            },
          },
        ),
      );
      return P(t);
    })(),
    xn = (() => P(t => L(t[Symbol.iterator](), Cn())))(),
    Rn = (() => {
      const t = Lr(
        Mr(
          _r(Kr),
          function (t, e) {
            return (
              Rr(Kr, t),
              (t[sr] = x(Set)),
              (t[lt] = un(e, "drop-oldest")),
              L(
                t,
                an(e => {
                  const r = L(t[sr], xn());
                  for (; r[j](); ) {
                    const t = r[X];
                    S(e) ? t[F](e) : t[U]();
                  }
                }),
              ),
              t
            );
          },
          { [sr]: R, [lt]: R },
          {
            [V]: !0,
            [et]: !1,
            [rt]: !1,
            get [ct]() {
              return this[sr].size;
            },
            [Y](t) {
              if (!this[$]) {
                this[lt][ut](t);
                for (const e of this[sr])
                  try {
                    e[ut](t);
                  } catch (t) {
                    e[F](q(t));
                  }
              }
            },
            [tt](t) {
              if (!this[$]) {
                const { [sr]: e } = this;
                e.add(t),
                  L(
                    t,
                    an(r => {
                      e.delete(t);
                    }),
                  );
              }
              const e = this[lt],
                r = e[z];
              try {
                for (let n = 0; n < r; n++) {
                  const r = e[Q](n);
                  t[ut](r);
                }
              } catch (e) {
                t[F](q(e));
              }
            },
          },
        ),
      );
      return e => {
        const r = Tr(e?.replay ?? 0);
        return t(r);
      };
    })(),
    _n = t => e => (e[D](t), L(t, Pr(h(e, F))), e),
    Mn = (() =>
      L(
        Mr(
          function (t, e) {
            return (t[ee] = e), L(t, _n(e)), t;
          },
          { [ee]: R },
          {
            get [Wt]() {
              return this[ee];
            },
            set [Wt](t) {
              this[ee][F](), (this[ee] = t), L(this, _n(t));
            },
          },
        ),
        P,
      ))(),
    Ln = (() =>
      Lr(
        Mr(_r(Kr, Mn()), function (t, e) {
          return Rr(Kr, t), Rr(Mn(), t, e), t;
        }),
      ))(),
    An = t => qr(t, { [et]: !1, [rt]: !1 }),
    qn = (() =>
      Lr(
        Mr(
          _r(rn()),
          function (t, e) {
            return Rr(rn(), t, e, e), (t[Z] = h(e, Z)), t;
          },
          { [Z]: R },
          {},
        ),
      ))(),
    Nn = t => e => e.every(t),
    In = t => e => e.map(t),
    Pn = t => t[et],
    On = (() => d(In(Pn), Nn(C)))(),
    Bn = t => t[rt],
    Wn = (() => d(In(Bn), Nn(C)))(),
    zn = (() => {
      const t = (e, r, n) =>
        L(
          qn(e),
          Or(e),
          Vr(() => {
            n < c(r) ? L(t(e, r, n + 1), nn(r[n])) : e[F]();
          }),
        );
      return e => {
        const r = On(e),
          n = Wn(e);
        return qr(
          r => {
            0 !== c(e) ? L(t(r, e, 1), nn(e[0])) : r[F]();
          },
          { [et]: r, [rt]: n },
        );
      };
    })(),
    Un =
      t =>
      (e, ...r) =>
      n =>
        t(n, e, ...r),
    Dn = Un((...t) => zn(t)),
    Fn = (() => {
      const t = Lr(
        Mr(
          _r(hn(), Gr()),
          function (t, e, r) {
            return Rr(hn(), t, e, e), Rr(Gr(), t, e), (t[Ie] = r), t;
          },
          { [Ie]: R, [Pe]: R, [Oe]: !1 },
          {
            [Z](t) {
              (!this[Oe] || !this[Ie](this[Pe], t)) &&
                ((this[Pe] = t), (this[Oe] = !0), this[Lt][Z](t));
            },
          },
        ),
      );
      return e => {
        const { equality: r = O } = e ?? {};
        return L(t, _(r), cn);
      };
    })(),
    Tn = Nr(t => {
      t[F]();
    }),
    $n = t =>
      (t?.delay ?? 0) > 0
        ? Ir(e => {
            L(
              e[yt](() => e[F](), t),
              Or(e),
            );
          })
        : Tn,
    jn =
      (t, e) =>
      (...r) =>
        t(e()(r)),
    Xn = jn(Dn, jr);
  class Gn {
    delay;
    constructor(t) {
      this.delay = t;
    }
  }
  const Vn = (() => {
      const t = Ar(tn()),
        e = t => {
          let e = t[xt];
          for (; S(e) && e[$]; ) e = e[xt];
          return e;
        },
        r = t => {
          const r = t[_t],
            n = e(t);
          S(n) ? n[ut](t) : r[Mt](t);
        },
        s = t => {
          const r = t[_t],
            n = e(t);
          if (S(n)) {
            let e = R;
            for (; (e = t[Bt]()), S(e); ) e[$] || n[ut](e);
          } else {
            let e = R;
            for (; (e = t[Bt]()), S(e); ) e[$] || r[Mt](e);
          }
        };
      return Lr(
        Mr(
          _r(Kr, tn()),
          function (t, e, r, i) {
            return (
              Rr(Kr, t),
              Rr(tn(), t, n, "overflow"),
              (t[_t] = e),
              (t[Ae] = r),
              (t[Rt] = i),
              L(t, an(A(t, s))),
              t
            );
          },
          { [St]: R, [xt]: R, [Rt]: 0, [_t]: R, [Ae]: R },
          {
            [Ct]() {
              const t = this[_t];
              if (this[$]) return void s(this);
              let e = R;
              for (; (e = this[Bt]()), S(e); ) {
                if (((this[St] = e), e[Ct](), (this[St] = R), this[$]))
                  return void s(this);
                if (t[gt]) return void r(this);
              }
              let n = R,
                i = R;
              this[St] = this;
              try {
                this[Ae](t);
              } catch (t) {
                t instanceof Gn ? (i = t) : (n = q(t));
              }
              (this[St] = R),
                S(i) && !this[$]
                  ? i.delay > 0
                    ? (s(this), t[Mt](this, i))
                    : r(this)
                  : (this[F](n), s(this));
            },
            [ut](e) {
              return (e[xt] = this), f(t[ut], this, e);
            },
          },
        ),
      );
    })(),
    Yn = (() => {
      const t = t => {
        let e = t[Qt],
          r = e?.[St];
        for (; S(r) && r !== e; ) (e = r), (r = e[St]);
        return e;
      };
      return Mr(
        _r(Kr),
        function (t, e) {
          return Rr(Kr, t), (t[ft] = Tr(e)), t;
        },
        { [ft]: n, [Qt]: R, [te]: !1, [Zt]: 0 },
        {
          get [ht]() {
            const t = this[Qt];
            return S(t);
          },
          get [gt]() {
            const e = this[ht],
              r = this[$],
              n = this[te];
            return (
              e &&
              (r ||
                n ||
                this[dt] > this[Zt] + this[ft] ||
                (t(this)?.[z] ?? 0) > 0 ||
                this[Pt])
            );
          },
          [pt]() {
            this[te] = !0;
          },
          [Mt](e, r) {
            const n = Tr(r?.delay ?? 0);
            if (e[$]) return;
            const s = t(this);
            n > 0 || k(s) || s[$] || s[Rt] !== e[Rt] || s === e || e[xt] === s
              ? ((e[xt] = R), this[It](e, n))
              : s[ut](e);
          },
          [yt](t, e) {
            const { priority: r = 0 } = e ?? {},
              n = L(Vn(this, t, r), Yr(this));
            return this[Mt](n, e), n;
          },
          [mt](t = 0) {
            if (t > 0 || this[gt]) throw x(Gn, t);
          },
          [Nt](t) {
            (this[Zt] = this[dt]),
              (this[Qt] = t),
              (this[te] = !1),
              t[Ct](),
              (this[te] = !1),
              (this[Qt] = R);
          },
        },
      );
    })(),
    Hn = (() => {
      const t = Lr(
        Mr(
          _r(Sn(), en(), Yn),
          function (t) {
            return (
              Rr(Sn(), t),
              Rr(Yn, t, 0),
              Rr(en(), t, { [at]: "overflow", [W]: n }),
              (t[ze] = un(n, "overflow")),
              t
            );
          },
          { [ze]: R },
          {
            [dt]: 0,
            get [Pt]() {
              return this[G];
            },
            [j]() {
              for (this[At](); !this[G]; ) {
                const t = this[ze][Bt]();
                if (!S(t)) {
                  this[F]();
                  break;
                }
                this[Nt](t);
              }
              return this[G];
            },
            [It](t, e) {
              e > 0 && I(), this[ze][ut](t);
            },
            [Z](t) {
              this[X] = t;
            },
          },
        ),
      );
      return P(e => L(t(), nn(e)));
    })(),
    Jn = (t, e, r) => {
      const { delay: n = 0, delayStart: s = !1 } = r ?? {},
        i = i => {
          let o = e();
          L(
            i[yt](
              e => {
                for (; !i[$]; ) (o = t(o)), i[Z](o), e[mt](n);
              },
              s ? r : R,
            ),
            Or(i),
          );
        };
      return n > 0 ? Ir(i) : Nr(i);
    },
    Kn = t => () => t(u),
    Qn = Kn(
      (() => {
        const t = Lr(
          Mr(
            _r(hn(), Gr()),
            function (t, e, r) {
              return Rr(hn(), t, e, e), Rr(Gr(), t, e), (t[ie] = r), t;
            },
            { [ie]: R },
            {
              [Z](t) {
                this[ie](t) && this[Lt][Z](t);
              },
            },
          ),
        );
        return e => L(t, _(e), cn);
      })(),
    ),
    Zn = (() => {
      const t = Lr(
        Mr(
          _r(hn(), Gr()),
          function (t, e) {
            return Rr(hn(), t, e, e), Rr(Gr(), t, e), t;
          },
          { [Ze]: R, [tr]: !1 },
          {
            [Z](t) {
              const e = this[Ze];
              this[tr] && this[Lt][Z]([e, t]), (this[tr] = !0), (this[Ze] = t);
            },
          },
        ),
      );
      return L(t, cn, P);
    })(),
    ts = (() => {
      const t = (t, e, r) => {
        let n = 1;
        const s = i => {
          let o = !1;
          try {
            o = !r(n, i);
          } catch (t) {
            (o = !0), (i = S(i) ? q([t, i]) : q(t));
          }
          o ? t[F](i) : (n++, L(e, dn(h(t, Z)), yn(t, t), Yr(t), an(s)));
        };
        return L(qn(t), Yr(t), an(s));
      };
      return e => r => {
        const n = L(t, _(r, e));
        return L(r, on({ [et]: !0, [rt]: !0 })(n));
      };
    })(),
    es = (() => {
      const t = Lr(
        Mr(
          _r(hn(), Gr()),
          function (t, e, r, n) {
            Rr(hn(), t, e, e), Rr(Gr(), t, e), (t[ue] = r);
            try {
              const e = n();
              t[ce] = e;
            } catch (e) {
              t[F](q(e));
            }
            return t;
          },
          { [ce]: R, [ue]: R },
          {
            [Z](t) {
              const e = this[ue](this[ce], t);
              (this[ce] = e), this[Lt][Z](e);
            },
          },
        ),
      );
      return (e, r) => L(t, _(e, r), cn);
    })(),
    rs =
      (t, e) =>
      (...r) =>
      n =>
        L(r, e(), t(n)),
    ns = rs(Dn, jr),
    ss = (() => {
      const t = Lr(
        Mr(
          _r(hn(), Gr()),
          function (t, e, r) {
            return (
              Rr(hn(), t, e, e),
              Rr(Gr(), t, e),
              (t[hr] = r),
              0 === r && t[F](),
              t
            );
          },
          { [fr]: 0, [hr]: 0 },
          {
            [Z](t) {
              this[fr]++, this[Lt][Z](t), this[fr] >= this[hr] && this[F]();
            },
          },
        ),
      );
      return (e = {}) => {
        const r = Tr(e.count ?? 1);
        return L(t, _(r), cn);
      };
    })(),
    is = (() => {
      const t = Lr(
        Mr(
          _r(hn(), Gr()),
          function (t, e, r, n) {
            return (
              Rr(hn(), t, e, e), Rr(Gr(), t, e), (t[ie] = r), (t[dr] = n), t
            );
          },
          { [ie]: R, [dr]: R },
          {
            [Z](t) {
              const e = this[ie](t);
              (e || this[dr]) && this[Lt][Z](t), e || this[F]();
            },
          },
        ),
      );
      return (e, r = {}) => {
        const { inclusive: n = !1 } = r;
        return L(t, _(e, n), cn);
      };
    })(),
    os = (() =>
      P(
        Mr(
          function (t, e) {
            return (t[Tt] = e), t;
          },
          { [Tt]: R },
          {
            get [lt]() {
              return this[Tt][lt];
            },
            get [et]() {
              return this[Tt][et];
            },
            get [rt]() {
              return this[Tt][rt];
            },
            [tt](t) {
              this[Tt][tt](t);
            },
          },
        ),
      ))(),
    cs = t => e => (e[D](t), t[D](e), e),
    us = (t, e = {}) =>
      (
        (t, e, r = {}) =>
        s => {
          const {
              backpressureStrategy: i = "overflow",
              capacity: o = n,
              replay: c = 0,
            } = r,
            u = t({ replay: c }),
            a = E(e) ? L(e(), Or(u)) : e;
          return L(s, dn(h(u, Y)), yn(a, { [W]: o, [at]: i }), cs(u)), u;
        }
      )(Rn, t, e),
    as = (() =>
      P(
        Mr(
          function (t, e) {
            return (t[$t] = e), t;
          },
          { [$t]: R },
          {
            get [at]() {
              return this[$t][at];
            },
            get [W]() {
              return this[$t][W];
            },
            [ut](t) {
              return this[$t][ut](t);
            },
          },
        ),
      ))(),
    ls = (() =>
      P(
        Mr(
          _r(as()),
          function (t, e) {
            return Rr(as(), t, e), (t[Dt] = e), t;
          },
          { [Dt]: R },
          {
            [U]() {
              this[Dt][U]();
            },
          },
        ),
      ))(),
    hs = (() =>
      Lr(
        Mr(
          function (t) {
            return t;
          },
          { [Ne]: R },
          {
            [et]: !1,
            [rt]: !1,
            get [at]() {
              return this[Ne][at];
            },
            get [W]() {
              return this[Ne][W];
            },
            [ut](t) {
              const e = this[Ne],
                r = e[ht],
                n = 0 === e[z],
                s = e[$];
              return r && n && !s ? (e[Z](t), !0) : !!s || e[ut](t);
            },
            [U]() {
              this[Ne][U]();
            },
            [tt](t) {
              S(this[Ne]) && I(), (this[Ne] = t);
            },
          },
        ),
      ))(),
    fs = (() =>
      P(
        Mr(
          _r(ls(), os(), ln),
          function (t, e, r, n) {
            t[vt] = r;
            const s = hs(),
              i = L(s, e, us(r, n));
            return Rr(ln, t, i), Rr(ls(), t, s), Rr(os(), t, i), t;
          },
          { [vt]: R },
          {},
        ),
      ))(),
    ds = (() => {
      const t = Lr(
        Mr(
          _r(hn(), ln, Gr()),
          function (t, e, r) {
            return Rr(ln, t, e), Rr(hn(), t, e, r), Rr(Gr(), t, e), t;
          },
          {},
          {
            [Z](t) {
              this[Lt][Z](t);
            },
          },
        ),
      );
      return (e, r) => L(t, _({ [at]: r, [W]: e }), cn);
    })(),
    ps = (() => {
      const t = (t, e, r) =>
        L(
          qn(t),
          Or(t),
          Vr(() => {
            r[He]++, r[He] >= e && t[F]();
          }),
        );
      return e => {
        const r = r => {
            const n = c(e),
              s = { [He]: 0 };
            for (const i of e) L(t(r, n, s), nn(i));
          },
          n = On(e),
          s = Wn(e);
        return n ? Nr(r) : s ? Ir(r) : An(r);
      };
    })(),
    ys = Un((...t) => ps(t)),
    gs = (() =>
      Lr(
        Mr(
          _r(fs()),
          function (t, e, r, n) {
            const s = Rn({ replay: 1 }),
              i = d(
                ds(1, "drop-oldest"),
                ys(L(!0, Xr())),
                Fn(),
                dn(h(s, Y)),
                e,
              );
            return Rr(fs(), t, i, r, n), L(t, _n(s)), (t[ot] = s), t;
          },
          { [ot]: R },
          {
            get [nt]() {
              return this[ot][lt][Q](0) ?? !0;
            },
            [st]() {
              this[ut](!0);
            },
            [it]() {
              this[ut](!1);
            },
          },
        ),
      ))(),
    ms = (() => {
      const t = Ar(tn());
      return L(
        Mr(
          _r(tn()),
          function (t, e, r, n) {
            return Rr(tn(), t, r, n), (t[er] = e), t;
          },
          { [er]: R },
          {
            [Bt]() {
              const e = this[z];
              if (0 === e) return R;
              if (1 === e) return f(t[Bt], this);
              {
                const t = this[Q](0),
                  e = this[zt]();
                return (
                  this[qt](0, e),
                  ((t, e) => {
                    const r = t[er],
                      n = t[z];
                    for (let s = 0; s < n; ) {
                      const i = 2 * (s + 1) - 1,
                        o = i + 1,
                        c = i >= 0 && i < n,
                        u = o >= 0 && o < n,
                        a = c ? t[Q](i) : R,
                        l = u ? t[Q](o) : R;
                      if (c && r(a, e) < 0)
                        u && r(l, a) < 0
                          ? (t[qt](s, l), t[qt](o, e), (s = o))
                          : (t[qt](s, a), t[qt](i, e), (s = i));
                      else {
                        if (!(u && r(l, e) < 0)) break;
                        t[qt](s, l), t[qt](o, e), (s = o);
                      }
                    }
                  })(this, e),
                  t
                );
              }
            },
            [ut](e) {
              const r = this[at],
                n = this[z],
                s = this[W];
              if ("drop-latest" === r && n >= s) return !1;
              "drop-oldest" === r && n >= s
                ? this[Bt]()
                : "throw" === r && n >= s && I();
              const i = f(t[ut], this, e);
              return (
                ((t, e) => {
                  const r = t[er],
                    n = t[z];
                  for (
                    let s = n - 1, i = Wr((s - 1) / 2);
                    i >= 0 && i <= n && r(t[Q](i), e) > 0;
                    s = i, i = Wr((s - 1) / 2)
                  ) {
                    const r = t[Q](i);
                    t[qt](i, e), t[qt](s, r);
                  }
                })(this, e),
                i
              );
            },
          },
        ),
        P,
      );
    })(),
    vs = (() => Lr(ms()))(),
    bs = (() => {
      const t = (t, e) => {
          let r = 0;
          return (
            (r = 0 !== r ? r : t[le] - e[le]),
            (r = 0 !== r ? r : e[he] - t[he]),
            r
          );
        },
        e = t => {
          const { [ir]: e, [ar]: r } = t,
            n = t[ur][dt];
          for (;;) {
            const t = e[Ot];
            if (k(t)) break;
            const s = t[ae][$];
            if (t[le] > n && !s) break;
            e[Bt](), s || r[ut](t);
          }
          let s = R;
          for (; (s = r[Ot]), !k(s) && s[ae][$]; ) r[Bt]();
          return s ?? e[Ot];
        },
        r = t => {
          const r = e(t),
            n = !t[Wt][$] && S(r) && t[or] <= r[le];
          if (k(r) || n || t[nt]) return;
          const s = r[le],
            i = Tr(s - t[ur][dt]);
          t[or] = s;
          const o =
            t[cr] ??
            (r => {
              for (let n = e(t); S(n) && !t[$]; n = e(t)) {
                const { [ae]: e, [le]: s } = n,
                  i = Tr(s - t[ur][dt]);
                i > 0 ? (t[or] = t[ur][dt] + i) : (t[j](), t[Nt](e)), r[mt](i);
              }
            });
          (t[cr] = o), (t[Wt] = t[ur][yt](o, { delay: i }));
        };
      return Lr(
        Mr(
          _r(Yn, Sn(), Mn()),
          function (e, r, s) {
            return (
              Rr(Yn, e, r[ft]),
              Rr(Sn(), e),
              Rr(Mn(), e, Zr),
              (e[ir] = vs(t, n, "overflow")),
              (e[ar] = s()),
              (e[ur] = r),
              e
            );
          },
          { [ir]: R, [or]: 0, [ur]: R, [cr]: R, [nt]: !1, [ar]: R, [lr]: 0 },
          {
            get [dt]() {
              return this[ur][dt];
            },
            get [Pt]() {
              const t = e(this);
              return (
                !this[G] ||
                this[nt] ||
                (!!S(t) &&
                  ((t, e) => {
                    const { [X]: r } = t;
                    return r !== e && e[le] <= t[ur][dt] && e[oe] > r[oe];
                  })(this, t)) ||
                this[ur][gt]
              );
            },
            [st]() {
              (this[nt] = !0), (this[Wt] = Zr);
            },
            [it]() {
              (this[nt] = !1), r(this);
            },
            [j]() {
              e(this);
              const t = this[ar][Bt]();
              return S(t) && (this[X] = t), this[G];
            },
            [It](t, e) {
              const s = t[Rt],
                i = this[dt],
                o = zr(i + e, i),
                c =
                  this[ht] && this[G] && this[X][ae] === t && e <= 0
                    ? this[X]
                    : { [he]: this[lr]++, [ae]: t, [le]: o, [oe]: Tr(s ?? n) },
                { [ir]: u, [ar]: a } = this;
              (o > i ? u : a)[ut](c), r(this);
            },
          },
        ),
      );
    })(),
    Es = t => {
      const e = bs(t, () => un(n, "overflow"));
      return e[st](), e;
    },
    ws = (t, e) => r =>
      An(n => {
        const s = E(t) ? L(t(), Or(n)) : t;
        L(
          r,
          fn(n),
          yn(s, {
            [W]: e?.capacity ?? n[W],
            [at]: e?.backpressureStrategy ?? n[at],
          }),
          Vr(h(n, U)),
          Or(n),
        );
      }),
    ks = (() =>
      Lr(
        Mr(
          _r(fs()),
          function (t, e, r, n) {
            const s = d(ds(1, "drop-oldest"), e);
            return Rr(fs(), t, s, r, n), t;
          },
          {},
          {
            [K]() {
              this[ut](R);
            },
          },
        ),
      ))(),
    Ss = vn(bn, kn),
    Cs = (t, e) => {
      const { [ke]: r, [be]: n } = t;
      t[be]++;
      const s = r[n];
      if (S(s) && s[Le] === e) return s;
      {
        !S(s) || (2 !== s[Le] && 3 !== s[Le]) || s[ge][F]();
        const t =
          1 === e
            ? { [Le]: e, [Te]: y, [$e]: [], [je]: R }
            : 2 === e || 3 === e
            ? { [Le]: e, [ye]: $n(), [ge]: Zr, [me]: R, [ve]: !1 }
            : 4 === e
            ? { [Le]: e, [Te]: y, [$e]: [], [je]: Zr }
            : I();
        return S(s) ? (r[n] = t) : r.push(t), t;
      }
    },
    xs = (
      (t = O) =>
      (e, r) =>
        c(e) === c(r) && e.every((e, n) => t(r[n], e))
    )(),
    Rs = q();
  class _s {
    [be] = 0;
    [ke] = [];
    [we];
    [Ce];
    [Re] = Zr;
    [xe];
    [Se];
    [Ee] = () => {
      const { [ke]: t } = this;
      !(t.findIndex(t => (2 === t[Le] || 3 === t[Le]) && !t[ge][$]) >= 0) &&
        this[Re][$] &&
        this[Ce][F]();
    };
    constructor(t, e, r, n) {
      (this[Ce] = t), (this[xe] = e), (this[Se] = r), (this[we] = n);
    }
    [_e](t, e) {
      ((this[we][et] && !t[et]) || (this[we][rt] && !t[rt])) && I();
      const r = Cs(this, e ? 2 : 3);
      if (r[ye] === t) return r[me];
      {
        r[ge][F]();
        const { [Ce]: n, [xe]: s } = this,
          i = L(
            t,
            dn(t => {
              if (((r[me] = t), (r[ve] = !0), "combine-latest" === this[Se]))
                s();
              else {
                let { [Re]: t } = this;
                this[Re] = t[$] ? L(n[yt](s), Or(n)) : t;
              }
            }),
            yn(n, n),
            Or(n),
            Vr(this[Ee]),
          );
        return (
          (r[ye] = t), (r[ge] = i), (r[me] = R), (r[ve] = !1), e ? N(Rs) : R
        );
      }
    }
    [Me](t, e, ...r) {
      const n = Cs(this, t ? 4 : 1);
      if (e === n[Te] && xs(r, n[$e])) return n[je];
      {
        t && n[je][F]();
        const s = e(...r);
        return (
          (n[Te] = e), (n[$e] = r), (n[je] = s), t && L(s, Or(this[Ce])), s
        );
      }
    }
  }
  let Ms = R;
  const Ls = () => (k(Ms) ? I() : Ms),
    As = (() => {
      const t = "object" == typeof performance && E(performance.now),
        e = "object" == typeof process && E(process.hrtime);
      return t
        ? h(performance, "now")
        : e
        ? () => {
            const t = process.hrtime();
            return 1e3 * t[0] + t[1] / 1e6;
          }
        : h(Date, "now");
    })(),
    qs = (t, e) =>
      yn(t, {
        [W]: e?.capacity ?? n,
        [at]: e?.backpressureStrategy ?? "overflow",
      }),
    Ns =
      t =>
      (...e) =>
        t(t => {
          let r = t;
          for (const t of e) r = r[t];
          return r;
        }),
    Is = Ns(bn),
    Ps = (() => {
      const t = (t, e) => k(e);
      return e => {
        const r = k(e)
          ? t
          : w(e)
          ? (t, r) => k(r) && t < e
          : (t, r) => k(r) && e(t);
        return ts(r);
      };
    })(),
    Os = Hn,
    Bs = (t, e) => {
      const { delay: r = 0, ...n } = e ?? {};
      return e =>
        ks(
          t =>
            An(n => {
              const s = L(e, Hn(), Or(n));
              L(
                t,
                dn(h(s, j)),
                is(t => s[G]),
                r > 0 ? Ss(t => L(s[X], Xr({ delay: r }))) : bn(t => s[X]),
                m(tt, n),
              );
            }),
          t,
          n,
        );
    },
    Ws = Jn,
    zs = (() => {
      const t = Lr(
        Mr(
          _r(hn(), Gr()),
          function (t, e, r) {
            return Rr(hn(), t, e, e), Rr(Gr(), t, e), (t[Er] = r), t;
          },
          { [Er]: R },
          {
            [Z](t) {
              const e = this[dt],
                r = this[Er](e, t);
              this[Lt][Z](r);
            },
          },
        ),
      );
      return e => L(t, _(e), cn);
    })(),
    Us = t => L(Jn(p, P(R), t), zs(p)),
    Ds = t => {
      return "loop" === t.type
        ? L(Fs(t.animation), Ps(t.count))
        : "delay" === t.type
        ? $n({ delay: t.duration })
        : L(
            "tween" === t.type
              ? ((t, e) => {
                  const { easing: r = p } = e ?? {};
                  return L(
                    Us(),
                    es(([e, n], s) => {
                      const i = s - (e = Ur(s, e));
                      return [e, i > t ? 1 : r(i / t)];
                    }, P([s, 0])),
                    Is(1),
                    is(b(1), { inclusive: !0 }),
                  );
                })(t.duration, t)
              : (t => {
                  const {
                    stiffness: e = 0.15,
                    damping: r = 0.8,
                    precision: n = 0.01,
                  } = t ?? {};
                  return L(
                    Us(),
                    es(([t, s, i], o) => {
                      const c = 1 - i,
                        u = (60 * (o - (t = Ur(o, t)))) / 1e3,
                        a = (i - s) / (u || 1 / 60),
                        l = (a + (e * c - r * a)) * u;
                      return [o, i, Br(l) < n && Br(c) < n ? 1 : i + l];
                    }, P([s, 0, 0])),
                    Is(2),
                    is(b(1), { inclusive: !0 }),
                  );
                })(t),
            bn(((e = t.from), (r = t.to), t => e + t * (r - e))),
            S(t.selector) ? bn(t.selector) : p,
          );
      var e, r;
    },
    Fs = t => {
      const e = v(t) ? t : [t],
        r = L(e, In(Ds));
      return zn(r);
    },
    Ts = on({ [et]: !1, [rt]: !0 }),
    $s = t => {
      const e = (() => {
        function t() {
          this[De][Wt][$] && this[Lt][F]();
        }
        return Lr(
          Mr(
            _r(rn(), Gr()),
            function (e, r) {
              return (
                gn(e, r),
                Rr(Gr(), e, r),
                (e[De] = L(Ln(Zr), Or(r))),
                L(e, Vr(l(t, e))),
                e
              );
            },
            { [De]: R },
            {
              [Z](t) {
                this[De][Wt] = L(
                  t,
                  dn(h(this[Lt], Z)),
                  yn(this[Lt], this),
                  Or(this[Lt]),
                  Vr(() => {
                    this[$] && this[Lt][F]();
                  }),
                );
              },
            },
          ),
        );
      })();
      return () => t(e);
    },
    js = (() => {
      const t = (t, e) => {
        t[gr][Wt] = L(t[mr](e), dn(t[br]), yn(t[Lt], t), Or(t[Lt]));
      };
      return Lr(
        Mr(
          _r(rn(), Gr()),
          function (e, r, n, s) {
            return (
              Rr(Gr(), e, r),
              gn(e, r),
              (e[mr] = n),
              (e[vr] = s),
              (e[gr] = L(Ln(Zr), Or(r))),
              (e[br] = n => {
                if (e[yr]) {
                  const n = e[pr];
                  (e[pr] = R), (e[yr] = !1), r[Z](n), t(e, n);
                }
              }),
              L(
                e,
                Vr(() => {
                  "first" !== e[vr] &&
                    e[yr] &&
                    !r[$] &&
                    L(e[pr], Xr(), m(tt, r));
                }),
              ),
              e
            );
          },
          { [pr]: R, [yr]: !1, [gr]: R, [mr]: R, [vr]: "interval", [br]: R },
          {
            [Z](e) {
              (this[pr] = e), (this[yr] = !0);
              const r = this[gr][Wt][$];
              r && "last" !== this[vr] ? this[br]() : r && t(this, e);
            },
          },
        ),
      );
    })(),
    Xs =
      (t, e) =>
      (r, n = {}) => {
        const { mode: s = "interval" } = n,
          i = w(r) ? e => L([R], t({ delay: r, delayStart: !0 })) : r;
        return ((t, e, r) => L(js, _(e, r), t))(w(r) ? Ts : e, i, s);
      },
    Gs = fn,
    Vs = (t, e) => r =>
      gs(
        t =>
          An(e => {
            const n = L(e, Es, Or(e));
            L(
              e,
              nn(L(r, ws(n))),
              _n(
                L(
                  t,
                  dn(t => {
                    t ? n[st]() : n[it]();
                  }),
                  yn(e, e),
                  cs(n),
                ),
              ),
              _n(n),
            );
          }),
        t,
        e,
      ),
    Ys = Jn,
    Hs = En(An),
    Js = vn(
      bn,
      (() =>
        P(
          wn({
            capacity: 0,
            backpressureStrategy: "drop-latest",
            concurrency: 1,
          }),
        ))(),
    ),
    Ks = vn(bn, wn),
    Qs = (() => {
      const t = Lr(
        Mr(
          _r(ln, os(), Gr()),
          function (t, e) {
            return Rr(ln, t, e), Rr(os(), t, e), Rr(Gr(), t, e), t;
          },
          {},
          {
            get [ct]() {
              return this[Lt][ct];
            },
            [V]: !0,
            [Y](t) {
              this[Lt][Y](t);
            },
            [tt](t) {
              this[Lt][tt](t),
                L(
                  t,
                  an(() => {
                    0 === this[ct] && this[F]();
                  }),
                );
            },
          },
        ),
      );
      return e => {
        const r = Rn(e);
        return t(r);
      };
    })(),
    Zs = $s(on({ [et]: !1, [rt]: !1 })),
    ti = vn(bn, Zs),
    ei = (() => Xs(jr, on({ [et]: !1, [rt]: !1 })))(),
    ri = (() => {
      const t = Lr(
        Mr(
          _r(Kr),
          function (t, e, r, n) {
            return (
              Rr(Kr, t),
              (t[Ue] = x(Set)),
              (t[ie] = e),
              (t[se] = r),
              (t[lt] = un(n, "drop-oldest")),
              L(
                t,
                an(e => {
                  const r = L(t[Ue], xn());
                  for (; r[j](); ) {
                    r[X][F](e);
                  }
                }),
              ),
              t
            );
          },
          { [Ue]: R, [lt]: R, [ie]: R, [se]: R },
          {
            [V]: !0,
            get [H]() {
              return this[Ue].size;
            },
            [Y](t) {
              if (this[$]) return;
              if (!this[ie](t)) return;
              const e = this[se](t);
              this[lt][ut](e);
              for (const t of this[Ue])
                try {
                  t[Y](e);
                } catch (e) {
                  t[F](q(e));
                }
            },
            [J](t) {
              if (!this[$]) {
                const e = this[Ue];
                e.add(t),
                  L(
                    t,
                    an(r => {
                      e.delete(t);
                    }),
                  );
              }
              const e = this[lt],
                r = e[z];
              try {
                for (let n = 0; n < r; n++) {
                  const r = e[Q](n);
                  t[Y](r);
                }
              } catch (e) {
                t[F](q(e));
              }
            },
          },
        ),
      );
      return (e, r, n) => {
        const s = Tr(n?.replay ?? 0);
        return t(e, r, s);
      };
    })(),
    ni = t => ri(a, p, t),
    si = (() => {
      const t = Lr(
        Mr(
          _r(ln, Gr()),
          function (t, e) {
            return Rr(ln, t, e), Rr(Gr(), t, e), t;
          },
          {},
          {
            [V]: !0,
            get [lt]() {
              return this[Lt][lt];
            },
            get [H]() {
              return this[Lt][H];
            },
            [Y](t) {
              this[Lt][Y](t);
            },
            [J](t) {
              this[Lt][J](t),
                L(
                  t,
                  an(() => {
                    0 === this[H] && this[F]();
                  }),
                );
            },
          },
        ),
      );
      return e => {
        const r = ni(e);
        return t(r);
      };
    })(),
    ii = { [W]: 0, [z]: 0, [Q]: t => I() },
    oi = t => {
      const { [W]: e = 0 } = t ?? {};
      return 0 === e ? ii : { [W]: e, [z]: 0, [Q]: ii[Q] };
    },
    ci = Fs,
    ui = (t, e = {}) =>
      ((t, e, { mode: r = "batched" } = {}) =>
        qr(n => {
          const s = () => {
              let e = R,
                s = R,
                o = !1;
              Ms = i;
              try {
                e = t();
              } catch (t) {
                (o = t === Rs), o || (s = q(t));
              }
              const { [ke]: u } = i;
              if (c(u) > i[be]) {
                const t = u.length;
                for (let e = i[be]; e < t; e++) {
                  const t = i[ke][e];
                  (2 !== t[Le] && 3 !== t[Le]) || t[ge][F]();
                }
              }
              (i[ke].length = i[be]), (Ms = R), (i[be] = 0);
              const a = c(u);
              let l = !0,
                h = !1;
              for (let t = 0; t < a; t++) {
                const e = u[t],
                  { [Le]: r } = e;
                if (
                  ((2 !== r && 3 !== r) || e[ve] || (l = !1),
                  (2 !== r && 3 !== r) || e[ge][$] || (h = !0),
                  !l && h)
                )
                  break;
              }
              const f = "combine-latest" === r && l && h,
                d = S(s),
                p = !h || d;
              !d && !o && (f || "batched" === r) && n[Z](e), p && n[F](s);
            },
            i = x(_s, n, s, r, e);
          L(n[yt](s), Or(n));
        }, e))(t, { [et]: !1, [rt]: !1 }, e),
    ai = Ss,
    li = An,
    hi = Fn,
    fi = $n,
    di = fn,
    pi = dn,
    yi = (t, e) => {
      const { delay: r = 0, delayStart: n = !1 } = e ?? {},
        s = s => {
          const i = t();
          L(
            s[yt](
              t => {
                for (; !s[$]; ) i[j]() ? (s[Z](i[X]), t[mt](r)) : s[F]();
              },
              n ? e : R,
            ),
            Or(s),
          );
        };
      return r > 0 ? Ir(s) : Nr(s);
    },
    gi = Xr,
    mi = Qn,
    vi = bn,
    bi = wn,
    Ei = Is,
    wi = ns,
    ki = qs,
    Si = ws,
    Ci = ei,
    xi = t => e => {
      const r = wr(null);
      for (const n in e) Cr(e, n) && (r[n] = t(e[n], n));
      return r;
    },
    Ri = (() => P(wr(null)))(),
    _i = () => t =>
      L(
        (function* () {
          for (const e in t) Cr(t, e) && (yield [e, t[e]]);
        })(),
        Cn(),
      ),
    Mi = t => e => {
      for (const r in e)
        if (Cr(e, r)) {
          const n = e[r];
          t(n, r);
        }
      return e;
    },
    Li = t => e => {
      const r = wr(null);
      for (const n in e)
        if (Cr(e, n)) {
          const s = e[n];
          t(s, n) && (r[n] = s);
        }
      return r;
    },
    Ai = () => t => {
      const e = new Set();
      for (const r in t) Cr(t, r) && e.add(r);
      return e;
    },
    qi = xi,
    Ni = xi,
    Ii = () => t =>
      L(
        (function* () {
          for (const e in t) Cr(t, e) && (yield t[e]);
        })(),
        Cn(),
      ),
    Pi = Rn,
    Oi = Qs,
    Bi = (() => Lr(fs()))(),
    Wi = t => ({ [bt]: (e, r) => Bi(t, e, r) }),
    zi = (t, e) => {
      const r = wr(null);
      for (const e in t) Cr(t, e) && (r[e] = t[e]);
      for (const t in e) Cr(e, t) && k(r[t]) && (r[t] = e[t]);
      return r;
    },
    Ui = (() =>
      P(
        Mr(
          _r(ls(), os(), ln),
          function (t, e) {
            return (
              Rr(ln, t, e), Rr(os(), t, e), Rr(ls(), t, e), (t[vt] = e[vt]), t
            );
          },
          { [vt]: R },
          {},
        ),
      ))(),
    Di = _n,
    Fi = Or,
    Ti = Yr,
    $i = cs,
    ji = Qr,
    Xi = Zr,
    Gi = an,
    Vi = Pr,
    Yi = (() =>
      Lr(
        Mr(
          _r(Ui(), Gr()),
          function (t, e, r, s, i, o) {
            (t.store = new Map()), (t.subscriptions = new Map());
            const c = un(n, "overflow"),
              u = e => {
                const { store: r, subscriptions: n } = t;
                for (; r.size > s; ) {
                  const t = c[Bt]();
                  if (k(t)) break;
                  n.has(t) || r.delete(t), e[mt]();
                }
              };
            let a = Xi;
            t.scheduleCleanup = e => {
              k(t.store.get(e)) || (c[ut](e), a[$] && (a = i[yt](u)));
            };
            const l = L(
              Wi(
                d(
                  vi(e => [
                    e,
                    L(
                      e,
                      Ni((e, r) => t.store.get(r)),
                    ),
                  ]),
                  S(o)
                    ? ai(t => {
                        const [e, r] = t,
                          n = L(r, Li(k), Ai());
                        return n.size > 0
                          ? L(
                              o.load(n),
                              vi(t => [e, zi(r, t)]),
                            )
                          : L(t, gi());
                      })
                    : p,
                  vi(([t, e]) =>
                    L(
                      t,
                      Ni((t, r) => t(e[r])),
                    ),
                  ),
                  pi(
                    Mi((e, r) => {
                      const n = t.store.get(r);
                      k(e) ? t.store.delete(r) : t.store.set(r, e);
                      const s = t.subscriptions.get(r),
                        i = k(e) || n !== e;
                      S(s) && i ? s[Y](e) : t.scheduleCleanup(r);
                    }),
                  ),
                  S(o) ? ai(h(o, "store")) : mi(),
                ),
              ),
              m(bt, e, r),
            );
            return Rr(Ui(), t, l), Rr(Gr(), t, l), t;
          },
          { scheduleCleanup: R, store: R, subscriptions: R },
          {
            get [z]() {
              return this.subscriptions.size;
            },
            [Q](t) {
              const {
                scheduleCleanup: e,
                store: r,
                subscriptions: n,
                [Lt]: s,
              } = this;
              return (
                n.get(t) ??
                (() => {
                  const i = Oi({ replay: 1 });
                  n.set(t, i),
                    L(
                      i,
                      Gi(r => {
                        n.delete(t), e(t);
                      }),
                      Ti(this),
                    );
                  const o = r.get(t);
                  return S(o) ? i[Y](o) : s[ut]({ [t]: p }), i;
                })()
              );
            },
          },
        ),
      ))(),
    Hi = (t, e) => e(t),
    Ji = (t, e) =>
      (
        (t, e, r) => n =>
          Hs(() => {
            const s = e();
            return L(n, es(t, P(s)), ys(L(s, Xr())), Fn(r));
          })
      )(Hi, t, e),
    Ki = Wi,
    Qi = (t, e = {}) => {
      const { mode: r } = e;
      return Wi(
        "switching" === r
          ? ti(d(t, Qn()))
          : "blocking" === r
          ? d(Js(d(t, Qn(), ns(!0), Xn(!1))), ns(!1))
          : Ks(d(t, Qn()), { ...e, concurrency: 1 }),
      );
    },
    Zi = (t = {}) =>
      ((t, e = {}) => ({
        [bt]: (r, s) => Yi(r, s, e.capacity ?? n, e.cleanupScheduler ?? r, t),
      }))(R, t),
    to = (t, e) => Wi(Ji(t, e)),
    eo = (() =>
      Lr(
        Mr(
          _r(Kr),
          function (t, e) {
            return Rr(Kr, t), (t[Y] = e), t;
          },
          { [Y]: R },
          { [V]: !1 },
        ),
      ))(),
    ro = (() =>
      Lr(
        Mr(
          _r(ln, Gr()),
          function (t, e) {
            return Rr(ln, t, e), Rr(Gr(), t, e), t;
          },
          {},
          {
            [V]: !0,
            [Y](t) {
              try {
                this[Lt][Y](t);
              } catch (t) {
                this[F](q(t));
              }
            },
          },
        ),
      ))(),
    no = eo,
    so = () => t => t[V] ? t : ro(t),
    io = ni,
    oo = si,
    co = {
      [J]: function (t) {
        t[F]();
      },
      [lt]: oi(),
    },
    uo = () => co,
    ao = () => t =>
      An(e => {
        const r = L(eo(h(e, ut)), Vr(h(e, U)), Or(e));
        t[J](r);
      }),
    lo = (() =>
      Lr(
        Mr(
          _r(Kr),
          function (t, e, r) {
            return Rr(Kr, t), (t[rr] = e), (t[nr] = r), t;
          },
          { [rr]: R, [nr]: 0 },
          {
            get [ht]() {
              return this[rr][ht];
            },
            get [ft]() {
              return this[rr][ft];
            },
            get [dt]() {
              return this[rr][dt];
            },
            get [gt]() {
              return this[rr][gt];
            },
            [pt]() {
              this[rr][pt]();
            },
            [yt](t, e) {
              const r = this[rr];
              return L(r[yt](t, { ...e, priority: this[nr] }), Yr(this));
            },
            [mt](t = 0) {
              this[rr][mt](t);
            },
          },
        ),
      ))(),
    ho = t => L(lo, _(t)),
    fo = (() =>
      Lr(
        Mr(
          _r(Yn),
          function (t, e) {
            return (
              Rr(Yn, t, 5),
              (t[fe] = e),
              (t[de] = un(n, "overflow")),
              (t[pe] = Zr),
              t
            );
          },
          { [fe]: R, [de]: R, [pe]: R },
          {
            get [dt]() {
              return As();
            },
            [Pt]: !0,
            [It](t, e) {
              e > 16
                ? L(this[fe], m(yt, A(this, m(Mt, t)), { delay: e }), Or(t))
                : (this[de][ut](t),
                  (t => {
                    if (!t[pe][$]) return;
                    const e = L(Qr(), Or(t));
                    t[pe] = e;
                    const r = () => {
                      if (e[$]) return;
                      const s = t[dt],
                        i = t[de];
                      t[de] = un(n, "overflow");
                      let o = R;
                      for (; (o = i[Bt]()), S(o); ) {
                        if ((t[Nt](o), e[$])) return;
                        if (t[dt] - s > 5) break;
                      }
                      const c = i[z],
                        u = t[de],
                        a = u[z];
                      if (c > 0 && 0 === a) t[de] = i;
                      else if (c > 0) {
                        t[de] = i;
                        let e = R;
                        for (; (e = u[Bt]()), S(e); ) i[ut](e);
                      }
                      t[de][z] > 0 ? requestAnimationFrame(r) : e[F]();
                    };
                    requestAnimationFrame(r);
                  })(this));
            },
          },
        ),
      ))(),
    po = (() => {
      const t = Lr(
        Mr(
          _r(Yn),
          function (t) {
            return Rr(Yn, t, 300), t;
          },
          {},
          {
            get [dt]() {
              return r.unstable_now();
            },
            get [Pt]() {
              return r.unstable_shouldYield();
            },
            [It](t, e) {
              const n = t[Rt],
                s = r.unstable_scheduleCallback(
                  n,
                  () => {
                    i[F](), this[Nt](t);
                  },
                  e > 0 ? { delay: e } : R,
                ),
                i = L(ji(), Gi(A(s, r.unstable_cancelCallback)), Fi(t));
            },
          },
        ),
      );
      return e => {
        const r = t();
        return L(r, ho(e), $i(r));
      };
    })(),
    yo = (() => {
      const t = x(Map);
      return (e = {}) => {
        const n = e.priority ?? r.unstable_NormalPriority;
        return (
          t.get(n) ??
          (() => {
            const e = po(n);
            return t.set(n, e), e;
          })()
        );
      };
    })(),
    go = (() => {
      const t = x(Map);
      return (e = {}) => {
        const n = e.priority ?? r.unstable_NormalPriority;
        return (
          t.get(n) ??
          (() => {
            const r = yo(e),
              s = fo(r);
            return t.set(n, s), s;
          })()
        );
      };
    })(),
    mo = (e, n, s) => {
      const [i, o] = t.useState(R),
        [c, u] = t.useState(R),
        a = E(e) ? t.useMemo(e, n) : e,
        {
          backpressureStrategy: l,
          capacity: f,
          priority: d = r.unstable_NormalPriority,
        } = (E(e) ? s : n) ?? {};
      return (
        t.useEffect(() => {
          const t = yo({ priority: d }),
            e = L(
              a,
              pi(t => o(e => t)),
              ki(t, { backpressureStrategy: l, capacity: f }),
              Vi(u),
            );
          return h(e, F);
        }, [a, o, u, d, f]),
        S(c) ? N(c) : i
      );
    },
    vo = (e, n, s) => {
      const [i, o] = t.useState(R),
        c = E(e) ? t.useMemo(e, n) : e,
        {
          backpressureStrategy: u,
          capacity: a,
          priority: l = r.unstable_NormalPriority,
          replay: f = 1,
        } = (E(e) ? s : n) ?? {};
      return (
        t.useEffect(() => {
          const t = yo({ priority: l }),
            e = c[bt](t, { replay: f, backpressureStrategy: u, capacity: a });
          return o(e), h(e, F);
        }, [c, o, l, a]),
        i
      );
    },
    bo = fi(),
    Eo = (e, r, n) => {
      const s = vo(e, r, n),
        i = (e => {
          const r = t.useRef();
          return (
            t.useEffect(() => {
              r.current = e;
            }, [e, r]),
            t.useCallback(
              t => {
                const e = r.current;
                return !!S(e) && e[ut](t);
              },
              [r],
            )
          );
        })(s),
        o = E(e) ? n : r;
      return [mo(s ?? bo, o), i];
    },
    wo = { current: R, hasCurrent: !1 },
    ko = () => Pi({ replay: 1 }),
    So = (e, r, n = {}) => {
      const s = t.useMemo(e, r),
        i = (e => {
          const [r, n] = t.useState();
          return (
            t.useEffect(() => {
              const t = L(
                e,
                qi(t => io()),
              );
              return n(t), A(t, Mi(m(F)), y);
            }, [e]),
            r ?? Ri()
          );
        })(s),
        [o, c] = Eo(
          () =>
            Qi(t => {
              const e = L(
                s,
                Ni((e, r) =>
                  L(
                    ci(e(t)),
                    pi(e => {
                      const n = i[r];
                      S(n) && n[Y]({ event: t, value: e });
                    }),
                    mi(),
                  ),
                ),
              );
              return L(
                yi(A(e, Ii())),
                vi(Si(go(n))),
                bi({ concurrency: n.concurrency }),
              );
            }, n),
          [s, n.concurrency, n.mode, i, n?.priority],
          n,
        );
      return [i, c, o];
    },
    Co = (t, e, r = {}) => {
      const [n, s, i] = So(P({ value: t }), e, r);
      return [n.value ?? uo(), s, i];
    },
    xo = (t, e, r) => {
      const n = r?.throttleDuration ?? 0;
      return s => {
        const i = r?.scheduler ?? s[vt];
        return L(
          s,
          (
            (...t) =>
            e =>
              L(
                t,
                In(t => t(e)),
                ps,
              )
          )(
            d(ss(), Ss(t)),
            d(
              n > 0 ? ei(n) : p,
              Zn(),
              Ss(([t, r]) => e(t, r)),
            ),
          ),
          fn(s),
          qs(i, {
            backpressureStrategy: r?.backpressureStrategy,
            capacity: r?.capacity,
          }),
        );
      };
    },
    Ro = (() => {
      const t = Lr(
        Mr(
          _r(Gr()),
          function (t, e, r) {
            return Rr(Gr(), t, e), (t[se] = r), t;
          },
          { [se]: R },
          {
            get [W]() {
              return this[Lt][W];
            },
            get [z]() {
              return this[Lt][z];
            },
            [Q](t) {
              return this[se](this[Lt][Q](t));
            },
          },
        ),
      );
      return e => r => t(r, e);
    })(),
    _o = (t, e) => r => {
      const n = L(
          e,
          Gi(e => {
            r.removeEventListener(t, s);
          }),
        ),
        s = h(n, Y);
      return r.addEventListener(t, s, { passive: !0 }), r;
    },
    Mo = (() => {
      const t = x(Map);
      let e = R;
      const r = e => {
        for (const r of e) {
          const e = t.get(r.target);
          k(e) || e[Y](r);
        }
      };
      return (n, s) => i => {
        e = e ?? x(ResizeObserver, r);
        return (
          (t.get(i) ??
            (() => {
              const r = L(
                oo(),
                Gi(() => {
                  e?.unobserve(i),
                    t.delete(i),
                    t.size > 0 || (e?.disconnect(), (e = R));
                }),
              );
              return t.set(i, r), e.observe(i, s), r;
            })())[J](n),
          i
        );
      };
    })(),
    Lo = (() => {
      const t = e => {
        const {
            overflow: r,
            overflowX: n,
            overflowY: s,
          } = window.getComputedStyle(e),
          i =
            e !== document.body &&
            [r, n, s].some(t => "auto" === t || "scroll" === t)
              ? [e]
              : [];
        return e !== document.body && null != e.parentElement
          ? [...i, ...t(e.parentElement)]
          : i;
      };
      return e => r => {
        const n = L(
          () => {
            const {
                left: t,
                top: n,
                width: s,
                height: i,
                bottom: o,
                right: c,
                x: u,
                y: a,
              } = r.getBoundingClientRect(),
              l = {
                left: t,
                top: n,
                width: s,
                height: i,
                bottom: o,
                right: c,
                x: u,
                y: a,
              };
            e[Y](l);
          },
          no,
          so(),
          $i(e),
        );
        L(r, Mo(n));
        for (const e of t(r)) L(e, _o("scroll", n));
        return L(window, _o("resize", n), _o("scroll", n)), r;
      };
    })(),
    Ao = (() => {
      const t = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        e = (e, r) => t.every(t => e[t] === r[t]);
      return P(t =>
        L(
          li(e => {
            const r = L(no(h(e, ut)), $i(e));
            L(t, Lo(r));
          }),
          hi({ equality: e }),
        ),
      );
    })(),
    qo = (() => {
      const { history: t, location: e } = window,
        r = {
          toString() {
            const { path: t, query: r, fragment: n } = this;
            let s = 0 === t.length ? "" : t.startsWith("/") ? t : "/" + t;
            (s = r.length > 0 ? `${s}?${r}` : s),
              (s = n.length > 0 ? `${s}#${n}` : s);
            const i = x(URL, e.href);
            return x(URL, i.origin + s) + "";
          },
        },
        n = t => (t.toString === r.toString ? t : wr(r, kr(t))),
        s = () => {
          const { pathname: t, search: r, hash: s } = x(URL, e.href);
          return n({
            path: t,
            query: r.slice(1),
            fragment: s.slice(1),
            title: document.title,
          });
        },
        i = (t, e) =>
          t.path === e.path && t.query === e.query && t.fragment === e.fragment,
        o = ({ uri: t, counter: e }, { uri: r, counter: n }) =>
          (t === r || (t.title === r.title && i(t, r))) && e === n,
        c = Lr(
          Mr(
            _r(Ui(), Gr()),
            function (t, e) {
              return (
                Rr(Ui(), t, e),
                Rr(Gr(), t, e),
                (t[lt] = L(
                  t[Lt][lt],
                  Ro(t => t.uri),
                )),
                t
              );
            },
            { [lt]: R },
            {
              get [wt]() {
                return L(
                  this[Lt],
                  vi(({ counter: t }) => t > 0),
                );
              },
              [ut](t) {
                return this[Lt][ut](e => ({
                  uri: n(E(t) ? t(e.uri) : t),
                  replace: !1,
                  counter: e.counter + 1,
                }));
              },
              [kt](t) {
                return this[Lt][ut](e => ({
                  uri: n(E(t) ? t(e.uri) : t),
                  replace: !0,
                  counter: e.counter,
                }));
              },
              [Et]() {
                t.back();
              },
              [tt](t) {
                L(this[Lt], Ei("uri"), m(tt, t));
              },
            },
          ),
        );
      let u = R;
      const a = (t, e, r) =>
        Ki(
          d(
            Ci(100),
            pi(({ counter: e, uri: r }) => {
              const { title: n } = r;
              (document.title = n), t({ title: n, counter: e }, "", r + "");
            }),
          ),
        )[bt](e, r);
      return {
        [bt]: (e, r) => {
          S(u) && I();
          const l = a(h(t, "replaceState"), e, {
              backpressureStrategy: "drop-oldest",
              capacity: 1,
            }),
            f = a(h(t, "pushState"), e, {
              backpressureStrategy: "drop-oldest",
              capacity: 1,
            }),
            d = L(
              to(() => ({ replace: !0, uri: s(), counter: -1 }), {
                equality: o,
              }),
              m(bt, e, {
                replay: r?.replay ?? 1,
                capacity: r?.capacity ?? 1,
                backpressureStrategy: r?.backpressureStrategy ?? "drop-oldest",
              }),
            ),
            p = L(
              d,
              xo(
                t => {
                  return L(
                    window,
                    ((e = "popstate"),
                    (r = t => {
                      const { counter: e, title: r } = t.state;
                      return {
                        counter: e,
                        replace: !0,
                        uri: n({ ...s(), title: r }),
                      };
                    }),
                    t =>
                      li(n => {
                        L(
                          n,
                          Gi(r => {
                            t.removeEventListener(e, s);
                          }),
                        );
                        const s = t => {
                          const e = r(t);
                          n[ut](e);
                        };
                        t.addEventListener(e, s, { passive: !0 });
                      })),
                    wi({ counter: 0, replace: !0, uri: t.uri }),
                    vi(P),
                  );
                  var e, r;
                },
                (t, e) => {
                  const r = !i(e.uri, t.uri),
                    n = t.uri.title !== e.uri.title;
                  let { replace: s } = e;
                  const o = !s && r;
                  return (
                    (s = s || (n && !r)),
                    L(
                      e,
                      gi(),
                      di(t => (s ? l[ut](t) : !!o && f[ut](t))),
                      mi(),
                    )
                  );
                },
              ),
            );
          return (u = L(d, c, Di(f), Di(l), Di(p))), u;
        },
      };
    })(),
    No = t.createContext(R),
    Io = () => t.useContext(No),
    Po = (e, r, n = []) =>
      ((e, r, n = []) => {
        const s = t.useRef(null),
          i = t.useCallback(r, n);
        return (
          t.useEffect(() => {
            if (k(e)) return;
            const t = no(t => {
              const e = s.current;
              null != e &&
                L(
                  i(t),
                  Mi((t, r) => {
                    e.style[r] = t ?? "";
                  }),
                );
            });
            return e[J](t), h(t, F);
          }, [e, i, s]),
          s
        );
      })(e, r, n),
    Oo = (() => {
      const t = Lr(
        Mr(
          _r(Sn(), Gr()),
          function (t, e, r) {
            return Rr(Sn(), t), Rr(Gr(), t, e), (t[se] = r), t;
          },
          { [se]: R },
          {
            [j]() {
              this[At]();
              const t = this[Lt],
                e = t[j]();
              return e && (this[X] = this[se](t[X])), e;
            },
          },
        ),
      );
      return e => r => t(r, e);
    })(),
    Bo = () => t => {
      const e = [];
      for (; t[j](); ) e.push(t[X]);
      return e;
    },
    Wo = (t, ...e) => Ls()[Me](!1, t, ...e),
    zo = t => Ls()[_e](t, !0),
    Uo = t => Ls()[_e](t, !1),
    Do = (t, ...e) => Ls()[Me](!0, t, ...e);
  function Fo() {
    return Ls()[Ce];
  }
  const To = (() => {
      const t = (t, e, r, n, s) =>
        t[bt](e, { replay: r, backpressureStrategy: s, capacity: n });
      return (
        e,
        { replay: r, backpressureStrategy: n, capacity: s, scheduler: i } = {},
      ) => {
        const o = Fo();
        return Do(t, e, i ?? o, r, s, n);
      };
    })(),
    $o = (t, e) => Wo(h, t, e),
    jo = ["W", "O", "R", "D", "L", "E"],
    Xo = {
      width: "100%",
      height: "100%",
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Helvetica",
      fontWeight: 800,
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    },
    Go = e =>
      t.createElement("div", {
        ...{ ...e },
        style: { position: "relative", height: 50, width: 50 },
      }),
    Vo = (t, e, r) => {
      const n = ((t, e, r) => (e > r ? r : e < t ? t : e))(0, e / (r + 1), 180);
      return t ? n : 180 - n;
    },
    Yo = ({ label: e, animation: r, index: n }) => {
      const s = Po(
          r,
          ({ event: t, value: e }) => ({
            transform: `perspective(600px) rotateX(${180 - Vo(t, e, n)}deg)`,
          }),
          [n],
        ),
        i = Po(
          r,
          ({ event: t, value: e }) => ({
            transform: `perspective(600px) rotateX(${Vo(t, e, n)}deg)`,
          }),
          [n],
        );
      return t.createElement(
        Go,
        null,
        t.createElement(
          "div",
          {
            ref: s,
            style: {
              ...Xo,
              backgroundColor: "#fafafa",
              border: "solid 2px #1a1a1a",
            },
          },
          "?",
        ),
        t.createElement(
          "div",
          {
            ref: i,
            style: {
              ...Xo,
              backgroundColor: "#6cab64",
              border: "solid 2px #6cab64",
              color: "#fafafa",
            },
          },
          e,
        ),
      );
    },
    Ho = ({ cache: e }) => {
      var r;
      const n = e[Q]("a"),
        s = null !== (r = mo(n)) && void 0 !== r ? r : "",
        i = t.useCallback(
          t => {
            const r = t.target.value;
            e[ut]({ a: t => r });
          },
          [n],
        );
      return t.createElement(
        "div",
        null,
        t.createElement("input", { type: "text", onChange: i, value: s }),
        t.createElement("span", null, s),
      );
    },
    Jo = () => {
      const e = vo(() => Zi(), []);
      return S(e) ? t.createElement(Ho, { cache: e }) : null;
    },
    Ko = ({ animation: e }) => {
      const r = Po(e, ({ value: t }) => ({
        margin: 50 - 50 * t + "px",
        padding: 50 * t + "px",
      }));
      return t.createElement("div", {
        ref: r,
        style: {
          height: "100px",
          width: "100px",
          backgroundColor: "#bbb",
          borderRadius: "50%",
          display: "inline-block",
          margin: "50px",
          padding: "0px",
        },
      });
    },
    Qo = (
      (e, r = {}) =>
      n => {
        const s = t.useMemo(ko, [ko]);
        return t.useEffect(() => s[Y](n), [s, n]), mo(A(s, e), [s], r) ?? null;
      }
    )(e => {
      const r = Ws(g, () => -1),
        n = () => ({ current: null }),
        s = (t, e) =>
          Qi(
            L(
              ci([
                {
                  type: "tween",
                  duration: 1e3,
                  from: 0,
                  to: 50,
                  selector: t => ({
                    color: "blue",
                    margin: 50 - t + "px",
                    padding: t + "px",
                  }),
                },
                {
                  type: "spring",
                  stiffness: 0.01,
                  damping: 0.1,
                  from: 50,
                  to: 0,
                  selector: t => ({
                    color: "green",
                    margin: 50 - t + "px",
                    padding: t + "px",
                  }),
                },
              ]),
              pi(({ color: e, margin: r, padding: n }) => {
                const s = t.current;
                null != s &&
                  ((s.style.backgroundColor = e),
                  (s.style.margin = r),
                  (s.style.padding = n));
              }),
              Si(() => fo(e)),
              P,
            ),
            { mode: "switching" },
          ),
        i = { delay: 1e3 };
      return ui(() => {
        var o, c;
        const { windowLocationStream: u } = zo(e),
          a = zo(u),
          l = Fo(),
          h = Wo(Bs, l, i),
          f = Do(h, r),
          d = $o(f, K),
          p = Wo(n),
          y = Wo(s, p, l),
          g = To(y),
          m = $o(g, ut);
        Uo(g);
        const v = null !== (o = Uo(f)) && void 0 !== o ? o : "no value";
        return t.createElement(
          "div",
          null,
          t.createElement(
            "div",
            null,
            "This is not actually a React Component",
          ),
          t.createElement(
            "div",
            null,
            null !== (c = a + "") && void 0 !== c ? c : "",
          ),
          t.createElement(
            "div",
            null,
            t.createElement("button", { onClick: d }, "Move the Enumerator"),
            t.createElement("span", null, v),
          ),
          t.createElement("div", {
            ref: p,
            style: {
              height: "100px",
              width: "100px",
              backgroundColor: "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              margin: "50px",
              padding: "0px",
            },
          }),
          t.createElement(
            "div",
            null,
            t.createElement("button", { onClick: m }, "Run Animation"),
          ),
        );
      });
    }),
    Zo = document.getElementById("root");
  e.createRoot(Zo).render(
    t.createElement(
      ({ priority: e, children: r }) => {
        const n = vo(qo, { priority: e });
        return S(n) ? t.createElement(No.Provider, { value: n }, r) : null;
      },
      null,
      t.createElement(() => {
        var e, n, s;
        const i = (() => {
            const e = Io(),
              r = mo(e),
              n = t.useRef(R);
            t.useEffect(() => {
              n.current = e;
            }, [e, n]);
            const s = t.useCallback(
                t => {
                  const e = n.current;
                  return !!S(e) && e[ut](t);
                },
                [n],
              ),
              i = t.useCallback(
                t => {
                  const e = n.current;
                  return !!S(e) && e[kt](t);
                },
                [n],
              ),
              o = t.useCallback(() => {
                const t = n.current;
                return !!S(t) && t[Et]();
              }, [n]);
            return {
              uri: r,
              push: s,
              replace: i,
              goBack: o,
              canGoBack: mo(e[wt]) ?? !1,
            };
          })(),
          o = t.useCallback(
            t => {
              const { value: e } = t.target;
              i.push(t => ({ ...t, path: e }));
            },
            [i.push],
          ),
          [c, u] = t.useState();
        t.useEffect(() => {
          var t, e, r;
          if (
            S(null === (t = i.uri) || void 0 === t ? void 0 : t.query) &&
            k(c)
          ) {
            const t = new URLSearchParams(
              null === (e = i.uri) || void 0 === e ? void 0 : e.query,
            );
            u(
              Number.parseInt(
                null !== (r = t.get("v")) && void 0 !== r ? r : "-1",
              ),
            );
          }
        }, [i.uri, c, u]);
        const a = ((e, n, s) => {
            const i = t.useRef(R),
              o = E(e) ? t.useMemo(e, n) : e,
              c = (E(e) ? s : n) ?? {},
              {
                backpressureStrategy: u,
                capacity: a,
                priority: l = r.unstable_NormalPriority,
              } = c;
            t.useEffect(() => {
              const t = yo({ priority: l }),
                e = L(o, Vs(t, c));
              return (i.current = e), h(e, F);
            }, [o, l, u, a]);
            const f = mo(i.current ?? bo, c),
              d = mo(i.current?.[ot] ?? bo, c) ?? !0,
              p = t.useCallback(() => {
                i.current?.[st]();
              }, [i]);
            return {
              resume: t.useCallback(() => {
                i.current?.[it]();
              }, [i]),
              pause: p,
              value: f,
              isPaused: d,
            };
          })(
            () =>
              L(
                Ys(g, P(null != c ? c : -1)),
                Gs(t => i.replace(e => ({ ...e, query: "v=" + t }))),
              ),
            [i.replace, c],
          ),
          [l, f, d] = So(
            () => ({
              abc: () => ({
                type: "loop",
                count: 2,
                animation: [
                  { type: "tween", duration: 500, from: 0, to: 1 },
                  { type: "delay", duration: 250 },
                  { type: "tween", duration: 500, from: 1, to: 0 },
                ],
              }),
              def: () => [
                { type: "tween", duration: 500, from: 0, to: 1 },
                { type: "delay", duration: 250 },
                {
                  type: "spring",
                  stiffness: 0.01,
                  damping: 0.1,
                  from: 1,
                  to: 0,
                },
              ],
            }),
            [],
            { mode: "blocking" },
          ),
          p = ((e, r) => {
            const n = t.useRef(R),
              [{ current: s, hasCurrent: i }, o] = t.useState(wo),
              c = E(e) ? t.useMemo(e, r) : e;
            t.useEffect(() => {
              const t = L(c, Os());
              return (n.current = t), h(t, F);
            }, [c]);
            const u = t.useCallback(() => {
              const t = n.current,
                e = !!S(t) && t[j](),
                r = S(t) && e ? { current: t[X], hasCurrent: e } : wo;
              return o(r), e;
            }, [n]);
            return { current: s, hasCurrent: i, move: u };
          })(() => Ws(g, () => -1), []);
        return t.createElement(
          "div",
          null,
          t.createElement(
            "div",
            null,
            t.createElement("input", {
              type: "text",
              onChange: o,
              value:
                (null !==
                  (n =
                    null === (e = i.uri) || void 0 === e ? void 0 : e.path) &&
                void 0 !== n
                  ? n
                  : "") + "",
            }),
            t.createElement(
              "button",
              { onClick: i.goBack, disabled: !i.canGoBack },
              "Back",
            ),
          ),
          t.createElement(
            "div",
            null,
            t.createElement(
              "button",
              { onClick: p.move },
              "Move the Enumerator",
            ),
            t.createElement(
              "span",
              null,
              " ",
              p.hasCurrent ? p.current : "no value",
            ),
          ),
          t.createElement(
            "div",
            null,
            t.createElement(
              "button",
              { onClick: a.isPaused ? a.resume : a.pause },
              a.isPaused ? "Resume Counter" : "Pause Counter",
            ),
            t.createElement(
              "span",
              null,
              null !== (s = a.value) && void 0 !== s ? s : c,
            ),
          ),
          t.createElement(
            "div",
            null,
            L(
              l,
              _i(),
              Oo(([e, r]) => t.createElement(Ko, { key: e, animation: r })),
              Bo(),
            ),
          ),
          t.createElement(
            "div",
            null,
            t.createElement(
              "button",
              { onClick: f, disabled: d },
              "Run Animation",
            ),
          ),
          t.createElement(Jo, null),
        );
      }, null),
      t.createElement(() => {
        const e = Io();
        return t.createElement(Qo, { windowLocationStream: e });
      }, null),
      t.createElement(() => {
        const [e, r] = t.useState(!1),
          [n, s, i] = Co(
            () => ({
              type: "spring",
              stiffness: 5e-4,
              damping: 0.0026,
              precision: 0.1,
              from: 0,
              to: 180 * jo.length,
            }),
            [],
            { mode: "blocking" },
          );
        return (
          t.useEffect(() => {
            s(e);
          }, [e]),
          t.createElement(
            "div",
            {
              style: { display: "flex", gap: 10, marginBottom: 80 },
              onClick: () => {
                i || r(t => !t);
              },
            },
            jo.map((e, r) =>
              t.createElement(Yo, { key: e, label: e, animation: n, index: r }),
            ),
          )
        );
      }, null),
      t.createElement(() => {
        var e, r;
        const [n, s] = t.useState(!1),
          [i, o] = t.useState(),
          { width: c } =
            null !==
              (e = mo(() => {
                var t;
                return null !==
                  (t = ((t, ...e) => (S(t) ? M(t, ...e) : R))(
                    i,
                    Ao(),
                    Ci(50),
                  )) && void 0 !== t
                  ? t
                  : fi();
              }, [i])) && void 0 !== e
              ? e
              : { width: 0 },
          [u, a] = Co(
            ({ prevWidth: t, width: e }) => ({
              type: "spring",
              from: t,
              to: e,
              precision: 0.1,
            }),
            [],
            { mode: "switching" },
          ),
          l =
            null !==
              (r = mo(A(u, ao(), Ci(50), Ei("value"), vi(Math.floor)), [u])) &&
            void 0 !== r
              ? r
              : 0;
        t.useEffect(() => {
          l > 0 && c > l && n
            ? a({ prevWidth: l, width: c })
            : 0 === l && n
            ? a({ prevWidth: 0, width: c })
            : l >= c && !n
            ? a({ prevWidth: c, width: 0 })
            : l >= c && n && a({ prevWidth: c, width: c });
        }, [l, n, c, a]);
        const h = Po(u, t => ({ width: t.value + "px" }));
        return t.createElement(
          "div",
          { style: { display: "flex", alignItems: "center", height: "100%" } },
          t.createElement(
            "div",
            {
              ref: o,
              style: {
                position: "relative",
                width: "1000px",
                height: "50px",
                cursor: "pointer",
                borderRadius: "5px",
                border: "2px solid #272727",
                overflow: "hidden",
              },
              onClick: () => {
                s(t => !t);
              },
            },
            t.createElement("div", {
              ref: h,
              style: {
                position: "absolute",
                top: "0",
                left: "0",
                width: "0",
                height: "100%",
                background: "hotpink",
              },
            }),
            t.createElement(
              "div",
              {
                style: {
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#272727",
                },
              },
              l,
            ),
          ),
        );
      }, null),
    ),
  );
})(
  React,
  ReactDOM,
  React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,
);
