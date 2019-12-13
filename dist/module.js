!(function(e, t) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = t(
      require('react'),
      require('prop-types'),
      require('react-select'),
      require('react-tabs'),
      require('keen-react-charts'),
      require('react-color'),
      require('react-lowlight'),
      require('common-tags'),
      require('react-dom')
    );
  else if ('function' == typeof define && define.amd)
    define([
      'react',
      'prop-types',
      'react-select',
      'react-tabs',
      'keen-react-charts',
      'react-color',
      'react-lowlight',
      'common-tags',
      'react-dom'
    ], t);
  else {
    var n =
      'object' == typeof exports
        ? t(
            require('react'),
            require('prop-types'),
            require('react-select'),
            require('react-tabs'),
            require('keen-react-charts'),
            require('react-color'),
            require('react-lowlight'),
            require('common-tags'),
            require('react-dom')
          )
        : t(
            e.react,
            e['prop-types'],
            e['react-select'],
            e['react-tabs'],
            e['keen-react-charts'],
            e['react-color'],
            e['react-lowlight'],
            e['common-tags'],
            e['react-dom']
          );
    for (var r in n) ('object' == typeof exports ? exports : e)[r] = n[r];
  }
})(window, function(e, t, n, r, o, a, i, l, s) {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 238))
    );
  })([
    function(t, n) {
      t.exports = e;
    },
    function(e, n) {
      e.exports = t;
    },
    function(e, t) {
      e.exports = n;
    },
    function(e, t) {
      var n = Array.isArray;
      e.exports = n;
    },
    function(e, t) {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      };
    },
    function(e, t, n) {
      var r = n(55),
        o = 'object' == typeof self && self && self.Object === Object && self,
        a = r || o || Function('return this')();
      e.exports = a;
    },
    function(e, t) {
      e.exports = function(e) {
        return null != e && 'object' == typeof e;
      };
    },
    function(e, t, n) {
      (function(t) {
        var n = 'Expected a function',
          r = '__lodash_hash_undefined__',
          o = 1 / 0,
          a = 9007199254740991,
          i = '[object Function]',
          l = '[object GeneratorFunction]',
          s = '[object Symbol]',
          c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          u = /^\w*$/,
          f = /^\./,
          d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          p = /\\(\\)?/g,
          h = /^\[object .+?Constructor\]$/,
          b = /^(?:0|[1-9]\d*)$/,
          g = 'object' == typeof t && t && t.Object === Object && t,
          m = 'object' == typeof self && self && self.Object === Object && self,
          v = g || m || Function('return this')();
        var _,
          y = Array.prototype,
          x = Function.prototype,
          w = Object.prototype,
          k = v['__core-js_shared__'],
          S = (_ = /[^.]+$/.exec((k && k.keys && k.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + _
            : '',
          E = x.toString,
          z = w.hasOwnProperty,
          O = w.toString,
          C = RegExp(
            '^' +
              E.call(z)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          j = v.Symbol,
          F = y.splice,
          T = W(v, 'Map'),
          A = W(Object, 'create'),
          P = j ? j.prototype : void 0,
          N = P ? P.toString : void 0;
        function M(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function B(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function I(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function R(e, t, n) {
          var r = e[t];
          (z.call(e, t) && Y(r, n) && (void 0 !== n || t in e)) || (e[t] = n);
        }
        function L(e, t) {
          for (var n = e.length; n--; ) if (Y(e[n][0], t)) return n;
          return -1;
        }
        function D(e) {
          return (
            !(!$(e) || ((t = e), S && S in t)) &&
            ((function(e) {
              var t = $(e) ? O.call(e) : '';
              return t == i || t == l;
            })(e) ||
            (function(e) {
              var t = !1;
              if (null != e && 'function' != typeof e.toString)
                try {
                  t = !!(e + '');
                } catch (e) {}
              return t;
            })(e)
              ? C
              : h
            ).test(
              (function(e) {
                if (null != e) {
                  try {
                    return E.call(e);
                  } catch (e) {}
                  try {
                    return e + '';
                  } catch (e) {}
                }
                return '';
              })(e)
            )
          );
          var t;
        }
        function H(e, t, n, r) {
          if (!$(e)) return e;
          for (
            var o = -1,
              a = (t = (function(e, t) {
                if (G(e)) return !1;
                var n = typeof e;
                if (
                  'number' == n ||
                  'symbol' == n ||
                  'boolean' == n ||
                  null == e ||
                  K(e)
                )
                  return !0;
                return (
                  u.test(e) || !c.test(e) || (null != t && (e in Object(t)))
                );
              })(t, e)
                ? [t]
                : (function(e) {
                    return G(e) ? e : q(e);
                  })(t)).length,
              i = a - 1,
              l = e;
            null != l && ++o < a;

          ) {
            var s = V(t[o]),
              f = n;
            if (o != i) {
              var d = l[s];
              void 0 === (f = r ? r(d, s, l) : void 0) &&
                (f = $(d) ? d : Z(t[o + 1]) ? [] : {});
            }
            R(l, s, f), (l = l[s]);
          }
          return e;
        }
        function U(e, t) {
          var n = e.__data__;
          return (function(e) {
            var t = typeof e;
            return 'string' == t ||
              'number' == t ||
              'symbol' == t ||
              'boolean' == t
              ? '__proto__' !== e
              : null === e;
          })(t)
            ? n['string' == typeof t ? 'string' : 'hash']
            : n.map;
        }
        function W(e, t) {
          var n = (function(e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return D(n) ? n : void 0;
        }
        function Z(e, t) {
          return (
            !!(t = null == t ? a : t) &&
            ('number' == typeof e || b.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        }
        (M.prototype.clear = function() {
          this.__data__ = A ? A(null) : {};
        }),
          (M.prototype.delete = function(e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (M.prototype.get = function(e) {
            var t = this.__data__;
            if (A) {
              var n = t[e];
              return n === r ? void 0 : n;
            }
            return z.call(t, e) ? t[e] : void 0;
          }),
          (M.prototype.has = function(e) {
            var t = this.__data__;
            return A ? void 0 !== t[e] : z.call(t, e);
          }),
          (M.prototype.set = function(e, t) {
            return (this.__data__[e] = A && void 0 === t ? r : t), this;
          }),
          (B.prototype.clear = function() {
            this.__data__ = [];
          }),
          (B.prototype.delete = function(e) {
            var t = this.__data__,
              n = L(t, e);
            return (
              !(n < 0) && (n == t.length - 1 ? t.pop() : F.call(t, n, 1), !0)
            );
          }),
          (B.prototype.get = function(e) {
            var t = this.__data__,
              n = L(t, e);
            return n < 0 ? void 0 : t[n][1];
          }),
          (B.prototype.has = function(e) {
            return L(this.__data__, e) > -1;
          }),
          (B.prototype.set = function(e, t) {
            var n = this.__data__,
              r = L(n, e);
            return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
          }),
          (I.prototype.clear = function() {
            this.__data__ = {
              hash: new M(),
              map: new (T || B)(),
              string: new M()
            };
          }),
          (I.prototype.delete = function(e) {
            return U(this, e).delete(e);
          }),
          (I.prototype.get = function(e) {
            return U(this, e).get(e);
          }),
          (I.prototype.has = function(e) {
            return U(this, e).has(e);
          }),
          (I.prototype.set = function(e, t) {
            return U(this, e).set(e, t), this;
          });
        var q = X(function(e) {
          e = (function(e) {
            return null == e
              ? ''
              : (function(e) {
                  if ('string' == typeof e) return e;
                  if (K(e)) return N ? N.call(e) : '';
                  var t = e + '';
                  return '0' == t && 1 / e == -o ? '-0' : t;
                })(e);
          })(e);
          var t = [];
          return (
            f.test(e) && t.push(''),
            e.replace(d, function(e, n, r, o) {
              t.push(r ? o.replace(p, '$1') : n || e);
            }),
            t
          );
        });
        function V(e) {
          if ('string' == typeof e || K(e)) return e;
          var t = e + '';
          return '0' == t && 1 / e == -o ? '-0' : t;
        }
        function X(e, t) {
          if ('function' != typeof e || (t && 'function' != typeof t))
            throw new TypeError(n);
          var r = function() {
            var n = arguments,
              o = t ? t.apply(this, n) : n[0],
              a = r.cache;
            if (a.has(o)) return a.get(o);
            var i = e.apply(this, n);
            return (r.cache = a.set(o, i)), i;
          };
          return (r.cache = new (X.Cache || I)()), r;
        }
        function Y(e, t) {
          return e === t || (e != e && t != t);
        }
        X.Cache = I;
        var G = Array.isArray;
        function $(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function K(e) {
          return (
            'symbol' == typeof e ||
            ((function(e) {
              return !!e && 'object' == typeof e;
            })(e) &&
              O.call(e) == s)
          );
        }
        e.exports = function(e, t, n) {
          return null == e ? e : H(e, t, n);
        };
      }.call(this, n(36)));
    },
    function(e, t) {
      e.exports = r;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ReactCSS = t.loop = t.handleActive = t.handleHover = t.hover = void 0);
      var r = c(n(101)),
        o = c(n(173)),
        a = c(n(193)),
        i = c(n(194)),
        l = c(n(195)),
        s = c(n(196));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.hover = i.default),
        (t.handleHover = i.default),
        (t.handleActive = l.default),
        (t.loop = s.default);
      var u = (t.ReactCSS = function(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
        var l = (0, r.default)(n),
          s = (0, o.default)(e, l);
        return (0, a.default)(s);
      });
      t.default = u;
    },
    function(e, t, n) {
      var r = n(15),
        o = n(103),
        a = n(104),
        i = '[object Null]',
        l = '[object Undefined]',
        s = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        return null == e
          ? void 0 === e
            ? l
            : i
          : s && s in Object(e)
          ? o(e)
          : a(e);
      };
    },
    function(e, t, n) {
      var r = n(126),
        o = n(129);
      e.exports = function(e, t) {
        var n = o(e, t);
        return r(n) ? n : void 0;
      };
    },
    function(e, t, n) {
      var r = n(45),
        o = n(41);
      e.exports = function(e) {
        return null != e && o(e.length) && !r(e);
      };
    },
    function(e, t, n) {
      (function(e, n) {
        var r = 200,
          o = '__lodash_hash_undefined__',
          a = 1,
          i = 2,
          l = 9007199254740991,
          s = '[object Arguments]',
          c = '[object Array]',
          u = '[object AsyncFunction]',
          f = '[object Boolean]',
          d = '[object Date]',
          p = '[object Error]',
          h = '[object Function]',
          b = '[object GeneratorFunction]',
          g = '[object Map]',
          m = '[object Number]',
          v = '[object Null]',
          _ = '[object Object]',
          y = '[object Proxy]',
          x = '[object RegExp]',
          w = '[object Set]',
          k = '[object String]',
          S = '[object Symbol]',
          E = '[object Undefined]',
          z = '[object ArrayBuffer]',
          O = '[object DataView]',
          C = /^\[object .+?Constructor\]$/,
          j = /^(?:0|[1-9]\d*)$/,
          F = {};
        (F['[object Float32Array]'] = F['[object Float64Array]'] = F[
          '[object Int8Array]'
        ] = F['[object Int16Array]'] = F['[object Int32Array]'] = F[
          '[object Uint8Array]'
        ] = F['[object Uint8ClampedArray]'] = F['[object Uint16Array]'] = F[
          '[object Uint32Array]'
        ] = !0),
          (F[s] = F[c] = F[z] = F[f] = F[O] = F[d] = F[p] = F[h] = F[g] = F[
            m
          ] = F[_] = F[x] = F[w] = F[k] = F['[object WeakMap]'] = !1);
        var T = 'object' == typeof e && e && e.Object === Object && e,
          A = 'object' == typeof self && self && self.Object === Object && self,
          P = T || A || Function('return this')(),
          N = t && !t.nodeType && t,
          M = N && 'object' == typeof n && n && !n.nodeType && n,
          B = M && M.exports === N,
          I = B && T.process,
          R = (function() {
            try {
              return I && I.binding && I.binding('util');
            } catch (e) {}
          })(),
          L = R && R.isTypedArray;
        function D(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (t(e[n], n, e)) return !0;
          return !1;
        }
        function H(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        }
        function U(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e) {
              n[++t] = e;
            }),
            n
          );
        }
        var W,
          Z,
          q,
          V = Array.prototype,
          X = Function.prototype,
          Y = Object.prototype,
          G = P['__core-js_shared__'],
          $ = X.toString,
          K = Y.hasOwnProperty,
          J = (W = /[^.]+$/.exec((G && G.keys && G.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + W
            : '',
          Q = Y.toString,
          ee = RegExp(
            '^' +
              $.call(K)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          te = B ? P.Buffer : void 0,
          ne = P.Symbol,
          re = P.Uint8Array,
          oe = Y.propertyIsEnumerable,
          ae = V.splice,
          ie = ne ? ne.toStringTag : void 0,
          le = Object.getOwnPropertySymbols,
          se = te ? te.isBuffer : void 0,
          ce =
            ((Z = Object.keys),
            (q = Object),
            function(e) {
              return Z(q(e));
            }),
          ue = Re(P, 'DataView'),
          fe = Re(P, 'Map'),
          de = Re(P, 'Promise'),
          pe = Re(P, 'Set'),
          he = Re(P, 'WeakMap'),
          be = Re(Object, 'create'),
          ge = Ue(ue),
          me = Ue(fe),
          ve = Ue(de),
          _e = Ue(pe),
          ye = Ue(he),
          xe = ne ? ne.prototype : void 0,
          we = xe ? xe.valueOf : void 0;
        function ke(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function Se(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function Ee(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function ze(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.__data__ = new Ee(); ++t < n; ) this.add(e[t]);
        }
        function Oe(e) {
          var t = (this.__data__ = new Se(e));
          this.size = t.size;
        }
        function Ce(e, t) {
          var n = qe(e),
            r = !n && Ze(e),
            o = !n && !r && Ve(e),
            a = !n && !r && !o && Ke(e),
            i = n || r || o || a,
            l = i
              ? (function(e, t) {
                  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                  return r;
                })(e.length, String)
              : [],
            s = l.length;
          for (var c in e)
            (!t && !K.call(e, c)) ||
              (i &&
                ('length' == c ||
                  (o && ('offset' == c || 'parent' == c)) ||
                  (a &&
                    ('buffer' == c ||
                      'byteLength' == c ||
                      'byteOffset' == c)) ||
                  He(c, s))) ||
              l.push(c);
          return l;
        }
        function je(e, t) {
          for (var n = e.length; n--; ) if (We(e[n][0], t)) return n;
          return -1;
        }
        function Fe(e) {
          return null == e
            ? void 0 === e
              ? E
              : v
            : ie && ie in Object(e)
            ? (function(e) {
                var t = K.call(e, ie),
                  n = e[ie];
                try {
                  e[ie] = void 0;
                  var r = !0;
                } catch (e) {}
                var o = Q.call(e);
                r && (t ? (e[ie] = n) : delete e[ie]);
                return o;
              })(e)
            : (function(e) {
                return Q.call(e);
              })(e);
        }
        function Te(e) {
          return $e(e) && Fe(e) == s;
        }
        function Ae(e, t, n, r, o) {
          return (
            e === t ||
            (null == e || null == t || (!$e(e) && !$e(t))
              ? e != e && t != t
              : (function(e, t, n, r, o, l) {
                  var u = qe(e),
                    h = qe(t),
                    b = u ? c : De(e),
                    v = h ? c : De(t),
                    y = (b = b == s ? _ : b) == _,
                    E = (v = v == s ? _ : v) == _,
                    C = b == v;
                  if (C && Ve(e)) {
                    if (!Ve(t)) return !1;
                    (u = !0), (y = !1);
                  }
                  if (C && !y)
                    return (
                      l || (l = new Oe()),
                      u || Ke(e)
                        ? Me(e, t, n, r, o, l)
                        : (function(e, t, n, r, o, l, s) {
                            switch (n) {
                              case O:
                                if (
                                  e.byteLength != t.byteLength ||
                                  e.byteOffset != t.byteOffset
                                )
                                  return !1;
                                (e = e.buffer), (t = t.buffer);
                              case z:
                                return !(
                                  e.byteLength != t.byteLength ||
                                  !l(new re(e), new re(t))
                                );
                              case f:
                              case d:
                              case m:
                                return We(+e, +t);
                              case p:
                                return (
                                  e.name == t.name && e.message == t.message
                                );
                              case x:
                              case k:
                                return e == t + '';
                              case g:
                                var c = H;
                              case w:
                                var u = r & a;
                                if ((c || (c = U), e.size != t.size && !u))
                                  return !1;
                                var h = s.get(e);
                                if (h) return h == t;
                                (r |= i), s.set(e, t);
                                var b = Me(c(e), c(t), r, o, l, s);
                                return s.delete(e), b;
                              case S:
                                if (we) return we.call(e) == we.call(t);
                            }
                            return !1;
                          })(e, t, b, n, r, o, l)
                    );
                  if (!(n & a)) {
                    var j = y && K.call(e, '__wrapped__'),
                      F = E && K.call(t, '__wrapped__');
                    if (j || F) {
                      var T = j ? e.value() : e,
                        A = F ? t.value() : t;
                      return l || (l = new Oe()), o(T, A, n, r, l);
                    }
                  }
                  if (!C) return !1;
                  return (
                    l || (l = new Oe()),
                    (function(e, t, n, r, o, i) {
                      var l = n & a,
                        s = Be(e),
                        c = s.length,
                        u = Be(t).length;
                      if (c != u && !l) return !1;
                      var f = c;
                      for (; f--; ) {
                        var d = s[f];
                        if (!(l ? d in t : K.call(t, d))) return !1;
                      }
                      var p = i.get(e);
                      if (p && i.get(t)) return p == t;
                      var h = !0;
                      i.set(e, t), i.set(t, e);
                      var b = l;
                      for (; ++f < c; ) {
                        d = s[f];
                        var g = e[d],
                          m = t[d];
                        if (r)
                          var v = l ? r(m, g, d, t, e, i) : r(g, m, d, e, t, i);
                        if (!(void 0 === v ? g === m || o(g, m, n, r, i) : v)) {
                          h = !1;
                          break;
                        }
                        b || (b = 'constructor' == d);
                      }
                      if (h && !b) {
                        var _ = e.constructor,
                          y = t.constructor;
                        _ != y &&
                          'constructor' in e &&
                          'constructor' in t &&
                          !(
                            'function' == typeof _ &&
                            _ instanceof _ &&
                            'function' == typeof y &&
                            y instanceof y
                          ) &&
                          (h = !1);
                      }
                      return i.delete(e), i.delete(t), h;
                    })(e, t, n, r, o, l)
                  );
                })(e, t, n, r, Ae, o))
          );
        }
        function Pe(e) {
          return (
            !(
              !Ge(e) ||
              (function(e) {
                return !!J && J in e;
              })(e)
            ) && (Xe(e) ? ee : C).test(Ue(e))
          );
        }
        function Ne(e) {
          if (
            !(function(e) {
              var t = e && e.constructor,
                n = ('function' == typeof t && t.prototype) || Y;
              return e === n;
            })(e)
          )
            return ce(e);
          var t = [];
          for (var n in Object(e))
            K.call(e, n) && 'constructor' != n && t.push(n);
          return t;
        }
        function Me(e, t, n, r, o, l) {
          var s = n & a,
            c = e.length,
            u = t.length;
          if (c != u && !(s && u > c)) return !1;
          var f = l.get(e);
          if (f && l.get(t)) return f == t;
          var d = -1,
            p = !0,
            h = n & i ? new ze() : void 0;
          for (l.set(e, t), l.set(t, e); ++d < c; ) {
            var b = e[d],
              g = t[d];
            if (r) var m = s ? r(g, b, d, t, e, l) : r(b, g, d, e, t, l);
            if (void 0 !== m) {
              if (m) continue;
              p = !1;
              break;
            }
            if (h) {
              if (
                !D(t, function(e, t) {
                  if (((a = t), !h.has(a) && (b === e || o(b, e, n, r, l))))
                    return h.push(t);
                  var a;
                })
              ) {
                p = !1;
                break;
              }
            } else if (b !== g && !o(b, g, n, r, l)) {
              p = !1;
              break;
            }
          }
          return l.delete(e), l.delete(t), p;
        }
        function Be(e) {
          return (function(e, t, n) {
            var r = t(e);
            return qe(e)
              ? r
              : (function(e, t) {
                  for (var n = -1, r = t.length, o = e.length; ++n < r; )
                    e[o + n] = t[n];
                  return e;
                })(r, n(e));
          })(e, Je, Le);
        }
        function Ie(e, t) {
          var n = e.__data__;
          return (function(e) {
            var t = typeof e;
            return 'string' == t ||
              'number' == t ||
              'symbol' == t ||
              'boolean' == t
              ? '__proto__' !== e
              : null === e;
          })(t)
            ? n['string' == typeof t ? 'string' : 'hash']
            : n.map;
        }
        function Re(e, t) {
          var n = (function(e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return Pe(n) ? n : void 0;
        }
        (ke.prototype.clear = function() {
          (this.__data__ = be ? be(null) : {}), (this.size = 0);
        }),
          (ke.prototype.delete = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
          }),
          (ke.prototype.get = function(e) {
            var t = this.__data__;
            if (be) {
              var n = t[e];
              return n === o ? void 0 : n;
            }
            return K.call(t, e) ? t[e] : void 0;
          }),
          (ke.prototype.has = function(e) {
            var t = this.__data__;
            return be ? void 0 !== t[e] : K.call(t, e);
          }),
          (ke.prototype.set = function(e, t) {
            var n = this.__data__;
            return (
              (this.size += this.has(e) ? 0 : 1),
              (n[e] = be && void 0 === t ? o : t),
              this
            );
          }),
          (Se.prototype.clear = function() {
            (this.__data__ = []), (this.size = 0);
          }),
          (Se.prototype.delete = function(e) {
            var t = this.__data__,
              n = je(t, e);
            return (
              !(n < 0) &&
              (n == t.length - 1 ? t.pop() : ae.call(t, n, 1), --this.size, !0)
            );
          }),
          (Se.prototype.get = function(e) {
            var t = this.__data__,
              n = je(t, e);
            return n < 0 ? void 0 : t[n][1];
          }),
          (Se.prototype.has = function(e) {
            return je(this.__data__, e) > -1;
          }),
          (Se.prototype.set = function(e, t) {
            var n = this.__data__,
              r = je(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
          }),
          (Ee.prototype.clear = function() {
            (this.size = 0),
              (this.__data__ = {
                hash: new ke(),
                map: new (fe || Se)(),
                string: new ke()
              });
          }),
          (Ee.prototype.delete = function(e) {
            var t = Ie(this, e).delete(e);
            return (this.size -= t ? 1 : 0), t;
          }),
          (Ee.prototype.get = function(e) {
            return Ie(this, e).get(e);
          }),
          (Ee.prototype.has = function(e) {
            return Ie(this, e).has(e);
          }),
          (Ee.prototype.set = function(e, t) {
            var n = Ie(this, e),
              r = n.size;
            return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
          }),
          (ze.prototype.add = ze.prototype.push = function(e) {
            return this.__data__.set(e, o), this;
          }),
          (ze.prototype.has = function(e) {
            return this.__data__.has(e);
          }),
          (Oe.prototype.clear = function() {
            (this.__data__ = new Se()), (this.size = 0);
          }),
          (Oe.prototype.delete = function(e) {
            var t = this.__data__,
              n = t.delete(e);
            return (this.size = t.size), n;
          }),
          (Oe.prototype.get = function(e) {
            return this.__data__.get(e);
          }),
          (Oe.prototype.has = function(e) {
            return this.__data__.has(e);
          }),
          (Oe.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof Se) {
              var o = n.__data__;
              if (!fe || o.length < r - 1)
                return o.push([e, t]), (this.size = ++n.size), this;
              n = this.__data__ = new Ee(o);
            }
            return n.set(e, t), (this.size = n.size), this;
          });
        var Le = le
            ? function(e) {
                return null == e
                  ? []
                  : ((e = Object(e)),
                    (function(e, t) {
                      for (
                        var n = -1, r = null == e ? 0 : e.length, o = 0, a = [];
                        ++n < r;

                      ) {
                        var i = e[n];
                        t(i, n, e) && (a[o++] = i);
                      }
                      return a;
                    })(le(e), function(t) {
                      return oe.call(e, t);
                    }));
              }
            : function() {
                return [];
              },
          De = Fe;
        function He(e, t) {
          return (
            !!(t = null == t ? l : t) &&
            ('number' == typeof e || j.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        }
        function Ue(e) {
          if (null != e) {
            try {
              return $.call(e);
            } catch (e) {}
            try {
              return e + '';
            } catch (e) {}
          }
          return '';
        }
        function We(e, t) {
          return e === t || (e != e && t != t);
        }
        ((ue && De(new ue(new ArrayBuffer(1))) != O) ||
          (fe && De(new fe()) != g) ||
          (de && '[object Promise]' != De(de.resolve())) ||
          (pe && De(new pe()) != w) ||
          (he && '[object WeakMap]' != De(new he()))) &&
          (De = function(e) {
            var t = Fe(e),
              n = t == _ ? e.constructor : void 0,
              r = n ? Ue(n) : '';
            if (r)
              switch (r) {
                case ge:
                  return O;
                case me:
                  return g;
                case ve:
                  return '[object Promise]';
                case _e:
                  return w;
                case ye:
                  return '[object WeakMap]';
              }
            return t;
          });
        var Ze = Te(
            (function() {
              return arguments;
            })()
          )
            ? Te
            : function(e) {
                return $e(e) && K.call(e, 'callee') && !oe.call(e, 'callee');
              },
          qe = Array.isArray;
        var Ve =
          se ||
          function() {
            return !1;
          };
        function Xe(e) {
          if (!Ge(e)) return !1;
          var t = Fe(e);
          return t == h || t == b || t == u || t == y;
        }
        function Ye(e) {
          return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= l;
        }
        function Ge(e) {
          var t = typeof e;
          return null != e && ('object' == t || 'function' == t);
        }
        function $e(e) {
          return null != e && 'object' == typeof e;
        }
        var Ke = L
          ? (function(e) {
              return function(t) {
                return e(t);
              };
            })(L)
          : function(e) {
              return $e(e) && Ye(e.length) && !!F[Fe(e)];
            };
        function Je(e) {
          return (function(e) {
            return null != e && Ye(e.length) && !Xe(e);
          })(e)
            ? Ce(e)
            : Ne(e);
        }
        n.exports = function(e, t) {
          return Ae(e, t);
        };
      }.call(this, n(36), n(20)(e)));
    },
    function(e, t) {
      e.exports = o;
    },
    function(e, t, n) {
      var r = n(5).Symbol;
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(58),
        o = n(110),
        a = n(12);
      e.exports = function(e) {
        return a(e) ? r(e) : o(e);
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return e === t || (e != e && t != t);
      };
    },
    function(e, t, n) {
      var r = n(77),
        o = n(51);
      e.exports = function(e, t, n, a) {
        var i = !n;
        n || (n = {});
        for (var l = -1, s = t.length; ++l < s; ) {
          var c = t[l],
            u = a ? a(n[c], e[c], c, n, e) : void 0;
          void 0 === u && (u = e[c]), i ? o(n, c, u) : r(n, c, u);
        }
        return n;
      };
    },
    function(e, t) {
      e.exports = a;
    },
    function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function() {
                return e.l;
              }
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function() {
                return e.i;
              }
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function(e, t, n) {
      (function(e) {
        var r = n(5),
          o = n(108),
          a = t && !t.nodeType && t,
          i = a && 'object' == typeof e && e && !e.nodeType && e,
          l = i && i.exports === a ? r.Buffer : void 0,
          s = (l ? l.isBuffer : void 0) || o;
        e.exports = s;
      }.call(this, n(20)(e)));
    },
    function(e, t) {
      e.exports = function(e) {
        return e;
      };
    },
    function(e, t, n) {
      var r = n(24),
        o = n(121),
        a = n(122),
        i = n(123),
        l = n(124),
        s = n(125);
      function c(e) {
        var t = (this.__data__ = new r(e));
        this.size = t.size;
      }
      (c.prototype.clear = o),
        (c.prototype.delete = a),
        (c.prototype.get = i),
        (c.prototype.has = l),
        (c.prototype.set = s),
        (e.exports = c);
    },
    function(e, t, n) {
      var r = n(116),
        o = n(117),
        a = n(118),
        i = n(119),
        l = n(120);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = a),
        (s.prototype.has = i),
        (s.prototype.set = l),
        (e.exports = s);
    },
    function(e, t, n) {
      var r = n(17);
      e.exports = function(e, t) {
        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
        return -1;
      };
    },
    function(e, t, n) {
      var r = n(11)(Object, 'create');
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(138);
      e.exports = function(e, t) {
        var n = e.__data__;
        return r(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map;
      };
    },
    function(e, t, n) {
      var r = n(153),
        o = n(47),
        a = n(154),
        i = n(155),
        l = n(156),
        s = n(10),
        c = n(63),
        u = c(r),
        f = c(o),
        d = c(a),
        p = c(i),
        h = c(l),
        b = s;
      ((r && '[object DataView]' != b(new r(new ArrayBuffer(1)))) ||
        (o && '[object Map]' != b(new o())) ||
        (a && '[object Promise]' != b(a.resolve())) ||
        (i && '[object Set]' != b(new i())) ||
        (l && '[object WeakMap]' != b(new l()))) &&
        (b = function(e) {
          var t = s(e),
            n = '[object Object]' == t ? e.constructor : void 0,
            r = n ? c(n) : '';
          if (r)
            switch (r) {
              case u:
                return '[object DataView]';
              case f:
                return '[object Map]';
              case d:
                return '[object Promise]';
              case p:
                return '[object Set]';
              case h:
                return '[object WeakMap]';
            }
          return t;
        }),
        (e.exports = b);
    },
    function(e, t, n) {
      var r = n(10),
        o = n(6),
        a = '[object Symbol]';
      e.exports = function(e) {
        return 'symbol' == typeof e || (o(e) && r(e) == a);
      };
    },
    function(e, t, n) {
      var r = n(29),
        o = 1 / 0;
      e.exports = function(e) {
        if ('string' == typeof e || r(e)) return e;
        var t = e + '';
        return '0' == t && 1 / e == -o ? '-0' : t;
      };
    },
    function(e, t, n) {
      var r = n(58),
        o = n(178),
        a = n(12);
      e.exports = function(e) {
        return a(e) ? r(e, !0) : o(e);
      };
    },
    function(e, t) {
      e.exports = function(e) {
        var t = [];
        return (
          (t.toString = function() {
            return this.map(function(t) {
              var n = (function(e, t) {
                var n = e[1] || '',
                  r = e[3];
                if (!r) return n;
                if (t && 'function' == typeof btoa) {
                  var o =
                      ((i = r),
                      '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                        ' */'),
                    a = r.sources.map(function(e) {
                      return '/*# sourceURL=' + r.sourceRoot + e + ' */';
                    });
                  return [n]
                    .concat(a)
                    .concat([o])
                    .join('\n');
                }
                var i;
                return [n].join('\n');
              })(t, e);
              return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
            }).join('');
          }),
          (t.i = function(e, n) {
            'string' == typeof e && (e = [[null, e, '']]);
            for (var r = {}, o = 0; o < this.length; o++) {
              var a = this[o][0];
              'number' == typeof a && (r[a] = !0);
            }
            for (o = 0; o < e.length; o++) {
              var i = e[o];
              ('number' == typeof i[0] && r[i[0]]) ||
                (n && !i[2]
                  ? (i[2] = n)
                  : n && (i[2] = '(' + i[2] + ') and (' + n + ')'),
                t.push(i));
            }
          }),
          t
        );
      };
    },
    function(e, t, n) {
      var r,
        o,
        a = {},
        i =
          ((r = function() {
            return window && document && document.all && !window.atob;
          }),
          function() {
            return void 0 === o && (o = r.apply(this, arguments)), o;
          }),
        l = function(e) {
          return document.querySelector(e);
        },
        s = (function(e) {
          var t = {};
          return function(e) {
            if ('function' == typeof e) return e();
            if (void 0 === t[e]) {
              var n = l.call(this, e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          };
        })(),
        c = null,
        u = 0,
        f = [],
        d = n(231);
      function p(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            o = a[r.id];
          if (o) {
            o.refs++;
            for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
            for (; i < r.parts.length; i++) o.parts.push(_(r.parts[i], t));
          } else {
            var l = [];
            for (i = 0; i < r.parts.length; i++) l.push(_(r.parts[i], t));
            a[r.id] = { id: r.id, refs: 1, parts: l };
          }
        }
      }
      function h(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
          var a = e[o],
            i = t.base ? a[0] + t.base : a[0],
            l = { css: a[1], media: a[2], sourceMap: a[3] };
          r[i] ? r[i].parts.push(l) : n.push((r[i] = { id: i, parts: [l] }));
        }
        return n;
      }
      function b(e, t) {
        var n = s(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var r = f[f.length - 1];
        if ('top' === e.insertAt)
          r
            ? r.nextSibling
              ? n.insertBefore(t, r.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            f.push(t);
        else if ('bottom' === e.insertAt) n.appendChild(t);
        else {
          if ('object' != typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var o = s(e.insertInto + ' ' + e.insertAt.before);
          n.insertBefore(t, o);
        }
      }
      function g(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = f.indexOf(e);
        t >= 0 && f.splice(t, 1);
      }
      function m(e) {
        var t = document.createElement('style');
        return (e.attrs.type = 'text/css'), v(t, e.attrs), b(e, t), t;
      }
      function v(e, t) {
        Object.keys(t).forEach(function(n) {
          e.setAttribute(n, t[n]);
        });
      }
      function _(e, t) {
        var n, r, o, a;
        if (t.transform && e.css) {
          if (!(a = t.transform(e.css))) return function() {};
          e.css = a;
        }
        if (t.singleton) {
          var i = u++;
          (n = c || (c = m(t))),
            (r = w.bind(null, n, i, !1)),
            (o = w.bind(null, n, i, !0));
        } else
          e.sourceMap &&
          'function' == typeof URL &&
          'function' == typeof URL.createObjectURL &&
          'function' == typeof URL.revokeObjectURL &&
          'function' == typeof Blob &&
          'function' == typeof btoa
            ? ((n = (function(e) {
                var t = document.createElement('link');
                return (
                  (e.attrs.type = 'text/css'),
                  (e.attrs.rel = 'stylesheet'),
                  v(t, e.attrs),
                  b(e, t),
                  t
                );
              })(t)),
              (r = S.bind(null, n, t)),
              (o = function() {
                g(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = m(t)),
              (r = k.bind(null, n)),
              (o = function() {
                g(n);
              }));
        return (
          r(e),
          function(t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              r((e = t));
            } else o();
          }
        );
      }
      e.exports = function(e, t) {
        if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
          throw new Error(
            'The style-loader cannot be used in a non-browser environment'
          );
        ((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
          t.singleton || 'boolean' == typeof t.singleton || (t.singleton = i()),
          t.insertInto || (t.insertInto = 'head'),
          t.insertAt || (t.insertAt = 'bottom');
        var n = h(e, t);
        return (
          p(n, t),
          function(e) {
            for (var r = [], o = 0; o < n.length; o++) {
              var i = n[o];
              (l = a[i.id]).refs--, r.push(l);
            }
            e && p(h(e, t), t);
            for (o = 0; o < r.length; o++) {
              var l;
              if (0 === (l = r[o]).refs) {
                for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                delete a[l.id];
              }
            }
          }
        );
      };
      var y,
        x =
          ((y = []),
          function(e, t) {
            return (y[e] = t), y.filter(Boolean).join('\n');
          });
      function w(e, t, n, r) {
        var o = n ? '' : r.css;
        if (e.styleSheet) e.styleSheet.cssText = x(t, o);
        else {
          var a = document.createTextNode(o),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]),
            i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
        }
      }
      function k(e, t) {
        var n = t.css,
          r = t.media;
        if ((r && e.setAttribute('media', r), e.styleSheet))
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      function S(e, t, n) {
        var r = n.css,
          o = n.sourceMap,
          a = void 0 === t.convertToAbsoluteUrls && o;
        (t.convertToAbsoluteUrls || a) && (r = d(r)),
          o &&
            (r +=
              '\n/*# sourceMappingURL=data:application/json;base64,' +
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
              ' */');
        var i = new Blob([r], { type: 'text/css' }),
          l = e.href;
        (e.href = URL.createObjectURL(i)), l && URL.revokeObjectURL(l);
      }
    },
    function(e, t, n) {
      !(function(e, t, n, r) {
        'use strict';
        function o(e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        }
        n = n && n.hasOwnProperty('default') ? n.default : n;
        var a = o(function(e) {
            function t() {
              return (
                (e.exports = t =
                  Object.assign ||
                  function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }),
                t.apply(this, arguments)
              );
            }
            e.exports = t;
          }),
          i = function(e) {
            if (Array.isArray(e)) return e;
          },
          l = function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          },
          s = function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          },
          c = function(e, t) {
            return i(e) || l(e, t) || s();
          },
          u = function(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (e[t] = n),
              e
            );
          },
          f = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              'function' == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                r.forEach(function(t) {
                  u(e, t, n[t]);
                });
            }
            return e;
          },
          d = function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          };
        function p(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        var h = function(e, t, n) {
            return t && p(e.prototype, t), n && p(e, n), e;
          },
          b = o(function(e) {
            function t(e) {
              return (t =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function(e) {
                      return typeof e;
                    }
                  : function(e) {
                      return e &&
                        'function' == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    })(e);
            }
            function n(r) {
              return (
                'function' == typeof Symbol && 'symbol' === t(Symbol.iterator)
                  ? (e.exports = n = function(e) {
                      return t(e);
                    })
                  : (e.exports = n = function(e) {
                      return e &&
                        'function' == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : t(e);
                    }),
                n(r)
              );
            }
            e.exports = n;
          }),
          g = function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          },
          m = function(e, t) {
            return !t || ('object' !== b(t) && 'function' != typeof t)
              ? g(e)
              : t;
          },
          v = o(function(e) {
            function t(n) {
              return (
                (e.exports = t = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function(e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    }),
                t(n)
              );
            }
            e.exports = t;
          }),
          _ = o(function(e) {
            function t(n, r) {
              return (
                (e.exports = t =
                  Object.setPrototypeOf ||
                  function(e, t) {
                    return (e.__proto__ = t), e;
                  }),
                t(n, r)
              );
            }
            e.exports = t;
          }),
          y = function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && _(e, t);
          },
          x = function(e, t, n, r, o, a, i, l) {
            if (void 0 === t)
              throw new Error('invariant requires an error message argument');
            if (!e) {
              var s;
              if (void 0 === t)
                s = new Error(
                  'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                );
              else {
                var c = [n, r, o, a, i, l],
                  u = 0;
                (s = new Error(
                  t.replace(/%s/g, function() {
                    return c[u++];
                  })
                )).name = 'Invariant Violation';
              }
              throw ((s.framesToPop = 1), s);
            }
          },
          w = (function() {
            function e() {
              d(this, e), u(this, 'refs', {});
            }
            return (
              h(e, [
                {
                  key: 'add',
                  value: function(e, t) {
                    this.refs[e] || (this.refs[e] = []), this.refs[e].push(t);
                  }
                },
                {
                  key: 'remove',
                  value: function(e, t) {
                    var n = this.getIndex(e, t);
                    -1 !== n && this.refs[e].splice(n, 1);
                  }
                },
                {
                  key: 'isActive',
                  value: function() {
                    return this.active;
                  }
                },
                {
                  key: 'getActive',
                  value: function() {
                    var e = this;
                    return this.refs[this.active.collection].find(function(t) {
                      return t.node.sortableInfo.index == e.active.index;
                    });
                  }
                },
                {
                  key: 'getIndex',
                  value: function(e, t) {
                    return this.refs[e].indexOf(t);
                  }
                },
                {
                  key: 'getOrderedRefs',
                  value: function() {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.active.collection;
                    return this.refs[e].sort(k);
                  }
                }
              ]),
              e
            );
          })();
        function k(e, t) {
          return e.node.sortableInfo.index - t.node.sortableInfo.index;
        }
        var S = function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          },
          E = function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          },
          z = function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          },
          O = function(e) {
            return S(e) || E(e) || z();
          };
        function C(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return Object.keys(e).reduce(function(t, r) {
            return -1 === n.indexOf(r) && (t[r] = e[r]), t;
          }, {});
        }
        var j = {
            end: ['touchend', 'touchcancel', 'mouseup'],
            move: ['touchmove', 'mousemove'],
            start: ['touchstart', 'mousedown']
          },
          F = (function() {
            if ('undefined' == typeof window || 'undefined' == typeof document)
              return '';
            var e = window.getComputedStyle(document.documentElement, '') || [
                '-moz-hidden-iframe'
              ],
              t = (Array.prototype.slice
                .call(e)
                .join('')
                .match(/-(moz|webkit|ms)-/) ||
                ('' === e.OLink && ['', 'o']))[1];
            switch (t) {
              case 'ms':
                return 'ms';
              default:
                return t && t.length ? t[0].toUpperCase() + t.substr(1) : '';
            }
          })();
        function T(e, t) {
          Object.keys(t).forEach(function(n) {
            e.style[n] = t[n];
          });
        }
        function A(e, t) {
          e.style[''.concat(F, 'Transform')] =
            null == t
              ? ''
              : 'translate3d('.concat(t.x, 'px,').concat(t.y, 'px,0)');
        }
        function P(e, t) {
          e.style[''.concat(F, 'TransitionDuration')] =
            null == t ? '' : ''.concat(t, 'ms');
        }
        function N(e, t) {
          for (; e; ) {
            if (t(e)) return e;
            e = e.parentNode;
          }
          return null;
        }
        function M(e, t, n) {
          return Math.max(e, Math.min(n, t));
        }
        function B(e) {
          return 'px' === e.substr(-2) ? parseFloat(e) : 0;
        }
        function I(e, t) {
          var n = t.displayName || t.name;
          return n ? ''.concat(e, '(').concat(n, ')') : e;
        }
        function R(e, t) {
          var n = e.getBoundingClientRect();
          return { top: n.top + t.top, left: n.left + t.left };
        }
        function L(e) {
          return e.touches && e.touches.length
            ? { x: e.touches[0].pageX, y: e.touches[0].pageY }
            : e.changedTouches && e.changedTouches.length
            ? { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY }
            : { x: e.pageX, y: e.pageY };
        }
        function D(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { left: 0, top: 0 };
          if (e) {
            var r = { left: n.left + e.offsetLeft, top: n.top + e.offsetTop };
            return e.parentNode === t ? r : D(e.parentNode, t, r);
          }
        }
        function H(e) {
          var t = e.lockOffset,
            n = e.width,
            r = e.height,
            o = t,
            a = t,
            i = 'px';
          if ('string' == typeof t) {
            var l = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);
            x(
              null !== l,
              'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',
              t
            ),
              (o = parseFloat(t)),
              (a = parseFloat(t)),
              (i = l[1]);
          }
          return (
            x(
              isFinite(o) && isFinite(a),
              'lockOffset value should be a finite. Given %s',
              t
            ),
            '%' === i && ((o = (o * n) / 100), (a = (a * r) / 100)),
            { x: o, y: a }
          );
        }
        function U(e) {
          return e instanceof HTMLElement
            ? (function(e) {
                var t = window.getComputedStyle(e),
                  n = /(auto|scroll)/;
                return ['overflow', 'overflowX', 'overflowY'].find(function(e) {
                  return n.test(t[e]);
                });
              })(e)
              ? e
              : U(e.parentNode)
            : null;
        }
        var W = {
            TAB: 9,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
          },
          Z = {
            Anchor: 'A',
            Button: 'BUTTON',
            Canvas: 'CANVAS',
            Input: 'INPUT',
            Option: 'OPTION',
            Textarea: 'TEXTAREA',
            Select: 'SELECT'
          };
        function q(e) {
          var n,
            o,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { withRef: !1 };
          return (
            (o = n = (function(n) {
              function o() {
                return d(this, o), m(this, v(o).apply(this, arguments));
              }
              return (
                y(o, n),
                h(o, [
                  {
                    key: 'componentDidMount',
                    value: function() {
                      r.findDOMNode(this).sortableHandle = !0;
                    }
                  },
                  {
                    key: 'getWrappedInstance',
                    value: function() {
                      return (
                        x(
                          i.withRef,
                          'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call'
                        ),
                        this.refs.wrappedInstance
                      );
                    }
                  },
                  {
                    key: 'render',
                    value: function() {
                      var n = i.withRef ? 'wrappedInstance' : null;
                      return t.createElement(e, a({ ref: n }, this.props));
                    }
                  }
                ]),
                o
              );
            })(t.Component)),
            u(n, 'displayName', I('sortableHandle', e)),
            o
          );
        }
        function V(e) {
          return null != e.sortableHandle;
        }
        var X = (function() {
            function e(t, n) {
              d(this, e), (this.container = t), (this.onScrollCallback = n);
            }
            return (
              h(e, [
                {
                  key: 'clear',
                  value: function() {
                    clearInterval(this.interval), (this.interval = null);
                  }
                },
                {
                  key: 'update',
                  value: function(e) {
                    var t = this,
                      n = e.translate,
                      r = e.minTranslate,
                      o = e.maxTranslate,
                      a = e.width,
                      i = e.height,
                      l = { x: 0, y: 0 },
                      s = { x: 1, y: 1 },
                      c = 10,
                      u = 10,
                      f = this.container,
                      d = f.scrollTop,
                      p = f.scrollLeft,
                      h = f.scrollHeight,
                      b = f.scrollWidth,
                      g = 0 === d,
                      m = h - d - f.clientHeight == 0,
                      v = 0 === p,
                      _ = b - p - f.clientWidth == 0;
                    n.y >= o.y - i / 2 && !m
                      ? ((l.y = 1),
                        (s.y = u * Math.abs((o.y - i / 2 - n.y) / i)))
                      : n.x >= o.x - a / 2 && !_
                      ? ((l.x = 1),
                        (s.x = c * Math.abs((o.x - a / 2 - n.x) / a)))
                      : n.y <= r.y + i / 2 && !g
                      ? ((l.y = -1),
                        (s.y = u * Math.abs((n.y - i / 2 - r.y) / i)))
                      : n.x <= r.x + a / 2 &&
                        !v &&
                        ((l.x = -1),
                        (s.x = c * Math.abs((n.x - a / 2 - r.x) / a))),
                      this.interval &&
                        (this.clear(), (this.isAutoScrolling = !1)),
                      (0 === l.x && 0 === l.y) ||
                        (this.interval = setInterval(function() {
                          t.isAutoScrolling = !0;
                          var e = { left: s.x * l.x, top: s.y * l.y };
                          (t.container.scrollTop += e.top),
                            (t.container.scrollLeft += e.left),
                            t.onScrollCallback(e);
                        }, 5));
                  }
                }
              ]),
              e
            );
          })(),
          Y = {
            axis: n.oneOf(['x', 'y', 'xy']),
            contentWindow: n.any,
            disableAutoscroll: n.bool,
            distance: n.number,
            getContainer: n.func,
            getHelperDimensions: n.func,
            helperClass: n.string,
            helperContainer: n.oneOfType([
              n.func,
              'undefined' == typeof HTMLElement
                ? n.any
                : n.instanceOf(HTMLElement)
            ]),
            hideSortableGhost: n.bool,
            keyboardSortingTransitionDuration: n.number,
            lockAxis: n.string,
            lockOffset: n.oneOfType([
              n.number,
              n.string,
              n.arrayOf(n.oneOfType([n.number, n.string]))
            ]),
            lockToContainerEdges: n.bool,
            onSortEnd: n.func,
            onSortMove: n.func,
            onSortOver: n.func,
            onSortStart: n.func,
            pressDelay: n.number,
            pressThreshold: n.number,
            shouldCancelStart: n.func,
            transitionDuration: n.number,
            updateBeforeSortStart: n.func,
            useDragHandle: n.bool,
            useWindowAsScrollContainer: n.bool
          },
          G = {
            axis: 'y',
            disableAutoscroll: !1,
            distance: 0,
            getHelperDimensions: function(e) {
              var t = e.node;
              return { height: t.offsetHeight, width: t.offsetWidth };
            },
            hideSortableGhost: !0,
            lockOffset: '50%',
            lockToContainerEdges: !1,
            pressDelay: 0,
            pressThreshold: 5,
            shouldCancelStart: function(e) {
              return (
                -1 !==
                  [Z.Input, Z.Textarea, Z.Select, Z.Option, Z.Button].indexOf(
                    e.target.tagName
                  ) ||
                !!N(e.target, function(e) {
                  return 'true' === e.contentEditable;
                })
              );
            },
            transitionDuration: 300,
            useWindowAsScrollContainer: !1
          },
          $ = Object.keys(Y);
        function K(e) {
          var o,
            i,
            l =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { withRef: !1 };
          return (
            (i = o = (function(n) {
              function o(e) {
                var t;
                return (
                  d(this, o),
                  (t = m(this, v(o).call(this, e))),
                  u(g(g(t)), 'handleStart', function(e) {
                    var n = t.props,
                      r = n.distance,
                      o = n.shouldCancelStart;
                    if (2 !== e.button && !o(e)) {
                      (t.touched = !0), (t.position = L(e));
                      var a = N(e.target, function(e) {
                        return null != e.sortableInfo;
                      });
                      if (
                        a &&
                        a.sortableInfo &&
                        t.nodeIsChild(a) &&
                        !t.state.sorting
                      ) {
                        var i = t.props.useDragHandle,
                          l = a.sortableInfo,
                          s = l.index,
                          c = l.collection;
                        if (l.disabled) return;
                        if (i && !N(e.target, V)) return;
                        (t.manager.active = { collection: c, index: s }),
                          (function(e) {
                            return (
                              (e.touches && e.touches.length) ||
                              (e.changedTouches && e.changedTouches.length)
                            );
                          })(e) ||
                            e.target.tagName !== Z.Anchor ||
                            e.preventDefault(),
                          r ||
                            (0 === t.props.pressDelay
                              ? t.handlePress(e)
                              : (t.pressTimer = setTimeout(function() {
                                  return t.handlePress(e);
                                }, t.props.pressDelay)));
                      }
                    }
                  }),
                  u(g(g(t)), 'nodeIsChild', function(e) {
                    return e.sortableInfo.manager === t.manager;
                  }),
                  u(g(g(t)), 'handleMove', function(e) {
                    var n = t.props,
                      r = n.distance,
                      o = n.pressThreshold;
                    if (
                      !t.state.sorting &&
                      t.touched &&
                      !t._awaitingUpdateBeforeSortStart
                    ) {
                      var a = L(e),
                        i = { x: t.position.x - a.x, y: t.position.y - a.y },
                        l = Math.abs(i.x) + Math.abs(i.y);
                      (t.delta = i),
                        r || (o && !(l >= o))
                          ? r &&
                            l >= r &&
                            t.manager.isActive() &&
                            t.handlePress(e)
                          : (clearTimeout(t.cancelTimer),
                            (t.cancelTimer = setTimeout(t.cancel, 0)));
                    }
                  }),
                  u(g(g(t)), 'handleEnd', function() {
                    (t.touched = !1), t.cancel();
                  }),
                  u(g(g(t)), 'cancel', function() {
                    var e = t.props.distance;
                    t.state.sorting ||
                      (e || clearTimeout(t.pressTimer),
                      (t.manager.active = null));
                  }),
                  u(g(g(t)), 'handlePress', function(e) {
                    try {
                      var n = t.manager.getActive(),
                        r = (function() {
                          if (n) {
                            var r = function() {
                                var n,
                                  r,
                                  o,
                                  c,
                                  g,
                                  m,
                                  v = p.sortableInfo.index,
                                  _ =
                                    ((n = p),
                                    {
                                      bottom: B(
                                        (r = window.getComputedStyle(n))
                                          .marginBottom
                                      ),
                                      left: B(r.marginLeft),
                                      right: B(r.marginRight),
                                      top: B(r.marginTop)
                                    }),
                                  y = t.scrollContainer.getBoundingClientRect(),
                                  x = i({ collection: h, index: v, node: p });
                                if (
                                  ((t.node = p),
                                  (t.margin = _),
                                  (t.width = x.width),
                                  (t.height = x.height),
                                  (t.marginOffset = {
                                    x: t.margin.left + t.margin.right,
                                    y: Math.max(t.margin.top, t.margin.bottom)
                                  }),
                                  (t.boundingClientRect = p.getBoundingClientRect()),
                                  (t.containerBoundingRect = y),
                                  (t.index = v),
                                  (t.newIndex = v),
                                  (t.axis = {
                                    x: a.indexOf('x') >= 0,
                                    y: a.indexOf('y') >= 0
                                  }),
                                  (t.offsetEdge = D(p, t.container)),
                                  (t.initialOffset = L(
                                    b
                                      ? f({}, e, {
                                          pageX: t.boundingClientRect.left,
                                          pageY: t.boundingClientRect.top
                                        })
                                      : e
                                  )),
                                  (t.initialScroll = {
                                    left: t.scrollContainer.scrollLeft,
                                    top: t.scrollContainer.scrollTop
                                  }),
                                  (t.initialWindowScroll = {
                                    left: window.pageXOffset,
                                    top: window.pageYOffset
                                  }),
                                  (t.helper = t.helperContainer.appendChild(
                                    ((c =
                                      'input, textarea, select, canvas, [contenteditable]'),
                                    (g = (o = p).querySelectorAll(c)),
                                    (m = o.cloneNode(!0)),
                                    O(m.querySelectorAll(c)).forEach(function(
                                      e,
                                      t
                                    ) {
                                      'file' !== e.type &&
                                        (e.value = g[t].value),
                                        'radio' === e.type &&
                                          e.name &&
                                          (e.name = '__sortableClone__'.concat(
                                            e.name
                                          )),
                                        e.tagName === Z.Canvas &&
                                          g[t].width > 0 &&
                                          g[t].height > 0 &&
                                          e
                                            .getContext('2d')
                                            .drawImage(g[t], 0, 0);
                                    }),
                                    m)
                                  )),
                                  T(t.helper, {
                                    boxSizing: 'border-box',
                                    height: ''.concat(t.height, 'px'),
                                    left: ''.concat(
                                      t.boundingClientRect.left - _.left,
                                      'px'
                                    ),
                                    pointerEvents: 'none',
                                    position: 'fixed',
                                    top: ''.concat(
                                      t.boundingClientRect.top - _.top,
                                      'px'
                                    ),
                                    width: ''.concat(t.width, 'px')
                                  }),
                                  b && t.helper.focus(),
                                  s &&
                                    ((t.sortableGhost = p),
                                    T(p, { opacity: 0, visibility: 'hidden' })),
                                  (t.minTranslate = {}),
                                  (t.maxTranslate = {}),
                                  b)
                                ) {
                                  var w = d
                                      ? {
                                          top: 0,
                                          left: 0,
                                          width: t.contentWindow.innerWidth,
                                          height: t.contentWindow.innerHeight
                                        }
                                      : t.containerBoundingRect,
                                    k = w.top,
                                    S = w.left,
                                    E = w.width,
                                    z = k + w.height,
                                    C = S + E;
                                  t.axis.x &&
                                    ((t.minTranslate.x =
                                      S - t.boundingClientRect.left),
                                    (t.maxTranslate.x =
                                      C -
                                      (t.boundingClientRect.left + t.width))),
                                    t.axis.y &&
                                      ((t.minTranslate.y =
                                        k - t.boundingClientRect.top),
                                      (t.maxTranslate.y =
                                        z -
                                        (t.boundingClientRect.top + t.height)));
                                } else
                                  t.axis.x &&
                                    ((t.minTranslate.x =
                                      (d ? 0 : y.left) -
                                      t.boundingClientRect.left -
                                      t.width / 2),
                                    (t.maxTranslate.x =
                                      (d
                                        ? t.contentWindow.innerWidth
                                        : y.left + y.width) -
                                      t.boundingClientRect.left -
                                      t.width / 2)),
                                    t.axis.y &&
                                      ((t.minTranslate.y =
                                        (d ? 0 : y.top) -
                                        t.boundingClientRect.top -
                                        t.height / 2),
                                      (t.maxTranslate.y =
                                        (d
                                          ? t.contentWindow.innerHeight
                                          : y.top + y.height) -
                                        t.boundingClientRect.top -
                                        t.height / 2));
                                l &&
                                  l.split(' ').forEach(function(e) {
                                    return t.helper.classList.add(e);
                                  }),
                                  (t.listenerNode = e.touches
                                    ? p
                                    : t.contentWindow),
                                  b
                                    ? (t.listenerNode.addEventListener(
                                        'wheel',
                                        t.handleKeyEnd,
                                        !0
                                      ),
                                      t.listenerNode.addEventListener(
                                        'mousedown',
                                        t.handleKeyEnd,
                                        !0
                                      ),
                                      t.listenerNode.addEventListener(
                                        'keydown',
                                        t.handleKeyDown
                                      ))
                                    : (j.move.forEach(function(e) {
                                        return t.listenerNode.addEventListener(
                                          e,
                                          t.handleSortMove,
                                          !1
                                        );
                                      }),
                                      j.end.forEach(function(e) {
                                        return t.listenerNode.addEventListener(
                                          e,
                                          t.handleSortEnd,
                                          !1
                                        );
                                      })),
                                  t.setState({ sorting: !0, sortingIndex: v }),
                                  u &&
                                    u(
                                      {
                                        node: p,
                                        index: v,
                                        collection: h,
                                        isKeySorting: b
                                      },
                                      e
                                    ),
                                  b && t.keyMove(0);
                              },
                              o = t.props,
                              a = o.axis,
                              i = o.getHelperDimensions,
                              l = o.helperClass,
                              s = o.hideSortableGhost,
                              c = o.updateBeforeSortStart,
                              u = o.onSortStart,
                              d = o.useWindowAsScrollContainer,
                              p = n.node,
                              h = n.collection,
                              b = t.manager.isKeySorting,
                              g = (function() {
                                if ('function' == typeof c) {
                                  t._awaitingUpdateBeforeSortStart = !0;
                                  var n = (function(e, t) {
                                    try {
                                      var n = e();
                                    } catch (e) {
                                      return t(!0, e);
                                    }
                                    return n && n.then
                                      ? n.then(
                                          t.bind(null, !1),
                                          t.bind(null, !0)
                                        )
                                      : t(!1, value);
                                  })(
                                    function() {
                                      var t = p.sortableInfo.index;
                                      return Promise.resolve(
                                        c(
                                          {
                                            collection: h,
                                            index: t,
                                            node: p,
                                            isKeySorting: b
                                          },
                                          e
                                        )
                                      ).then(function() {});
                                    },
                                    function(e, n) {
                                      if (
                                        ((t._awaitingUpdateBeforeSortStart = !1),
                                        e)
                                      )
                                        throw n;
                                      return n;
                                    }
                                  );
                                  if (n && n.then) return n.then(function() {});
                                }
                              })();
                            return g && g.then ? g.then(r) : r();
                          }
                        })();
                      return Promise.resolve(
                        r && r.then ? r.then(function() {}) : void 0
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  }),
                  u(g(g(t)), 'handleSortMove', function(e) {
                    var n = t.props.onSortMove;
                    'function' == typeof e.preventDefault && e.preventDefault(),
                      t.updateHelperPosition(e),
                      t.animateNodes(),
                      t.autoscroll(),
                      n && n(e);
                  }),
                  u(g(g(t)), 'handleSortEnd', function(e) {
                    var n = t.props,
                      r = n.hideSortableGhost,
                      o = n.onSortEnd,
                      a = t.manager,
                      i = a.active.collection,
                      l = a.isKeySorting,
                      s = t.manager.refs[i];
                    t.listenerNode &&
                      (l
                        ? (t.listenerNode.removeEventListener(
                            'wheel',
                            t.handleKeyEnd,
                            !0
                          ),
                          t.listenerNode.removeEventListener(
                            'mousedown',
                            t.handleKeyEnd,
                            !0
                          ),
                          t.listenerNode.removeEventListener(
                            'keydown',
                            t.handleKeyDown
                          ))
                        : (j.move.forEach(function(e) {
                            return t.listenerNode.removeEventListener(
                              e,
                              t.handleSortMove
                            );
                          }),
                          j.end.forEach(function(e) {
                            return t.listenerNode.removeEventListener(
                              e,
                              t.handleSortEnd
                            );
                          }))),
                      t.helper.parentNode.removeChild(t.helper),
                      r &&
                        t.sortableGhost &&
                        T(t.sortableGhost, { opacity: '', visibility: '' });
                    for (var c = 0, u = s.length; c < u; c++) {
                      var f = s[c],
                        d = f.node;
                      (f.edgeOffset = null),
                        (f.boundingClientRect = null),
                        A(d, null),
                        P(d, null),
                        (f.translate = null);
                    }
                    t.autoScroller.clear(),
                      (t.manager.active = null),
                      (t.manager.isKeySorting = !1),
                      t.setState({ sorting: !1, sortingIndex: null }),
                      'function' == typeof o &&
                        o(
                          {
                            collection: i,
                            newIndex: t.newIndex,
                            oldIndex: t.index,
                            isKeySorting: l
                          },
                          e
                        ),
                      (t.touched = !1);
                  }),
                  u(g(g(t)), 'autoscroll', function() {
                    var e = t.props.disableAutoscroll,
                      n = t.manager.isKeySorting;
                    if (!e) {
                      if (n) {
                        var r = f({}, t.translate),
                          o = 0,
                          a = 0;
                        return (
                          t.axis.x &&
                            ((r.x = Math.min(
                              t.maxTranslate.x,
                              Math.max(t.minTranslate.x, t.translate.x)
                            )),
                            (o = t.translate.x - r.x)),
                          t.axis.y &&
                            ((r.y = Math.min(
                              t.maxTranslate.y,
                              Math.max(t.minTranslate.y, t.translate.y)
                            )),
                            (a = t.translate.y - r.y)),
                          (t.translate = r),
                          A(t.helper, t.translate),
                          (t.scrollContainer.scrollLeft += o),
                          void (t.scrollContainer.scrollTop += a)
                        );
                      }
                      t.autoScroller.update({
                        height: t.height,
                        maxTranslate: t.maxTranslate,
                        minTranslate: t.minTranslate,
                        translate: t.translate,
                        width: t.width
                      });
                    }
                  }),
                  u(g(g(t)), 'onAutoScroll', function(e) {
                    (t.translate.x += e.left),
                      (t.translate.y += e.top),
                      t.animateNodes();
                  }),
                  u(g(g(t)), 'handleKeyDown', function(e) {
                    var n = e.keyCode,
                      r = t.props.shouldCancelStart;
                    if (
                      (!t.manager.active || t.manager.isKeySorting) &&
                      (t.manager.active ||
                        (n === W.SPACE && !r(e) && t.isValidSortingTarget(e)))
                    )
                      switch ((e.stopPropagation(), e.preventDefault(), n)) {
                        case W.SPACE:
                          t.manager.active ? t.keyDrop(e) : t.keyLift(e);
                          break;
                        case W.DOWN:
                        case W.RIGHT:
                          t.keyMove(1);
                          break;
                        case W.UP:
                        case W.LEFT:
                          t.keyMove(-1);
                          break;
                        case W.ESC:
                          (t.newIndex = t.manager.active.index), t.keyDrop(e);
                      }
                  }),
                  u(g(g(t)), 'keyLift', function(e) {
                    var n = e.target,
                      r = N(n, function(e) {
                        return null != e.sortableInfo;
                      }).sortableInfo,
                      o = r.index,
                      a = r.collection;
                    (t.initialFocusedNode = n),
                      (t.manager.isKeySorting = !0),
                      (t.manager.active = { index: o, collection: a }),
                      t.handlePress(e);
                  }),
                  u(g(g(t)), 'keyMove', function(e) {
                    var n = t.manager.getOrderedRefs(),
                      r = n[n.length - 1].node.sortableInfo.index,
                      o = t.newIndex + e,
                      a = t.newIndex;
                    if (!(o < 0 || o > r)) {
                      (t.prevIndex = a), (t.newIndex = o);
                      var i = (function(e, t, n) {
                          return e < n && e > t
                            ? e - 1
                            : e > n && e < t
                            ? e + 1
                            : e;
                        })(t.newIndex, t.prevIndex, t.index),
                        l = n.find(function(e) {
                          return e.node.sortableInfo.index === i;
                        }),
                        s = l.node,
                        c = t.containerScrollDelta,
                        u = l.boundingClientRect || R(s, c),
                        f = l.translate || { x: 0, y: 0 },
                        d = u.top + f.y - c.top,
                        p = u.left + f.x - c.left,
                        h = a < o,
                        b = h && t.axis.x ? s.offsetWidth - t.width : 0,
                        g = h && t.axis.y ? s.offsetHeight - t.height : 0;
                      t.handleSortMove({
                        pageX: p + b,
                        pageY: d + g,
                        ignoreTransition: 0 === e
                      });
                    }
                  }),
                  u(g(g(t)), 'keyDrop', function(e) {
                    t.handleSortEnd(e),
                      t.initialFocusedNode && t.initialFocusedNode.focus();
                  }),
                  u(g(g(t)), 'handleKeyEnd', function(e) {
                    t.manager.active && t.keyDrop(e);
                  }),
                  u(g(g(t)), 'isValidSortingTarget', function(e) {
                    var n = t.props.useDragHandle,
                      r = e.target,
                      o = N(r, function(e) {
                        return null != e.sortableInfo;
                      });
                    return (
                      o &&
                      o.sortableInfo &&
                      !o.sortableInfo.disabled &&
                      (n ? V(r) : r.sortableInfo)
                    );
                  }),
                  (function(e) {
                    x(
                      !(e.distance && e.pressDelay),
                      'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.'
                    );
                  })(e),
                  (t.state = {}),
                  (t.manager = new w()),
                  (t.events = {
                    end: t.handleEnd,
                    move: t.handleMove,
                    start: t.handleStart
                  }),
                  t
                );
              }
              return (
                y(o, n),
                h(o, [
                  {
                    key: 'getChildContext',
                    value: function() {
                      return { manager: this.manager };
                    }
                  },
                  {
                    key: 'componentDidMount',
                    value: function() {
                      var e = this,
                        t = this.props.useWindowAsScrollContainer,
                        n = this.getContainer();
                      Promise.resolve(n).then(function(n) {
                        (e.container = n),
                          (e.document = e.container.ownerDocument || document);
                        var r =
                          e.props.contentWindow ||
                          e.document.defaultView ||
                          window;
                        (e.contentWindow = 'function' == typeof r ? r() : r),
                          (e.scrollContainer = t
                            ? e.document.scrollingElement ||
                              e.document.documentElement
                            : U(e.container) || e.container),
                          (e.autoScroller = new X(
                            e.scrollContainer,
                            e.onAutoScroll
                          )),
                          Object.keys(e.events).forEach(function(t) {
                            return j[t].forEach(function(n) {
                              return e.container.addEventListener(
                                n,
                                e.events[t],
                                !1
                              );
                            });
                          }),
                          e.container.addEventListener(
                            'keydown',
                            e.handleKeyDown
                          );
                      });
                    }
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function() {
                      var e = this;
                      this.helper &&
                        this.helper.parentNode &&
                        this.helper.parentNode.removeChild(this.helper),
                        this.container &&
                          (Object.keys(this.events).forEach(function(t) {
                            return j[t].forEach(function(n) {
                              return e.container.removeEventListener(
                                n,
                                e.events[t]
                              );
                            });
                          }),
                          this.container.removeEventListener(
                            'keydown',
                            this.handleKeyDown
                          ));
                    }
                  },
                  {
                    key: 'updateHelperPosition',
                    value: function(e) {
                      var t = this.props,
                        n = t.lockAxis,
                        r = t.lockOffset,
                        o = t.lockToContainerEdges,
                        a = t.transitionDuration,
                        i = t.keyboardSortingTransitionDuration,
                        l = void 0 === i ? a : i,
                        s = this.manager.isKeySorting,
                        u = e.ignoreTransition,
                        f = L(e),
                        d = {
                          x: f.x - this.initialOffset.x,
                          y: f.y - this.initialOffset.y
                        };
                      if (
                        ((d.y -=
                          window.pageYOffset - this.initialWindowScroll.top),
                        (d.x -=
                          window.pageXOffset - this.initialWindowScroll.left),
                        (this.translate = d),
                        o)
                      ) {
                        var p = (function(e) {
                            var t = e.height,
                              n = e.width,
                              r = e.lockOffset,
                              o = Array.isArray(r) ? r : [r, r];
                            x(
                              2 === o.length,
                              'lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s',
                              r
                            );
                            var a = c(o, 2),
                              i = a[0],
                              l = a[1];
                            return [
                              H({ height: t, lockOffset: i, width: n }),
                              H({ height: t, lockOffset: l, width: n })
                            ];
                          })({
                            height: this.height,
                            lockOffset: r,
                            width: this.width
                          }),
                          h = c(p, 2),
                          b = h[0],
                          g = h[1],
                          m = {
                            x: this.width / 2 - b.x,
                            y: this.height / 2 - b.y
                          },
                          v = {
                            x: this.width / 2 - g.x,
                            y: this.height / 2 - g.y
                          };
                        (d.x = M(
                          this.minTranslate.x + m.x,
                          this.maxTranslate.x - v.x,
                          d.x
                        )),
                          (d.y = M(
                            this.minTranslate.y + m.y,
                            this.maxTranslate.y - v.y,
                            d.y
                          ));
                      }
                      'x' === n ? (d.y = 0) : 'y' === n && (d.x = 0),
                        s && l && !u && P(this.helper, l),
                        A(this.helper, d);
                    }
                  },
                  {
                    key: 'animateNodes',
                    value: function() {
                      var e = this.props,
                        t = e.transitionDuration,
                        n = e.hideSortableGhost,
                        r = e.onSortOver,
                        o = this.containerScrollDelta,
                        a = this.windowScrollDelta,
                        i = this.manager.getOrderedRefs(),
                        l = this.offsetEdge.left + this.translate.x + o.left,
                        s = this.offsetEdge.top + this.translate.y + o.top,
                        c = this.manager.isKeySorting,
                        u = this.newIndex;
                      this.newIndex = null;
                      for (var f = 0, d = i.length; f < d; f++) {
                        var p = i[f].node,
                          h = p.sortableInfo.index,
                          b = p.offsetWidth,
                          g = p.offsetHeight,
                          m = {
                            height: this.height > g ? g / 2 : this.height / 2,
                            width: this.width > b ? b / 2 : this.width / 2
                          },
                          v = c && h > this.index && h <= u,
                          _ = c && h < this.index && h >= u,
                          y = { x: 0, y: 0 },
                          x = i[f].edgeOffset;
                        x ||
                          ((x = D(p, this.container)),
                          (i[f].edgeOffset = x),
                          c && (i[f].boundingClientRect = R(p, o)));
                        var w = f < i.length - 1 && i[f + 1],
                          k = f > 0 && i[f - 1];
                        w &&
                          !w.edgeOffset &&
                          ((w.edgeOffset = D(w.node, this.container)),
                          c && (w.boundingClientRect = R(w.node, o))),
                          h !== this.index
                            ? (t && P(p, t),
                              this.axis.x
                                ? this.axis.y
                                  ? _ ||
                                    (h < this.index &&
                                      ((l + a.left - m.width <= x.left &&
                                        s + a.top <= x.top + m.height) ||
                                        s + a.top + m.height <= x.top))
                                    ? ((y.x = this.width + this.marginOffset.x),
                                      x.left + y.x >
                                        this.containerBoundingRect.width -
                                          m.width &&
                                        w &&
                                        ((y.x = w.edgeOffset.left - x.left),
                                        (y.y = w.edgeOffset.top - x.top)),
                                      null === this.newIndex &&
                                        (this.newIndex = h))
                                    : (v ||
                                        (h > this.index &&
                                          ((l + a.left + m.width >= x.left &&
                                            s + a.top + m.height >= x.top) ||
                                            s + a.top + m.height >=
                                              x.top + g))) &&
                                      ((y.x = -(
                                        this.width + this.marginOffset.x
                                      )),
                                      x.left + y.x <
                                        this.containerBoundingRect.left +
                                          m.width &&
                                        k &&
                                        ((y.x = k.edgeOffset.left - x.left),
                                        (y.y = k.edgeOffset.top - x.top)),
                                      (this.newIndex = h))
                                  : v ||
                                    (h > this.index &&
                                      l + a.left + m.width >= x.left)
                                  ? ((y.x = -(
                                      this.width + this.marginOffset.x
                                    )),
                                    (this.newIndex = h))
                                  : (_ ||
                                      (h < this.index &&
                                        l + a.left <= x.left + m.width)) &&
                                    ((y.x = this.width + this.marginOffset.x),
                                    null == this.newIndex &&
                                      (this.newIndex = h))
                                : this.axis.y &&
                                  (v ||
                                  (h > this.index &&
                                    s + a.top + m.height >= x.top)
                                    ? ((y.y = -(
                                        this.height + this.marginOffset.y
                                      )),
                                      (this.newIndex = h))
                                    : (_ ||
                                        (h < this.index &&
                                          s + a.top <= x.top + m.height)) &&
                                      ((y.y =
                                        this.height + this.marginOffset.y),
                                      null == this.newIndex &&
                                        (this.newIndex = h))),
                              A(p, y),
                              (i[f].translate = y))
                            : n &&
                              ((this.sortableGhost = p),
                              T(p, { opacity: 0, visibility: 'hidden' }));
                      }
                      null == this.newIndex && (this.newIndex = this.index),
                        c && (this.newIndex = u);
                      var S = c ? this.prevIndex : u;
                      r &&
                        this.newIndex !== S &&
                        r({
                          collection: this.manager.active.collection,
                          index: this.index,
                          newIndex: this.newIndex,
                          oldIndex: S,
                          isKeySorting: c
                        });
                    }
                  },
                  {
                    key: 'getWrappedInstance',
                    value: function() {
                      return (
                        x(
                          l.withRef,
                          'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call'
                        ),
                        this.refs.wrappedInstance
                      );
                    }
                  },
                  {
                    key: 'getContainer',
                    value: function() {
                      var e = this.props.getContainer;
                      return 'function' != typeof e
                        ? r.findDOMNode(this)
                        : e(l.withRef ? this.getWrappedInstance() : void 0);
                    }
                  },
                  {
                    key: 'render',
                    value: function() {
                      var n = l.withRef ? 'wrappedInstance' : null;
                      return t.createElement(
                        e,
                        a({ ref: n }, C(this.props, $))
                      );
                    }
                  },
                  {
                    key: 'helperContainer',
                    get: function() {
                      var e = this.props.helperContainer;
                      return 'function' == typeof e
                        ? e()
                        : this.props.helperContainer || this.document.body;
                    }
                  },
                  {
                    key: 'containerScrollDelta',
                    get: function() {
                      return this.props.useWindowAsScrollContainer
                        ? { left: 0, top: 0 }
                        : {
                            left:
                              this.scrollContainer.scrollLeft -
                              this.initialScroll.left,
                            top:
                              this.scrollContainer.scrollTop -
                              this.initialScroll.top
                          };
                    }
                  },
                  {
                    key: 'windowScrollDelta',
                    get: function() {
                      return {
                        left:
                          this.contentWindow.pageXOffset -
                          this.initialWindowScroll.left,
                        top:
                          this.contentWindow.pageYOffset -
                          this.initialWindowScroll.top
                      };
                    }
                  }
                ]),
                o
              );
            })(t.Component)),
            u(o, 'displayName', I('sortableList', e)),
            u(o, 'defaultProps', G),
            u(o, 'propTypes', Y),
            u(o, 'childContextTypes', { manager: n.object.isRequired }),
            i
          );
        }
        var J = {
            index: n.number.isRequired,
            collection: n.oneOfType([n.number, n.string]),
            disabled: n.bool
          },
          Q = Object.keys(J);
        function ee(e) {
          var o,
            i,
            l =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { withRef: !1 };
          return (
            (i = o = (function(n) {
              function o() {
                return d(this, o), m(this, v(o).apply(this, arguments));
              }
              return (
                y(o, n),
                h(o, [
                  {
                    key: 'componentDidMount',
                    value: function() {
                      this.register();
                    }
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function(e) {
                      this.node &&
                        (e.index !== this.props.index &&
                          (this.node.sortableInfo.index = this.props.index),
                        e.disabled !== this.props.disabled &&
                          (this.node.sortableInfo.disabled = this.props.disabled)),
                        e.collection !== this.props.collection &&
                          (this.unregister(e.collection), this.register());
                    }
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function() {
                      this.unregister();
                    }
                  },
                  {
                    key: 'register',
                    value: function() {
                      var e = this.props,
                        t = e.collection,
                        n = e.disabled,
                        o = e.index,
                        a = r.findDOMNode(this);
                      (a.sortableInfo = {
                        collection: t,
                        disabled: n,
                        index: o,
                        manager: this.context.manager
                      }),
                        (this.node = a),
                        (this.ref = { node: a }),
                        this.context.manager.add(t, this.ref);
                    }
                  },
                  {
                    key: 'unregister',
                    value: function() {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : this.props.collection;
                      this.context.manager.remove(e, this.ref);
                    }
                  },
                  {
                    key: 'getWrappedInstance',
                    value: function() {
                      return (
                        x(
                          l.withRef,
                          'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call'
                        ),
                        this.refs.wrappedInstance
                      );
                    }
                  },
                  {
                    key: 'render',
                    value: function() {
                      var n = l.withRef ? 'wrappedInstance' : null;
                      return t.createElement(
                        e,
                        a({ ref: n }, C(this.props, Q))
                      );
                    }
                  }
                ]),
                o
              );
            })(t.Component)),
            u(o, 'displayName', I('sortableElement', e)),
            u(o, 'contextTypes', { manager: n.object.isRequired }),
            u(o, 'propTypes', J),
            u(o, 'defaultProps', { collection: 0 }),
            i
          );
        }
        (e.SortableContainer = K),
          (e.sortableContainer = K),
          (e.SortableElement = ee),
          (e.sortableElement = ee),
          (e.SortableHandle = q),
          (e.sortableHandle = q),
          (e.arrayMove = function(e, t, n) {
            return (
              'undefined' != typeof console &&
                console.warn(
                  "Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move"
                ),
              (e = e.slice()).splice(
                n < 0 ? e.length + n : n,
                0,
                e.splice(t, 1)[0]
              ),
              e
            );
          }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      })(t, n(0), n(1), n(99));
    },
    function(e, t) {
      e.exports = i;
    },
    function(e, t) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (e) {
        'object' == typeof window && (n = window);
      }
      e.exports = n;
    },
    function(e, t, n) {
      var r = n(56),
        o = n(60);
      e.exports = function(e, t) {
        return e && r(e, o(t));
      };
    },
    function(e, t, n) {
      var r = n(107),
        o = n(6),
        a = Object.prototype,
        i = a.hasOwnProperty,
        l = a.propertyIsEnumerable,
        s = r(
          (function() {
            return arguments;
          })()
        )
          ? r
          : function(e) {
              return o(e) && i.call(e, 'callee') && !l.call(e, 'callee');
            };
      e.exports = s;
    },
    function(e, t) {
      var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
      e.exports = function(e, t) {
        var o = typeof e;
        return (
          !!(t = null == t ? n : t) &&
          ('number' == o || ('symbol' != o && r.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
    },
    function(e, t, n) {
      var r = n(109),
        o = n(42),
        a = n(43),
        i = a && a.isTypedArray,
        l = i ? o(i) : r;
      e.exports = l;
    },
    function(e, t) {
      var n = 9007199254740991;
      e.exports = function(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= n;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return function(t) {
          return e(t);
        };
      };
    },
    function(e, t, n) {
      (function(e) {
        var r = n(55),
          o = t && !t.nodeType && t,
          a = o && 'object' == typeof e && e && !e.nodeType && e,
          i = a && a.exports === o && r.process,
          l = (function() {
            try {
              var e = a && a.require && a.require('util').types;
              return e || (i && i.binding && i.binding('util'));
            } catch (e) {}
          })();
        e.exports = l;
      }.call(this, n(20)(e)));
    },
    function(e, t) {
      var n = Object.prototype;
      e.exports = function(e) {
        var t = e && e.constructor;
        return e === (('function' == typeof t && t.prototype) || n);
      };
    },
    function(e, t, n) {
      var r = n(10),
        o = n(4),
        a = '[object AsyncFunction]',
        i = '[object Function]',
        l = '[object GeneratorFunction]',
        s = '[object Proxy]';
      e.exports = function(e) {
        if (!o(e)) return !1;
        var t = r(e);
        return t == i || t == l || t == a || t == s;
      };
    },
    function(e, t, n) {
      var r = n(59)(Object.getPrototypeOf, Object);
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(11)(n(5), 'Map');
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(130),
        o = n(137),
        a = n(139),
        i = n(140),
        l = n(141);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = a),
        (s.prototype.has = i),
        (s.prototype.set = l),
        (e.exports = s);
    },
    function(e, t, n) {
      var r = n(152),
        o = n(70),
        a = Object.prototype.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        l = i
          ? function(e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  r(i(e), function(t) {
                    return a.call(e, t);
                  }));
            }
          : o;
      e.exports = l;
    },
    function(e, t, n) {
      var r = n(3),
        o = n(29),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
      e.exports = function(e, t) {
        if (r(e)) return !1;
        var n = typeof e;
        return (
          !(
            'number' != n &&
            'symbol' != n &&
            'boolean' != n &&
            null != e &&
            !o(e)
          ) ||
          i.test(e) || !a.test(e) || (null != t && e in Object(t))
        );
      };
    },
    function(e, t, n) {
      var r = n(78);
      e.exports = function(e, t, n) {
        '__proto__' == t && r
          ? r(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0
            })
          : (e[t] = n);
      };
    },
    function(e, t, n) {
      var r = n(66);
      e.exports = function(e) {
        var t = new e.constructor(e.byteLength);
        return new r(t).set(new r(e)), t;
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Checkboard = void 0);
      var r = i(n(0)),
        o = i(n(9)),
        a = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n(198));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (t.Checkboard = function(e) {
        var t = e.white,
          n = e.grey,
          i = e.size,
          l = e.renderers,
          s = e.borderRadius,
          c = e.boxShadow,
          u = (0, o.default)({
            default: {
              grid: {
                borderRadius: s,
                boxShadow: c,
                absolute: '0px 0px 0px 0px',
                background: 'url(' + a.get(t, n, i, l.canvas) + ') center left'
              }
            }
          });
        return r.default.createElement('div', { style: u.grid });
      });
      (l.defaultProps = {
        size: 8,
        white: 'transparent',
        grey: 'rgba(0,0,0,.08)',
        renderers: {}
      }),
        (t.default = l);
    },
    function(e, t) {
      var n,
        r,
        o = (e.exports = {});
      function a() {
        throw new Error('setTimeout has not been defined');
      }
      function i() {
        throw new Error('clearTimeout has not been defined');
      }
      function l(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === a || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function() {
        try {
          n = 'function' == typeof setTimeout ? setTimeout : a;
        } catch (e) {
          n = a;
        }
        try {
          r = 'function' == typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
          r = i;
        }
      })();
      var s,
        c = [],
        u = !1,
        f = -1;
      function d() {
        u &&
          s &&
          ((u = !1), s.length ? (c = s.concat(c)) : (f = -1), c.length && p());
      }
      function p() {
        if (!u) {
          var e = l(d);
          u = !0;
          for (var t = c.length; t; ) {
            for (s = c, c = []; ++f < t; ) s && s[f].run();
            (f = -1), (t = c.length);
          }
          (s = null),
            (u = !1),
            (function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === i || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function b() {}
      (o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || u || l(p);
      }),
        (h.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (o.title = 'browser'),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ''),
        (o.versions = {}),
        (o.on = b),
        (o.addListener = b),
        (o.once = b),
        (o.off = b),
        (o.removeListener = b),
        (o.removeAllListeners = b),
        (o.emit = b),
        (o.prependListener = b),
        (o.prependOnceListener = b),
        (o.listeners = function(e) {
          return [];
        }),
        (o.binding = function(e) {
          throw new Error('process.binding is not supported');
        }),
        (o.cwd = function() {
          return '/';
        }),
        (o.chdir = function(e) {
          throw new Error('process.chdir is not supported');
        }),
        (o.umask = function() {
          return 0;
        });
    },
    function(e, t, n) {
      (function(t) {
        var n = 'object' == typeof t && t && t.Object === Object && t;
        e.exports = n;
      }.call(this, n(36)));
    },
    function(e, t, n) {
      var r = n(57),
        o = n(16);
      e.exports = function(e, t) {
        return e && r(e, t, o);
      };
    },
    function(e, t, n) {
      var r = n(105)();
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(106),
        o = n(38),
        a = n(3),
        i = n(21),
        l = n(39),
        s = n(40),
        c = Object.prototype.hasOwnProperty;
      e.exports = function(e, t) {
        var n = a(e),
          u = !n && o(e),
          f = !n && !u && i(e),
          d = !n && !u && !f && s(e),
          p = n || u || f || d,
          h = p ? r(e.length, String) : [],
          b = h.length;
        for (var g in e)
          (!t && !c.call(e, g)) ||
            (p &&
              ('length' == g ||
                (f && ('offset' == g || 'parent' == g)) ||
                (d &&
                  ('buffer' == g || 'byteLength' == g || 'byteOffset' == g)) ||
                l(g, b))) ||
            h.push(g);
        return h;
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return function(n) {
          return e(t(n));
        };
      };
    },
    function(e, t, n) {
      var r = n(22);
      e.exports = function(e) {
        return 'function' == typeof e ? e : r;
      };
    },
    function(e, t, n) {
      var r = n(10),
        o = n(46),
        a = n(6),
        i = '[object Object]',
        l = Function.prototype,
        s = Object.prototype,
        c = l.toString,
        u = s.hasOwnProperty,
        f = c.call(Object);
      e.exports = function(e) {
        if (!a(e) || r(e) != i) return !1;
        var t = o(e);
        if (null === t) return !0;
        var n = u.call(t, 'constructor') && t.constructor;
        return 'function' == typeof n && n instanceof n && c.call(n) == f;
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
          o[n] = t(e[n], n, e);
        return o;
      };
    },
    function(e, t) {
      var n = Function.prototype.toString;
      e.exports = function(e) {
        if (null != e) {
          try {
            return n.call(e);
          } catch (e) {}
          try {
            return e + '';
          } catch (e) {}
        }
        return '';
      };
    },
    function(e, t, n) {
      var r = n(142),
        o = n(6);
      e.exports = function e(t, n, a, i, l) {
        return (
          t === n ||
          (null == t || null == n || (!o(t) && !o(n))
            ? t != t && n != n
            : r(t, n, a, i, e, l))
        );
      };
    },
    function(e, t, n) {
      var r = n(143),
        o = n(146),
        a = n(147),
        i = 1,
        l = 2;
      e.exports = function(e, t, n, s, c, u) {
        var f = n & i,
          d = e.length,
          p = t.length;
        if (d != p && !(f && p > d)) return !1;
        var h = u.get(e);
        if (h && u.get(t)) return h == t;
        var b = -1,
          g = !0,
          m = n & l ? new r() : void 0;
        for (u.set(e, t), u.set(t, e); ++b < d; ) {
          var v = e[b],
            _ = t[b];
          if (s) var y = f ? s(_, v, b, t, e, u) : s(v, _, b, e, t, u);
          if (void 0 !== y) {
            if (y) continue;
            g = !1;
            break;
          }
          if (m) {
            if (
              !o(t, function(e, t) {
                if (!a(m, t) && (v === e || c(v, e, n, s, u))) return m.push(t);
              })
            ) {
              g = !1;
              break;
            }
          } else if (v !== _ && !c(v, _, n, s, u)) {
            g = !1;
            break;
          }
        }
        return u.delete(e), u.delete(t), g;
      };
    },
    function(e, t, n) {
      var r = n(5).Uint8Array;
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(68),
        o = n(49),
        a = n(16);
      e.exports = function(e) {
        return r(e, a, o);
      };
    },
    function(e, t, n) {
      var r = n(69),
        o = n(3);
      e.exports = function(e, t, n) {
        var a = t(e);
        return o(e) ? a : r(a, n(e));
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
        return e;
      };
    },
    function(e, t) {
      e.exports = function() {
        return [];
      };
    },
    function(e, t, n) {
      var r = n(4);
      e.exports = function(e) {
        return e == e && !r(e);
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return function(n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      };
    },
    function(e, t, n) {
      var r = n(74),
        o = n(30);
      e.exports = function(e, t) {
        for (var n = 0, a = (t = r(t, e)).length; null != e && n < a; )
          e = e[o(t[n++])];
        return n && n == a ? e : void 0;
      };
    },
    function(e, t, n) {
      var r = n(3),
        o = n(50),
        a = n(160),
        i = n(163);
      e.exports = function(e, t) {
        return r(e) ? e : o(e, t) ? [e] : a(i(e));
      };
    },
    function(e, t, n) {
      var r = n(56),
        o = n(172)(r);
      e.exports = o;
    },
    function(e, t) {
      e.exports = function(e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length;
          ++n < r && !1 !== t(e[n], n, e);

        );
        return e;
      };
    },
    function(e, t, n) {
      var r = n(51),
        o = n(17),
        a = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, n) {
        var i = e[t];
        (a.call(e, t) && o(i, n) && (void 0 !== n || t in e)) || r(e, t, n);
      };
    },
    function(e, t, n) {
      var r = n(11),
        o = (function() {
          try {
            var e = r(Object, 'defineProperty');
            return e({}, '', {}), e;
          } catch (e) {}
        })();
      e.exports = o;
    },
    function(e, t, n) {
      (function(e) {
        var r = n(5),
          o = t && !t.nodeType && t,
          a = o && 'object' == typeof e && e && !e.nodeType && e,
          i = a && a.exports === o ? r.Buffer : void 0,
          l = i ? i.allocUnsafe : void 0;
        e.exports = function(e, t) {
          if (t) return e.slice();
          var n = e.length,
            r = l ? l(n) : new e.constructor(n);
          return e.copy(r), r;
        };
      }.call(this, n(20)(e)));
    },
    function(e, t) {
      e.exports = function(e, t) {
        var n = -1,
          r = e.length;
        for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
        return t;
      };
    },
    function(e, t, n) {
      var r = n(69),
        o = n(46),
        a = n(49),
        i = n(70),
        l = Object.getOwnPropertySymbols
          ? function(e) {
              for (var t = []; e; ) r(t, a(e)), (e = o(e));
              return t;
            }
          : i;
      e.exports = l;
    },
    function(e, t, n) {
      var r = n(52);
      e.exports = function(e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      };
    },
    function(e, t, n) {
      var r = n(188),
        o = n(46),
        a = n(44);
      e.exports = function(e) {
        return 'function' != typeof e.constructor || a(e) ? {} : r(o(e));
      };
    },
    function(e, t, n) {
      var r = n(51),
        o = n(17);
      e.exports = function(e, t, n) {
        ((void 0 === n || o(e[t], n)) && (void 0 !== n || t in e)) ||
          r(e, t, n);
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        if ('__proto__' != t) return e[t];
      };
    },
    function(e, t, n) {
      var r = n(4),
        o = n(219),
        a = n(220),
        i = 'Expected a function',
        l = Math.max,
        s = Math.min;
      e.exports = function(e, t, n) {
        var c,
          u,
          f,
          d,
          p,
          h,
          b = 0,
          g = !1,
          m = !1,
          v = !0;
        if ('function' != typeof e) throw new TypeError(i);
        function _(t) {
          var n = c,
            r = u;
          return (c = u = void 0), (b = t), (d = e.apply(r, n));
        }
        function y(e) {
          var n = e - h;
          return void 0 === h || n >= t || n < 0 || (m && e - b >= f);
        }
        function x() {
          var e = o();
          if (y(e)) return w(e);
          p = setTimeout(
            x,
            (function(e) {
              var n = t - (e - h);
              return m ? s(n, f - (e - b)) : n;
            })(e)
          );
        }
        function w(e) {
          return (p = void 0), v && c ? _(e) : ((c = u = void 0), d);
        }
        function k() {
          var e = o(),
            n = y(e);
          if (((c = arguments), (u = this), (h = e), n)) {
            if (void 0 === p)
              return (function(e) {
                return (b = e), (p = setTimeout(x, t)), g ? _(e) : d;
              })(h);
            if (m) return (p = setTimeout(x, t)), _(h);
          }
          return void 0 === p && (p = setTimeout(x, t)), d;
        }
        return (
          (t = a(t) || 0),
          r(n) &&
            ((g = !!n.leading),
            (f = (m = 'maxWait' in n) ? l(a(n.maxWait) || 0, t) : f),
            (v = 'trailing' in n ? !!n.trailing : v)),
          (k.cancel = function() {
            void 0 !== p && clearTimeout(p), (b = 0), (c = h = u = p = void 0);
          }),
          (k.flush = function() {
            return void 0 === p ? d : w(o());
          }),
          k
        );
      };
    },
    function(e, t, n) {
      'use strict';
      (function(e) {
        var n,
          r =
            'undefined' != typeof Symbol
              ? Symbol('immer-nothing')
              : (((n = {})['immer-nothing'] = !0), n),
          o =
            'undefined' != typeof Symbol && Symbol.for
              ? Symbol.for('immer-draftable')
              : '__$immer_draftable',
          a =
            'undefined' != typeof Symbol && Symbol.for
              ? Symbol.for('immer-state')
              : '__$immer_state';
        function i(e) {
          return !!e && !!e[a];
        }
        function l(e) {
          return (
            !!e &&
            ((function(e) {
              if (!e || 'object' != typeof e) return !1;
              if (Array.isArray(e)) return !0;
              var t = Object.getPrototypeOf(e);
              return !t || t === Object.prototype;
            })(e) ||
              !!e[o] ||
              !!e.constructor[o])
          );
        }
        var s =
            Object.assign ||
            function(e, t) {
              for (var n in t) p(t, n) && (e[n] = t[n]);
              return e;
            },
          c =
            'undefined' != typeof Reflect && Reflect.ownKeys
              ? Reflect.ownKeys
              : void 0 !== Object.getOwnPropertySymbols
              ? function(e) {
                  return Object.getOwnPropertyNames(e).concat(
                    Object.getOwnPropertySymbols(e)
                  );
                }
              : Object.getOwnPropertyNames;
        function u(e, t) {
          if ((void 0 === t && (t = !1), Array.isArray(e))) return e.slice();
          var n = Object.create(Object.getPrototypeOf(e));
          return (
            c(e).forEach(function(r) {
              if (r !== a) {
                var o = Object.getOwnPropertyDescriptor(e, r),
                  i = o.value;
                if (o.get) {
                  if (!t)
                    throw new Error(
                      'Immer drafts cannot have computed properties'
                    );
                  i = o.get.call(e);
                }
                o.enumerable
                  ? (n[r] = i)
                  : Object.defineProperty(n, r, {
                      value: i,
                      writable: !0,
                      configurable: !0
                    });
              }
            }),
            n
          );
        }
        function f(e, t) {
          if (Array.isArray(e))
            for (var n = 0; n < e.length; n++) t(n, e[n], e);
          else
            c(e).forEach(function(n) {
              return t(n, e[n], e);
            });
        }
        function d(e, t) {
          var n = Object.getOwnPropertyDescriptor(e, t);
          return !!n && n.enumerable;
        }
        function p(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        function h(e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        }
        function b(e) {
          if (!l(e)) return e;
          if (Array.isArray(e)) return e.map(b);
          var t = Object.create(Object.getPrototypeOf(e));
          for (var n in e) t[n] = b(e[n]);
          return t;
        }
        function g(e) {
          if (l(e) && !i(e) && !Object.isFrozen(e))
            if ((Object.freeze(e), Array.isArray(e))) e.forEach(g);
            else for (var t in e) g(e[t]);
        }
        var m = function(e) {
          (this.drafts = []),
            (this.parent = e),
            (this.canAutoFreeze = !0),
            (this.patches = null);
        };
        function v(e) {
          e[a].revoke();
        }
        (m.prototype.usePatches = function(e) {
          e &&
            ((this.patches = []),
            (this.inversePatches = []),
            (this.patchListener = e));
        }),
          (m.prototype.revoke = function() {
            this.leave(), this.drafts.forEach(v), (this.drafts = null);
          }),
          (m.prototype.leave = function() {
            this === m.current && (m.current = this.parent);
          }),
          (m.current = null),
          (m.enter = function() {
            return (this.current = new m(this.current));
          });
        var _ = {};
        function y(e, t) {
          var n = Array.isArray(e),
            r = z(e);
          f(r, function(t) {
            !(function(e, t, n) {
              var r = _[t];
              r
                ? (r.enumerable = n)
                : (_[t] = r = {
                    configurable: !0,
                    enumerable: n,
                    get: function() {
                      return (function(e, t) {
                        O(e);
                        var n = k(w(e), t);
                        if (e.finalizing) return n;
                        if (n === k(e.base, t) && l(n))
                          return E(e), (e.copy[t] = y(n, e));
                        return n;
                      })(this[a], t);
                    },
                    set: function(e) {
                      !(function(e, t, n) {
                        if ((O(e), (e.assigned[t] = !0), !e.modified)) {
                          if (h(n, k(w(e), t))) return;
                          S(e), E(e);
                        }
                        e.copy[t] = n;
                      })(this[a], t, e);
                    }
                  });
              Object.defineProperty(e, t, r);
            })(r, t, n || d(e, t));
          });
          var o = t ? t.scope : m.current;
          return (
            (function(e, t, n) {
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !1,
                writable: !0
              });
            })(r, a, {
              scope: o,
              modified: !1,
              finalizing: !1,
              finalized: !1,
              assigned: {},
              parent: t,
              base: e,
              draft: r,
              copy: null,
              revoke: x,
              revoked: !1
            }),
            o.drafts.push(r),
            r
          );
        }
        function x() {
          this.revoked = !0;
        }
        function w(e) {
          return e.copy || e.base;
        }
        function k(e, t) {
          var n = e[a];
          if (n && !n.finalizing) {
            n.finalizing = !0;
            var r = e[t];
            return (n.finalizing = !1), r;
          }
          return e[t];
        }
        function S(e) {
          e.modified || ((e.modified = !0), e.parent && S(e.parent));
        }
        function E(e) {
          e.copy || (e.copy = z(e.base));
        }
        function z(e) {
          var t = e && e[a];
          if (t) {
            t.finalizing = !0;
            var n = u(t.draft, !0);
            return (t.finalizing = !1), n;
          }
          return u(e);
        }
        function O(e) {
          if (!0 === e.revoked)
            throw new Error(
              'Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? ' +
                JSON.stringify(w(e))
            );
        }
        function C(e) {
          for (var t = e.length - 1; t >= 0; t--) {
            var n = e[t][a];
            n.modified || (Array.isArray(n.base) ? F(n) && S(n) : j(n) && S(n));
          }
        }
        function j(e) {
          for (
            var t = e.base, n = e.draft, r = Object.keys(n), o = r.length - 1;
            o >= 0;
            o--
          ) {
            var i = r[o],
              l = t[i];
            if (void 0 === l && !p(t, i)) return !0;
            var s = n[i],
              c = s && s[a];
            if (c ? c.base !== l : !h(s, l)) return !0;
          }
          return r.length !== Object.keys(t).length;
        }
        function F(e) {
          var t = e.draft;
          if (t.length !== e.base.length) return !0;
          var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
          return !(!n || n.get);
        }
        var T = Object.freeze({
          willFinalize: function(e, t, n) {
            e.drafts.forEach(function(e) {
              e[a].finalizing = !0;
            }),
              n
                ? i(t) && t[a].scope === e && C(e.drafts)
                : (e.patches &&
                    (function e(t) {
                      if (!t || 'object' != typeof t) return;
                      var n = t[a];
                      if (!n) return;
                      var r = n.base;
                      var o = n.draft;
                      var i = n.assigned;
                      if (Array.isArray(t)) {
                        if (F(n)) {
                          if ((S(n), (i.length = !0), o.length < r.length))
                            for (var l = o.length; l < r.length; l++) i[l] = !1;
                          else
                            for (var s = r.length; s < o.length; s++) i[s] = !0;
                          for (var c = 0; c < o.length; c++)
                            void 0 === i[c] && e(o[c]);
                        }
                      } else
                        Object.keys(o).forEach(function(t) {
                          void 0 !== r[t] || p(r, t)
                            ? i[t] || e(o[t])
                            : ((i[t] = !0), S(n));
                        }),
                          Object.keys(r).forEach(function(e) {
                            void 0 !== o[e] || p(o, e) || ((i[e] = !1), S(n));
                          });
                    })(e.drafts[0]),
                  C(e.drafts));
          },
          createProxy: y
        });
        function A(e, t) {
          var n = t ? t.scope : m.current,
            r = {
              scope: n,
              modified: !1,
              finalized: !1,
              assigned: {},
              parent: t,
              base: e,
              draft: null,
              drafts: {},
              copy: null,
              revoke: null
            },
            o = Array.isArray(e)
              ? Proxy.revocable([r], N)
              : Proxy.revocable(r, P),
            a = o.revoke,
            i = o.proxy;
          return (r.draft = i), (r.revoke = a), n.drafts.push(i), i;
        }
        var P = {
            get: function(e, t) {
              if (t === a) return e;
              var n = e.drafts;
              if (!e.modified && p(n, t)) return n[t];
              var r = M(e)[t];
              if (e.finalized || !l(r)) return r;
              if (e.modified) {
                if (r !== B(e.base, t)) return r;
                n = e.copy;
              }
              return (n[t] = A(r, e));
            },
            has: function(e, t) {
              return t in M(e);
            },
            ownKeys: function(e) {
              return Reflect.ownKeys(M(e));
            },
            set: function(e, t, n) {
              if (!e.modified) {
                var r = B(e.base, t);
                if (n ? h(r, n) || n === e.drafts[t] : h(r, n) && t in e.base)
                  return !0;
                I(e);
              }
              return (e.assigned[t] = !0), (e.copy[t] = n), !0;
            },
            deleteProperty: function(e, t) {
              void 0 !== B(e.base, t) || t in e.base
                ? ((e.assigned[t] = !1), I(e))
                : e.assigned[t] && delete e.assigned[t];
              e.copy && delete e.copy[t];
              return !0;
            },
            getOwnPropertyDescriptor: function(e, t) {
              var n = M(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
              r &&
                ((r.writable = !0),
                (r.configurable = !Array.isArray(n) || 'length' !== t));
              return r;
            },
            defineProperty: function() {
              throw new Error(
                'Object.defineProperty() cannot be used on an Immer draft'
              );
            },
            getPrototypeOf: function(e) {
              return Object.getPrototypeOf(e.base);
            },
            setPrototypeOf: function() {
              throw new Error(
                'Object.setPrototypeOf() cannot be used on an Immer draft'
              );
            }
          },
          N = {};
        function M(e) {
          return e.copy || e.base;
        }
        function B(e, t) {
          var n = e[a],
            r = Reflect.getOwnPropertyDescriptor(n ? M(n) : e, t);
          return r && r.value;
        }
        function I(e) {
          e.modified ||
            ((e.modified = !0),
            (e.copy = s(u(e.base), e.drafts)),
            (e.drafts = null),
            e.parent && I(e.parent));
        }
        f(P, function(e, t) {
          N[e] = function() {
            return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
          };
        }),
          (N.deleteProperty = function(e, t) {
            if (isNaN(parseInt(t)))
              throw new Error('Immer only supports deleting array indices');
            return P.deleteProperty.call(this, e[0], t);
          }),
          (N.set = function(e, t, n) {
            if ('length' !== t && isNaN(parseInt(t)))
              throw new Error(
                "Immer only supports setting array indices and the 'length' property"
              );
            return P.set.call(this, e[0], t, n);
          });
        var R = Object.freeze({ willFinalize: function() {}, createProxy: A });
        function L(e, t, n, r) {
          Array.isArray(e.base)
            ? (function(e, t, n, r) {
                var o,
                  a,
                  i = e.base,
                  l = e.copy,
                  s = e.assigned;
                l.length < i.length &&
                  ((i = (o = [l, i])[0]),
                  (l = o[1]),
                  (n = (a = [r, n])[0]),
                  (r = a[1]));
                var c = l.length - i.length,
                  u = 0;
                for (; i[u] === l[u] && u < i.length; ) ++u;
                var f = i.length;
                for (; f > u && i[f - 1] === l[f + c - 1]; ) --f;
                for (var d = u; d < f; ++d)
                  if (s[d] && l[d] !== i[d]) {
                    var p = t.concat([d]);
                    n.push({ op: 'replace', path: p, value: l[d] }),
                      r.push({ op: 'replace', path: p, value: i[d] });
                  }
                for (var h = n.length, b = f + c - 1; b >= f; --b) {
                  var g = t.concat([b]);
                  (n[h + b - f] = { op: 'add', path: g, value: l[b] }),
                    r.push({ op: 'remove', path: g });
                }
              })(e, t, n, r)
            : (function(e, t, n, r) {
                var o = e.base,
                  a = e.copy;
                f(e.assigned, function(e, i) {
                  var l = o[e],
                    s = a[e],
                    c = i ? (e in o ? 'replace' : 'add') : 'remove';
                  if (l !== s || 'replace' !== c) {
                    var u = t.concat(e);
                    n.push(
                      'remove' === c
                        ? { op: c, path: u }
                        : { op: c, path: u, value: s }
                    ),
                      r.push(
                        'add' === c
                          ? { op: 'remove', path: u }
                          : 'remove' === c
                          ? { op: 'add', path: u, value: l }
                          : { op: 'replace', path: u, value: l }
                      );
                  }
                });
              })(e, t, n, r);
        }
        var D = function(e, t) {
          for (var n = 0, r = t; n < r.length; n += 1) {
            var o = r[n],
              a = o.path,
              i = o.op,
              l = b(o.value);
            if (!a.length) throw new Error('Illegal state');
            for (var s = e, c = 0; c < a.length - 1; c++)
              if (!(s = s[a[c]]) || 'object' != typeof s)
                throw new Error(
                  "Cannot apply patch, path doesn't resolve: " + a.join('/')
                );
            var u = a[a.length - 1];
            switch (i) {
              case 'replace':
                s[u] = l;
                break;
              case 'add':
                Array.isArray(s) ? s.splice(u, 0, l) : (s[u] = l);
                break;
              case 'remove':
                Array.isArray(s) ? s.splice(u, 1) : delete s[u];
                break;
              default:
                throw new Error('Unsupported patch operation: ' + i);
            }
          }
          return e;
        };
        var H = {
            useProxies:
              'undefined' != typeof Proxy &&
              void 0 !== Proxy.revocable &&
              'undefined' != typeof Reflect,
            autoFreeze: void 0 === e && 'verifyMinified' === function() {}.name,
            onAssign: null,
            onDelete: null,
            onCopy: null
          },
          U = function(e) {
            s(this, H, e),
              this.setUseProxies(this.useProxies),
              (this.produce = this.produce.bind(this));
          };
        (U.prototype.produce = function(e, t, n) {
          var o,
            a = this;
          if ('function' == typeof e && 'function' != typeof t) {
            var i = t;
            t = e;
            var s = this;
            return function(e) {
              var n = this;
              void 0 === e && (e = i);
              for (var r = [], o = arguments.length - 1; o-- > 0; )
                r[o] = arguments[o + 1];
              return s.produce(e, function(e) {
                return t.call.apply(t, [n, e].concat(r));
              });
            };
          }
          if ('function' != typeof t)
            throw new Error(
              'The first or second argument to `produce` must be a function'
            );
          if (void 0 !== n && 'function' != typeof n)
            throw new Error(
              'The third argument to `produce` must be a function or undefined'
            );
          if (l(e)) {
            var c = m.enter(),
              u = this.createProxy(e),
              f = !0;
            try {
              (o = t(u)), (f = !1);
            } finally {
              f ? c.revoke() : c.leave();
            }
            return o instanceof Promise
              ? o.then(
                  function(e) {
                    return c.usePatches(n), a.processResult(e, c);
                  },
                  function(e) {
                    throw (c.revoke(), e);
                  }
                )
              : (c.usePatches(n), this.processResult(o, c));
          }
          if ((o = t(e)) !== r)
            return void 0 === o && (o = e), this.maybeFreeze(o, !0), o;
        }),
          (U.prototype.produceWithPatches = function(e, t, n) {
            var r,
              o,
              a = this;
            if ('function' == typeof e)
              return function(t) {
                for (var n = [], r = arguments.length - 1; r-- > 0; )
                  n[r] = arguments[r + 1];
                return a.produceWithPatches(t, function(t) {
                  return e.apply(void 0, [t].concat(n));
                });
              };
            if (n)
              throw new Error(
                'A patch listener cannot be passed to produceWithPatches'
              );
            return [
              this.produce(e, t, function(e, t) {
                (r = e), (o = t);
              }),
              r,
              o
            ];
          }),
          (U.prototype.createDraft = function(e) {
            if (!l(e))
              throw new Error(
                'First argument to `createDraft` must be a plain object, an array, or an immerable object'
              );
            var t = m.enter(),
              n = this.createProxy(e);
            return (n[a].isManual = !0), t.leave(), n;
          }),
          (U.prototype.finishDraft = function(e, t) {
            var n = e && e[a];
            if (!n || !n.isManual)
              throw new Error(
                'First argument to `finishDraft` must be a draft returned by `createDraft`'
              );
            if (n.finalized)
              throw new Error('The given draft is already finalized');
            var r = n.scope;
            return r.usePatches(t), this.processResult(void 0, r);
          }),
          (U.prototype.setAutoFreeze = function(e) {
            this.autoFreeze = e;
          }),
          (U.prototype.setUseProxies = function(e) {
            (this.useProxies = e), s(this, e ? R : T);
          }),
          (U.prototype.applyPatches = function(e, t) {
            var n;
            for (n = t.length - 1; n >= 0; n--) {
              var r = t[n];
              if (0 === r.path.length && 'replace' === r.op) {
                e = r.value;
                break;
              }
            }
            return i(e)
              ? D(e, t)
              : this.produce(e, function(e) {
                  return D(e, t.slice(n + 1));
                });
          }),
          (U.prototype.processResult = function(e, t) {
            var n = t.drafts[0],
              o = void 0 !== e && e !== n;
            if ((this.willFinalize(t, e, o), o)) {
              if (n[a].modified)
                throw (t.revoke(),
                new Error(
                  'An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.'
                ));
              l(e) && ((e = this.finalize(e, null, t)), this.maybeFreeze(e)),
                t.patches &&
                  (t.patches.push({ op: 'replace', path: [], value: e }),
                  t.inversePatches.push({
                    op: 'replace',
                    path: [],
                    value: n[a].base
                  }));
            } else e = this.finalize(n, [], t);
            return (
              t.revoke(),
              t.patches && t.patchListener(t.patches, t.inversePatches),
              e !== r ? e : void 0
            );
          }),
          (U.prototype.finalize = function(e, t, n) {
            var r = this,
              o = e[a];
            if (!o)
              return Object.isFrozen(e) ? e : this.finalizeTree(e, null, n);
            if (o.scope !== n) return e;
            if (!o.modified) return this.maybeFreeze(o.base, !0), o.base;
            if (!o.finalized) {
              if (
                ((o.finalized = !0),
                this.finalizeTree(o.draft, t, n),
                this.onDelete)
              )
                if (this.useProxies) {
                  var i = o.assigned;
                  for (var l in i) i[l] || this.onDelete(o, l);
                } else {
                  var s = o.base,
                    c = o.copy;
                  f(s, function(e) {
                    p(c, e) || r.onDelete(o, e);
                  });
                }
              this.onCopy && this.onCopy(o),
                this.autoFreeze && n.canAutoFreeze && Object.freeze(o.copy),
                t && n.patches && L(o, t, n.patches, n.inversePatches);
            }
            return o.copy;
          }),
          (U.prototype.finalizeTree = function(e, t, n) {
            var r = this,
              o = e[a];
            o && (this.useProxies || (o.copy = u(o.draft, !0)), (e = o.copy));
            var s = !!t && !!n.patches,
              c = function(a, u, p) {
                if (u === p) throw Error('Immer forbids circular references');
                var b = !!o && p === e;
                if (i(u)) {
                  var g = b && s && !o.assigned[a] ? t.concat(a) : null;
                  if (
                    (i((u = r.finalize(u, g, n))) && (n.canAutoFreeze = !1),
                    Array.isArray(p) || d(p, a)
                      ? (p[a] = u)
                      : Object.defineProperty(p, a, { value: u }),
                    b && u === o.base[a])
                  )
                    return;
                } else {
                  if (b && h(u, o.base[a])) return;
                  l(u) && !Object.isFrozen(u) && (f(u, c), r.maybeFreeze(u));
                }
                b && r.onAssign && r.onAssign(o, a, u);
              };
            return f(e, c), e;
          }),
          (U.prototype.maybeFreeze = function(e, t) {
            void 0 === t && (t = !1),
              this.autoFreeze && !i(e) && (t ? g(e) : Object.freeze(e));
          });
        var W = new U(),
          Z = W.produce;
        W.produceWithPatches.bind(W),
          W.setAutoFreeze.bind(W),
          W.setUseProxies.bind(W),
          W.applyPatches.bind(W),
          W.createDraft.bind(W),
          W.finishDraft.bind(W);
        t.a = Z;
      }.call(this, n(54)));
    },
    function(e, t, n) {
      e.exports = n(95);
    },
    function(e, t, n) {
      'use strict';
      const r = (e, t, n) => {
          e.splice(n < 0 ? e.length + n : n, 0, e.splice(t, 1)[0]);
        },
        o = (e, t, n) => ((e = e.slice()), r(e, t, n), e);
      (e.exports = o), (e.exports.default = o), (e.exports.mutate = r);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(100);
      Object.defineProperty(t, 'Alpha', {
        enumerable: !0,
        get: function() {
          return f(r).default;
        }
      });
      var o = n(53);
      Object.defineProperty(t, 'Checkboard', {
        enumerable: !0,
        get: function() {
          return f(o).default;
        }
      });
      var a = n(199);
      Object.defineProperty(t, 'EditableInput', {
        enumerable: !0,
        get: function() {
          return f(a).default;
        }
      });
      var i = n(200);
      Object.defineProperty(t, 'Hue', {
        enumerable: !0,
        get: function() {
          return f(i).default;
        }
      });
      var l = n(202);
      Object.defineProperty(t, 'Raised', {
        enumerable: !0,
        get: function() {
          return f(l).default;
        }
      });
      var s = n(217);
      Object.defineProperty(t, 'Saturation', {
        enumerable: !0,
        get: function() {
          return f(s).default;
        }
      });
      var c = n(222);
      Object.defineProperty(t, 'ColorWrap', {
        enumerable: !0,
        get: function() {
          return f(c).default;
        }
      });
      var u = n(227);
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, 'Swatch', {
        enumerable: !0,
        get: function() {
          return f(u).default;
        }
      });
    },
    function(e, t, n) {
      var r;
      !(function() {
        function o(e, t, n) {
          return e.call.apply(e.bind, arguments);
        }
        function a(e, t, n) {
          if (!e) throw Error();
          if (2 < arguments.length) {
            var r = Array.prototype.slice.call(arguments, 2);
            return function() {
              var n = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(n, r), e.apply(t, n);
            };
          }
          return function() {
            return e.apply(t, arguments);
          };
        }
        function i(e, t, n) {
          return (i =
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf('native code')
              ? o
              : a).apply(null, arguments);
        }
        var l =
          Date.now ||
          function() {
            return +new Date();
          };
        function s(e, t) {
          (this.a = e), (this.o = t || e), (this.c = this.o.document);
        }
        var c = !!window.FontFace;
        function u(e, t, n, r) {
          if (((t = e.c.createElement(t)), n))
            for (var o in n)
              n.hasOwnProperty(o) &&
                ('style' == o
                  ? (t.style.cssText = n[o])
                  : t.setAttribute(o, n[o]));
          return r && t.appendChild(e.c.createTextNode(r)), t;
        }
        function f(e, t, n) {
          (e = e.c.getElementsByTagName(t)[0]) ||
            (e = document.documentElement),
            e.insertBefore(n, e.lastChild);
        }
        function d(e) {
          e.parentNode && e.parentNode.removeChild(e);
        }
        function p(e, t, n) {
          (t = t || []), (n = n || []);
          for (var r = e.className.split(/\s+/), o = 0; o < t.length; o += 1) {
            for (var a = !1, i = 0; i < r.length; i += 1)
              if (t[o] === r[i]) {
                a = !0;
                break;
              }
            a || r.push(t[o]);
          }
          for (t = [], o = 0; o < r.length; o += 1) {
            for (a = !1, i = 0; i < n.length; i += 1)
              if (r[o] === n[i]) {
                a = !0;
                break;
              }
            a || t.push(r[o]);
          }
          e.className = t
            .join(' ')
            .replace(/\s+/g, ' ')
            .replace(/^\s+|\s+$/, '');
        }
        function h(e, t) {
          for (
            var n = e.className.split(/\s+/), r = 0, o = n.length;
            r < o;
            r++
          )
            if (n[r] == t) return !0;
          return !1;
        }
        function b(e, t, n) {
          function r() {
            l && o && a && (l(i), (l = null));
          }
          t = u(e, 'link', { rel: 'stylesheet', href: t, media: 'all' });
          var o = !1,
            a = !0,
            i = null,
            l = n || null;
          c
            ? ((t.onload = function() {
                (o = !0), r();
              }),
              (t.onerror = function() {
                (o = !0), (i = Error('Stylesheet failed to load')), r();
              }))
            : setTimeout(function() {
                (o = !0), r();
              }, 0),
            f(e, 'head', t);
        }
        function g(e, t, n, r) {
          var o = e.c.getElementsByTagName('head')[0];
          if (o) {
            var a = u(e, 'script', { src: t }),
              i = !1;
            return (
              (a.onload = a.onreadystatechange = function() {
                i ||
                  (this.readyState &&
                    'loaded' != this.readyState &&
                    'complete' != this.readyState) ||
                  ((i = !0),
                  n && n(null),
                  (a.onload = a.onreadystatechange = null),
                  'HEAD' == a.parentNode.tagName && o.removeChild(a));
              }),
              o.appendChild(a),
              setTimeout(function() {
                i || ((i = !0), n && n(Error('Script load timeout')));
              }, r || 5e3),
              a
            );
          }
          return null;
        }
        function m() {
          (this.a = 0), (this.c = null);
        }
        function v(e) {
          return (
            e.a++,
            function() {
              e.a--, y(e);
            }
          );
        }
        function _(e, t) {
          (e.c = t), y(e);
        }
        function y(e) {
          0 == e.a && e.c && (e.c(), (e.c = null));
        }
        function x(e) {
          this.a = e || '-';
        }
        function w(e, t) {
          (this.c = e), (this.f = 4), (this.a = 'n');
          var n = (t || 'n4').match(/^([nio])([1-9])$/i);
          n && ((this.a = n[1]), (this.f = parseInt(n[2], 10)));
        }
        function k(e) {
          var t = [];
          e = e.split(/,\s*/);
          for (var n = 0; n < e.length; n++) {
            var r = e[n].replace(/['"]/g, '');
            -1 != r.indexOf(' ') || /^\d/.test(r)
              ? t.push("'" + r + "'")
              : t.push(r);
          }
          return t.join(',');
        }
        function S(e) {
          return e.a + e.f;
        }
        function E(e) {
          var t = 'normal';
          return (
            'o' === e.a ? (t = 'oblique') : 'i' === e.a && (t = 'italic'), t
          );
        }
        function z(e) {
          var t = 4,
            n = 'n',
            r = null;
          return (
            e &&
              ((r = e.match(/(normal|oblique|italic)/i)) &&
                r[1] &&
                (n = r[1].substr(0, 1).toLowerCase()),
              (r = e.match(/([1-9]00|normal|bold)/i)) &&
                r[1] &&
                (/bold/i.test(r[1])
                  ? (t = 7)
                  : /[1-9]00/.test(r[1]) &&
                    (t = parseInt(r[1].substr(0, 1), 10)))),
            n + t
          );
        }
        function O(e, t) {
          (this.c = e),
            (this.f = e.o.document.documentElement),
            (this.h = t),
            (this.a = new x('-')),
            (this.j = !1 !== t.events),
            (this.g = !1 !== t.classes);
        }
        function C(e) {
          if (e.g) {
            var t = h(e.f, e.a.c('wf', 'active')),
              n = [],
              r = [e.a.c('wf', 'loading')];
            t || n.push(e.a.c('wf', 'inactive')), p(e.f, n, r);
          }
          j(e, 'inactive');
        }
        function j(e, t, n) {
          e.j && e.h[t] && (n ? e.h[t](n.c, S(n)) : e.h[t]());
        }
        function F() {
          this.c = {};
        }
        function T(e, t) {
          (this.c = e),
            (this.f = t),
            (this.a = u(this.c, 'span', { 'aria-hidden': 'true' }, this.f));
        }
        function A(e) {
          f(e.c, 'body', e.a);
        }
        function P(e) {
          return (
            'display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:' +
            k(e.c) +
            ';font-style:' +
            E(e) +
            ';font-weight:' +
            e.f +
            '00;'
          );
        }
        function N(e, t, n, r, o, a) {
          (this.g = e),
            (this.j = t),
            (this.a = r),
            (this.c = n),
            (this.f = o || 3e3),
            (this.h = a || void 0);
        }
        function M(e, t, n, r, o, a, i) {
          (this.v = e),
            (this.B = t),
            (this.c = n),
            (this.a = r),
            (this.s = i || 'BESbswy'),
            (this.f = {}),
            (this.w = o || 3e3),
            (this.u = a || null),
            (this.m = this.j = this.h = this.g = null),
            (this.g = new T(this.c, this.s)),
            (this.h = new T(this.c, this.s)),
            (this.j = new T(this.c, this.s)),
            (this.m = new T(this.c, this.s)),
            (e = P((e = new w(this.a.c + ',serif', S(this.a))))),
            (this.g.a.style.cssText = e),
            (e = P((e = new w(this.a.c + ',sans-serif', S(this.a))))),
            (this.h.a.style.cssText = e),
            (e = P((e = new w('serif', S(this.a))))),
            (this.j.a.style.cssText = e),
            (e = P((e = new w('sans-serif', S(this.a))))),
            (this.m.a.style.cssText = e),
            A(this.g),
            A(this.h),
            A(this.j),
            A(this.m);
        }
        (x.prototype.c = function(e) {
          for (var t = [], n = 0; n < arguments.length; n++)
            t.push(arguments[n].replace(/[\W_]+/g, '').toLowerCase());
          return t.join(this.a);
        }),
          (N.prototype.start = function() {
            var e = this.c.o.document,
              t = this,
              n = l(),
              r = new Promise(function(r, o) {
                !(function a() {
                  l() - n >= t.f
                    ? o()
                    : e.fonts
                        .load(
                          (function(e) {
                            return E(e) + ' ' + e.f + '00 300px ' + k(e.c);
                          })(t.a),
                          t.h
                        )
                        .then(
                          function(e) {
                            1 <= e.length ? r() : setTimeout(a, 25);
                          },
                          function() {
                            o();
                          }
                        );
                })();
              }),
              o = null,
              a = new Promise(function(e, n) {
                o = setTimeout(n, t.f);
              });
            Promise.race([a, r]).then(
              function() {
                o && (clearTimeout(o), (o = null)), t.g(t.a);
              },
              function() {
                t.j(t.a);
              }
            );
          });
        var B = { D: 'serif', C: 'sans-serif' },
          I = null;
        function R() {
          if (null === I) {
            var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
              window.navigator.userAgent
            );
            I =
              !!e &&
              (536 > parseInt(e[1], 10) ||
                (536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10)));
          }
          return I;
        }
        function L(e, t, n) {
          for (var r in B)
            if (B.hasOwnProperty(r) && t === e.f[B[r]] && n === e.f[B[r]])
              return !0;
          return !1;
        }
        function D(e) {
          var t,
            n = e.g.a.offsetWidth,
            r = e.h.a.offsetWidth;
          (t = n === e.f.serif && r === e.f['sans-serif']) ||
            (t = R() && L(e, n, r)),
            t
              ? l() - e.A >= e.w
                ? R() &&
                  L(e, n, r) &&
                  (null === e.u || e.u.hasOwnProperty(e.a.c))
                  ? H(e, e.v)
                  : H(e, e.B)
                : (function(e) {
                    setTimeout(
                      i(function() {
                        D(this);
                      }, e),
                      50
                    );
                  })(e)
              : H(e, e.v);
        }
        function H(e, t) {
          setTimeout(
            i(function() {
              d(this.g.a), d(this.h.a), d(this.j.a), d(this.m.a), t(this.a);
            }, e),
            0
          );
        }
        function U(e, t, n) {
          (this.c = e),
            (this.a = t),
            (this.f = 0),
            (this.m = this.j = !1),
            (this.s = n);
        }
        M.prototype.start = function() {
          (this.f.serif = this.j.a.offsetWidth),
            (this.f['sans-serif'] = this.m.a.offsetWidth),
            (this.A = l()),
            D(this);
        };
        var W = null;
        function Z(e) {
          0 == --e.f &&
            e.j &&
            (e.m
              ? ((e = e.a).g &&
                  p(
                    e.f,
                    [e.a.c('wf', 'active')],
                    [e.a.c('wf', 'loading'), e.a.c('wf', 'inactive')]
                  ),
                j(e, 'active'))
              : C(e.a));
        }
        function q(e) {
          (this.j = e),
            (this.a = new F()),
            (this.h = 0),
            (this.f = this.g = !0);
        }
        function V(e, t, n, r, o) {
          var a = 0 == --e.h;
          (e.f || e.g) &&
            setTimeout(function() {
              var e = o || null,
                l = r || {};
              if (0 === n.length && a) C(t.a);
              else {
                (t.f += n.length), a && (t.j = a);
                var s,
                  c = [];
                for (s = 0; s < n.length; s++) {
                  var u = n[s],
                    f = l[u.c],
                    d = t.a,
                    h = u;
                  if (
                    (d.g &&
                      p(d.f, [d.a.c('wf', h.c, S(h).toString(), 'loading')]),
                    j(d, 'fontloading', h),
                    (d = null),
                    null === W)
                  )
                    if (window.FontFace) {
                      h = /Gecko.*Firefox\/(\d+)/.exec(
                        window.navigator.userAgent
                      );
                      var b =
                        /OS X.*Version\/10\..*Safari/.exec(
                          window.navigator.userAgent
                        ) && /Apple/.exec(window.navigator.vendor);
                      W = h ? 42 < parseInt(h[1], 10) : !b;
                    } else W = !1;
                  (d = W
                    ? new N(i(t.g, t), i(t.h, t), t.c, u, t.s, f)
                    : new M(i(t.g, t), i(t.h, t), t.c, u, t.s, e, f)),
                    c.push(d);
                }
                for (s = 0; s < c.length; s++) c[s].start();
              }
            }, 0);
        }
        function X(e, t) {
          (this.c = e), (this.a = t);
        }
        function Y(e, t) {
          (this.c = e), (this.a = t);
        }
        function G(e, t) {
          (this.c = e || $), (this.a = []), (this.f = []), (this.g = t || '');
        }
        (U.prototype.g = function(e) {
          var t = this.a;
          t.g &&
            p(
              t.f,
              [t.a.c('wf', e.c, S(e).toString(), 'active')],
              [
                t.a.c('wf', e.c, S(e).toString(), 'loading'),
                t.a.c('wf', e.c, S(e).toString(), 'inactive')
              ]
            ),
            j(t, 'fontactive', e),
            (this.m = !0),
            Z(this);
        }),
          (U.prototype.h = function(e) {
            var t = this.a;
            if (t.g) {
              var n = h(t.f, t.a.c('wf', e.c, S(e).toString(), 'active')),
                r = [],
                o = [t.a.c('wf', e.c, S(e).toString(), 'loading')];
              n || r.push(t.a.c('wf', e.c, S(e).toString(), 'inactive')),
                p(t.f, r, o);
            }
            j(t, 'fontinactive', e), Z(this);
          }),
          (q.prototype.load = function(e) {
            (this.c = new s(this.j, e.context || this.j)),
              (this.g = !1 !== e.events),
              (this.f = !1 !== e.classes),
              (function(e, t, n) {
                var r = [],
                  o = n.timeout;
                !(function(e) {
                  e.g && p(e.f, [e.a.c('wf', 'loading')]), j(e, 'loading');
                })(t);
                r = (function(e, t, n) {
                  var r,
                    o = [];
                  for (r in t)
                    if (t.hasOwnProperty(r)) {
                      var a = e.c[r];
                      a && o.push(a(t[r], n));
                    }
                  return o;
                })(e.a, n, e.c);
                var a = new U(e.c, t, o);
                for (e.h = r.length, t = 0, n = r.length; t < n; t++)
                  r[t].load(function(t, n, r) {
                    V(e, a, t, n, r);
                  });
              })(this, new O(this.c, e), e);
          }),
          (X.prototype.load = function(e) {
            var t = this,
              n = t.a.projectId,
              r = t.a.version;
            if (n) {
              var o = t.c.o;
              g(
                this.c,
                (t.a.api || 'https://fast.fonts.net/jsapi') +
                  '/' +
                  n +
                  '.js' +
                  (r ? '?v=' + r : ''),
                function(r) {
                  r
                    ? e([])
                    : ((o['__MonotypeConfiguration__' + n] = function() {
                        return t.a;
                      }),
                      (function t() {
                        if (o['__mti_fntLst' + n]) {
                          var r,
                            a = o['__mti_fntLst' + n](),
                            i = [];
                          if (a)
                            for (var l = 0; l < a.length; l++) {
                              var s = a[l].fontfamily;
                              null != a[l].fontStyle && null != a[l].fontWeight
                                ? ((r = a[l].fontStyle + a[l].fontWeight),
                                  i.push(new w(s, r)))
                                : i.push(new w(s));
                            }
                          e(i);
                        } else
                          setTimeout(function() {
                            t();
                          }, 50);
                      })());
                }
              ).id = '__MonotypeAPIScript__' + n;
            } else e([]);
          }),
          (Y.prototype.load = function(e) {
            var t,
              n,
              r = this.a.urls || [],
              o = this.a.families || [],
              a = this.a.testStrings || {},
              i = new m();
            for (t = 0, n = r.length; t < n; t++) b(this.c, r[t], v(i));
            var l = [];
            for (t = 0, n = o.length; t < n; t++)
              if ((r = o[t].split(':'))[1])
                for (var s = r[1].split(','), c = 0; c < s.length; c += 1)
                  l.push(new w(r[0], s[c]));
              else l.push(new w(r[0]));
            _(i, function() {
              e(l, a);
            });
          });
        var $ = 'https://fonts.googleapis.com/css';
        function K(e) {
          (this.f = e), (this.a = []), (this.c = {});
        }
        var J = {
            latin: 'BESbswy',
            'latin-ext': 'çöüğş',
            cyrillic: 'йяЖ',
            greek: 'αβΣ',
            khmer: 'កខគ',
            Hanuman: 'កខគ'
          },
          Q = {
            thin: '1',
            extralight: '2',
            'extra-light': '2',
            ultralight: '2',
            'ultra-light': '2',
            light: '3',
            regular: '4',
            book: '4',
            medium: '5',
            'semi-bold': '6',
            semibold: '6',
            'demi-bold': '6',
            demibold: '6',
            bold: '7',
            'extra-bold': '8',
            extrabold: '8',
            'ultra-bold': '8',
            ultrabold: '8',
            black: '9',
            heavy: '9',
            l: '3',
            r: '4',
            b: '7'
          },
          ee = { i: 'i', italic: 'i', n: 'n', normal: 'n' },
          te = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
        function ne(e, t) {
          (this.c = e), (this.a = t);
        }
        var re = { Arimo: !0, Cousine: !0, Tinos: !0 };
        function oe(e, t) {
          (this.c = e), (this.a = t);
        }
        function ae(e, t) {
          (this.c = e), (this.f = t), (this.a = []);
        }
        (ne.prototype.load = function(e) {
          var t = new m(),
            n = this.c,
            r = new G(this.a.api, this.a.text),
            o = this.a.families;
          !(function(e, t) {
            for (var n = t.length, r = 0; r < n; r++) {
              var o = t[r].split(':');
              3 == o.length && e.f.push(o.pop());
              var a = '';
              2 == o.length && '' != o[1] && (a = ':'), e.a.push(o.join(a));
            }
          })(r, o);
          var a = new K(o);
          !(function(e) {
            for (var t = e.f.length, n = 0; n < t; n++) {
              var r = e.f[n].split(':'),
                o = r[0].replace(/\+/g, ' '),
                a = ['n4'];
              if (2 <= r.length) {
                var i;
                if (((i = []), (l = r[1])))
                  for (
                    var l, s = (l = l.split(',')).length, c = 0;
                    c < s;
                    c++
                  ) {
                    var u;
                    if ((u = l[c]).match(/^[\w-]+$/))
                      if (null == (d = te.exec(u.toLowerCase()))) u = '';
                      else {
                        if (
                          ((u = null == (u = d[2]) || '' == u ? 'n' : ee[u]),
                          null == (d = d[1]) || '' == d)
                        )
                          d = '4';
                        else
                          var f = Q[d],
                            d = f || (isNaN(d) ? '4' : d.substr(0, 1));
                        u = [u, d].join('');
                      }
                    else u = '';
                    u && i.push(u);
                  }
                0 < i.length && (a = i),
                  3 == r.length &&
                    ((i = []),
                    0 < (r = (r = r[2]) ? r.split(',') : i).length &&
                      (r = J[r[0]]) &&
                      (e.c[o] = r));
              }
              for (
                e.c[o] || ((r = J[o]) && (e.c[o] = r)), r = 0;
                r < a.length;
                r += 1
              )
                e.a.push(new w(o, a[r]));
            }
          })(a),
            b(
              n,
              (function(e) {
                if (0 == e.a.length) throw Error('No fonts to load!');
                if (-1 != e.c.indexOf('kit=')) return e.c;
                for (var t = e.a.length, n = [], r = 0; r < t; r++)
                  n.push(e.a[r].replace(/ /g, '+'));
                return (
                  (t = e.c + '?family=' + n.join('%7C')),
                  0 < e.f.length && (t += '&subset=' + e.f.join(',')),
                  0 < e.g.length && (t += '&text=' + encodeURIComponent(e.g)),
                  t
                );
              })(r),
              v(t)
            ),
            _(t, function() {
              e(a.a, a.c, re);
            });
        }),
          (oe.prototype.load = function(e) {
            var t = this.a.id,
              n = this.c.o;
            t
              ? g(
                  this.c,
                  (this.a.api || 'https://use.typekit.net') + '/' + t + '.js',
                  function(t) {
                    if (t) e([]);
                    else if (
                      n.Typekit &&
                      n.Typekit.config &&
                      n.Typekit.config.fn
                    ) {
                      t = n.Typekit.config.fn;
                      for (var r = [], o = 0; o < t.length; o += 2)
                        for (
                          var a = t[o], i = t[o + 1], l = 0;
                          l < i.length;
                          l++
                        )
                          r.push(new w(a, i[l]));
                      try {
                        n.Typekit.load({ events: !1, classes: !1, async: !0 });
                      } catch (e) {}
                      e(r);
                    }
                  },
                  2e3
                )
              : e([]);
          }),
          (ae.prototype.load = function(e) {
            var t = this.f.id,
              n = this.c.o,
              r = this;
            t
              ? (n.__webfontfontdeckmodule__ ||
                  (n.__webfontfontdeckmodule__ = {}),
                (n.__webfontfontdeckmodule__[t] = function(t, n) {
                  for (var o = 0, a = n.fonts.length; o < a; ++o) {
                    var i = n.fonts[o];
                    r.a.push(
                      new w(
                        i.name,
                        z('font-weight:' + i.weight + ';font-style:' + i.style)
                      )
                    );
                  }
                  e(r.a);
                }),
                g(
                  this.c,
                  (this.f.api || 'https://f.fontdeck.com/s/css/js/') +
                    (function(e) {
                      return e.o.location.hostname || e.a.location.hostname;
                    })(this.c) +
                    '/' +
                    t +
                    '.js',
                  function(t) {
                    t && e([]);
                  }
                ))
              : e([]);
          });
        var ie = new q(window);
        (ie.a.c.custom = function(e, t) {
          return new Y(t, e);
        }),
          (ie.a.c.fontdeck = function(e, t) {
            return new ae(t, e);
          }),
          (ie.a.c.monotype = function(e, t) {
            return new X(t, e);
          }),
          (ie.a.c.typekit = function(e, t) {
            return new oe(t, e);
          }),
          (ie.a.c.google = function(e, t) {
            return new ne(t, e);
          });
        var le = { load: i(ie.load, ie) };
        void 0 ===
          (r = function() {
            return le;
          }.call(t, n, t, e)) || (e.exports = r);
      })();
    },
    function(e, t) {
      e.exports = function(e) {
        var t = {
          begin: /[A-Z\_\.\-]+\s*:/,
          returnBegin: !0,
          end: ';',
          endsWithParent: !0,
          contains: [
            {
              className: 'attribute',
              begin: /\S/,
              end: ':',
              excludeEnd: !0,
              starts: {
                endsWithParent: !0,
                excludeEnd: !0,
                contains: [
                  {
                    begin: /[\w-]+\(/,
                    returnBegin: !0,
                    contains: [
                      { className: 'built_in', begin: /[\w-]+/ },
                      {
                        begin: /\(/,
                        end: /\)/,
                        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                      }
                    ]
                  },
                  e.CSS_NUMBER_MODE,
                  e.QUOTE_STRING_MODE,
                  e.APOS_STRING_MODE,
                  e.C_BLOCK_COMMENT_MODE,
                  { className: 'number', begin: '#[0-9A-Fa-f]+' },
                  { className: 'meta', begin: '!important' }
                ]
              }
            }
          ]
        };
        return {
          case_insensitive: !0,
          illegal: /[=\/|'\$]/,
          contains: [
            e.C_BLOCK_COMMENT_MODE,
            { className: 'selector-id', begin: /#[A-Za-z0-9_-]+/ },
            { className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/ },
            {
              className: 'selector-attr',
              begin: /\[/,
              end: /\]/,
              illegal: '$'
            },
            {
              className: 'selector-pseudo',
              begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            },
            {
              begin: '@(font-face|page)',
              lexemes: '[a-z-]+',
              keywords: 'font-face page'
            },
            {
              begin: '@',
              end: '[{;]',
              illegal: /:/,
              contains: [
                { className: 'keyword', begin: /\w+/ },
                {
                  begin: /\s/,
                  endsWithParent: !0,
                  excludeEnd: !0,
                  relevance: 0,
                  contains: [
                    e.APOS_STRING_MODE,
                    e.QUOTE_STRING_MODE,
                    e.CSS_NUMBER_MODE
                  ]
                }
              ]
            },
            {
              className: 'selector-tag',
              begin: '[a-zA-Z-][a-zA-Z0-9_-]*',
              relevance: 0
            },
            {
              begin: '{',
              end: '}',
              illegal: /\S/,
              contains: [e.C_BLOCK_COMMENT_MODE, t]
            }
          ]
        };
      };
    },
    function(e, t) {
      e.exports = function(e) {
        var t = '[A-Za-z$_][0-9A-Za-z$_]*',
          n = {
            keyword:
              'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as',
            literal: 'true false null undefined NaN Infinity',
            built_in:
              'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise'
          },
          r = {
            className: 'number',
            variants: [
              { begin: '\\b(0[bB][01]+)' },
              { begin: '\\b(0[oO][0-7]+)' },
              { begin: e.C_NUMBER_RE }
            ],
            relevance: 0
          },
          o = {
            className: 'subst',
            begin: '\\$\\{',
            end: '\\}',
            keywords: n,
            contains: []
          },
          a = {
            className: 'string',
            begin: '`',
            end: '`',
            contains: [e.BACKSLASH_ESCAPE, o]
          };
        o.contains = [
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          a,
          r,
          e.REGEXP_MODE
        ];
        var i = o.contains.concat([
          e.C_BLOCK_COMMENT_MODE,
          e.C_LINE_COMMENT_MODE
        ]);
        return {
          aliases: ['js', 'jsx'],
          keywords: n,
          contains: [
            {
              className: 'meta',
              relevance: 10,
              begin: /^\s*['"]use (strict|asm)['"]/
            },
            { className: 'meta', begin: /^#!/, end: /$/ },
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            a,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            r,
            {
              begin: /[{,]\s*/,
              relevance: 0,
              contains: [
                {
                  begin: t + '\\s*:',
                  returnBegin: !0,
                  relevance: 0,
                  contains: [{ className: 'attr', begin: t, relevance: 0 }]
                }
              ]
            },
            {
              begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
              keywords: 'return throw case',
              contains: [
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
                e.REGEXP_MODE,
                {
                  className: 'function',
                  begin: '(\\(.*?\\)|' + t + ')\\s*=>',
                  returnBegin: !0,
                  end: '\\s*=>',
                  contains: [
                    {
                      className: 'params',
                      variants: [
                        { begin: t },
                        { begin: /\(\s*\)/ },
                        {
                          begin: /\(/,
                          end: /\)/,
                          excludeBegin: !0,
                          excludeEnd: !0,
                          keywords: n,
                          contains: i
                        }
                      ]
                    }
                  ]
                },
                { className: '', begin: /\s/, end: /\s*/, skip: !0 },
                {
                  begin: /</,
                  end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                  subLanguage: 'xml',
                  contains: [
                    { begin: /<[A-Za-z0-9\\._:-]+\s*\/>/, skip: !0 },
                    {
                      begin: /<[A-Za-z0-9\\._:-]+/,
                      end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                      skip: !0,
                      contains: [
                        { begin: /<[A-Za-z0-9\\._:-]+\s*\/>/, skip: !0 },
                        'self'
                      ]
                    }
                  ]
                }
              ],
              relevance: 0
            },
            {
              className: 'function',
              beginKeywords: 'function',
              end: /\{/,
              excludeEnd: !0,
              contains: [
                e.inherit(e.TITLE_MODE, { begin: t }),
                {
                  className: 'params',
                  begin: /\(/,
                  end: /\)/,
                  excludeBegin: !0,
                  excludeEnd: !0,
                  contains: i
                }
              ],
              illegal: /\[|%/
            },
            { begin: /\$[(.]/ },
            e.METHOD_GUARD,
            {
              className: 'class',
              beginKeywords: 'class',
              end: /[{;=]/,
              excludeEnd: !0,
              illegal: /[:"\[\]]/,
              contains: [{ beginKeywords: 'extends' }, e.UNDERSCORE_TITLE_MODE]
            },
            { beginKeywords: 'constructor get set', end: /\{/, excludeEnd: !0 }
          ],
          illegal: /#(?!!)/
        };
      };
    },
    function(e, t) {
      e.exports = l;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.flush = function() {
          var e = u.cssRules();
          return u.flush(), e;
        }),
        (t.default = void 0);
      var r,
        o = n(0);
      function a(e) {
        return (a =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, t) {
        return !t || ('object' !== a(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = new ((r = n(96)) && r.__esModule ? r : { default: r }).default(),
        f = (function(e) {
          function t(e) {
            var n;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              ((n = l(this, s(t).call(this, e))).prevProps = {}),
              n
            );
          }
          var n, r, o;
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && c(e, t);
            })(t, e),
            (n = t),
            (o = [
              {
                key: 'dynamic',
                value: function(e) {
                  return e
                    .map(function(e) {
                      var t = e[0],
                        n = e[1];
                      return u.computeId(t, n);
                    })
                    .join(' ');
                }
              }
            ]),
            (r = [
              {
                key: 'shouldComponentUpdate',
                value: function(e) {
                  return (
                    this.props.id !== e.id ||
                    String(this.props.dynamic) !== String(e.dynamic)
                  );
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  u.remove(this.props);
                }
              },
              {
                key: 'render',
                value: function() {
                  return (
                    this.shouldComponentUpdate(this.prevProps) &&
                      (this.prevProps.id && u.remove(this.prevProps),
                      u.add(this.props),
                      (this.prevProps = this.props)),
                    null
                  );
                }
              }
            ]) && i(n.prototype, r),
            o && i(n, o),
            t
          );
        })(o.Component);
      t.default = f;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r = a(n(97)),
        o = a(n(98));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var l = function(e) {
          return e.replace(/\/style/gi, '\\/style');
        },
        s = (function() {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = t.styleSheet,
              r = void 0 === n ? null : n,
              a = t.optimizeForSpeed,
              i = void 0 !== a && a,
              l = t.isBrowser,
              s = void 0 === l ? 'undefined' != typeof window : l;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this._sheet =
                r ||
                new o.default({ name: 'styled-jsx', optimizeForSpeed: i })),
              this._sheet.inject(),
              r &&
                'boolean' == typeof i &&
                (this._sheet.setOptimizeForSpeed(i),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._isBrowser = s),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}),
              (this.computeId = this.createComputeId()),
              (this.computeSelector = this.createComputeSelector());
          }
          var t, n, a;
          return (
            (t = e),
            (n = [
              {
                key: 'add',
                value: function(e) {
                  var t = this;
                  void 0 === this._optimizeForSpeed &&
                    ((this._optimizeForSpeed = Array.isArray(e.children)),
                    this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                    (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                    this._isBrowser &&
                      !this._fromServer &&
                      ((this._fromServer = this.selectFromServer()),
                      (this._instancesCounts = Object.keys(
                        this._fromServer
                      ).reduce(function(e, t) {
                        return (e[t] = 0), e;
                      }, {})));
                  var n = this.getIdAndRules(e),
                    r = n.styleId,
                    o = n.rules;
                  if (r in this._instancesCounts) this._instancesCounts[r] += 1;
                  else {
                    var a = o
                      .map(function(e) {
                        return t._sheet.insertRule(e);
                      })
                      .filter(function(e) {
                        return -1 !== e;
                      });
                    (this._indices[r] = a), (this._instancesCounts[r] = 1);
                  }
                }
              },
              {
                key: 'remove',
                value: function(e) {
                  var t = this,
                    n = this.getIdAndRules(e).styleId;
                  if (
                    ((function(e, t) {
                      if (!e)
                        throw new Error('StyleSheetRegistry: '.concat(t, '.'));
                    })(
                      n in this._instancesCounts,
                      'styleId: `'.concat(n, '` not found')
                    ),
                    (this._instancesCounts[n] -= 1),
                    this._instancesCounts[n] < 1)
                  ) {
                    var r = this._fromServer && this._fromServer[n];
                    r
                      ? (r.parentNode.removeChild(r),
                        delete this._fromServer[n])
                      : (this._indices[n].forEach(function(e) {
                          return t._sheet.deleteRule(e);
                        }),
                        delete this._indices[n]),
                      delete this._instancesCounts[n];
                  }
                }
              },
              {
                key: 'update',
                value: function(e, t) {
                  this.add(t), this.remove(e);
                }
              },
              {
                key: 'flush',
                value: function() {
                  this._sheet.flush(),
                    this._sheet.inject(),
                    (this._fromServer = void 0),
                    (this._indices = {}),
                    (this._instancesCounts = {}),
                    (this.computeId = this.createComputeId()),
                    (this.computeSelector = this.createComputeSelector());
                }
              },
              {
                key: 'cssRules',
                value: function() {
                  var e = this,
                    t = this._fromServer
                      ? Object.keys(this._fromServer).map(function(t) {
                          return [t, e._fromServer[t]];
                        })
                      : [],
                    n = this._sheet.cssRules();
                  return t.concat(
                    Object.keys(this._indices)
                      .map(function(t) {
                        return [
                          t,
                          e._indices[t]
                            .map(function(e) {
                              return n[e].cssText;
                            })
                            .join(e._optimizeForSpeed ? '' : '\n')
                        ];
                      })
                      .filter(function(e) {
                        return Boolean(e[1]);
                      })
                  );
                }
              },
              {
                key: 'createComputeId',
                value: function() {
                  var e = {};
                  return function(t, n) {
                    if (!n) return 'jsx-'.concat(t);
                    var o = String(n),
                      a = t + o;
                    return (
                      e[a] ||
                        (e[a] = 'jsx-'.concat(
                          (0, r.default)(''.concat(t, '-').concat(o))
                        )),
                      e[a]
                    );
                  };
                }
              },
              {
                key: 'createComputeSelector',
                value: function() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : /__jsx-style-dynamic-selector/g,
                    t = {};
                  return function(n, r) {
                    this._isBrowser || (r = l(r));
                    var o = n + r;
                    return t[o] || (t[o] = r.replace(e, n)), t[o];
                  };
                }
              },
              {
                key: 'getIdAndRules',
                value: function(e) {
                  var t = this,
                    n = e.children,
                    r = e.dynamic,
                    o = e.id;
                  if (r) {
                    var a = this.computeId(o, r);
                    return {
                      styleId: a,
                      rules: Array.isArray(n)
                        ? n.map(function(e) {
                            return t.computeSelector(a, e);
                          })
                        : [this.computeSelector(a, n)]
                    };
                  }
                  return {
                    styleId: this.computeId(o),
                    rules: Array.isArray(n) ? n : [n]
                  };
                }
              },
              {
                key: 'selectFromServer',
                value: function() {
                  return Array.prototype.slice
                    .call(document.querySelectorAll('[id^="__jsx-"]'))
                    .reduce(function(e, t) {
                      return (e[t.id.slice(2)] = t), e;
                    }, {});
                }
              }
            ]) && i(t.prototype, n),
            a && i(t, a),
            e
          );
        })();
      t.default = s;
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
        return t >>> 0;
      };
    },
    function(e, t, n) {
      'use strict';
      (function(e) {
        function n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0);
        var r = e.env && !0,
          o = function(e) {
            return '[object String]' === Object.prototype.toString.call(e);
          },
          a = (function() {
            function e() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.name,
                a = void 0 === n ? 'stylesheet' : n,
                l = t.optimizeForSpeed,
                s = void 0 === l ? r : l,
                c = t.isBrowser,
                u = void 0 === c ? 'undefined' != typeof window : c;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                i(o(a), '`name` must be a string'),
                (this._name = a),
                (this._deletedRulePlaceholder = '#'.concat(
                  a,
                  '-deleted-rule____{}'
                )),
                i(
                  'boolean' == typeof s,
                  '`optimizeForSpeed` must be a boolean'
                ),
                (this._optimizeForSpeed = s),
                (this._isBrowser = u),
                (this._serverSheet = void 0),
                (this._tags = []),
                (this._injected = !1),
                (this._rulesCount = 0);
              var f =
                this._isBrowser &&
                document.querySelector('meta[property="csp-nonce"]');
              this._nonce = f ? f.getAttribute('content') : null;
            }
            var t, a, l;
            return (
              (t = e),
              (a = [
                {
                  key: 'setOptimizeForSpeed',
                  value: function(e) {
                    i(
                      'boolean' == typeof e,
                      '`setOptimizeForSpeed` accepts a boolean'
                    ),
                      i(
                        0 === this._rulesCount,
                        'optimizeForSpeed cannot be when rules have already been inserted'
                      ),
                      this.flush(),
                      (this._optimizeForSpeed = e),
                      this.inject();
                  }
                },
                {
                  key: 'isOptimizeForSpeed',
                  value: function() {
                    return this._optimizeForSpeed;
                  }
                },
                {
                  key: 'inject',
                  value: function() {
                    var e = this;
                    if (
                      (i(!this._injected, 'sheet already injected'),
                      (this._injected = !0),
                      this._isBrowser && this._optimizeForSpeed)
                    )
                      return (
                        (this._tags[0] = this.makeStyleTag(this._name)),
                        (this._optimizeForSpeed =
                          'insertRule' in this.getSheet()),
                        void (
                          this._optimizeForSpeed ||
                          (r ||
                            console.warn(
                              'StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'
                            ),
                          this.flush(),
                          (this._injected = !0))
                        )
                      );
                    this._serverSheet = {
                      cssRules: [],
                      insertRule: function(t, n) {
                        return (
                          'number' == typeof n
                            ? (e._serverSheet.cssRules[n] = { cssText: t })
                            : e._serverSheet.cssRules.push({ cssText: t }),
                          n
                        );
                      },
                      deleteRule: function(t) {
                        e._serverSheet.cssRules[t] = null;
                      }
                    };
                  }
                },
                {
                  key: 'getSheetForTag',
                  value: function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                      if (document.styleSheets[t].ownerNode === e)
                        return document.styleSheets[t];
                  }
                },
                {
                  key: 'getSheet',
                  value: function() {
                    return this.getSheetForTag(
                      this._tags[this._tags.length - 1]
                    );
                  }
                },
                {
                  key: 'insertRule',
                  value: function(e, t) {
                    if (
                      (i(o(e), '`insertRule` accepts only strings'),
                      !this._isBrowser)
                    )
                      return (
                        'number' != typeof t &&
                          (t = this._serverSheet.cssRules.length),
                        this._serverSheet.insertRule(e, t),
                        this._rulesCount++
                      );
                    if (this._optimizeForSpeed) {
                      var n = this.getSheet();
                      'number' != typeof t && (t = n.cssRules.length);
                      try {
                        n.insertRule(e, t);
                      } catch (t) {
                        return (
                          r ||
                            console.warn(
                              'StyleSheet: illegal rule: \n\n'.concat(
                                e,
                                '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                              )
                            ),
                          -1
                        );
                      }
                    } else {
                      var a = this._tags[t];
                      this._tags.push(this.makeStyleTag(this._name, e, a));
                    }
                    return this._rulesCount++;
                  }
                },
                {
                  key: 'replaceRule',
                  value: function(e, t) {
                    if (this._optimizeForSpeed || !this._isBrowser) {
                      var n = this._isBrowser
                        ? this.getSheet()
                        : this._serverSheet;
                      if (
                        (t.trim() || (t = this._deletedRulePlaceholder),
                        !n.cssRules[e])
                      )
                        return e;
                      n.deleteRule(e);
                      try {
                        n.insertRule(t, e);
                      } catch (o) {
                        r ||
                          console.warn(
                            'StyleSheet: illegal rule: \n\n'.concat(
                              t,
                              '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                            )
                          ),
                          n.insertRule(this._deletedRulePlaceholder, e);
                      }
                    } else {
                      var o = this._tags[e];
                      i(o, 'old rule at index `'.concat(e, '` not found')),
                        (o.textContent = t);
                    }
                    return e;
                  }
                },
                {
                  key: 'deleteRule',
                  value: function(e) {
                    if (this._isBrowser)
                      if (this._optimizeForSpeed) this.replaceRule(e, '');
                      else {
                        var t = this._tags[e];
                        i(t, 'rule at index `'.concat(e, '` not found')),
                          t.parentNode.removeChild(t),
                          (this._tags[e] = null);
                      }
                    else this._serverSheet.deleteRule(e);
                  }
                },
                {
                  key: 'flush',
                  value: function() {
                    (this._injected = !1),
                      (this._rulesCount = 0),
                      this._isBrowser
                        ? (this._tags.forEach(function(e) {
                            return e && e.parentNode.removeChild(e);
                          }),
                          (this._tags = []))
                        : (this._serverSheet.cssRules = []);
                  }
                },
                {
                  key: 'cssRules',
                  value: function() {
                    var e = this;
                    return this._isBrowser
                      ? this._tags.reduce(function(t, n) {
                          return (
                            n
                              ? (t = t.concat(
                                  e.getSheetForTag(n).cssRules.map(function(t) {
                                    return t.cssText ===
                                      e._deletedRulePlaceholder
                                      ? null
                                      : t;
                                  })
                                ))
                              : t.push(null),
                            t
                          );
                        }, [])
                      : this._serverSheet.cssRules;
                  }
                },
                {
                  key: 'makeStyleTag',
                  value: function(e, t, n) {
                    t &&
                      i(
                        o(t),
                        'makeStyleTag acceps only strings as second parameter'
                      );
                    var r = document.createElement('style');
                    this._nonce && r.setAttribute('nonce', this._nonce),
                      (r.type = 'text/css'),
                      r.setAttribute('data-'.concat(e), ''),
                      t && r.appendChild(document.createTextNode(t));
                    var a =
                      document.head || document.getElementsByTagName('head')[0];
                    return n ? a.insertBefore(r, n) : a.appendChild(r), r;
                  }
                },
                {
                  key: 'length',
                  get: function() {
                    return this._rulesCount;
                  }
                }
              ]) && n(t.prototype, a),
              l && n(t, l),
              e
            );
          })();
        function i(e, t) {
          if (!e) throw new Error('StyleSheet: '.concat(t, '.'));
        }
        t.default = a;
      }.call(this, n(54)));
    },
    function(e, t) {
      e.exports = s;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Alpha = void 0);
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(0),
        i = u(a),
        l = u(n(9)),
        s = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n(197)),
        c = u(n(53));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var d = (t.Alpha = (function(e) {
        function t() {
          var e, n, r;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
          return (
            (n = r = f(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(a)
              )
            )),
            (r.handleChange = function(e) {
              var t = s.calculateChange(
                e,
                r.props.hsl,
                r.props.direction,
                r.props.a,
                r.container
              );
              t &&
                'function' == typeof r.props.onChange &&
                r.props.onChange(t, e);
            }),
            (r.handleMouseDown = function(e) {
              r.handleChange(e),
                window.addEventListener('mousemove', r.handleChange),
                window.addEventListener('mouseup', r.handleMouseUp);
            }),
            (r.handleMouseUp = function() {
              r.unbindEventListeners();
            }),
            (r.unbindEventListeners = function() {
              window.removeEventListener('mousemove', r.handleChange),
                window.removeEventListener('mouseup', r.handleMouseUp);
            }),
            f(r, n)
          );
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: 'componentWillUnmount',
              value: function() {
                this.unbindEventListeners();
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props.rgb,
                  n = (0, l.default)(
                    {
                      default: {
                        alpha: {
                          absolute: '0px 0px 0px 0px',
                          borderRadius: this.props.radius
                        },
                        checkboard: {
                          absolute: '0px 0px 0px 0px',
                          overflow: 'hidden',
                          borderRadius: this.props.radius
                        },
                        gradient: {
                          absolute: '0px 0px 0px 0px',
                          background:
                            'linear-gradient(to right, rgba(' +
                            t.r +
                            ',' +
                            t.g +
                            ',' +
                            t.b +
                            ', 0) 0%,\n           rgba(' +
                            t.r +
                            ',' +
                            t.g +
                            ',' +
                            t.b +
                            ', 1) 100%)',
                          boxShadow: this.props.shadow,
                          borderRadius: this.props.radius
                        },
                        container: {
                          position: 'relative',
                          height: '100%',
                          margin: '0 3px'
                        },
                        pointer: {
                          position: 'absolute',
                          left: 100 * t.a + '%'
                        },
                        slider: {
                          width: '4px',
                          borderRadius: '1px',
                          height: '8px',
                          boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
                          background: '#fff',
                          marginTop: '1px',
                          transform: 'translateX(-2px)'
                        }
                      },
                      vertical: {
                        gradient: {
                          background:
                            'linear-gradient(to bottom, rgba(' +
                            t.r +
                            ',' +
                            t.g +
                            ',' +
                            t.b +
                            ', 0) 0%,\n           rgba(' +
                            t.r +
                            ',' +
                            t.g +
                            ',' +
                            t.b +
                            ', 1) 100%)'
                        },
                        pointer: { left: 0, top: 100 * t.a + '%' }
                      },
                      overwrite: r({}, this.props.style)
                    },
                    {
                      vertical: 'vertical' === this.props.direction,
                      overwrite: !0
                    }
                  );
                return i.default.createElement(
                  'div',
                  { style: n.alpha },
                  i.default.createElement(
                    'div',
                    { style: n.checkboard },
                    i.default.createElement(c.default, {
                      renderers: this.props.renderers
                    })
                  ),
                  i.default.createElement('div', { style: n.gradient }),
                  i.default.createElement(
                    'div',
                    {
                      style: n.container,
                      ref: function(t) {
                        return (e.container = t);
                      },
                      onMouseDown: this.handleMouseDown,
                      onTouchMove: this.handleChange,
                      onTouchStart: this.handleChange
                    },
                    i.default.createElement(
                      'div',
                      { style: n.pointer },
                      this.props.pointer
                        ? i.default.createElement(
                            this.props.pointer,
                            this.props
                          )
                        : i.default.createElement('div', { style: n.slider })
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(a.PureComponent || a.Component));
      t.default = d;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.flattenNames = void 0);
      var r = l(n(102)),
        o = l(n(37)),
        a = l(n(61)),
        i = l(n(112));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (t.flattenNames = function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n = [];
        return (
          (0, i.default)(t, function(t) {
            Array.isArray(t)
              ? e(t).map(function(e) {
                  return n.push(e);
                })
              : (0, a.default)(t)
              ? (0, o.default)(t, function(e, t) {
                  !0 === e && n.push(t), n.push(t + '-' + e);
                })
              : (0, r.default)(t) && n.push(t);
          }),
          n
        );
      });
      t.default = s;
    },
    function(e, t, n) {
      var r = n(10),
        o = n(3),
        a = n(6),
        i = '[object String]';
      e.exports = function(e) {
        return 'string' == typeof e || (!o(e) && a(e) && r(e) == i);
      };
    },
    function(e, t, n) {
      var r = n(15),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        l = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        var t = a.call(e, l),
          n = e[l];
        try {
          e[l] = void 0;
          var r = !0;
        } catch (e) {}
        var o = i.call(e);
        return r && (t ? (e[l] = n) : delete e[l]), o;
      };
    },
    function(e, t) {
      var n = Object.prototype.toString;
      e.exports = function(e) {
        return n.call(e);
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return function(t, n, r) {
          for (var o = -1, a = Object(t), i = r(t), l = i.length; l--; ) {
            var s = i[e ? l : ++o];
            if (!1 === n(a[s], s, a)) break;
          }
          return t;
        };
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      };
    },
    function(e, t, n) {
      var r = n(10),
        o = n(6),
        a = '[object Arguments]';
      e.exports = function(e) {
        return o(e) && r(e) == a;
      };
    },
    function(e, t) {
      e.exports = function() {
        return !1;
      };
    },
    function(e, t, n) {
      var r = n(10),
        o = n(41),
        a = n(6),
        i = {};
      (i['[object Float32Array]'] = i['[object Float64Array]'] = i[
        '[object Int8Array]'
      ] = i['[object Int16Array]'] = i['[object Int32Array]'] = i[
        '[object Uint8Array]'
      ] = i['[object Uint8ClampedArray]'] = i['[object Uint16Array]'] = i[
        '[object Uint32Array]'
      ] = !0),
        (i['[object Arguments]'] = i['[object Array]'] = i[
          '[object ArrayBuffer]'
        ] = i['[object Boolean]'] = i['[object DataView]'] = i[
          '[object Date]'
        ] = i['[object Error]'] = i['[object Function]'] = i[
          '[object Map]'
        ] = i['[object Number]'] = i['[object Object]'] = i[
          '[object RegExp]'
        ] = i['[object Set]'] = i['[object String]'] = i[
          '[object WeakMap]'
        ] = !1),
        (e.exports = function(e) {
          return a(e) && o(e.length) && !!i[r(e)];
        });
    },
    function(e, t, n) {
      var r = n(44),
        o = n(111),
        a = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        if (!r(e)) return o(e);
        var t = [];
        for (var n in Object(e))
          a.call(e, n) && 'constructor' != n && t.push(n);
        return t;
      };
    },
    function(e, t, n) {
      var r = n(59)(Object.keys, Object);
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(62),
        o = n(113),
        a = n(171),
        i = n(3);
      e.exports = function(e, t) {
        return (i(e) ? r : a)(e, o(t, 3));
      };
    },
    function(e, t, n) {
      var r = n(114),
        o = n(158),
        a = n(22),
        i = n(3),
        l = n(168);
      e.exports = function(e) {
        return 'function' == typeof e
          ? e
          : null == e
          ? a
          : 'object' == typeof e
          ? i(e)
            ? o(e[0], e[1])
            : r(e)
          : l(e);
      };
    },
    function(e, t, n) {
      var r = n(115),
        o = n(157),
        a = n(72);
      e.exports = function(e) {
        var t = o(e);
        return 1 == t.length && t[0][2]
          ? a(t[0][0], t[0][1])
          : function(n) {
              return n === e || r(n, e, t);
            };
      };
    },
    function(e, t, n) {
      var r = n(23),
        o = n(64),
        a = 1,
        i = 2;
      e.exports = function(e, t, n, l) {
        var s = n.length,
          c = s,
          u = !l;
        if (null == e) return !c;
        for (e = Object(e); s--; ) {
          var f = n[s];
          if (u && f[2] ? f[1] !== e[f[0]] : !(f[0] in e)) return !1;
        }
        for (; ++s < c; ) {
          var d = (f = n[s])[0],
            p = e[d],
            h = f[1];
          if (u && f[2]) {
            if (void 0 === p && !(d in e)) return !1;
          } else {
            var b = new r();
            if (l) var g = l(p, h, d, e, t, b);
            if (!(void 0 === g ? o(h, p, a | i, l, b) : g)) return !1;
          }
        }
        return !0;
      };
    },
    function(e, t) {
      e.exports = function() {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function(e, t, n) {
      var r = n(25),
        o = Array.prototype.splice;
      e.exports = function(e) {
        var t = this.__data__,
          n = r(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
        );
      };
    },
    function(e, t, n) {
      var r = n(25);
      e.exports = function(e) {
        var t = this.__data__,
          n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    function(e, t, n) {
      var r = n(25);
      e.exports = function(e) {
        return r(this.__data__, e) > -1;
      };
    },
    function(e, t, n) {
      var r = n(25);
      e.exports = function(e, t) {
        var n = this.__data__,
          o = r(n, e);
        return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
      };
    },
    function(e, t, n) {
      var r = n(24);
      e.exports = function() {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    function(e, t) {
      e.exports = function(e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return this.__data__.get(e);
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return this.__data__.has(e);
      };
    },
    function(e, t, n) {
      var r = n(24),
        o = n(47),
        a = n(48),
        i = 200;
      e.exports = function(e, t) {
        var n = this.__data__;
        if (n instanceof r) {
          var l = n.__data__;
          if (!o || l.length < i - 1)
            return l.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new a(l);
        }
        return n.set(e, t), (this.size = n.size), this;
      };
    },
    function(e, t, n) {
      var r = n(45),
        o = n(127),
        a = n(4),
        i = n(63),
        l = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        c = Object.prototype,
        u = s.toString,
        f = c.hasOwnProperty,
        d = RegExp(
          '^' +
            u
              .call(f)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        );
      e.exports = function(e) {
        return !(!a(e) || o(e)) && (r(e) ? d : l).test(i(e));
      };
    },
    function(e, t, n) {
      var r,
        o = n(128),
        a = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + r
          : '';
      e.exports = function(e) {
        return !!a && a in e;
      };
    },
    function(e, t, n) {
      var r = n(5)['__core-js_shared__'];
      e.exports = r;
    },
    function(e, t) {
      e.exports = function(e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    function(e, t, n) {
      var r = n(131),
        o = n(24),
        a = n(47);
      e.exports = function() {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (a || o)(),
            string: new r()
          });
      };
    },
    function(e, t, n) {
      var r = n(132),
        o = n(133),
        a = n(134),
        i = n(135),
        l = n(136);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = a),
        (s.prototype.has = i),
        (s.prototype.set = l),
        (e.exports = s);
    },
    function(e, t, n) {
      var r = n(26);
      e.exports = function() {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    function(e, t) {
      e.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function(e, t, n) {
      var r = n(26),
        o = '__lodash_hash_undefined__',
        a = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        var t = this.__data__;
        if (r) {
          var n = t[e];
          return n === o ? void 0 : n;
        }
        return a.call(t, e) ? t[e] : void 0;
      };
    },
    function(e, t, n) {
      var r = n(26),
        o = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : o.call(t, e);
      };
    },
    function(e, t, n) {
      var r = n(26),
        o = '__lodash_hash_undefined__';
      e.exports = function(e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = r && void 0 === t ? o : t),
          this
        );
      };
    },
    function(e, t, n) {
      var r = n(27);
      e.exports = function(e) {
        var t = r(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        var t = typeof e;
        return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t
          ? '__proto__' !== e
          : null === e;
      };
    },
    function(e, t, n) {
      var r = n(27);
      e.exports = function(e) {
        return r(this, e).get(e);
      };
    },
    function(e, t, n) {
      var r = n(27);
      e.exports = function(e) {
        return r(this, e).has(e);
      };
    },
    function(e, t, n) {
      var r = n(27);
      e.exports = function(e, t) {
        var n = r(this, e),
          o = n.size;
        return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
      };
    },
    function(e, t, n) {
      var r = n(23),
        o = n(65),
        a = n(148),
        i = n(151),
        l = n(28),
        s = n(3),
        c = n(21),
        u = n(40),
        f = 1,
        d = '[object Arguments]',
        p = '[object Array]',
        h = '[object Object]',
        b = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, n, g, m, v) {
        var _ = s(e),
          y = s(t),
          x = _ ? p : l(e),
          w = y ? p : l(t),
          k = (x = x == d ? h : x) == h,
          S = (w = w == d ? h : w) == h,
          E = x == w;
        if (E && c(e)) {
          if (!c(t)) return !1;
          (_ = !0), (k = !1);
        }
        if (E && !k)
          return (
            v || (v = new r()),
            _ || u(e) ? o(e, t, n, g, m, v) : a(e, t, x, n, g, m, v)
          );
        if (!(n & f)) {
          var z = k && b.call(e, '__wrapped__'),
            O = S && b.call(t, '__wrapped__');
          if (z || O) {
            var C = z ? e.value() : e,
              j = O ? t.value() : t;
            return v || (v = new r()), m(C, j, n, g, v);
          }
        }
        return !!E && (v || (v = new r()), i(e, t, n, g, m, v));
      };
    },
    function(e, t, n) {
      var r = n(48),
        o = n(144),
        a = n(145);
      function i(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
      }
      (i.prototype.add = i.prototype.push = o),
        (i.prototype.has = a),
        (e.exports = i);
    },
    function(e, t) {
      var n = '__lodash_hash_undefined__';
      e.exports = function(e) {
        return this.__data__.set(e, n), this;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return this.__data__.has(e);
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return e.has(t);
      };
    },
    function(e, t, n) {
      var r = n(15),
        o = n(66),
        a = n(17),
        i = n(65),
        l = n(149),
        s = n(150),
        c = 1,
        u = 2,
        f = '[object Boolean]',
        d = '[object Date]',
        p = '[object Error]',
        h = '[object Map]',
        b = '[object Number]',
        g = '[object RegExp]',
        m = '[object Set]',
        v = '[object String]',
        _ = '[object Symbol]',
        y = '[object ArrayBuffer]',
        x = '[object DataView]',
        w = r ? r.prototype : void 0,
        k = w ? w.valueOf : void 0;
      e.exports = function(e, t, n, r, w, S, E) {
        switch (n) {
          case x:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case y:
            return !(e.byteLength != t.byteLength || !S(new o(e), new o(t)));
          case f:
          case d:
          case b:
            return a(+e, +t);
          case p:
            return e.name == t.name && e.message == t.message;
          case g:
          case v:
            return e == t + '';
          case h:
            var z = l;
          case m:
            var O = r & c;
            if ((z || (z = s), e.size != t.size && !O)) return !1;
            var C = E.get(e);
            if (C) return C == t;
            (r |= u), E.set(e, t);
            var j = i(z(e), z(t), r, w, S, E);
            return E.delete(e), j;
          case _:
            if (k) return k.call(e) == k.call(t);
        }
        return !1;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function(e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      };
    },
    function(e, t) {
      e.exports = function(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function(e) {
            n[++t] = e;
          }),
          n
        );
      };
    },
    function(e, t, n) {
      var r = n(67),
        o = 1,
        a = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, n, i, l, s) {
        var c = n & o,
          u = r(e),
          f = u.length;
        if (f != r(t).length && !c) return !1;
        for (var d = f; d--; ) {
          var p = u[d];
          if (!(c ? p in t : a.call(t, p))) return !1;
        }
        var h = s.get(e);
        if (h && s.get(t)) return h == t;
        var b = !0;
        s.set(e, t), s.set(t, e);
        for (var g = c; ++d < f; ) {
          var m = e[(p = u[d])],
            v = t[p];
          if (i) var _ = c ? i(v, m, p, t, e, s) : i(m, v, p, e, t, s);
          if (!(void 0 === _ ? m === v || l(m, v, n, i, s) : _)) {
            b = !1;
            break;
          }
          g || (g = 'constructor' == p);
        }
        if (b && !g) {
          var y = e.constructor,
            x = t.constructor;
          y != x &&
            'constructor' in e &&
            'constructor' in t &&
            !(
              'function' == typeof y &&
              y instanceof y &&
              'function' == typeof x &&
              x instanceof x
            ) &&
            (b = !1);
        }
        return s.delete(e), s.delete(t), b;
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, o = 0, a = [];
          ++n < r;

        ) {
          var i = e[n];
          t(i, n, e) && (a[o++] = i);
        }
        return a;
      };
    },
    function(e, t, n) {
      var r = n(11)(n(5), 'DataView');
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(11)(n(5), 'Promise');
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(11)(n(5), 'Set');
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(11)(n(5), 'WeakMap');
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(71),
        o = n(16);
      e.exports = function(e) {
        for (var t = o(e), n = t.length; n--; ) {
          var a = t[n],
            i = e[a];
          t[n] = [a, i, r(i)];
        }
        return t;
      };
    },
    function(e, t, n) {
      var r = n(64),
        o = n(159),
        a = n(165),
        i = n(50),
        l = n(71),
        s = n(72),
        c = n(30),
        u = 1,
        f = 2;
      e.exports = function(e, t) {
        return i(e) && l(t)
          ? s(c(e), t)
          : function(n) {
              var i = o(n, e);
              return void 0 === i && i === t ? a(n, e) : r(t, i, u | f);
            };
      };
    },
    function(e, t, n) {
      var r = n(73);
      e.exports = function(e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o;
      };
    },
    function(e, t, n) {
      var r = n(161),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        i = r(function(e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(''),
            e.replace(o, function(e, n, r, o) {
              t.push(r ? o.replace(a, '$1') : n || e);
            }),
            t
          );
        });
      e.exports = i;
    },
    function(e, t, n) {
      var r = n(162),
        o = 500;
      e.exports = function(e) {
        var t = r(e, function(e) {
            return n.size === o && n.clear(), e;
          }),
          n = t.cache;
        return t;
      };
    },
    function(e, t, n) {
      var r = n(48),
        o = 'Expected a function';
      function a(e, t) {
        if ('function' != typeof e || (null != t && 'function' != typeof t))
          throw new TypeError(o);
        var n = function() {
          var r = arguments,
            o = t ? t.apply(this, r) : r[0],
            a = n.cache;
          if (a.has(o)) return a.get(o);
          var i = e.apply(this, r);
          return (n.cache = a.set(o, i) || a), i;
        };
        return (n.cache = new (a.Cache || r)()), n;
      }
      (a.Cache = r), (e.exports = a);
    },
    function(e, t, n) {
      var r = n(164);
      e.exports = function(e) {
        return null == e ? '' : r(e);
      };
    },
    function(e, t, n) {
      var r = n(15),
        o = n(62),
        a = n(3),
        i = n(29),
        l = 1 / 0,
        s = r ? r.prototype : void 0,
        c = s ? s.toString : void 0;
      e.exports = function e(t) {
        if ('string' == typeof t) return t;
        if (a(t)) return o(t, e) + '';
        if (i(t)) return c ? c.call(t) : '';
        var n = t + '';
        return '0' == n && 1 / t == -l ? '-0' : n;
      };
    },
    function(e, t, n) {
      var r = n(166),
        o = n(167);
      e.exports = function(e, t) {
        return null != e && o(e, t, r);
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return null != e && t in Object(e);
      };
    },
    function(e, t, n) {
      var r = n(74),
        o = n(38),
        a = n(3),
        i = n(39),
        l = n(41),
        s = n(30);
      e.exports = function(e, t, n) {
        for (var c = -1, u = (t = r(t, e)).length, f = !1; ++c < u; ) {
          var d = s(t[c]);
          if (!(f = null != e && n(e, d))) break;
          e = e[d];
        }
        return f || ++c != u
          ? f
          : !!(u = null == e ? 0 : e.length) &&
              l(u) &&
              i(d, u) &&
              (a(e) || o(e));
      };
    },
    function(e, t, n) {
      var r = n(169),
        o = n(170),
        a = n(50),
        i = n(30);
      e.exports = function(e) {
        return a(e) ? r(i(e)) : o(e);
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return function(t) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    function(e, t, n) {
      var r = n(73);
      e.exports = function(e) {
        return function(t) {
          return r(t, e);
        };
      };
    },
    function(e, t, n) {
      var r = n(75),
        o = n(12);
      e.exports = function(e, t) {
        var n = -1,
          a = o(e) ? Array(e.length) : [];
        return (
          r(e, function(e, r, o) {
            a[++n] = t(e, r, o);
          }),
          a
        );
      };
    },
    function(e, t, n) {
      var r = n(12);
      e.exports = function(e, t) {
        return function(n, o) {
          if (null == n) return n;
          if (!r(n)) return e(n, o);
          for (
            var a = n.length, i = t ? a : -1, l = Object(n);
            (t ? i-- : ++i < a) && !1 !== o(l[i], i, l);

          );
          return n;
        };
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.mergeClasses = void 0);
      var r = i(n(37)),
        o = i(n(174)),
        a =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (t.mergeClasses = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = (e.default && (0, o.default)(e.default)) || {};
        return (
          t.map(function(t) {
            var o = e[t];
            return (
              o &&
                (0, r.default)(o, function(e, t) {
                  n[t] || (n[t] = {}), (n[t] = a({}, n[t], o[t]));
                }),
              t
            );
          }),
          n
        );
      });
      t.default = l;
    },
    function(e, t, n) {
      var r = n(175),
        o = 1,
        a = 4;
      e.exports = function(e) {
        return r(e, o | a);
      };
    },
    function(e, t, n) {
      var r = n(23),
        o = n(76),
        a = n(77),
        i = n(176),
        l = n(177),
        s = n(79),
        c = n(80),
        u = n(180),
        f = n(181),
        d = n(67),
        p = n(182),
        h = n(28),
        b = n(183),
        g = n(184),
        m = n(83),
        v = n(3),
        _ = n(21),
        y = n(189),
        x = n(4),
        w = n(191),
        k = n(16),
        S = 1,
        E = 2,
        z = 4,
        O = '[object Arguments]',
        C = '[object Function]',
        j = '[object GeneratorFunction]',
        F = '[object Object]',
        T = {};
      (T[O] = T['[object Array]'] = T['[object ArrayBuffer]'] = T[
        '[object DataView]'
      ] = T['[object Boolean]'] = T['[object Date]'] = T[
        '[object Float32Array]'
      ] = T['[object Float64Array]'] = T['[object Int8Array]'] = T[
        '[object Int16Array]'
      ] = T['[object Int32Array]'] = T['[object Map]'] = T[
        '[object Number]'
      ] = T[F] = T['[object RegExp]'] = T['[object Set]'] = T[
        '[object String]'
      ] = T['[object Symbol]'] = T['[object Uint8Array]'] = T[
        '[object Uint8ClampedArray]'
      ] = T['[object Uint16Array]'] = T['[object Uint32Array]'] = !0),
        (T['[object Error]'] = T[C] = T['[object WeakMap]'] = !1),
        (e.exports = function e(t, n, A, P, N, M) {
          var B,
            I = n & S,
            R = n & E,
            L = n & z;
          if ((A && (B = N ? A(t, P, N, M) : A(t)), void 0 !== B)) return B;
          if (!x(t)) return t;
          var D = v(t);
          if (D) {
            if (((B = b(t)), !I)) return c(t, B);
          } else {
            var H = h(t),
              U = H == C || H == j;
            if (_(t)) return s(t, I);
            if (H == F || H == O || (U && !N)) {
              if (((B = R || U ? {} : m(t)), !I))
                return R ? f(t, l(B, t)) : u(t, i(B, t));
            } else {
              if (!T[H]) return N ? t : {};
              B = g(t, H, I);
            }
          }
          M || (M = new r());
          var W = M.get(t);
          if (W) return W;
          if ((M.set(t, B), w(t)))
            return (
              t.forEach(function(r) {
                B.add(e(r, n, A, r, t, M));
              }),
              B
            );
          if (y(t))
            return (
              t.forEach(function(r, o) {
                B.set(o, e(r, n, A, o, t, M));
              }),
              B
            );
          var Z = L ? (R ? p : d) : R ? keysIn : k,
            q = D ? void 0 : Z(t);
          return (
            o(q || t, function(r, o) {
              q && (r = t[(o = r)]), a(B, o, e(r, n, A, o, t, M));
            }),
            B
          );
        });
    },
    function(e, t, n) {
      var r = n(18),
        o = n(16);
      e.exports = function(e, t) {
        return e && r(t, o(t), e);
      };
    },
    function(e, t, n) {
      var r = n(18),
        o = n(31);
      e.exports = function(e, t) {
        return e && r(t, o(t), e);
      };
    },
    function(e, t, n) {
      var r = n(4),
        o = n(44),
        a = n(179),
        i = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        if (!r(e)) return a(e);
        var t = o(e),
          n = [];
        for (var l in e)
          ('constructor' != l || (!t && i.call(e, l))) && n.push(l);
        return n;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      };
    },
    function(e, t, n) {
      var r = n(18),
        o = n(49);
      e.exports = function(e, t) {
        return r(e, o(e), t);
      };
    },
    function(e, t, n) {
      var r = n(18),
        o = n(81);
      e.exports = function(e, t) {
        return r(e, o(e), t);
      };
    },
    function(e, t, n) {
      var r = n(68),
        o = n(81),
        a = n(31);
      e.exports = function(e) {
        return r(e, a, o);
      };
    },
    function(e, t) {
      var n = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        var t = e.length,
          r = new e.constructor(t);
        return (
          t &&
            'string' == typeof e[0] &&
            n.call(e, 'index') &&
            ((r.index = e.index), (r.input = e.input)),
          r
        );
      };
    },
    function(e, t, n) {
      var r = n(52),
        o = n(185),
        a = n(186),
        i = n(187),
        l = n(82),
        s = '[object Boolean]',
        c = '[object Date]',
        u = '[object Map]',
        f = '[object Number]',
        d = '[object RegExp]',
        p = '[object Set]',
        h = '[object String]',
        b = '[object Symbol]',
        g = '[object ArrayBuffer]',
        m = '[object DataView]',
        v = '[object Float32Array]',
        _ = '[object Float64Array]',
        y = '[object Int8Array]',
        x = '[object Int16Array]',
        w = '[object Int32Array]',
        k = '[object Uint8Array]',
        S = '[object Uint8ClampedArray]',
        E = '[object Uint16Array]',
        z = '[object Uint32Array]';
      e.exports = function(e, t, n) {
        var O = e.constructor;
        switch (t) {
          case g:
            return r(e);
          case s:
          case c:
            return new O(+e);
          case m:
            return o(e, n);
          case v:
          case _:
          case y:
          case x:
          case w:
          case k:
          case S:
          case E:
          case z:
            return l(e, n);
          case u:
            return new O();
          case f:
          case h:
            return new O(e);
          case d:
            return a(e);
          case p:
            return new O();
          case b:
            return i(e);
        }
      };
    },
    function(e, t, n) {
      var r = n(52);
      e.exports = function(e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      };
    },
    function(e, t) {
      var n = /\w*$/;
      e.exports = function(e) {
        var t = new e.constructor(e.source, n.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      };
    },
    function(e, t, n) {
      var r = n(15),
        o = r ? r.prototype : void 0,
        a = o ? o.valueOf : void 0;
      e.exports = function(e) {
        return a ? Object(a.call(e)) : {};
      };
    },
    function(e, t, n) {
      var r = n(4),
        o = Object.create,
        a = (function() {
          function e() {}
          return function(t) {
            if (!r(t)) return {};
            if (o) return o(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = void 0), n;
          };
        })();
      e.exports = a;
    },
    function(e, t, n) {
      var r = n(190),
        o = n(42),
        a = n(43),
        i = a && a.isMap,
        l = i ? o(i) : r;
      e.exports = l;
    },
    function(e, t, n) {
      var r = n(28),
        o = n(6),
        a = '[object Map]';
      e.exports = function(e) {
        return o(e) && r(e) == a;
      };
    },
    function(e, t, n) {
      var r = n(192),
        o = n(42),
        a = n(43),
        i = a && a.isSet,
        l = i ? o(i) : r;
      e.exports = l;
    },
    function(e, t, n) {
      var r = n(28),
        o = n(6),
        a = '[object Set]';
      e.exports = function(e) {
        return o(e) && r(e) == a;
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.autoprefix = void 0);
      var r,
        o = n(37),
        a = (r = o) && r.__esModule ? r : { default: r },
        i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      var l = {
          borderRadius: function(e) {
            return {
              msBorderRadius: e,
              MozBorderRadius: e,
              OBorderRadius: e,
              WebkitBorderRadius: e,
              borderRadius: e
            };
          },
          boxShadow: function(e) {
            return {
              msBoxShadow: e,
              MozBoxShadow: e,
              OBoxShadow: e,
              WebkitBoxShadow: e,
              boxShadow: e
            };
          },
          userSelect: function(e) {
            return {
              WebkitTouchCallout: e,
              KhtmlUserSelect: e,
              MozUserSelect: e,
              msUserSelect: e,
              WebkitUserSelect: e,
              userSelect: e
            };
          },
          flex: function(e) {
            return {
              WebkitBoxFlex: e,
              MozBoxFlex: e,
              WebkitFlex: e,
              msFlex: e,
              flex: e
            };
          },
          flexBasis: function(e) {
            return { WebkitFlexBasis: e, flexBasis: e };
          },
          justifyContent: function(e) {
            return { WebkitJustifyContent: e, justifyContent: e };
          },
          transition: function(e) {
            return {
              msTransition: e,
              MozTransition: e,
              OTransition: e,
              WebkitTransition: e,
              transition: e
            };
          },
          transform: function(e) {
            return {
              msTransform: e,
              MozTransform: e,
              OTransform: e,
              WebkitTransform: e,
              transform: e
            };
          },
          absolute: function(e) {
            var t = e && e.split(' ');
            return {
              position: 'absolute',
              top: t && t[0],
              right: t && t[1],
              bottom: t && t[2],
              left: t && t[3]
            };
          },
          extend: function(e, t) {
            var n = t[e];
            return n || { extend: e };
          }
        },
        s = (t.autoprefix = function(e) {
          var t = {};
          return (
            (0, a.default)(e, function(e, n) {
              var r = {};
              (0, a.default)(e, function(e, t) {
                var n = l[t];
                n ? (r = i({}, r, n(e))) : (r[t] = e);
              }),
                (t[n] = r);
            }),
            t
          );
        });
      t.default = s;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.hover = void 0);
      var r,
        o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        a = n(0),
        i = (r = a) && r.__esModule ? r : { default: r };
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function c(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var u = (t.hover = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'span';
        return (function(n) {
          function r() {
            var n, a, c;
            l(this, r);
            for (var u = arguments.length, f = Array(u), d = 0; d < u; d++)
              f[d] = arguments[d];
            return (
              (a = c = s(
                this,
                (n = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
                  n,
                  [this].concat(f)
                )
              )),
              (c.state = { hover: !1 }),
              (c.handleMouseOver = function() {
                return c.setState({ hover: !0 });
              }),
              (c.handleMouseOut = function() {
                return c.setState({ hover: !1 });
              }),
              (c.render = function() {
                return i.default.createElement(
                  t,
                  {
                    onMouseOver: c.handleMouseOver,
                    onMouseOut: c.handleMouseOut
                  },
                  i.default.createElement(e, o({}, c.props, c.state))
                );
              }),
              s(c, a)
            );
          }
          return c(r, n), r;
        })(i.default.Component);
      });
      t.default = u;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.active = void 0);
      var r,
        o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        a = n(0),
        i = (r = a) && r.__esModule ? r : { default: r };
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function c(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var u = (t.active = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'span';
        return (function(n) {
          function r() {
            var n, a, c;
            l(this, r);
            for (var u = arguments.length, f = Array(u), d = 0; d < u; d++)
              f[d] = arguments[d];
            return (
              (a = c = s(
                this,
                (n = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
                  n,
                  [this].concat(f)
                )
              )),
              (c.state = { active: !1 }),
              (c.handleMouseDown = function() {
                return c.setState({ active: !0 });
              }),
              (c.handleMouseUp = function() {
                return c.setState({ active: !1 });
              }),
              (c.render = function() {
                return i.default.createElement(
                  t,
                  {
                    onMouseDown: c.handleMouseDown,
                    onMouseUp: c.handleMouseUp
                  },
                  i.default.createElement(e, o({}, c.props, c.state))
                );
              }),
              s(c, a)
            );
          }
          return c(r, n), r;
        })(i.default.Component);
      });
      t.default = u;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = function(e, t) {
        var n = {},
          r = function(e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            n[e] = t;
          };
        return (
          0 === e && r('first-child'),
          e === t - 1 && r('last-child'),
          (0 === e || e % 2 == 0) && r('even'),
          1 === Math.abs(e % 2) && r('odd'),
          r('nth-child', e),
          n
        );
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.calculateChange = function(e, t, n, r, o) {
        var a = o.clientWidth,
          i = o.clientHeight,
          l = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
          s = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
          c = l - (o.getBoundingClientRect().left + window.pageXOffset),
          u = s - (o.getBoundingClientRect().top + window.pageYOffset);
        if ('vertical' === n) {
          var f = void 0;
          if (
            ((f = u < 0 ? 0 : u > i ? 1 : Math.round((100 * u) / i) / 100),
            t.a !== f)
          )
            return { h: t.h, s: t.s, l: t.l, a: f, source: 'rgb' };
        } else {
          var d = void 0;
          if (
            r !== (d = c < 0 ? 0 : c > a ? 1 : Math.round((100 * c) / a) / 100)
          )
            return { h: t.h, s: t.s, l: t.l, a: d, source: 'rgb' };
        }
        return null;
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = {},
        o = (t.render = function(e, t, n, r) {
          if ('undefined' == typeof document && !r) return null;
          var o = r ? new r() : document.createElement('canvas');
          (o.width = 2 * n), (o.height = 2 * n);
          var a = o.getContext('2d');
          return a
            ? ((a.fillStyle = e),
              a.fillRect(0, 0, o.width, o.height),
              (a.fillStyle = t),
              a.fillRect(0, 0, n, n),
              a.translate(n, n),
              a.fillRect(0, 0, n, n),
              o.toDataURL())
            : null;
        });
      t.get = function(e, t, n, a) {
        var i = e + '-' + t + '-' + n + (a ? '-server' : '');
        if (r[i]) return r[i];
        var l = o(e, t, n, a);
        return (r[i] = l), l;
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.EditableInput = void 0);
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n(0),
        a = l(o),
        i = l(n(9));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = 38,
        c = [s, 40],
        u = function(e) {
          return c.indexOf(e) > -1;
        },
        f = function(e) {
          return Number(String(e).replace(/%/g, ''));
        },
        d = (t.EditableInput = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            var n = (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' != typeof t && 'function' != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
              (n.handleBlur = function() {
                n.state.blurValue &&
                  n.setState({ value: n.state.blurValue, blurValue: null });
              }),
              (n.handleChange = function(e) {
                n.setUpdatedValue(e.target.value, e);
              }),
              (n.handleKeyDown = function(e) {
                var t = f(e.target.value);
                if (!isNaN(t) && u(e.keyCode)) {
                  var r = n.getArrowOffset(),
                    o = e.keyCode === s ? t + r : t - r;
                  n.setUpdatedValue(o, e);
                }
              }),
              (n.handleDrag = function(e) {
                if (n.props.dragLabel) {
                  var t = Math.round(n.props.value + e.movementX);
                  t >= 0 &&
                    t <= n.props.dragMax &&
                    n.props.onChange &&
                    n.props.onChange(n.getValueObjectWithLabel(t), e);
                }
              }),
              (n.handleMouseDown = function(e) {
                n.props.dragLabel &&
                  (e.preventDefault(),
                  n.handleDrag(e),
                  window.addEventListener('mousemove', n.handleDrag),
                  window.addEventListener('mouseup', n.handleMouseUp));
              }),
              (n.handleMouseUp = function() {
                n.unbindEventListeners();
              }),
              (n.unbindEventListeners = function() {
                window.removeEventListener('mousemove', n.handleDrag),
                  window.removeEventListener('mouseup', n.handleMouseUp);
              }),
              (n.state = {
                value: String(e.value).toUpperCase(),
                blurValue: String(e.value).toUpperCase()
              }),
              n
            );
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            r(t, [
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  var t = this.input;
                  e.value !== this.state.value &&
                    (t === document.activeElement
                      ? this.setState({
                          blurValue: String(e.value).toUpperCase()
                        })
                      : this.setState({
                          value: String(e.value).toUpperCase(),
                          blurValue:
                            !this.state.blurValue &&
                            String(e.value).toUpperCase()
                        }));
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.unbindEventListeners();
                }
              },
              {
                key: 'getValueObjectWithLabel',
                value: function(e) {
                  return (function(e, t, n) {
                    return (
                      t in e
                        ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                          })
                        : (e[t] = n),
                      e
                    );
                  })({}, this.props.label, e);
                }
              },
              {
                key: 'getArrowOffset',
                value: function() {
                  return this.props.arrowOffset || 1;
                }
              },
              {
                key: 'setUpdatedValue',
                value: function(e, t) {
                  var n =
                    null !== this.props.label
                      ? this.getValueObjectWithLabel(e)
                      : e;
                  this.props.onChange && this.props.onChange(n, t);
                  var r,
                    o = (function(e) {
                      return String(e).indexOf('%') > -1;
                    })(t.target.value);
                  this.setState({ value: o ? ((r = e), r + '%') : e });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = (0, i.default)(
                      {
                        default: { wrap: { position: 'relative' } },
                        'user-override': {
                          wrap:
                            this.props.style && this.props.style.wrap
                              ? this.props.style.wrap
                              : {},
                          input:
                            this.props.style && this.props.style.input
                              ? this.props.style.input
                              : {},
                          label:
                            this.props.style && this.props.style.label
                              ? this.props.style.label
                              : {}
                        },
                        'dragLabel-true': { label: { cursor: 'ew-resize' } }
                      },
                      { 'user-override': !0 },
                      this.props
                    );
                  return a.default.createElement(
                    'div',
                    { style: t.wrap },
                    a.default.createElement('input', {
                      style: t.input,
                      ref: function(t) {
                        return (e.input = t);
                      },
                      value: this.state.value,
                      onKeyDown: this.handleKeyDown,
                      onChange: this.handleChange,
                      onBlur: this.handleBlur,
                      placeholder: this.props.placeholder,
                      spellCheck: 'false'
                    }),
                    this.props.label && !this.props.hideLabel
                      ? a.default.createElement(
                          'span',
                          { style: t.label, onMouseDown: this.handleMouseDown },
                          this.props.label
                        )
                      : null
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent || o.Component));
      t.default = d;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Hue = void 0);
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n(0),
        a = s(o),
        i = s(n(9)),
        l = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n(201));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var u = (t.Hue = (function(e) {
        function t() {
          var e, n, r;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
          return (
            (n = r = c(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(a)
              )
            )),
            (r.handleChange = function(e) {
              var t = l.calculateChange(
                e,
                r.props.direction,
                r.props.hsl,
                r.container
              );
              t &&
                'function' == typeof r.props.onChange &&
                r.props.onChange(t, e);
            }),
            (r.handleMouseDown = function(e) {
              r.handleChange(e),
                window.addEventListener('mousemove', r.handleChange),
                window.addEventListener('mouseup', r.handleMouseUp);
            }),
            (r.handleMouseUp = function() {
              r.unbindEventListeners();
            }),
            c(r, n)
          );
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: 'componentWillUnmount',
              value: function() {
                this.unbindEventListeners();
              }
            },
            {
              key: 'unbindEventListeners',
              value: function() {
                window.removeEventListener('mousemove', this.handleChange),
                  window.removeEventListener('mouseup', this.handleMouseUp);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props.direction,
                  n = void 0 === t ? 'horizontal' : t,
                  r = (0, i.default)(
                    {
                      default: {
                        hue: {
                          absolute: '0px 0px 0px 0px',
                          borderRadius: this.props.radius,
                          boxShadow: this.props.shadow
                        },
                        container: {
                          padding: '0 2px',
                          position: 'relative',
                          height: '100%',
                          borderRadius: this.props.radius
                        },
                        pointer: {
                          position: 'absolute',
                          left: (100 * this.props.hsl.h) / 360 + '%'
                        },
                        slider: {
                          marginTop: '1px',
                          width: '4px',
                          borderRadius: '1px',
                          height: '8px',
                          boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
                          background: '#fff',
                          transform: 'translateX(-2px)'
                        }
                      },
                      vertical: {
                        pointer: {
                          left: '0px',
                          top: (-100 * this.props.hsl.h) / 360 + 100 + '%'
                        }
                      }
                    },
                    { vertical: 'vertical' === n }
                  );
                return a.default.createElement(
                  'div',
                  { style: r.hue },
                  a.default.createElement(
                    'div',
                    {
                      className: 'hue-' + n,
                      style: r.container,
                      ref: function(t) {
                        return (e.container = t);
                      },
                      onMouseDown: this.handleMouseDown,
                      onTouchMove: this.handleChange,
                      onTouchStart: this.handleChange
                    },
                    a.default.createElement(
                      'style',
                      null,
                      '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '
                    ),
                    a.default.createElement(
                      'div',
                      { style: r.pointer },
                      this.props.pointer
                        ? a.default.createElement(
                            this.props.pointer,
                            this.props
                          )
                        : a.default.createElement('div', { style: r.slider })
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(o.PureComponent || o.Component));
      t.default = u;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.calculateChange = function(e, t, n, r) {
        var o = r.clientWidth,
          a = r.clientHeight,
          i = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
          l = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
          s = i - (r.getBoundingClientRect().left + window.pageXOffset),
          c = l - (r.getBoundingClientRect().top + window.pageYOffset);
        if ('vertical' === t) {
          var u = void 0;
          if (c < 0) u = 359;
          else if (c > a) u = 0;
          else {
            u = (360 * ((-100 * c) / a + 100)) / 100;
          }
          if (n.h !== u) return { h: u, s: n.s, l: n.l, a: n.a, source: 'rgb' };
        } else {
          var f = void 0;
          if (s < 0) f = 0;
          else if (s > o) f = 359;
          else {
            f = (360 * ((100 * s) / o)) / 100;
          }
          if (n.h !== f) return { h: f, s: n.s, l: n.l, a: n.a, source: 'rgb' };
        }
        return null;
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Raised = void 0);
      var r = l(n(0)),
        o = l(n(1)),
        a = l(n(9)),
        i = l(n(203));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (t.Raised = function(e) {
        var t = e.zDepth,
          n = e.radius,
          o = e.background,
          l = e.children,
          s = e.styles,
          c = void 0 === s ? {} : s,
          u = (0, a.default)(
            (0, i.default)(
              {
                default: {
                  wrap: { position: 'relative', display: 'inline-block' },
                  content: { position: 'relative' },
                  bg: {
                    absolute: '0px 0px 0px 0px',
                    boxShadow: '0 ' + t + 'px ' + 4 * t + 'px rgba(0,0,0,.24)',
                    borderRadius: n,
                    background: o
                  }
                },
                'zDepth-0': { bg: { boxShadow: 'none' } },
                'zDepth-1': {
                  bg: {
                    boxShadow:
                      '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
                  }
                },
                'zDepth-2': {
                  bg: {
                    boxShadow:
                      '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
                  }
                },
                'zDepth-3': {
                  bg: {
                    boxShadow:
                      '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
                  }
                },
                'zDepth-4': {
                  bg: {
                    boxShadow:
                      '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
                  }
                },
                'zDepth-5': {
                  bg: {
                    boxShadow:
                      '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
                  }
                },
                square: { bg: { borderRadius: '0' } },
                circle: { bg: { borderRadius: '50%' } }
              },
              c
            ),
            { 'zDepth-1': 1 === t }
          );
        return r.default.createElement(
          'div',
          { style: u.wrap },
          r.default.createElement('div', { style: u.bg }),
          r.default.createElement('div', { style: u.content }, l)
        );
      });
      (s.propTypes = {
        background: o.default.string,
        zDepth: o.default.oneOf([0, 1, 2, 3, 4, 5]),
        radius: o.default.number,
        styles: o.default.object
      }),
        (s.defaultProps = {
          background: '#fff',
          zDepth: 1,
          radius: 2,
          styles: {}
        }),
        (t.default = s);
    },
    function(e, t, n) {
      var r = n(204),
        o = n(208)(function(e, t, n) {
          r(e, t, n);
        });
      e.exports = o;
    },
    function(e, t, n) {
      var r = n(23),
        o = n(84),
        a = n(57),
        i = n(205),
        l = n(4),
        s = n(31),
        c = n(85);
      e.exports = function e(t, n, u, f, d) {
        t !== n &&
          a(
            n,
            function(a, s) {
              if (l(a)) d || (d = new r()), i(t, n, s, u, e, f, d);
              else {
                var p = f ? f(c(t, s), a, s + '', t, n, d) : void 0;
                void 0 === p && (p = a), o(t, s, p);
              }
            },
            s
          );
      };
    },
    function(e, t, n) {
      var r = n(84),
        o = n(79),
        a = n(82),
        i = n(80),
        l = n(83),
        s = n(38),
        c = n(3),
        u = n(206),
        f = n(21),
        d = n(45),
        p = n(4),
        h = n(61),
        b = n(40),
        g = n(85),
        m = n(207);
      e.exports = function(e, t, n, v, _, y, x) {
        var w = g(e, n),
          k = g(t, n),
          S = x.get(k);
        if (S) r(e, n, S);
        else {
          var E = y ? y(w, k, n + '', e, t, x) : void 0,
            z = void 0 === E;
          if (z) {
            var O = c(k),
              C = !O && f(k),
              j = !O && !C && b(k);
            (E = k),
              O || C || j
                ? c(w)
                  ? (E = w)
                  : u(w)
                  ? (E = i(w))
                  : C
                  ? ((z = !1), (E = o(k, !0)))
                  : j
                  ? ((z = !1), (E = a(k, !0)))
                  : (E = [])
                : h(k) || s(k)
                ? ((E = w), s(w) ? (E = m(w)) : (p(w) && !d(w)) || (E = l(k)))
                : (z = !1);
          }
          z && (x.set(k, E), _(E, k, v, y, x), x.delete(k)), r(e, n, E);
        }
      };
    },
    function(e, t, n) {
      var r = n(12),
        o = n(6);
      e.exports = function(e) {
        return o(e) && r(e);
      };
    },
    function(e, t, n) {
      var r = n(18),
        o = n(31);
      e.exports = function(e) {
        return r(e, o(e));
      };
    },
    function(e, t, n) {
      var r = n(209),
        o = n(216);
      e.exports = function(e) {
        return r(function(t, n) {
          var r = -1,
            a = n.length,
            i = a > 1 ? n[a - 1] : void 0,
            l = a > 2 ? n[2] : void 0;
          for (
            i = e.length > 3 && 'function' == typeof i ? (a--, i) : void 0,
              l && o(n[0], n[1], l) && ((i = a < 3 ? void 0 : i), (a = 1)),
              t = Object(t);
            ++r < a;

          ) {
            var s = n[r];
            s && e(t, s, r, i);
          }
          return t;
        });
      };
    },
    function(e, t, n) {
      var r = n(22),
        o = n(210),
        a = n(212);
      e.exports = function(e, t) {
        return a(o(e, t, r), e + '');
      };
    },
    function(e, t, n) {
      var r = n(211),
        o = Math.max;
      e.exports = function(e, t, n) {
        return (
          (t = o(void 0 === t ? e.length - 1 : t, 0)),
          function() {
            for (
              var a = arguments, i = -1, l = o(a.length - t, 0), s = Array(l);
              ++i < l;

            )
              s[i] = a[t + i];
            i = -1;
            for (var c = Array(t + 1); ++i < t; ) c[i] = a[i];
            return (c[t] = n(s)), r(e, this, c);
          }
        );
      };
    },
    function(e, t) {
      e.exports = function(e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
      };
    },
    function(e, t, n) {
      var r = n(213),
        o = n(215)(r);
      e.exports = o;
    },
    function(e, t, n) {
      var r = n(214),
        o = n(78),
        a = n(22),
        i = o
          ? function(e, t) {
              return o(e, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: r(t),
                writable: !0
              });
            }
          : a;
      e.exports = i;
    },
    function(e, t) {
      e.exports = function(e) {
        return function() {
          return e;
        };
      };
    },
    function(e, t) {
      var n = 800,
        r = 16,
        o = Date.now;
      e.exports = function(e) {
        var t = 0,
          a = 0;
        return function() {
          var i = o(),
            l = r - (i - a);
          if (((a = i), l > 0)) {
            if (++t >= n) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      };
    },
    function(e, t, n) {
      var r = n(17),
        o = n(12),
        a = n(39),
        i = n(4);
      e.exports = function(e, t, n) {
        if (!i(n)) return !1;
        var l = typeof t;
        return (
          !!('number' == l
            ? o(n) && a(t, n.length)
            : 'string' == l && t in n) && r(n[t], e)
        );
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Saturation = void 0);
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n(0),
        a = c(o),
        i = c(n(9)),
        l = c(n(218)),
        s = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n(221));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = (t.Saturation = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n.handleChange = function(e) {
              'function' == typeof n.props.onChange &&
                n.throttle(
                  n.props.onChange,
                  s.calculateChange(e, n.props.hsl, n.container),
                  e
                );
            }),
            (n.handleMouseDown = function(e) {
              n.handleChange(e),
                window.addEventListener('mousemove', n.handleChange),
                window.addEventListener('mouseup', n.handleMouseUp);
            }),
            (n.handleMouseUp = function() {
              n.unbindEventListeners();
            }),
            (n.throttle = (0, l.default)(function(e, t, n) {
              e(t, n);
            }, 50)),
            n
          );
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: 'componentWillUnmount',
              value: function() {
                this.throttle.cancel(), this.unbindEventListeners();
              }
            },
            {
              key: 'unbindEventListeners',
              value: function() {
                window.removeEventListener('mousemove', this.handleChange),
                  window.removeEventListener('mouseup', this.handleMouseUp);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props.style || {},
                  n = t.color,
                  r = t.white,
                  o = t.black,
                  l = t.pointer,
                  s = t.circle,
                  c = (0, i.default)(
                    {
                      default: {
                        color: {
                          absolute: '0px 0px 0px 0px',
                          background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
                          borderRadius: this.props.radius
                        },
                        white: {
                          absolute: '0px 0px 0px 0px',
                          borderRadius: this.props.radius
                        },
                        black: {
                          absolute: '0px 0px 0px 0px',
                          boxShadow: this.props.shadow,
                          borderRadius: this.props.radius
                        },
                        pointer: {
                          position: 'absolute',
                          top: -100 * this.props.hsv.v + 100 + '%',
                          left: 100 * this.props.hsv.s + '%',
                          cursor: 'default'
                        },
                        circle: {
                          width: '4px',
                          height: '4px',
                          boxShadow:
                            '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
                          borderRadius: '50%',
                          cursor: 'hand',
                          transform: 'translate(-2px, -2px)'
                        }
                      },
                      custom: {
                        color: n,
                        white: r,
                        black: o,
                        pointer: l,
                        circle: s
                      }
                    },
                    { custom: !!this.props.style }
                  );
                return a.default.createElement(
                  'div',
                  {
                    style: c.color,
                    ref: function(t) {
                      return (e.container = t);
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange
                  },
                  a.default.createElement(
                    'style',
                    null,
                    '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '
                  ),
                  a.default.createElement(
                    'div',
                    { style: c.white, className: 'saturation-white' },
                    a.default.createElement('div', {
                      style: c.black,
                      className: 'saturation-black'
                    }),
                    a.default.createElement(
                      'div',
                      { style: c.pointer },
                      this.props.pointer
                        ? a.default.createElement(
                            this.props.pointer,
                            this.props
                          )
                        : a.default.createElement('div', { style: c.circle })
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(o.PureComponent || o.Component));
      t.default = u;
    },
    function(e, t, n) {
      var r = n(86),
        o = n(4),
        a = 'Expected a function';
      e.exports = function(e, t, n) {
        var i = !0,
          l = !0;
        if ('function' != typeof e) throw new TypeError(a);
        return (
          o(n) &&
            ((i = 'leading' in n ? !!n.leading : i),
            (l = 'trailing' in n ? !!n.trailing : l)),
          r(e, t, { leading: i, maxWait: t, trailing: l })
        );
      };
    },
    function(e, t, n) {
      var r = n(5);
      e.exports = function() {
        return r.Date.now();
      };
    },
    function(e, t, n) {
      var r = n(4),
        o = n(29),
        a = NaN,
        i = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function(e) {
        if ('number' == typeof e) return e;
        if (o(e)) return a;
        if (r(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = r(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, '');
        var n = s.test(e);
        return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : l.test(e) ? a : +e;
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.calculateChange = function(e, t, n) {
        var r = n.getBoundingClientRect(),
          o = r.width,
          a = r.height,
          i = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
          l = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
          s = i - (n.getBoundingClientRect().left + window.pageXOffset),
          c = l - (n.getBoundingClientRect().top + window.pageYOffset);
        s < 0 ? (s = 0) : s > o ? (s = o) : c < 0 ? (c = 0) : c > a && (c = a);
        var u = (100 * s) / o,
          f = (-100 * c) / a + 100;
        return { h: t.h, s: u, v: f, a: t.a, source: 'rgb' };
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ColorWrap = void 0);
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(0),
        i = c(a),
        l = c(n(86)),
        s = c(n(223));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = (t.ColorWrap = function(e) {
        var t = (function(t) {
          function n(e) {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, n);
            var t = (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' != typeof t && 'function' != typeof t)
                ? e
                : t;
            })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (
              (t.handleChange = function(e, n) {
                if (s.default.simpleCheckForValidColor(e)) {
                  var r = s.default.toState(e, e.h || t.state.oldHue);
                  t.setState(r),
                    t.props.onChangeComplete &&
                      t.debounce(t.props.onChangeComplete, r, n),
                    t.props.onChange && t.props.onChange(r, n);
                }
              }),
              (t.handleSwatchHover = function(e, n) {
                if (s.default.simpleCheckForValidColor(e)) {
                  var r = s.default.toState(e, e.h || t.state.oldHue);
                  t.props.onSwatchHover && t.props.onSwatchHover(r, n);
                }
              }),
              (t.state = r({}, s.default.toState(e.color, 0))),
              (t.debounce = (0, l.default)(function(e, t, n) {
                e(t, n);
              }, 100)),
              t
            );
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(n, t),
            o(n, [
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  this.setState(
                    r({}, s.default.toState(e.color, this.state.oldHue))
                  );
                }
              },
              {
                key: 'render',
                value: function() {
                  var t = {};
                  return (
                    this.props.onSwatchHover &&
                      (t.onSwatchHover = this.handleSwatchHover),
                    i.default.createElement(
                      e,
                      r(
                        {},
                        this.props,
                        this.state,
                        { onChange: this.handleChange },
                        t
                      )
                    )
                  );
                }
              }
            ]),
            n
          );
        })(a.PureComponent || a.Component);
        return (
          (t.propTypes = r({}, e.propTypes)),
          (t.defaultProps = r({}, e.defaultProps, {
            color: { h: 250, s: 0.5, l: 0.2, a: 1 }
          })),
          t
        );
      });
      t.default = u;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.red = t.getContrastingColor = t.isValidHex = t.toState = t.simpleCheckForValidColor = void 0);
      var r = a(n(224)),
        o = a(n(226));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.simpleCheckForValidColor = function(e) {
        var t = 0,
          n = 0;
        return (
          (0, r.default)(['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'], function(r) {
            if (
              e[r] &&
              ((t += 1), isNaN(e[r]) || (n += 1), 's' === r || 'l' === r)
            ) {
              /^\d+%$/.test(e[r]) && (n += 1);
            }
          }),
          t === n && e
        );
      };
      var i = (t.toState = function(e, t) {
        var n = e.hex ? (0, o.default)(e.hex) : (0, o.default)(e),
          r = n.toHsl(),
          a = n.toHsv(),
          i = n.toRgb(),
          l = n.toHex();
        return (
          0 === r.s && ((r.h = t || 0), (a.h = t || 0)),
          {
            hsl: r,
            hex: '000000' === l && 0 === i.a ? 'transparent' : '#' + l,
            rgb: i,
            hsv: a,
            oldHue: e.h || t || r.h,
            source: e.source
          }
        );
      });
      (t.isValidHex = function(e) {
        var t = '#' === String(e).charAt(0) ? 1 : 0;
        return (
          e.length !== 4 + t && e.length < 7 + t && (0, o.default)(e).isValid()
        );
      }),
        (t.getContrastingColor = function(e) {
          if (!e) return '#fff';
          var t = i(e);
          return 'transparent' === t.hex
            ? 'rgba(0,0,0,0.4)'
            : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128
            ? '#000'
            : '#fff';
        }),
        (t.red = {
          hsl: { a: 1, h: 0, l: 0.5, s: 1 },
          hex: '#ff0000',
          rgb: { r: 255, g: 0, b: 0, a: 1 },
          hsv: { h: 0, s: 1, v: 1, a: 1 }
        });
      t.default = t;
    },
    function(e, t, n) {
      e.exports = n(225);
    },
    function(e, t, n) {
      var r = n(76),
        o = n(75),
        a = n(60),
        i = n(3);
      e.exports = function(e, t) {
        return (i(e) ? r : o)(e, a(t));
      };
    },
    function(e, t, n) {
      var r;
      !(function(o) {
        var a = /^\s+/,
          i = /\s+$/,
          l = 0,
          s = o.round,
          c = o.min,
          u = o.max,
          f = o.random;
        function d(e, t) {
          if (((t = t || {}), (e = e || '') instanceof d)) return e;
          if (!(this instanceof d)) return new d(e, t);
          var n = (function(e) {
            var t = { r: 0, g: 0, b: 0 },
              n = 1,
              r = null,
              l = null,
              s = null,
              f = !1,
              d = !1;
            'string' == typeof e &&
              (e = (function(e) {
                e = e
                  .replace(a, '')
                  .replace(i, '')
                  .toLowerCase();
                var t,
                  n = !1;
                if (F[e]) (e = F[e]), (n = !0);
                else if ('transparent' == e)
                  return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
                if ((t = W.rgb.exec(e))) return { r: t[1], g: t[2], b: t[3] };
                if ((t = W.rgba.exec(e)))
                  return { r: t[1], g: t[2], b: t[3], a: t[4] };
                if ((t = W.hsl.exec(e))) return { h: t[1], s: t[2], l: t[3] };
                if ((t = W.hsla.exec(e)))
                  return { h: t[1], s: t[2], l: t[3], a: t[4] };
                if ((t = W.hsv.exec(e))) return { h: t[1], s: t[2], v: t[3] };
                if ((t = W.hsva.exec(e)))
                  return { h: t[1], s: t[2], v: t[3], a: t[4] };
                if ((t = W.hex8.exec(e)))
                  return {
                    r: M(t[1]),
                    g: M(t[2]),
                    b: M(t[3]),
                    a: L(t[4]),
                    format: n ? 'name' : 'hex8'
                  };
                if ((t = W.hex6.exec(e)))
                  return {
                    r: M(t[1]),
                    g: M(t[2]),
                    b: M(t[3]),
                    format: n ? 'name' : 'hex'
                  };
                if ((t = W.hex4.exec(e)))
                  return {
                    r: M(t[1] + '' + t[1]),
                    g: M(t[2] + '' + t[2]),
                    b: M(t[3] + '' + t[3]),
                    a: L(t[4] + '' + t[4]),
                    format: n ? 'name' : 'hex8'
                  };
                if ((t = W.hex3.exec(e)))
                  return {
                    r: M(t[1] + '' + t[1]),
                    g: M(t[2] + '' + t[2]),
                    b: M(t[3] + '' + t[3]),
                    format: n ? 'name' : 'hex'
                  };
                return !1;
              })(e));
            'object' == typeof e &&
              (Z(e.r) && Z(e.g) && Z(e.b)
                ? ((p = e.r),
                  (h = e.g),
                  (b = e.b),
                  (t = {
                    r: 255 * P(p, 255),
                    g: 255 * P(h, 255),
                    b: 255 * P(b, 255)
                  }),
                  (f = !0),
                  (d = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb'))
                : Z(e.h) && Z(e.s) && Z(e.v)
                ? ((r = I(e.s)),
                  (l = I(e.v)),
                  (t = (function(e, t, n) {
                    (e = 6 * P(e, 360)), (t = P(t, 100)), (n = P(n, 100));
                    var r = o.floor(e),
                      a = e - r,
                      i = n * (1 - t),
                      l = n * (1 - a * t),
                      s = n * (1 - (1 - a) * t),
                      c = r % 6;
                    return {
                      r: 255 * [n, l, i, i, s, n][c],
                      g: 255 * [s, n, n, l, i, i][c],
                      b: 255 * [i, i, s, n, n, l][c]
                    };
                  })(e.h, r, l)),
                  (f = !0),
                  (d = 'hsv'))
                : Z(e.h) &&
                  Z(e.s) &&
                  Z(e.l) &&
                  ((r = I(e.s)),
                  (s = I(e.l)),
                  (t = (function(e, t, n) {
                    var r, o, a;
                    function i(e, t, n) {
                      return (
                        n < 0 && (n += 1),
                        n > 1 && (n -= 1),
                        n < 1 / 6
                          ? e + 6 * (t - e) * n
                          : n < 0.5
                          ? t
                          : n < 2 / 3
                          ? e + (t - e) * (2 / 3 - n) * 6
                          : e
                      );
                    }
                    if (
                      ((e = P(e, 360)),
                      (t = P(t, 100)),
                      (n = P(n, 100)),
                      0 === t)
                    )
                      r = o = a = n;
                    else {
                      var l = n < 0.5 ? n * (1 + t) : n + t - n * t,
                        s = 2 * n - l;
                      (r = i(s, l, e + 1 / 3)),
                        (o = i(s, l, e)),
                        (a = i(s, l, e - 1 / 3));
                    }
                    return { r: 255 * r, g: 255 * o, b: 255 * a };
                  })(e.h, r, s)),
                  (f = !0),
                  (d = 'hsl')),
              e.hasOwnProperty('a') && (n = e.a));
            var p, h, b;
            return (
              (n = A(n)),
              {
                ok: f,
                format: e.format || d,
                r: c(255, u(t.r, 0)),
                g: c(255, u(t.g, 0)),
                b: c(255, u(t.b, 0)),
                a: n
              }
            );
          })(e);
          (this._originalInput = e),
            (this._r = n.r),
            (this._g = n.g),
            (this._b = n.b),
            (this._a = n.a),
            (this._roundA = s(100 * this._a) / 100),
            (this._format = t.format || n.format),
            (this._gradientType = t.gradientType),
            this._r < 1 && (this._r = s(this._r)),
            this._g < 1 && (this._g = s(this._g)),
            this._b < 1 && (this._b = s(this._b)),
            (this._ok = n.ok),
            (this._tc_id = l++);
        }
        function p(e, t, n) {
          (e = P(e, 255)), (t = P(t, 255)), (n = P(n, 255));
          var r,
            o,
            a = u(e, t, n),
            i = c(e, t, n),
            l = (a + i) / 2;
          if (a == i) r = o = 0;
          else {
            var s = a - i;
            switch (((o = l > 0.5 ? s / (2 - a - i) : s / (a + i)), a)) {
              case e:
                r = (t - n) / s + (t < n ? 6 : 0);
                break;
              case t:
                r = (n - e) / s + 2;
                break;
              case n:
                r = (e - t) / s + 4;
            }
            r /= 6;
          }
          return { h: r, s: o, l: l };
        }
        function h(e, t, n) {
          (e = P(e, 255)), (t = P(t, 255)), (n = P(n, 255));
          var r,
            o,
            a = u(e, t, n),
            i = c(e, t, n),
            l = a,
            s = a - i;
          if (((o = 0 === a ? 0 : s / a), a == i)) r = 0;
          else {
            switch (a) {
              case e:
                r = (t - n) / s + (t < n ? 6 : 0);
                break;
              case t:
                r = (n - e) / s + 2;
                break;
              case n:
                r = (e - t) / s + 4;
            }
            r /= 6;
          }
          return { h: r, s: o, v: l };
        }
        function b(e, t, n, r) {
          var o = [
            B(s(e).toString(16)),
            B(s(t).toString(16)),
            B(s(n).toString(16))
          ];
          return r &&
            o[0].charAt(0) == o[0].charAt(1) &&
            o[1].charAt(0) == o[1].charAt(1) &&
            o[2].charAt(0) == o[2].charAt(1)
            ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
            : o.join('');
        }
        function g(e, t, n, r) {
          return [
            B(R(r)),
            B(s(e).toString(16)),
            B(s(t).toString(16)),
            B(s(n).toString(16))
          ].join('');
        }
        function m(e, t) {
          t = 0 === t ? 0 : t || 10;
          var n = d(e).toHsl();
          return (n.s -= t / 100), (n.s = N(n.s)), d(n);
        }
        function v(e, t) {
          t = 0 === t ? 0 : t || 10;
          var n = d(e).toHsl();
          return (n.s += t / 100), (n.s = N(n.s)), d(n);
        }
        function _(e) {
          return d(e).desaturate(100);
        }
        function y(e, t) {
          t = 0 === t ? 0 : t || 10;
          var n = d(e).toHsl();
          return (n.l += t / 100), (n.l = N(n.l)), d(n);
        }
        function x(e, t) {
          t = 0 === t ? 0 : t || 10;
          var n = d(e).toRgb();
          return (
            (n.r = u(0, c(255, n.r - s((-t / 100) * 255)))),
            (n.g = u(0, c(255, n.g - s((-t / 100) * 255)))),
            (n.b = u(0, c(255, n.b - s((-t / 100) * 255)))),
            d(n)
          );
        }
        function w(e, t) {
          t = 0 === t ? 0 : t || 10;
          var n = d(e).toHsl();
          return (n.l -= t / 100), (n.l = N(n.l)), d(n);
        }
        function k(e, t) {
          var n = d(e).toHsl(),
            r = (n.h + t) % 360;
          return (n.h = r < 0 ? 360 + r : r), d(n);
        }
        function S(e) {
          var t = d(e).toHsl();
          return (t.h = (t.h + 180) % 360), d(t);
        }
        function E(e) {
          var t = d(e).toHsl(),
            n = t.h;
          return [
            d(e),
            d({ h: (n + 120) % 360, s: t.s, l: t.l }),
            d({ h: (n + 240) % 360, s: t.s, l: t.l })
          ];
        }
        function z(e) {
          var t = d(e).toHsl(),
            n = t.h;
          return [
            d(e),
            d({ h: (n + 90) % 360, s: t.s, l: t.l }),
            d({ h: (n + 180) % 360, s: t.s, l: t.l }),
            d({ h: (n + 270) % 360, s: t.s, l: t.l })
          ];
        }
        function O(e) {
          var t = d(e).toHsl(),
            n = t.h;
          return [
            d(e),
            d({ h: (n + 72) % 360, s: t.s, l: t.l }),
            d({ h: (n + 216) % 360, s: t.s, l: t.l })
          ];
        }
        function C(e, t, n) {
          (t = t || 6), (n = n || 30);
          var r = d(e).toHsl(),
            o = 360 / n,
            a = [d(e)];
          for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
            (r.h = (r.h + o) % 360), a.push(d(r));
          return a;
        }
        function j(e, t) {
          t = t || 6;
          for (
            var n = d(e).toHsv(), r = n.h, o = n.s, a = n.v, i = [], l = 1 / t;
            t--;

          )
            i.push(d({ h: r, s: o, v: a })), (a = (a + l) % 1);
          return i;
        }
        (d.prototype = {
          isDark: function() {
            return this.getBrightness() < 128;
          },
          isLight: function() {
            return !this.isDark();
          },
          isValid: function() {
            return this._ok;
          },
          getOriginalInput: function() {
            return this._originalInput;
          },
          getFormat: function() {
            return this._format;
          },
          getAlpha: function() {
            return this._a;
          },
          getBrightness: function() {
            var e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
          },
          getLuminance: function() {
            var e,
              t,
              n,
              r = this.toRgb();
            return (
              (e = r.r / 255),
              (t = r.g / 255),
              (n = r.b / 255),
              0.2126 *
                (e <= 0.03928 ? e / 12.92 : o.pow((e + 0.055) / 1.055, 2.4)) +
                0.7152 *
                  (t <= 0.03928 ? t / 12.92 : o.pow((t + 0.055) / 1.055, 2.4)) +
                0.0722 *
                  (n <= 0.03928 ? n / 12.92 : o.pow((n + 0.055) / 1.055, 2.4))
            );
          },
          setAlpha: function(e) {
            return (
              (this._a = A(e)), (this._roundA = s(100 * this._a) / 100), this
            );
          },
          toHsv: function() {
            var e = h(this._r, this._g, this._b);
            return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
          },
          toHsvString: function() {
            var e = h(this._r, this._g, this._b),
              t = s(360 * e.h),
              n = s(100 * e.s),
              r = s(100 * e.v);
            return 1 == this._a
              ? 'hsv(' + t + ', ' + n + '%, ' + r + '%)'
              : 'hsva(' + t + ', ' + n + '%, ' + r + '%, ' + this._roundA + ')';
          },
          toHsl: function() {
            var e = p(this._r, this._g, this._b);
            return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
          },
          toHslString: function() {
            var e = p(this._r, this._g, this._b),
              t = s(360 * e.h),
              n = s(100 * e.s),
              r = s(100 * e.l);
            return 1 == this._a
              ? 'hsl(' + t + ', ' + n + '%, ' + r + '%)'
              : 'hsla(' + t + ', ' + n + '%, ' + r + '%, ' + this._roundA + ')';
          },
          toHex: function(e) {
            return b(this._r, this._g, this._b, e);
          },
          toHexString: function(e) {
            return '#' + this.toHex(e);
          },
          toHex8: function(e) {
            return (function(e, t, n, r, o) {
              var a = [
                B(s(e).toString(16)),
                B(s(t).toString(16)),
                B(s(n).toString(16)),
                B(R(r))
              ];
              if (
                o &&
                a[0].charAt(0) == a[0].charAt(1) &&
                a[1].charAt(0) == a[1].charAt(1) &&
                a[2].charAt(0) == a[2].charAt(1) &&
                a[3].charAt(0) == a[3].charAt(1)
              )
                return (
                  a[0].charAt(0) +
                  a[1].charAt(0) +
                  a[2].charAt(0) +
                  a[3].charAt(0)
                );
              return a.join('');
            })(this._r, this._g, this._b, this._a, e);
          },
          toHex8String: function(e) {
            return '#' + this.toHex8(e);
          },
          toRgb: function() {
            return { r: s(this._r), g: s(this._g), b: s(this._b), a: this._a };
          },
          toRgbString: function() {
            return 1 == this._a
              ? 'rgb(' +
                  s(this._r) +
                  ', ' +
                  s(this._g) +
                  ', ' +
                  s(this._b) +
                  ')'
              : 'rgba(' +
                  s(this._r) +
                  ', ' +
                  s(this._g) +
                  ', ' +
                  s(this._b) +
                  ', ' +
                  this._roundA +
                  ')';
          },
          toPercentageRgb: function() {
            return {
              r: s(100 * P(this._r, 255)) + '%',
              g: s(100 * P(this._g, 255)) + '%',
              b: s(100 * P(this._b, 255)) + '%',
              a: this._a
            };
          },
          toPercentageRgbString: function() {
            return 1 == this._a
              ? 'rgb(' +
                  s(100 * P(this._r, 255)) +
                  '%, ' +
                  s(100 * P(this._g, 255)) +
                  '%, ' +
                  s(100 * P(this._b, 255)) +
                  '%)'
              : 'rgba(' +
                  s(100 * P(this._r, 255)) +
                  '%, ' +
                  s(100 * P(this._g, 255)) +
                  '%, ' +
                  s(100 * P(this._b, 255)) +
                  '%, ' +
                  this._roundA +
                  ')';
          },
          toName: function() {
            return 0 === this._a
              ? 'transparent'
              : !(this._a < 1) && (T[b(this._r, this._g, this._b, !0)] || !1);
          },
          toFilter: function(e) {
            var t = '#' + g(this._r, this._g, this._b, this._a),
              n = t,
              r = this._gradientType ? 'GradientType = 1, ' : '';
            if (e) {
              var o = d(e);
              n = '#' + g(o._r, o._g, o._b, o._a);
            }
            return (
              'progid:DXImageTransform.Microsoft.gradient(' +
              r +
              'startColorstr=' +
              t +
              ',endColorstr=' +
              n +
              ')'
            );
          },
          toString: function(e) {
            var t = !!e;
            e = e || this._format;
            var n = !1,
              r = this._a < 1 && this._a >= 0;
            return t ||
              !r ||
              ('hex' !== e &&
                'hex6' !== e &&
                'hex3' !== e &&
                'hex4' !== e &&
                'hex8' !== e &&
                'name' !== e)
              ? ('rgb' === e && (n = this.toRgbString()),
                'prgb' === e && (n = this.toPercentageRgbString()),
                ('hex' !== e && 'hex6' !== e) || (n = this.toHexString()),
                'hex3' === e && (n = this.toHexString(!0)),
                'hex4' === e && (n = this.toHex8String(!0)),
                'hex8' === e && (n = this.toHex8String()),
                'name' === e && (n = this.toName()),
                'hsl' === e && (n = this.toHslString()),
                'hsv' === e && (n = this.toHsvString()),
                n || this.toHexString())
              : 'name' === e && 0 === this._a
              ? this.toName()
              : this.toRgbString();
          },
          clone: function() {
            return d(this.toString());
          },
          _applyModification: function(e, t) {
            var n = e.apply(null, [this].concat([].slice.call(t)));
            return (
              (this._r = n._r),
              (this._g = n._g),
              (this._b = n._b),
              this.setAlpha(n._a),
              this
            );
          },
          lighten: function() {
            return this._applyModification(y, arguments);
          },
          brighten: function() {
            return this._applyModification(x, arguments);
          },
          darken: function() {
            return this._applyModification(w, arguments);
          },
          desaturate: function() {
            return this._applyModification(m, arguments);
          },
          saturate: function() {
            return this._applyModification(v, arguments);
          },
          greyscale: function() {
            return this._applyModification(_, arguments);
          },
          spin: function() {
            return this._applyModification(k, arguments);
          },
          _applyCombination: function(e, t) {
            return e.apply(null, [this].concat([].slice.call(t)));
          },
          analogous: function() {
            return this._applyCombination(C, arguments);
          },
          complement: function() {
            return this._applyCombination(S, arguments);
          },
          monochromatic: function() {
            return this._applyCombination(j, arguments);
          },
          splitcomplement: function() {
            return this._applyCombination(O, arguments);
          },
          triad: function() {
            return this._applyCombination(E, arguments);
          },
          tetrad: function() {
            return this._applyCombination(z, arguments);
          }
        }),
          (d.fromRatio = function(e, t) {
            if ('object' == typeof e) {
              var n = {};
              for (var r in e)
                e.hasOwnProperty(r) && (n[r] = 'a' === r ? e[r] : I(e[r]));
              e = n;
            }
            return d(e, t);
          }),
          (d.equals = function(e, t) {
            return !(!e || !t) && d(e).toRgbString() == d(t).toRgbString();
          }),
          (d.random = function() {
            return d.fromRatio({ r: f(), g: f(), b: f() });
          }),
          (d.mix = function(e, t, n) {
            n = 0 === n ? 0 : n || 50;
            var r = d(e).toRgb(),
              o = d(t).toRgb(),
              a = n / 100;
            return d({
              r: (o.r - r.r) * a + r.r,
              g: (o.g - r.g) * a + r.g,
              b: (o.b - r.b) * a + r.b,
              a: (o.a - r.a) * a + r.a
            });
          }),
          (d.readability = function(e, t) {
            var n = d(e),
              r = d(t);
            return (
              (o.max(n.getLuminance(), r.getLuminance()) + 0.05) /
              (o.min(n.getLuminance(), r.getLuminance()) + 0.05)
            );
          }),
          (d.isReadable = function(e, t, n) {
            var r,
              o,
              a = d.readability(e, t);
            switch (
              ((o = !1),
              (r = (function(e) {
                var t, n;
                (t = (
                  (e = e || { level: 'AA', size: 'small' }).level || 'AA'
                ).toUpperCase()),
                  (n = (e.size || 'small').toLowerCase()),
                  'AA' !== t && 'AAA' !== t && (t = 'AA');
                'small' !== n && 'large' !== n && (n = 'small');
                return { level: t, size: n };
              })(n)).level + r.size)
            ) {
              case 'AAsmall':
              case 'AAAlarge':
                o = a >= 4.5;
                break;
              case 'AAlarge':
                o = a >= 3;
                break;
              case 'AAAsmall':
                o = a >= 7;
            }
            return o;
          }),
          (d.mostReadable = function(e, t, n) {
            var r,
              o,
              a,
              i,
              l = null,
              s = 0;
            (o = (n = n || {}).includeFallbackColors),
              (a = n.level),
              (i = n.size);
            for (var c = 0; c < t.length; c++)
              (r = d.readability(e, t[c])) > s && ((s = r), (l = d(t[c])));
            return d.isReadable(e, l, { level: a, size: i }) || !o
              ? l
              : ((n.includeFallbackColors = !1),
                d.mostReadable(e, ['#fff', '#000'], n));
          });
        var F = (d.names = {
            aliceblue: 'f0f8ff',
            antiquewhite: 'faebd7',
            aqua: '0ff',
            aquamarine: '7fffd4',
            azure: 'f0ffff',
            beige: 'f5f5dc',
            bisque: 'ffe4c4',
            black: '000',
            blanchedalmond: 'ffebcd',
            blue: '00f',
            blueviolet: '8a2be2',
            brown: 'a52a2a',
            burlywood: 'deb887',
            burntsienna: 'ea7e5d',
            cadetblue: '5f9ea0',
            chartreuse: '7fff00',
            chocolate: 'd2691e',
            coral: 'ff7f50',
            cornflowerblue: '6495ed',
            cornsilk: 'fff8dc',
            crimson: 'dc143c',
            cyan: '0ff',
            darkblue: '00008b',
            darkcyan: '008b8b',
            darkgoldenrod: 'b8860b',
            darkgray: 'a9a9a9',
            darkgreen: '006400',
            darkgrey: 'a9a9a9',
            darkkhaki: 'bdb76b',
            darkmagenta: '8b008b',
            darkolivegreen: '556b2f',
            darkorange: 'ff8c00',
            darkorchid: '9932cc',
            darkred: '8b0000',
            darksalmon: 'e9967a',
            darkseagreen: '8fbc8f',
            darkslateblue: '483d8b',
            darkslategray: '2f4f4f',
            darkslategrey: '2f4f4f',
            darkturquoise: '00ced1',
            darkviolet: '9400d3',
            deeppink: 'ff1493',
            deepskyblue: '00bfff',
            dimgray: '696969',
            dimgrey: '696969',
            dodgerblue: '1e90ff',
            firebrick: 'b22222',
            floralwhite: 'fffaf0',
            forestgreen: '228b22',
            fuchsia: 'f0f',
            gainsboro: 'dcdcdc',
            ghostwhite: 'f8f8ff',
            gold: 'ffd700',
            goldenrod: 'daa520',
            gray: '808080',
            green: '008000',
            greenyellow: 'adff2f',
            grey: '808080',
            honeydew: 'f0fff0',
            hotpink: 'ff69b4',
            indianred: 'cd5c5c',
            indigo: '4b0082',
            ivory: 'fffff0',
            khaki: 'f0e68c',
            lavender: 'e6e6fa',
            lavenderblush: 'fff0f5',
            lawngreen: '7cfc00',
            lemonchiffon: 'fffacd',
            lightblue: 'add8e6',
            lightcoral: 'f08080',
            lightcyan: 'e0ffff',
            lightgoldenrodyellow: 'fafad2',
            lightgray: 'd3d3d3',
            lightgreen: '90ee90',
            lightgrey: 'd3d3d3',
            lightpink: 'ffb6c1',
            lightsalmon: 'ffa07a',
            lightseagreen: '20b2aa',
            lightskyblue: '87cefa',
            lightslategray: '789',
            lightslategrey: '789',
            lightsteelblue: 'b0c4de',
            lightyellow: 'ffffe0',
            lime: '0f0',
            limegreen: '32cd32',
            linen: 'faf0e6',
            magenta: 'f0f',
            maroon: '800000',
            mediumaquamarine: '66cdaa',
            mediumblue: '0000cd',
            mediumorchid: 'ba55d3',
            mediumpurple: '9370db',
            mediumseagreen: '3cb371',
            mediumslateblue: '7b68ee',
            mediumspringgreen: '00fa9a',
            mediumturquoise: '48d1cc',
            mediumvioletred: 'c71585',
            midnightblue: '191970',
            mintcream: 'f5fffa',
            mistyrose: 'ffe4e1',
            moccasin: 'ffe4b5',
            navajowhite: 'ffdead',
            navy: '000080',
            oldlace: 'fdf5e6',
            olive: '808000',
            olivedrab: '6b8e23',
            orange: 'ffa500',
            orangered: 'ff4500',
            orchid: 'da70d6',
            palegoldenrod: 'eee8aa',
            palegreen: '98fb98',
            paleturquoise: 'afeeee',
            palevioletred: 'db7093',
            papayawhip: 'ffefd5',
            peachpuff: 'ffdab9',
            peru: 'cd853f',
            pink: 'ffc0cb',
            plum: 'dda0dd',
            powderblue: 'b0e0e6',
            purple: '800080',
            rebeccapurple: '663399',
            red: 'f00',
            rosybrown: 'bc8f8f',
            royalblue: '4169e1',
            saddlebrown: '8b4513',
            salmon: 'fa8072',
            sandybrown: 'f4a460',
            seagreen: '2e8b57',
            seashell: 'fff5ee',
            sienna: 'a0522d',
            silver: 'c0c0c0',
            skyblue: '87ceeb',
            slateblue: '6a5acd',
            slategray: '708090',
            slategrey: '708090',
            snow: 'fffafa',
            springgreen: '00ff7f',
            steelblue: '4682b4',
            tan: 'd2b48c',
            teal: '008080',
            thistle: 'd8bfd8',
            tomato: 'ff6347',
            turquoise: '40e0d0',
            violet: 'ee82ee',
            wheat: 'f5deb3',
            white: 'fff',
            whitesmoke: 'f5f5f5',
            yellow: 'ff0',
            yellowgreen: '9acd32'
          }),
          T = (d.hexNames = (function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
            return t;
          })(F));
        function A(e) {
          return (
            (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
          );
        }
        function P(e, t) {
          (function(e) {
            return (
              'string' == typeof e &&
              -1 != e.indexOf('.') &&
              1 === parseFloat(e)
            );
          })(e) && (e = '100%');
          var n = (function(e) {
            return 'string' == typeof e && -1 != e.indexOf('%');
          })(e);
          return (
            (e = c(t, u(0, parseFloat(e)))),
            n && (e = parseInt(e * t, 10) / 100),
            o.abs(e - t) < 1e-6 ? 1 : (e % t) / parseFloat(t)
          );
        }
        function N(e) {
          return c(1, u(0, e));
        }
        function M(e) {
          return parseInt(e, 16);
        }
        function B(e) {
          return 1 == e.length ? '0' + e : '' + e;
        }
        function I(e) {
          return e <= 1 && (e = 100 * e + '%'), e;
        }
        function R(e) {
          return o.round(255 * parseFloat(e)).toString(16);
        }
        function L(e) {
          return M(e) / 255;
        }
        var D,
          H,
          U,
          W =
            ((H =
              '[\\s|\\(]+(' +
              (D = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)') +
              ')[,|\\s]+(' +
              D +
              ')[,|\\s]+(' +
              D +
              ')\\s*\\)?'),
            (U =
              '[\\s|\\(]+(' +
              D +
              ')[,|\\s]+(' +
              D +
              ')[,|\\s]+(' +
              D +
              ')[,|\\s]+(' +
              D +
              ')\\s*\\)?'),
            {
              CSS_UNIT: new RegExp(D),
              rgb: new RegExp('rgb' + H),
              rgba: new RegExp('rgba' + U),
              hsl: new RegExp('hsl' + H),
              hsla: new RegExp('hsla' + U),
              hsv: new RegExp('hsv' + H),
              hsva: new RegExp('hsva' + U),
              hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
              hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            });
        function Z(e) {
          return !!W.CSS_UNIT.exec(e);
        }
        e.exports
          ? (e.exports = d)
          : void 0 ===
              (r = function() {
                return d;
              }.call(t, n, t, e)) || (e.exports = r);
      })(Math);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Swatch = void 0);
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = s(n(0)),
        a = s(n(9)),
        i = n(228),
        l = s(n(53));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (t.Swatch = function(e) {
        var t = e.color,
          n = e.style,
          i = e.onClick,
          s = void 0 === i ? function() {} : i,
          c = e.onHover,
          u = e.title,
          f = void 0 === u ? t : u,
          d = e.children,
          p = e.focus,
          h = e.focusStyle,
          b = void 0 === h ? {} : h,
          g = 'transparent' === t,
          m = (0, a.default)({
            default: {
              swatch: r(
                {
                  background: t,
                  height: '100%',
                  width: '100%',
                  cursor: 'pointer',
                  position: 'relative',
                  outline: 'none'
                },
                n,
                p ? b : {}
              )
            }
          }),
          v = {};
        return (
          c &&
            (v.onMouseOver = function(e) {
              return c(t, e);
            }),
          o.default.createElement(
            'div',
            r(
              {
                style: m.swatch,
                onClick: function(e) {
                  return s(t, e);
                },
                title: f,
                tabIndex: 0,
                onKeyDown: function(e) {
                  return 13 === e.keyCode && s(t, e);
                }
              },
              v
            ),
            d,
            g &&
              o.default.createElement(l.default, {
                borderRadius: m.swatch.borderRadius,
                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
              })
          )
        );
      });
      t.default = (0, i.handleFocus)(c);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.handleFocus = void 0);
      var r,
        o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = n(0),
        l = (r = i) && r.__esModule ? r : { default: r };
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function u(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      t.handleFocus = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'span';
        return (function(n) {
          function r() {
            var e, t, n;
            s(this, r);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (t = n = c(
                this,
                (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
              (n.state = { focus: !1 }),
              (n.handleFocus = function() {
                return n.setState({ focus: !0 });
              }),
              (n.handleBlur = function() {
                return n.setState({ focus: !1 });
              }),
              c(n, t)
            );
          }
          return (
            u(r, n),
            a(r, [
              {
                key: 'render',
                value: function() {
                  return l.default.createElement(
                    t,
                    { onFocus: this.handleFocus, onBlur: this.handleBlur },
                    l.default.createElement(e, o({}, this.props, this.state))
                  );
                }
              }
            ]),
            r
          );
        })(l.default.Component);
      };
    },
    function(e, t, n) {
      var r = n(230);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(33)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      (e.exports = n(32)(!1)).push([
        e.i,
        '/**\n * GitHub Gist Theme\n * Author : Louis Barranqueiro - https://github.com/LouisBarranqueiro\n */\n\n.hljs {\n  display: block;\n  background: white;\n  padding: 0.5em;\n  color: #333333;\n  overflow-x: auto;\n}\n\n.hljs-comment,\n.hljs-meta {\n  color: #969896;\n}\n\n.hljs-string,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-strong,\n.hljs-emphasis,\n.hljs-quote {\n  color: #df5000;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-type {\n  color: #a71d5d;\n}\n\n.hljs-literal,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-attribute {\n  color: #0086b3;\n}\n\n.hljs-section,\n.hljs-name {\n  color: #63a35c;\n}\n\n.hljs-tag {\n  color: #333333;\n}\n\n.hljs-title,\n.hljs-attr,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #795da3;\n}\n\n.hljs-addition {\n  color: #55a532;\n  background-color: #eaffea;\n}\n\n.hljs-deletion {\n  color: #bd2c00;\n  background-color: #ffecec;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n',
        ''
      ]);
    },
    function(e, t) {
      e.exports = function(e) {
        var t = 'undefined' != typeof window && window.location;
        if (!t) throw new Error('fixUrls requires window.location');
        if (!e || 'string' != typeof e) return e;
        var n = t.protocol + '//' + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, '/');
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function(e, t) {
            var o,
              a = t
                .trim()
                .replace(/^"(.*)"$/, function(e, t) {
                  return t;
                })
                .replace(/^'(.*)'$/, function(e, t) {
                  return t;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)
              ? e
              : ((o =
                  0 === a.indexOf('//')
                    ? a
                    : 0 === a.indexOf('/')
                    ? n + a
                    : r + a.replace(/^\.\//, '')),
                'url(' + JSON.stringify(o) + ')');
          }
        );
      };
    },
    function(e, t, n) {
      var r = n(233);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(33)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      (e.exports = n(32)(!1)).push([
        e.i,
        '.react-tabs {\n  -webkit-tap-highlight-color: transparent;\n}\n\n.react-tabs__tab-list {\n  border-bottom: 1px solid #aaa;\n  margin: 0 0 10px;\n  padding: 0;\n}\n\n.react-tabs__tab {\n  display: inline-block;\n  border: 1px solid transparent;\n  border-bottom: none;\n  bottom: -1px;\n  position: relative;\n  list-style: none;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.react-tabs__tab--selected {\n  background: #fff;\n  border-color: #aaa;\n  color: black;\n  border-radius: 5px 5px 0 0;\n}\n\n.react-tabs__tab--disabled {\n  color: GrayText;\n  cursor: default;\n}\n\n.react-tabs__tab:focus {\n  -webkit-box-shadow: 0 0 5px hsl(208, 99%, 50%);\n          box-shadow: 0 0 5px hsl(208, 99%, 50%);\n  border-color: hsl(208, 99%, 50%);\n  outline: none;\n}\n\n.react-tabs__tab:focus:after {\n  content: "";\n  position: absolute;\n  height: 5px;\n  left: -4px;\n  right: -4px;\n  bottom: -5px;\n  background: #fff;\n}\n\n.react-tabs__tab-panel {\n  display: none;\n}\n\n.react-tabs__tab-panel--selected {\n  display: block;\n}\n',
        ''
      ]);
    },
    function(e, t, n) {
      var r = n(235);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(33)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      (e.exports = n(32)(!1)).push([
        e.i,
        "/*-- Chart --*/\n.c3 svg {\n  font: 10px sans-serif;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.c3 path, .c3 line {\n  fill: none;\n  stroke: #000;\n}\n\n.c3 text {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n.c3-legend-item-tile,\n.c3-xgrid-focus,\n.c3-ygrid,\n.c3-event-rect,\n.c3-bars path {\n  shape-rendering: crispEdges;\n}\n\n.c3-chart-arc path {\n  stroke: #fff;\n}\n\n.c3-chart-arc rect {\n  stroke: white;\n  stroke-width: 1;\n}\n\n.c3-chart-arc text {\n  fill: #fff;\n  font-size: 13px;\n}\n\n/*-- Axis --*/\n/*-- Grid --*/\n.c3-grid line {\n  stroke: #aaa;\n}\n\n.c3-grid text {\n  fill: #aaa;\n}\n\n.c3-xgrid, .c3-ygrid {\n  stroke-dasharray: 3 3;\n}\n\n/*-- Text on Chart --*/\n.c3-text.c3-empty {\n  fill: #808080;\n  font-size: 2em;\n}\n\n/*-- Line --*/\n.c3-line {\n  stroke-width: 1px;\n}\n\n/*-- Point --*/\n.c3-circle._expanded_ {\n  stroke-width: 1px;\n  stroke: white;\n}\n\n.c3-selected-circle {\n  fill: white;\n  stroke-width: 2px;\n}\n\n/*-- Bar --*/\n.c3-bar {\n  stroke-width: 0;\n}\n\n.c3-bar._expanded_ {\n  fill-opacity: 1;\n  fill-opacity: 0.75;\n}\n\n/*-- Focus --*/\n.c3-target.c3-focused {\n  opacity: 1;\n}\n\n.c3-target.c3-focused path.c3-line, .c3-target.c3-focused path.c3-step {\n  stroke-width: 2px;\n}\n\n.c3-target.c3-defocused {\n  opacity: 0.3 !important;\n}\n\n/*-- Region --*/\n.c3-region {\n  fill: steelblue;\n  fill-opacity: 0.1;\n}\n\n/*-- Brush --*/\n.c3-brush .extent {\n  fill-opacity: 0.1;\n}\n\n/*-- Select - Drag --*/\n/*-- Legend --*/\n.c3-legend-item {\n  font-size: 12px;\n}\n\n.c3-legend-item-hidden {\n  opacity: 0.15;\n}\n\n.c3-legend-background {\n  opacity: 0.75;\n  fill: white;\n  stroke: lightgray;\n  stroke-width: 1;\n}\n\n/*-- Title --*/\n.c3-title {\n  font: 14px sans-serif;\n}\n\n/*-- Tooltip --*/\n.c3-tooltip-container {\n  z-index: 10;\n}\n\n.c3-tooltip {\n  border-collapse: collapse;\n  border-spacing: 0;\n  background-color: #fff;\n  empty-cells: show;\n  -webkit-box-shadow: 7px 7px 12px -9px #777777;\n  box-shadow: 7px 7px 12px -9px #777777;\n  opacity: 0.9;\n}\n\n.c3-tooltip tr {\n  border: 1px solid #CCC;\n}\n\n.c3-tooltip th {\n  background-color: #aaa;\n  font-size: 14px;\n  padding: 2px 5px;\n  text-align: left;\n  color: #FFF;\n}\n\n.c3-tooltip td {\n  font-size: 13px;\n  padding: 3px 6px;\n  background-color: #fff;\n  border-left: 1px dotted #999;\n}\n\n.c3-tooltip td > span {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 6px;\n}\n\n.c3-tooltip .value {\n  text-align: right;\n}\n\n/*-- Area --*/\n.c3-area {\n  stroke-width: 0;\n  opacity: 0.2;\n}\n\n/*-- Arc --*/\n.c3-chart-arcs-title {\n  dominant-baseline: middle;\n  font-size: 1.3em;\n}\n\n.c3-chart-arcs .c3-chart-arcs-background {\n  fill: #e0e0e0;\n  stroke: #FFF;\n}\n\n.c3-chart-arcs .c3-chart-arcs-gauge-unit {\n  fill: #000;\n  font-size: 16px;\n}\n\n.c3-chart-arcs .c3-chart-arcs-gauge-max {\n  fill: #777;\n}\n\n.c3-chart-arcs .c3-chart-arcs-gauge-min {\n  fill: #777;\n}\n\n.c3-chart-arc .c3-gauge-value {\n  fill: #000;\n  /*  font-size: 28px !important;*/\n}\n\n.c3-chart-arc.c3-target g path {\n  opacity: 1;\n}\n\n.c3-chart-arc.c3-target.c3-focused g path {\n  opacity: 1;\n}\n\n/*-- Zoom --*/\n.c3-drag-zoom.enabled {\n  pointer-events: all !important;\n  visibility: visible;\n}\n\n.c3-drag-zoom.disabled {\n  pointer-events: none !important;\n  visibility: hidden;\n}\n\n.c3-drag-zoom .extent {\n  fill-opacity: 0.1;\n}\n/*\r\n Rangeable\r\n Copyright (c) 2018 Karl Saunders\r\n Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)\r\n and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.\r\n\r\n Version: 0.1.6\r\n\r\n*/\n.rangeable-container.combined-tooltip.dragging .rangeable-progress>.rangeable-tooltip,.rangeable-container.combined-tooltip.rangeable-tooltips--visible .rangeable-progress>.rangeable-tooltip,.rangeable-container.dragging.rangeable-tooltips .rangeable-handle .rangeable-tooltip,.rangeable-container.rangeable-tooltips--visible.rangeable-tooltips .rangeable-handle .rangeable-tooltip,.rangeable-container.rangeable-vertical.combined-tooltip .rangeable-progress>.rangeable-tooltip::before{display:block}\n.rangeable-container{cursor:pointer;width:100%}\n.rangeable-container.rangeable-disabled{opacity:.6;cursor:not-allowed}\n.rangeable-container.rangeable-multiple.combined-tooltip .rangeable-handle .rangeable-tooltip,.rangeable-container.rangeable-vertical.combined-tooltip .rangeable-handle .rangeable-tooltip{opacity:0}\n.rangeable-container.focus .rangeable-handle{border:1px solid #74b9ff}\n.rangeable-container.rangeable-multiple .rangeable-handle:nth-child(1){left:0;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}\n.rangeable-container.rangeable-multiple .rangeable-handle:nth-child(2){right:0}\n.rangeable-container.rangeable-vertical{height:100%;width:auto}\n.rangeable-container.rangeable-vertical .rangeable-track{width:8px;height:100%}\n.rangeable-container.rangeable-vertical .rangeable-progress{width:8px;height:100%;top:auto;bottom:0;-webkit-transform-origin:0 100% 0;-ms-transform-origin:0 100% 0;transform-origin:0 100% 0}\n.rangeable-container.rangeable-vertical .rangeable-handle{right:auto;left:50%;top:0;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}\n.rangeable-container.rangeable-vertical .rangeable-tooltip{position:absolute;top:50%;left:calc(100% + 6px + 4px + 5px);right:auto;bottom:auto;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}\n.rangeable-container.rangeable-vertical .rangeable-tooltip::before{right:100%;left:auto;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);border-width:4px 4px 4px 0;border-color:transparent #3db13d transparent transparent}\n.rangeable-container.rangeable-vertical .rangeable-buffer{width:100%;height:0}\n.rangeable-container.rangeable-vertical.rangeable-multiple .rangeable-handle:nth-child(1){top:0;left:50%}\n.rangeable-container.rangeable-vertical.rangeable-multiple .rangeable-handle:nth-child(2){bottom:0;top:auto;-webkit-transform:translate3d(-50%,50%,0);transform:translate3d(-50%,50%,0)}\n.rangeable-input{position:absolute;overflow:hidden;clip:rect(0,0,0,0);width:1px;height:1px;margin:-1px;padding:0;border:0}\n.rangeable-input:focus+.rangeable-track .rangeable-handle::after{position:absolute;width:22px;height:22px;bottom:-6px;right:-6px;outline:#000 dotted 1px;content:\"\"}\n.rangeable-progress,.rangeable-track{height:8px;width:100%;border-radius:4px}\n.rangeable-track{background-color:#ccc;position:relative}\n.rangeable-progress{background-color:#3db13d;position:absolute;left:0;top:0;-webkit-transform-origin:0 0 0;-ms-transform-origin:0 0 0;transform-origin:0 0 0}\n.rangeable-progress>.rangeable-tooltip{display:none;z-index:11;top:auto;bottom:calc(100% + 7px + 9px);white-space:nowrap}\n.rangeable-handle{-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:6px solid #3db13d;border-radius:50%;background-color:#fff;position:absolute;top:50%;right:0;-webkit-transform:translate3d(50%,-50%,0);transform:translate3d(50%,-50%,0)}\n.rangeable-handle:focus{outline:0}\n.rangeable-handle:focus::after{position:absolute;width:22px;height:22px;bottom:-6px;right:-6px;outline:#000 dotted 1px;content:\"\"}\n.rangeable-handle.active{z-index:10}\n.rangeable-handle .rangeable-tooltip{display:none}\n.rangeable-tooltip{position:absolute;right:50%;bottom:calc(100% + 6px + 4px + 5px);-webkit-transform:translate3d(50%,0,0);transform:translate3d(50%,0,0);text-align:center;padding:2px 13px;background-color:#3db13d;border-radius:4px;font-weight:700;font-size:16px;color:#fff;font-family:Inconsolata,Consolas,Courier New,Lucida Console,sans-serif}\n.rangeable-tooltip::before{width:0;height:0;border-width:4px 4px 0;border-style:solid;border-color:#3db13d transparent transparent;position:absolute;left:50%;top:100%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);content:\"\"}\n.rangeable-buffers{position:absolute;left:0;top:0;height:100%;width:100%}\n.rangeable-buffer{position:absolute;background-color:rgba(0,0,0,.2);border-radius:4px;height:100%}\n/* WRAPPER */\n.keen-dataviz {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Gotham Rounded SSm A', 'Gotham Rounded SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-family: 'Gotham Rounded SSm A', 'Gotham Rounded SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  height: 100%;\n}\n.keen-dataviz .partial-interval-indicator{\n    fill: #bdbdbd;\n  }\n.keen-dataviz .axis {\n    shape-rendering: crispEdges\n  }\n.keen-dataviz-title {\n    color: #4D4D4D;\n    color: #4D4D4D;\n    padding-bottom: 0.8em;\n  }\n.keen-dataviz-stage {\n    display: block;\n  }\n.keen-dataviz-notes {\n    color: #808080;\n    color: #808080;\n    display: block;\n    font-size: 0.8em;\n  }\n.keen-dataviz-box {\n    border-radius: 4px;\n    text-align: center;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-flow: row;\n        flex-flow: row;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    padding: 1em 0;\n    min-height: 4em;\n    height: inherit;\n  }\n.keen-dataviz-button {\n    padding: 0.5rem 1rem;\n    margin: 1rem 0;\n    border-radius: 4px;\n    background-color: #f9f9f9;\n    border-color: #d6d6d6;\n    cursor: pointer;\n    -webkit-transition: background-color 300ms ease;\n    -o-transition: background-color 300ms ease;\n    transition: background-color 300ms ease\n  }\n.keen-dataviz-button:hover {\n  background-color: #E7E7E7;\n  background-color: #E7E7E7;\n}\n.keen-dataviz .metric-comparison {\n    -ms-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n    color: #1A1A1A;\n    color: #1A1A1A;\n    background: #f9f9f9;\n  }\n/* METRIC */\n.keen-dataviz-metric {\n    height: inherit;\n    color: #FFFFFF;\n    color: #FFFFFF;\n    background: rgb(0, 187, 222);\n  }\n.keen-dataviz-metric-value {\n      font-size: 4.3em;\n      font-weight: 700;\n      width: 100%;\n    }\n.keen-dataviz-metric-value-smaller {\n        font-size: 3em;\n      }\n.keen-dataviz-metric-title {\n      font-size: 2em;\n      font-weight: 200;\n      width: 100%;\n    }\n.keen-dataviz-metric-green {\n      color: #73D483;\n      color: #73D483;\n      font-size: 2em;\n    }\n.keen-dataviz-metric-red {\n      color: #FE6672;\n      color: #FE6672;\n      font-size: 2em;\n    }\n.keen-dataviz .arrow-green {\n    width: 0;\n    height: 0;\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    border-bottom: 8px solid #73D483;\n    border-bottom: 8px solid #73D483;\n    position: relative;\n    top: 0.7em;\n    left: -0.6em;\n  }\n.keen-dataviz .arrow-red {\n    width: 0;\n    height: 0;\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    border-top: 8px solid #FE6672;\n    border-top: 8px solid #FE6672;\n    position: relative;\n    top: 0.8em;\n    left: -0.6em;\n  }\n/* MESSAGE */\n.keen-dataviz-message {\n    color: #808080;\n    color: #808080;\n    font-size: 1.5em;\n    width:100%;\n  }\n/* FUNNEL */\n.keen-dataviz .text-label {\n      fill: #1A1A1A;\n      fill: #1A1A1A;\n    }\n.keen-dataviz .text-main {\n      fill: #FFFFFF;\n      fill: #FFFFFF;\n      font-size: 1.5em;\n    }\n.keen-dataviz .text-second {\n      fill: #FFFFFF;\n      fill: #FFFFFF;\n    }\n.keen-dataviz .chart-lines {\n      stroke: #E7E7E7;\n      stroke: #E7E7E7;\n    }\n/* METRIC COMBO */\n.keen-dataviz-metric-combo {\n    width: 270px;\n    height: 120px;\n    position: relative;\n  }\n.keen-dataviz-metric-combo .metric-combo-data {\n      width: 100%;\n      height: 100%;\n      padding: 0.5rem;\n      position: absolute;\n      z-index: -1;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n    }\n.keen-dataviz-metric-combo .c3-chart {\n      height: 120px;\n    }\n.keen-dataviz-metric-combo .c3-lines {\n      display: none;\n    }\n.keen-dataviz-metric-combo .keen-dataviz-title,\n    .keen-dataviz-metric-combo .current-count {\n      width: 100%;\n    }\n.keen-dataviz-metric-combo .current-count {\n      margin-top: auto;\n      margin-bottom: auto;\n      font-size: 2rem;\n      text-align: center;\n    }\n.keen-dataviz-metric-combo .percent-difference {\n      position: absolute;\n      top: 0.5rem;\n      right: 0.5rem;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      font-size: 80%;\n    }\n.keen-dataviz-metric-combo .arrow-green,\n    .keen-dataviz-metric-combo .arrow-red {\n      margin-right: 0.25rem;\n      position: static;\n      border-width: 5px;\n    }\n/* TABLE */\n.keen-dataviz-table {\n    border-bottom: 1px solid #E7E7E7;\n    border-bottom: 1px solid #E7E7E7;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    overflow: scroll;\n    position: relative;\n    width: 100%;\n  }\n.keen-dataviz-table table {\n      background: #FFFFFF;\n      background: #FFFFFF;\n      border-collapse: collapse;\n      margin: 0;\n      position: relative;\n      width: 100%;\n    }\n.keen-dataviz-table table .table-pagination td {\n          background-color: #FFFFFF;\n          background-color: #FFFFFF;\n        }\n.keen-dataviz-table table .table-pagination:hover td {\n          background-color: #FFFFFF;\n          background-color: #FFFFFF;\n        }\n.keen-dataviz-table table .table-pagination a {\n          border: 1px solid #E7E7E7;\n          border: 1px solid #E7E7E7;\n          padding: 0.5em;\n          margin-right: 0.2em;\n          cursor: pointer;\n        }\n.keen-dataviz-table table .table-pagination .active{\n          background: #4D4D4D;\n          background: #4D4D4D;\n          color: #FFFFFF;\n          color: #FFFFFF;\n        }\n.keen-dataviz-table table .table-pagination .arrow{\n          font-weight:bold;\n        }\n.keen-dataviz-table th{\n    background: white;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n    cursor: pointer;\n  }\n.keen-dataviz-table th,\n  .keen-dataviz-table td {\n    border-collapse: collapse;\n    font-size: 1em;\n    padding: 0.7em;\n    text-align: left;\n    white-space: nowrap;\n  }\n.keen-dataviz-table th {\n    border-bottom: 1px solid #E7E7E7;\n    border-bottom: 1px solid #E7E7E7;\n    color: #4D4D4D;\n    color: #4D4D4D;\n  }\n.keen-dataviz-table td {\n    background-color: #FFFFFF;\n    background-color: #FFFFFF;\n    color: #4D4D4D;\n    color: #4D4D4D;\n    -webkit-transition: background-color 0.1s, color 0.05s;\n    -o-transition: background-color 0.1s, color 0.05s;\n    transition: background-color 0.1s, color 0.05s;\n  }\n.keen-dataviz-table .table-data-row:nth-child(even) td{\n    background-color: #F3F5F6;\n  }\n.keen-dataviz-table .table-data-row:hover td{\n    background-color: #E7E7E7;\n    background-color: #E7E7E7;\n    color: #4D4D4D;\n    color: #4D4D4D;\n  }\n.keen-dataviz-table .keen-dataviz-table-fixed-header {\n    background: #FFFFFF;\n    background: #FFFFFF;\n    border-bottom: 1px solid rgba(0,0,0,.15);\n    position: absolute;\n    top: 0;\n    -webkit-transition: top .1s;\n    -o-transition: top .1s;\n    transition: top .1s;\n  }\n.keen-dataviz .keen-spinner-indicator {\n    border-radius: 100%;\n    border: 3px solid rgba(0, 0, 0, .1);\n    border-top-color: rgba(0, 0, 0, .45);\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: 3em;\n    width: 3em;\n    -webkit-animation:spin .7s linear infinite;\n    animation:spin .7s linear infinite;\n    -ms-animation: spin .7s linear infinite;\n    -o-animation: spin .7s linear infinite;\n  }\n.keen-dataviz-execution-meta {\n    position: absolute;\n    z-index: 999;\n    padding: 0.5rem 1rem;\n    margin: 0.75rem 0;\n    display: inline-grid;\n    grid-template-columns: repeat(2, -webkit-max-content);\n    grid-template-columns: repeat(2, max-content);\n    grid-gap: 0.5em 1em;\n    text-transform: uppercase;\n    font-size: 0.75rem;\n    border: 1px solid #eee;\n    background: #fff;\n  }\n.keen-dataviz-execution-meta dt {\n      font-weight: bold\n    }\n.keen-dataviz-execution-meta dt:hover + dd {\n  font-weight: bold;\n}\n.keen-dataviz-execution-meta dt, .keen-dataviz-execution-meta dd {\n      margin: 0;\n      cursor: pointer;\n    }\n.keen-dataviz-execution-meta .copied:after {\n  content: 'copied!';\n  vertical-align: middle;\n  display: inline-block;\n  font-size: 10px;\n  margin-left: 0.5em;\n  position: absolute;\n  text-transform: none;\n  font-weight: normal;\n  -webkit-animation: 1s ease 0s 1 both fadeOut;\n          animation: 1s ease 0s 1 both fadeOut;\n}\n@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\n@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }\n@-webkit-keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }\n@keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }\n/* C3 CUSTOMIZATIONS */\n.keen-dataviz .c3-axis-y path {\n       display: none;\n    }\n.keen-dataviz .c3-axis-y .tick line{\n      display: none;\n    }\n.keen-dataviz .tick line, .keen-dataviz path.domain{\n    stroke-opacity: 0.2;\n  }\n.keen-dataviz .c3-ygrid{\n    stroke-dasharray: none;\n    stroke-opacity: 0.1;\n  }\n.keen-dataviz .c3-ygrids :nth-child(even) {\n    display: none;\n  }\n.keen-dataviz .c3-tooltip {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    padding:  0.2em;\n    border-radius: 0.2em;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-collapse: separate;\n  }\n.keen-dataviz .c3-tooltip th {\n      text-align: center;\n    }\n.keen-dataviz .c3-tooltip table, .keen-dataviz .c3-tooltip th, .keen-dataviz .c3-tooltip tr, .keen-dataviz .c3-tooltip td {\n      border: none;\n      background: none;\n      font-size: 0.9em;\n    }\n.keen-dataviz .c3-tooltip-container th {\n      max-width: 50%;\n      word-wrap: break-word;\n      color: #1A1A1A;\n      color: #1A1A1A;\n      background: none;\n      font-weight: normal;\n    }\n.keen-dataviz .c3-tooltip-container td {\n      max-width: 50%;\n      word-wrap: break-word;\n    }\n.keen-dataviz-rendering{\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-flow: row;\n        flex-flow: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n.keen-dataviz-rendering .c3-chart{\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-item-align: center;\n          align-self: center;\n      -ms-flex-order: 1;\n          order: 1;\n      -ms-flex: 100%;\n          flex: 100%;\n    }\n.keen-dataviz-rendering .c3-chart-100-percent{\n      width: 100%;\n      -ms-flex-item-align: center;\n          align-self: center;\n    }\n.keen-dataviz-rendering-horizontal{\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n    }\n/* CUSTOM LEGEND */\n.keen-c3-legend {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  top: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.keen-c3-legend-horizontal{\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    display: -ms-flexbox;\n    display: flex;\n    flex-direction: row;\n    -ms-flex-pack: center;\n        justify-content: center;\n    width: 100%;\n    padding: 0.5em 0;\n  }\n.keen-c3-legend-horizontal-pagination-left{\n      -ms-flex-order: 0;\n          order: 0;\n      display: -ms-flexbox;\n      display: flex;\n      margin-right: 1.5em;\n    }\n.keen-c3-legend-horizontal-items{\n      -ms-flex-order: 1;\n          order: 1;\n      display: -ms-flexbox;\n      display: flex;\n    }\n.keen-c3-legend-horizontal-pagination-right{\n      -ms-flex-order: 2;\n          order: 2;\n      display: -ms-flexbox;\n      display: flex;\n      margin-left: 1.5em;\n    }\n.keen-c3-legend-top{\n    -ms-flex-order: 0;\n        order: 0;\n  }\n.keen-c3-legend-bottom {\n    -ms-flex-order: 2;\n        order: 2;\n  }\n.keen-c3-legend-bottom .keen-c3-legend-label-overlay{\n    top: 0;\n    margin-top: -2.7em;\n  }\n.keen-c3-legend-bottom .keen-c3-legend-label-overlay .overlay-pointer {\n      top: 2.4em;\n      -webkit-transform: rotate(180deg);\n          -ms-transform: rotate(180deg);\n              transform: rotate(180deg);\n      border-color: transparent transparent #f0f0f0 transparent;\n    }\n.keen-c3-legend-vertical{\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n.keen-c3-legend-vertical .keen-c3-legend-pagination-icons\n    {\n      margin: 0.5em 0.1em;\n      -ms-flex-order: 2;\n          order: 2;\n    }\n.keen-c3-legend-left{\n    -ms-flex-order: 0;\n        order: 0;\n  }\n.keen-c3-legend-right{\n    -ms-flex-order: 2;\n        order: 2;\n  }\n.keen-c3-legend-items{\n    -ms-flex-order: 1;\n        order: 1;\n  }\n.keen-c3-legend-vertical-items{\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n.keen-c3-legend-vertical-items .legend-item{\n      width: 8em;\n    }\n.keen-c3-legend-horizontal-items{\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n.keen-c3-legend-horizontal-items .legend-item{\n      width: 6em;\n      margin: 0 0.25em;\n    }\n.keen-c3-legend .legend-item{\n    display: -ms-flexbox;\n    display: flex;\n    cursor: pointer;\n    padding: 0.2em;\n    font-size: 0.8em;\n  }\n.keen-c3-legend .legend-item > * {\n      vertical-align: middle;\n    }\n.keen-c3-legend .legend-item-color-sample{\n      display: inline-block;\n      width: 1em;\n      height: 1em;\n      margin-right: 0.5em;\n      pointer-events: none;\n      -ms-flex: none;\n          flex: none;\n    }\n.keen-c3-legend .legend-item-text{\n      pointer-events: none;\n      overflow: hidden;\n      white-space: nowrap;\n      -o-text-overflow: ellipsis;\n         text-overflow: ellipsis;\n      text-align: left;\n    }\n.keen-c3-legend-label-overlay .overlay-pointer {\n    border-color: transparent transparent #FFFFFF transparent;\n    border-color: transparent transparent #FFFFFF transparent;\n    border-style: solid;\n    border-width: 0 10px 10px 10px;\n    height: 0;\n    width: 0px;\n    position: absolute;\n    top: -10px;\n  }\n.keen-c3-legend-position-left .overlay-pointer {\n        left: 0px;\n      }\n.keen-c3-legend-position-right .overlay-pointer {\n        left: 0px;\n      }\n.keen-c3-legend-pagination-vertical {\n    margin-top: 0.5em;\n  }\n.keen-c3-legend-pagination-icons {\n    padding: 0.2em;\n  }\n.keen-c3-legend-pagination-icons i {\n      border-left: 1em solid transparent;\n      border-right: 1em solid transparent;\n      border-top: 1.5em solid #4D4D4D;\n      border-top: 1.5em solid #4D4D4D;\n      display: inline-block;\n      padding: 0em;\n      float: left;\n      cursor: pointer;\n      font-size: 0.5em;\n    }\n.keen-c3-legend-pagination-icons .right {\n      -ms-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n      -webkit-transform: rotate(-90deg);\n    }\n.keen-c3-legend-pagination-icons .left {\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg);\n      -webkit-transform: rotate(90deg);\n    }\n.keen-c3-legend-pagination-icons .up {\n      -ms-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n      -webkit-transform: rotate(-180deg);\n      margin-top: 0.1em;\n    }\n.keen-c3-legend-pagination-icons .down {\n      margin-right: 1em;\n    }\n.keen-c3-legend-label-overlay {\n    font-size: 1em;\n    background: rgba(255, 255, 255, 0.9);\n    background: rgba(255, 255, 255, 0.9);\n    -webkit-box-shadow: 0 1px 1px rgba(26, 26, 26, 0.09999999999999998);\n            box-shadow: 0 1px 1px rgba(26, 26, 26, 0.09999999999999998);\n    box-shadow: 0 1px 1px rgba(26, 26, 26, 0.09999999999999998);\n    padding: 0.6em;\n    margin-top: 1.5em;\n    position: absolute;\n    word-wrap: break-word;\n    pointer-events: none;\n    z-index: 222;\n  }\n.keen-c3-legend-align-left {\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n    }\n.keen-c3-legend-align-left .keen-c3-legend-horizontal-items {\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n        margin-right: auto;\n      }\n.keen-c3-legend-align-center {\n      -ms-flex-pack: center;\n          justify-content: center;\n    }\n.keen-c3-legend-align-center .keen-c3-legend-horizontal-items {\n        -ms-flex-pack: center;\n            justify-content: center;\n        margin-left: auto;\n        margin-right: auto;\n      }\n.keen-c3-legend-align-right {\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n    }\n.keen-c3-legend-align-right .keen-c3-legend-horizontal-items {\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n        margin-left: auto;\n      }\n.keen-c3-legend-align-top {\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n    }\n.keen-c3-legend-align-middle {\n      -ms-flex-pack: center;\n          justify-content: center;\n    }\n.keen-c3-legend-align-bottom {\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n    }\n.keen-dataviz-range .c3-area-Max {\n  display: none;\n}\n.keen-dataviz-range .c3-bars-Max {\n  display: none;\n}\n.keen-dataviz ~ .rangeable-container {\n  margin: 2rem auto;\n  width: 75%;\n}\n.keen-dataviz ~ .rangeable-container .rangeable-track,\n.keen-dataviz ~ .rangeable-container .rangeable-progress {\n  height: 4px;\n}\n.keen-dataviz ~ .rangeable-container .rangeable-handle {\n  width: 16px;\n  height: 16px;\n  border-width: 4px;\n}\n.keen-dataviz ~ .rangeable-container .rangeable-tooltip {\n  border-radius: 0;\n  font-weight: normal;\n  padding: 3px 9px;\n}\n",
        ''
      ]);
    },
    function(e, t, n) {
      var r = n(237);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(33)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      (t = e.exports = n(32)(!1)).push([
        e.i,
        '@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap);',
        ''
      ]),
        t.push([
          e.i,
          "html {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.keen-theme-builder {\n  padding: 15px;\n  padding: 15px;\n  display: grid;\n  grid-gap: calc(2 * 15px);\n  grid-gap: calc(2 * 15px);\n  grid-template-columns: 100%;\n  background-color: #F3F7F9;\n  background-color: #F3F7F9;\n  font-family: 'Montserrat', sans-serif;\n  font-family: 'Montserrat', sans-serif;\n  color: #000;\n  color: #000;\n}\n@media (min-width: 960px) {\n  .keen-theme-builder {\n    grid-template-columns: 350px auto;\n  }\n}\n.keen-theme-builder.no-mockup {\n  grid-template-columns: 100%;\n}\n.keen-theme-builder__row {\n    margin-bottom: 10px;\n    margin-bottom: 10px;\n    -ms-flex-align: end;\n        align-items: end;\n    -ms-flex-pack: center;\n        justify-content: center;\n    grid-column-gap: 10px;\n}\n.keen-theme-builder__row.two-elements {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.keen-theme-builder .builder__mockup {\n      min-width: 0;\n    }\n.keen-theme-builder .builder__config {\n      background-color: #F3F7F9;\n      background-color: #F3F7F9;\n    }\n.keen-theme-builder .builder__editor {\n      padding: 15px;\n      padding: 15px;\n      border: 1px solid #ccc;\n      border: 1px solid #ccc;\n      background-color: #fff;\n      background-color: #fff;\n    }\n.keen-theme-builder .builder__default-charts {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n      grid-auto-rows: auto;\n      grid-gap: 1rem;\n    }\n.keen-theme-builder .builder__default-charts .keen-dataviz {\n        height: 350px;\n        min-width: 0;\n      }\n.keen-theme-builder .section-title {\n    font-size: 0.875rem;\n    font-size: 0.875rem;\n    line-height: 1.285;\n    line-height: 1.285;\n    text-transform: uppercase;\n}\n.keen-theme-builder .control-title {\n    font-size: 0.875rem;\n    font-size: 0.875rem;\n    line-height: 1.285;\n    line-height: 1.285;\n    text-transform: uppercase;\n}\n.keen-theme-builder .section-title {\n    font-weight: 700;\n}\n.keen-theme-builder .control-label {\n    display: block;\n    margin-bottom: 10px;\n    margin-bottom: 10px;\n    font-size: 0.875rem;\n    font-size: 0.875rem;\n    line-height: 1.285;\n    line-height: 1.285;\n}\n.keen-theme-builder .color-picker {\n    position: relative;\n    margin-bottom: 0.5rem;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.keen-theme-builder .color-picker__label {\n      margin-bottom: 0.5rem;\n    }\n.keen-theme-builder .color-picker__wrapper {\n      padding: 0.5rem;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      -ms-flex-align: center;\n          align-items: center;\n      border-radius: 3px;\n      border: 1px solid #ccc;\n      cursor: pointer;\n    }\n.keen-theme-builder .color-picker__input {\n      min-width: 0;\n      border: none;\n      outline: none;\n      background: transparent;\n      font-size: 1rem;\n      line-height: 1;\n      color: #aaa;\n      cursor: pointer;\n    }\n.keen-theme-builder .color-picker__trigger {\n      width: 20px;\n      height: 20px;\n      margin-right: 1em;\n      padding: 2px;\n      border: 1px solid #ccc;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      -webkit-transition: all 300ms ease;\n      -o-transition: all 300ms ease;\n      transition: all 300ms ease\n    }\n.keen-theme-builder .color-picker__trigger:hover {\n  -webkit-transform: scale(1.15);\n      -ms-transform: scale(1.15);\n          transform: scale(1.15);\n}\n.keen-theme-builder .color-picker__popover {\n      position: absolute;\n      top: 0;\n      left: 36px;\n      z-index: 10;\n    }\n.keen-theme-builder .color-picker__cover {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: -1;\n    }\n.keen-theme-builder .btn {\n    padding: 0.5rem 0.75rem;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    font-size: 0.875rem;\n    font-size: 0.875rem;\n    line-height: 1.285;\n    line-height: 1.285;\n    color: #44B7DC;\n    color: #44B7DC;\n    background-color: #fff;\n    background-color: #fff;\n    border-radius: 4px;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    border: 1px solid #ccc;\n    cursor: pointer;\n    -webkit-transition: background-color 250ms ease-in;\n    -o-transition: background-color 250ms ease-in;\n    transition: background-color 250ms ease-in;\n}\n.keen-theme-builder .btn:hover {\n  background-color: #F3F7F9;\n  background-color: #F3F7F9;\n}\n.keen-theme-builder .btn:focus {\n  outline: none;\n}\n.keen-theme-builder .btn__small {\n      font-size: 0.75rem;\n      padding: 0.25rem 0.5rem;\n}\n.keen-theme-builder .keen-dataviz {\n    min-height: 50vh;\n    padding: 15px;\n    padding: 15px;\n    background-color: #fff;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border: 1px solid #ccc;\n}\n.keen-theme-builder .keen-dataviz .c3-ygrid {\n      stroke-opacity: 1;\n    }\n.keen-theme-builder .keen-dataviz .c3-chart-lines .c3-circles {\n        fill: currentColor;\n      }\n.keen-theme-builder .keen-dataviz .keen-dataviz-metric {\n      min-height: 50vh;\n    }\n.keen-theme-builder .keen-dataviz > .keen-dataviz {\n  background: transparent;\n  border: none;\n  padding: 0;\n  height: 100%;\n  font-size: 4.25rem;\n}\n.keen-theme-builder .disabled {\n    pointer-events: none;\n    opacity: 0.4;\n}\n.copy-to-clipboard {\n  clip: rect(0 0 0 0);\n  -webkit-clip-path: inset(100%);\n          clip-path: inset(100%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n.keen-theme-builder .accordion__item__heading {\n        padding: 10px 15px;\n        margin-bottom: 5px;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: center;\n            align-items: center;\n        font-size: 0.875rem;\n        font-size: 0.875rem;\n        font-weight: 400;\n        line-height: 1;\n        background-color: #fff;\n        background-color: #fff;\n        cursor: pointer;\n        -webkit-box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);\n                box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);\n        -webkit-transition: background-color 250ms ease-in;\n        -o-transition: background-color 250ms ease-in;\n        transition: background-color 250ms ease-in\n      }\n.keen-theme-builder .accordion__item__heading:hover {\n  background-color: #D9EFFA;\n  background-color: #D9EFFA;\n}\n.keen-theme-builder .accordion__item__heading .heading__icon {\n          width: 1.125rem;\n          margin-right: 0.875rem;\n          fill-opacity: 0.35;\n          -webkit-transition: -webkit-transform 0.15s ease-in-out;\n          transition: -webkit-transform 0.15s ease-in-out;\n          -o-transition: transform 0.15s ease-in-out;\n          transition: transform 0.15s ease-in-out;\n          transition: transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\n}\n.keen-theme-builder .accordion__item__content {\n        padding: 15px 15px 20px 15px;\n        -webkit-animation: fadein 0.35s ease-in;\n                animation: fadein 0.35s ease-in;\n      }\n.keen-theme-builder .accordion__item.open .accordion__item__heading {\n          background-color: #D9EFFA;\n          background-color: #D9EFFA;\n          font-weight: 700;\n}\n.keen-theme-builder .accordion__item.open .accordion__item__heading .heading__icon {\n            -webkit-transform: rotate(90deg);\n                -ms-transform: rotate(90deg);\n                    transform: rotate(90deg);\n          }\n.keen-theme-builder .accordion__item__row {\n        margin-bottom: 15px;\n        margin-bottom: 15px;\n        -ms-flex-align: end;\n            align-items: end;\n        -ms-flex-pack: center;\n            justify-content: center;\n        grid-column-gap: 10px;\n}\n.keen-theme-builder .accordion__item__row.three-elements {\n  display: grid;\n  grid-template-columns: 4fr 1fr 1fr;\n}\n.keen-theme-builder .accordion__item__row.two-elements {\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n}\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n.keen-theme-builder .switcher {\n    margin-bottom: 15px;\n    margin-bottom: 15px;\n    display: block;\n    position: relative;\n    overflow: hidden;\n  }\n.keen-theme-builder .switcher__input:checked~.switcher__toggle {\n  border-color: #3ED08E;\n  background-color: #DCF9EB;\n}\n.keen-theme-builder .switcher__input:checked~.switcher__toggle .switcher__switch {\n  right: 2px;\n  background-color: #3ED08E;\n}\n.keen-theme-builder .switcher__input:checked~.switcher__value .on {\n  display: block;\n}\n.keen-theme-builder .switcher__input:checked~.switcher__value .off {\n  display: none;\n}\n.keen-theme-builder .switcher__toggle {\n      position: relative;\n      width: 34px;\n      height: 18px;\n      margin-right: 0.1875rem;\n      margin-left: 0.625rem;\n      border: 1px solid #ccc;\n      border: 1px solid #ccc;\n      background-color: #f5f5f5;\n      border-radius: 9px;\n      display: inline-block;\n    }\n.keen-theme-builder .switcher__switch {\n      position: absolute;\n      top: 1px;\n      bottom: 0;\n      right: 17px;\n      width: 14px;\n      height: 14px;\n      margin: 0;\n      background: #ccc;\n      background: #ccc;\n      border-radius: 50%;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      -webkit-transition: right 0.15s ease-in-out, background-color 0.15s ease-in-out;\n      -o-transition: right 0.15s ease-in-out, background-color 0.15s ease-in-out;\n      transition: right 0.15s ease-in-out, background-color 0.15s ease-in-out;\n    }\n.keen-theme-builder .switcher__title {\n      font-weight: 800;\n    }\n.keen-theme-builder .switcher__label {\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      -ms-flex-align: center;\n          align-items: center;\n      cursor: pointer;\n    }\n.keen-theme-builder .switcher__label .section-title {\n        line-height: 1;\n      }\n.keen-theme-builder .switcher__label .control-label {\n        margin-bottom: 0;\n      }\n.keen-theme-builder .switcher__input {\n      position: absolute;\n      left: -999px;\n    }\n.keen-theme-builder .switcher__value {\n      font-size: 0.75rem;\n      color: #B3B5B6;\n    }\n.keen-theme-builder .switcher__value .on {\n        display: none;\n      }\n.keen-theme-builder .switcher__value .off {\n        display: block;\n      }\n.keen-theme-builder .custom-color-picker {\n    min-width: 0;\n    position: relative;\n  }\n.keen-theme-builder .custom-color-picker__title {\n      margin-bottom: 10px;\n      margin-bottom: 10px;\n      font-size: 0.875rem;\n      font-size: 0.875rem;\n      line-height: 1.285;\n      line-height: 1.285;\n    }\n.keen-theme-builder .custom-color-picker__wrapper {\n      background-color: #fff;\n      background-color: #fff;\n      border: 1px solid #ccc;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      border-radius: 4px;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      height: 34px;\n      height: 34px\n    }\n.keen-theme-builder .custom-color-picker__wrapper:hover {\n  border-color: #44B7DC;\n  border-color: #44B7DC;\n}\n.keen-theme-builder .custom-color-picker__wrapper input {\n        width: 100%;\n        padding: 0.4375rem 0.75rem;\n        background: transparent;\n        border-radius: 0 4px 4px 0;\n        border-radius: 0 4px 4px 0;\n        font-family: 'Montserrat', sans-serif;\n        font-family: 'Montserrat', sans-serif;\n        font-size: 0.875rem;\n        font-size: 0.875rem;\n}\n.keen-theme-builder .custom-color-picker__popover {\n      position: absolute;\n      top: 0;\n      left: 50px;\n      z-index: 10;\n      padding: 10px;\n      padding: 10px;\n      background-color: #fff;\n      background-color: #fff;\n      border-radius: 4px;\n      -webkit-box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px;\n              box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px;\n    }\n.keen-theme-builder .custom-color-picker__popover .sketch-picker {\n        padding: 0 !important;\n        -webkit-box-shadow: none !important;\n                box-shadow: none !important;\n      }\n.keen-theme-builder .custom-color-picker__popover .btn {\n        margin-bottom: 10px;\n        margin-bottom: 10px;\n      }\n.keen-theme-builder .custom-color-picker__popover .btn-close {\n        position: absolute;\n        top: 0;\n        right: 0;\n        padding: 10px;\n        padding: 10px;\n        font-size: 1.25rem;\n        font-weight: 700;\n        line-height: 1;\n        background: none;\n        color: #ccc;\n        color: #ccc;\n        border: none;\n        cursor: pointer    \n      }\n.keen-theme-builder .custom-color-picker__popover .btn-close:focus {\n  outline: none;\n}\n.keen-theme-builder .custom-color-picker__cover {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: -1;\n    }\n.keen-theme-builder .custom-color-picker__color {\n      height: 32px;\n      width: 32px;\n      border-radius: 4px 0 0 4px;\n      border-radius: 4px 0 0 4px;\n      border-right: 1px solid #ccc;\n      border-right: 1px solid #ccc;\n    }\n.keen-theme-builder .custom-color-picker__swatch {\n      cursor: pointer;\n    }\n.keen-theme-builder .button-group {\n    min-height: 34px;\n    min-height: 34px;\n  }\n.keen-theme-builder .button-group__title {\n      margin-bottom: 10px;\n      margin-bottom: 10px;\n      font-size: 0.875rem;\n      font-size: 0.875rem;\n      line-height: 1.285;\n      line-height: 1.285;\n    }\n.keen-theme-builder .button-group__wrapper {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: center;\n          align-items: center;\n    }\n.keen-theme-builder .button-group__label {\n      margin: 0;\n      padding: 0.5rem 0.75rem;\n      min-width: 2.375rem;\n      min-height: 34px;\n      min-height: 34px;\n      -ms-flex: 1;\n          flex: 1;\n      position: relative;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n      text-align: center;\n      font-size: 0.875rem;\n      font-size: 0.875rem;\n      line-height: 1.285;\n      line-height: 1.285;\n      background-color: #fdfdfd;\n      background-color: #fdfdfd;\n      color: #000;\n      color: #000;\n      border-radius: 0;\n      cursor: pointer;\n      overflow: hidden;\n      -webkit-box-shadow: 0 0 0 1px #ccc;\n              box-shadow: 0 0 0 1px #ccc;\n      box-shadow: 0 0 0 1px #ccc\n    }\n.keen-theme-builder .button-group__label:hover {\n  -webkit-box-shadow: 0 0 0 1px #44B7DC;\n          box-shadow: 0 0 0 1px #44B7DC;\n  box-shadow: 0 0 0 1px #44B7DC;\n  z-index: 2;\n}\n.keen-theme-builder .button-group__label.active {\n  background-color: #D9EFFA;\n  background-color: #D9EFFA;\n  color: #44B7DC;\n  color: #44B7DC;\n  -webkit-box-shadow: 0 0 0 1px #44B7DC;\n          box-shadow: 0 0 0 1px #44B7DC;\n  box-shadow: 0 0 0 1px #44B7DC;\n  z-index: 2;\n}\n.keen-theme-builder .button-group__label:first-child {\n  border-radius: 4px 0 0 4px;\n  border-radius: 4px 0 0 4px;\n}\n.keen-theme-builder .button-group__label:last-child {\n  border-radius: 0 4px 4px 0;\n  border-radius: 0 4px 4px 0;\n}\n.keen-theme-builder .button-group__input {\n      position: absolute;\n      left: -999px;\n    }\n.keen-theme-builder .custom-dropdown__control {\n      padding-left: 0.75rem;\n      padding-right: 0.5rem;\n      min-height: 34px;\n      min-height: 34px;\n      min-width: 90px;\n      font-size: 0.875rem;\n      font-size: 0.875rem;\n      line-height: 1.285;\n      line-height: 1.285;\n      background-color: #fff;\n      background-color: #fff;\n      border: 1px solid #ccc;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      border-radius: 4px;\n      -webkit-box-shadow: none;\n              box-shadow: none\n    }\n.keen-theme-builder .custom-dropdown__control:hover {\n  border-color: #44B7DC;\n  border-color: #44B7DC;\n}\n.keen-theme-builder .custom-dropdown__menu {\n      font-size: 0.875rem;\n      font-size: 0.875rem;\n      line-height: 1.285;\n      line-height: 1.285;\n      z-index: 100;\n    }\n.keen-theme-builder .custom-dropdown__option:hover {\n  background-color: #D9EFFA;\n  background-color: #D9EFFA;\n  color: #000;\n  color: #000;\n}\n.keen-theme-builder .custom-dropdown__option--is-selected {\n        background-color: #44B7DC;\n        background-color: #44B7DC;\n        color: #fff;\n        color: #fff;\n}\n.keen-theme-builder .custom-dropdown__option--is-selected:hover {\n  background-color: #44B7DC;\n  background-color: #44B7DC;\n  color: #fff;\n  color: #fff;\n}\n.keen-theme-builder .custom-dropdown__option--is-focused {\n        background-color: #D9EFFA;\n        background-color: #D9EFFA;\n        color: #000;\n        color: #000;\n}\n.keen-theme-builder .custom-dropdown__indicator {\n      padding: 0;\n      color: #ccc;\n      color: #ccc;\n    }\n.keen-theme-builder .custom-dropdown__indicator-separator {\n        display: none;\n      }\n.keen-theme-builder .custom-dropdown__value-container {\n        padding: 0;\n      }\n.keen-theme-builder .dropdown__label {\n      display: block;\n      margin-bottom: 10px;\n      margin-bottom: 10px;\n      font-size: 0.875rem;\n      font-size: 0.875rem;\n      line-height: 1.285;\n      line-height: 1.285;\n    }\n.keen-theme-builder .form-input__label {\n      display: inline-block;\n      margin-bottom: 10px;\n      margin-bottom: 10px;\n      font-size: 0.875rem;\n      font-size: 0.875rem;\n      line-height: 1.285;\n      line-height: 1.285;\n    }\n.keen-theme-builder .form-input__input {\n      width: 100%;\n      min-height: 34px;\n      min-height: 34px;\n      padding: 0.4375rem 0.75rem;\n      display: block;\n      font-size: 0.875rem;\n      font-size: 0.875rem;\n      line-height: 1.285;\n      line-height: 1.285;\n      border-radius: 4px;\n      border-radius: 4px;\n      border: 1px solid #ccc;\n      border: 1px solid #ccc\n    }\n.keen-theme-builder .form-input__input:hover {\n  border-color: #44B7DC;\n  border-color: #44B7DC;\n}\n.keen-theme-builder .color-palette__list {\n      margin: 15px 0;\n      margin: 15px 0;\n      padding: 0;\n      /* min-height: 40px; */\n      list-style: none;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -ms-flex-align: center;\n          align-items: center;\n    }\n.keen-theme-builder .color-palette__list .color-picker__popover {\n        top: auto;\n        bottom: 100%;\n        left: 0;\n        z-index: 10;\n      }\n.keen-theme-builder .color-palette__button {\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n      border: none;\n      border-radius: 2px;\n      background-color: rgba(0, 0, 0, 0.2);\n      cursor: pointer;\n      opacity: 0;\n      -webkit-transition: background-color 250ms ease-in,\n        opacity 250ms ease-in;\n      -o-transition: background-color 250ms ease-in,\n        opacity 250ms ease-in;\n      transition: background-color 250ms ease-in,\n        opacity 250ms ease-in\n    }\n.keen-theme-builder .color-palette__button:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.keen-theme-builder .color-palette .btn-edit,\n    .keen-theme-builder .color-palette .btn-remove {\n      position: absolute;\n      top: 5px;\n      z-index: 1;\n    }\n.keen-theme-builder .color-palette .btn-edit {\n      left: 5px;\n    }\n.keen-theme-builder .color-palette .btn-remove {\n      right: 5px;\n    }\n.keen-theme-builder .color-palette .btn-list {\n      padding: 0.5rem 0.75rem;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      font-size: 0.875rem;\n      font-size: 0.875rem;\n      line-height: 1.285;\n      line-height: 1.285;\n      color: #44B7DC;\n      color: #44B7DC;\n      background-color: #fff;\n      background-color: #fff;\n      border-radius: 4px;\n      border-radius: 4px;\n      border: 1px solid #ccc;\n      border: 1px solid #ccc;\n      -webkit-transition: background-color 250ms ease-in;\n      -o-transition: background-color 250ms ease-in;\n      transition: background-color 250ms ease-in\n    }\n.keen-theme-builder .color-palette .btn-list:hover {\n  background-color: #F3F7F9;\n  background-color: #F3F7F9;\n}\n.keen-theme-builder .color-palette__item {\n      position: relative;\n      display: -ms-flexbox;\n      display: flex\n    }\n.keen-theme-builder .color-palette__item:hover .color-palette__button {\n          opacity: 1 !important;\n}\n.keen-theme-builder .color-palette__trigger {\n      cursor: -webkit-grab;\n      cursor: grab;\n    }\n.keen-theme-builder .react-tabs__tab {\n      margin: 0;\n      padding: 0.75rem;\n      font-size: 0.875rem;\n      font-size: 0.875rem;\n      line-height: 1.285;\n      line-height: 1.285;\n      text-align: center;\n      -ms-flex: 1;\n          flex: 1;\n      border: none;\n      border-radius: 0;\n      background-color: #fff;\n      background-color: #fff;\n      -webkit-box-shadow: inset 0 -1px 0 #ccc;\n              box-shadow: inset 0 -1px 0 #ccc;\n      box-shadow: inset 0 -1px 0 #ccc\n    }\n.keen-theme-builder .react-tabs__tab:focus {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.keen-theme-builder .react-tabs__tab:focus:after {\n  content: none;\n}\n.keen-theme-builder .react-tabs__tab-list {\n        margin: 0;\n        display: -ms-flexbox;\n        display: flex;\n        border-color: #d6d6d6;\n}\n.keen-theme-builder .react-tabs__tab-panel {\n        padding: 15px;\n        padding: 15px;\n        border: none;\n}\n.keen-theme-builder .react-tabs__tab--selected {\n        font-weight: 700;\n        -webkit-box-shadow: inset 0 -3px 0 #44B7DC;\n                box-shadow: inset 0 -3px 0 #44B7DC;\n        box-shadow: inset 0 -3px 0 #44B7DC;\n}\n.keen-theme-builder .font-picker__title {\n      margin-bottom: 10px;\n      margin-bottom: 10px;\n      font-size: 0.875rem;\n      font-size: 0.875rem;\n      line-height: 1.285;\n      line-height: 1.285;\n    }",
          ''
        ]);
    },
    function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        o = n.n(r),
        a = n(1),
        i = n.n(a),
        l = n(87),
        s = n(7),
        c = n.n(s),
        u = n(13),
        f = n.n(u),
        d = n(8),
        p = n(2),
        h = n.n(p),
        b = n(88),
        g = n.n(b),
        m = n(34),
        v = n(89),
        _ = n.n(v),
        y = n(19);
      var x = {
        autocollector: {
          colors: [
            '#5E77FF',
            '#9C60FE',
            '#F162FE',
            '#FD65B7',
            '#FD6768',
            '#FDB86A',
            '#F2FC6C',
            '#A5FC6E',
            '#71FB85',
            '#73FBD0',
            '#76DDFA',
            '#76f4fa',
            '#bb76fa',
            '#fa76bf'
          ]
        },
        modern: {
          colors: [
            '#45B2E8',
            '#D9540D',
            '#2CAB72',
            '#2C4BAB',
            '#EDDD02',
            '#E84545',
            '#E845CE',
            '#5FCEC9',
            '#E89F45',
            '#28E43F',
            '#B765C0',
            '#458AE8',
            '#AB2C2C',
            '#AB2C75',
            '#27E5FF',
            '#7168F2',
            '#FF932B',
            '#855D00',
            '#ACE845',
            '#1C91B4'
          ]
        },
        dracula: {
          colors: [
            '#8be9fd',
            '#50fa7b',
            '#ffb86c',
            '#ff79c6',
            '#bd93f9',
            '#ff5555',
            '#f1fa8c'
          ]
        }
      };
      function w() {
        return (w =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var k = o.a.createElement('path', {
          fill: 'currentColor',
          d:
            'M333.49 238a122 122 0 0027-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 00-16 16v48a16 16 0 0016 16h31.87v288H34a16 16 0 00-16 16v48a16 16 0 0016 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 010 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 010 112z'
        }),
        S = function(e) {
          return o.a.createElement(
            'svg',
            w(
              {
                'aria-hidden': 'true',
                'data-prefix': 'fas',
                'data-icon': 'bold',
                className:
                  'bold-solid_svg__svg-inline--fa bold-solid_svg__fa-bold bold-solid_svg__fa-w-12',
                viewBox: '0 0 384 512'
              },
              e
            ),
            k
          );
        };
      function E() {
        return (E =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var z = o.a.createElement('path', {
          fill: 'currentColor',
          d:
            'M320 48v32a16 16 0 01-16 16h-62.76l-80 320H208a16 16 0 0116 16v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h62.76l80-320H112a16 16 0 01-16-16V48a16 16 0 0116-16h192a16 16 0 0116 16z'
        }),
        O = function(e) {
          return o.a.createElement(
            'svg',
            E(
              {
                'aria-hidden': 'true',
                'data-prefix': 'fas',
                'data-icon': 'italic',
                className:
                  'italic-solid_svg__svg-inline--fa italic-solid_svg__fa-italic italic-solid_svg__fa-w-10',
                viewBox: '0 0 320 512'
              },
              e
            ),
            z
          );
        };
      function C() {
        return (C =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var j = o.a.createElement('path', {
          fill: 'currentColor',
          d:
            'M12.83 352h262.34A12.82 12.82 0 00288 339.17v-38.34A12.82 12.82 0 00275.17 288H12.83A12.82 12.82 0 000 300.83v38.34A12.82 12.82 0 0012.83 352zm0-256h262.34A12.82 12.82 0 00288 83.17V44.83A12.82 12.82 0 00275.17 32H12.83A12.82 12.82 0 000 44.83v38.34A12.82 12.82 0 0012.83 96zM432 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z'
        }),
        F = function(e) {
          return o.a.createElement(
            'svg',
            C(
              {
                'aria-hidden': 'true',
                'data-prefix': 'fas',
                'data-icon': 'align-left',
                className:
                  'align-left-solid_svg__svg-inline--fa align-left-solid_svg__fa-align-left align-left-solid_svg__fa-w-14',
                viewBox: '0 0 448 512'
              },
              e
            ),
            j
          );
        };
      function T() {
        return (T =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var A = o.a.createElement('path', {
          fill: 'currentColor',
          d:
            'M16 224h416a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16zm416 192H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm3.17-384H172.83A12.82 12.82 0 00160 44.83v38.34A12.82 12.82 0 00172.83 96h262.34A12.82 12.82 0 00448 83.17V44.83A12.82 12.82 0 00435.17 32zm0 256H172.83A12.82 12.82 0 00160 300.83v38.34A12.82 12.82 0 00172.83 352h262.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288z'
        }),
        P = function(e) {
          return o.a.createElement(
            'svg',
            T(
              {
                'aria-hidden': 'true',
                'data-prefix': 'fas',
                'data-icon': 'align-right',
                className:
                  'align-right-solid_svg__svg-inline--fa align-right-solid_svg__fa-align-right align-right-solid_svg__fa-w-14',
                viewBox: '0 0 448 512'
              },
              e
            ),
            A
          );
        };
      function N() {
        return (N =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var M = o.a.createElement('path', {
          fill: 'currentColor',
          d:
            'M432 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zM108.1 96h231.81A12.09 12.09 0 00352 83.9V44.09A12.09 12.09 0 00339.91 32H108.1A12.09 12.09 0 0096 44.09V83.9A12.1 12.1 0 00108.1 96zm231.81 256A12.09 12.09 0 00352 339.9v-39.81A12.09 12.09 0 00339.91 288H108.1A12.09 12.09 0 0096 300.09v39.81a12.1 12.1 0 0012.1 12.1z'
        }),
        B = function(e) {
          return o.a.createElement(
            'svg',
            N(
              {
                'aria-hidden': 'true',
                'data-prefix': 'fas',
                'data-icon': 'align-center',
                className:
                  'align-center-solid_svg__svg-inline--fa align-center-solid_svg__fa-align-center align-center-solid_svg__fa-w-14',
                viewBox: '0 0 448 512'
              },
              e
            ),
            M
          );
        };
      function I() {
        return (I =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var R = o.a.createElement(
          'defs',
          null,
          o.a.createElement('path', {
            id: 'vertical-align-bottom_svg__a',
            d:
              'M24.184 24c.727 0 1.316.448 1.316 1s-.59 1-1.316 1H1.816C1.089 26 .5 25.552.5 25s.59-1 1.316-1h22.368zM13 4c.552 0 1 .61 1 1.364v11.325l3.306.001a.5.5 0 01.41.788l-.056.066-4.308 4.307a.5.5 0 01-.638.058l-.069-.058-4.308-4.307a.5.5 0 01.268-.847l.086-.007L12 16.689V5.364C12 4.61 12.448 4 13 4z'
          })
        ),
        L = o.a.createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          o.a.createElement(
            'mask',
            { id: 'vertical-align-bottom_svg__b', fill: '#fff' },
            o.a.createElement('use', {
              xlinkHref: '#vertical-align-bottom_svg__a'
            })
          ),
          o.a.createElement('use', {
            fill: '#000',
            fillRule: 'nonzero',
            xlinkHref: '#vertical-align-bottom_svg__a'
          }),
          o.a.createElement(
            'g',
            { fill: '#000', mask: 'url(#vertical-align-bottom_svg__b)' },
            o.a.createElement('path', { d: 'M-160-36.09h340v100h-340z' })
          )
        ),
        D = function(e) {
          return o.a.createElement('svg', I({ viewBox: '0 0 26 30' }, e), R, L);
        };
      function H() {
        return (H =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var U = o.a.createElement(
          'defs',
          null,
          o.a.createElement('path', {
            id: 'vertical-align-middle_svg__a',
            d:
              'M13.352 18.146l4.308 4.308a.5.5 0 01-.354.854L14 23.307V28.5a1 1 0 01-2 0v-5.193H8.691a.5.5 0 01-.354-.853l4.308-4.308a.5.5 0 01.707 0zM24.184 14c.727 0 1.316.448 1.316 1s-.59 1-1.316 1H1.816C1.089 16 .5 15.552.5 15s.59-1 1.316-1h22.368zM13 .5a1 1 0 011 1v5.19h3.306a.5.5 0 01.41.788l-.056.066-4.308 4.307a.5.5 0 01-.638.058l-.069-.058-4.308-4.307a.5.5 0 01.268-.847l.086-.007H12V1.5a1 1 0 011-1z'
          })
        ),
        W = o.a.createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          o.a.createElement(
            'mask',
            { id: 'vertical-align-middle_svg__b', fill: '#fff' },
            o.a.createElement('use', {
              xlinkHref: '#vertical-align-middle_svg__a'
            })
          ),
          o.a.createElement('use', {
            fill: '#000',
            fillRule: 'nonzero',
            xlinkHref: '#vertical-align-middle_svg__a'
          }),
          o.a.createElement(
            'g',
            { fill: '#000', mask: 'url(#vertical-align-middle_svg__b)' },
            o.a.createElement('path', { d: 'M-160-36.09h340v100h-340z' })
          )
        ),
        Z = function(e) {
          return o.a.createElement('svg', H({ viewBox: '0 0 26 30' }, e), U, W);
        };
      function q() {
        return (q =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var V = o.a.createElement(
          'defs',
          null,
          o.a.createElement('path', {
            id: 'vertical-align-top_svg__a',
            d:
              'M13.352 8.146l4.308 4.308a.5.5 0 01-.354.854L14 13.307v11.33c0 .752-.448 1.363-1 1.363s-1-.61-1-1.364V13.307H8.691a.5.5 0 01-.354-.853l4.308-4.308a.5.5 0 01.707 0zM24.184 4c.727 0 1.316.448 1.316 1s-.59 1-1.316 1H1.816C1.089 6 .5 5.552.5 5s.59-1 1.316-1h22.368z'
          })
        ),
        X = o.a.createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          o.a.createElement(
            'mask',
            { id: 'vertical-align-top_svg__b', fill: '#fff' },
            o.a.createElement('use', {
              xlinkHref: '#vertical-align-top_svg__a'
            })
          ),
          o.a.createElement('use', {
            fill: '#000',
            fillRule: 'nonzero',
            xlinkHref: '#vertical-align-top_svg__a'
          }),
          o.a.createElement(
            'g',
            { fill: '#000', mask: 'url(#vertical-align-top_svg__b)' },
            o.a.createElement('path', { d: 'M-160-36.09h340v100h-340z' })
          )
        ),
        Y = function(e) {
          return o.a.createElement('svg', q({ viewBox: '0 0 26 30' }, e), V, X);
        };
      function G(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var $ = {
          metric: {
            query: {
              analysis_type: 'count',
              event_collection: 'purchases',
              filters: [],
              group_by: null,
              interval: null,
              timeframe: { start: '2014-01-01', end: '2015-01-01' },
              timezone: 3600
            },
            result: 255
          },
          bar: {
            query: {
              analysis_type: 'count',
              event_collection: 'mobile_purchases',
              timeframe: {
                start: '2019-03-20T00:00:00.000-00:00',
                end: '2019-03-26T00:00:00.000-00:00'
              },
              group_by: ['product.name'],
              interval: 'daily',
              timezone: 7200
            },
            result: [
              {
                value: [
                  { 'product.name': 'apps', result: 53 },
                  { 'product.name': 'books', result: 47 },
                  { 'product.name': 'games', result: 24 },
                  { 'product.name': 'sounds', result: 76 }
                ],
                timeframe: {
                  start: '2019-03-20T00:00:00.000Z',
                  end: '2019-03-21T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 32 },
                  { 'product.name': 'books', result: 24 },
                  { 'product.name': 'games', result: 56 },
                  { 'product.name': 'sounds', result: 32 }
                ],
                timeframe: {
                  start: '2019-03-21T00:00:00.000Z',
                  end: '2019-03-22T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 27 },
                  { 'product.name': 'books', result: 32 },
                  { 'product.name': 'games', result: 18 },
                  { 'product.name': 'sounds', result: 33 }
                ],
                timeframe: {
                  start: '2019-03-22T00:00:00.000Z',
                  end: '2019-03-23T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 68 },
                  { 'product.name': 'books', result: 56 },
                  { 'product.name': 'games', result: 65 },
                  { 'product.name': 'sounds', result: 59 }
                ],
                timeframe: {
                  start: '2019-03-23T00:00:00.000Z',
                  end: '2019-03-24T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 38 },
                  { 'product.name': 'books', result: 48 },
                  { 'product.name': 'games', result: 50 },
                  { 'product.name': 'sounds', result: 26 }
                ],
                timeframe: {
                  start: '2019-03-24T00:00:00.000Z',
                  end: '2019-03-25T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 34 },
                  { 'product.name': 'books', result: 15 },
                  { 'product.name': 'games', result: 18 },
                  { 'product.name': 'sounds', result: 14 }
                ],
                timeframe: {
                  start: '2019-03-25T00:00:00.000Z',
                  end: '2019-03-26T00:00:00.000Z'
                }
              }
            ]
          },
          line: {
            query: {
              analysis_type: 'count',
              event_collection: 'mobile_purchases',
              timeframe: {
                start: '2019-03-20T00:00:00.000-00:00',
                end: '2019-03-26T00:00:00.000-00:00'
              },
              group_by: ['product.name'],
              interval: 'daily',
              timezone: 7200
            },
            result: [
              {
                value: [
                  { 'product.name': 'apps', result: 53 },
                  { 'product.name': 'books', result: 47 },
                  { 'product.name': 'games', result: 24 },
                  { 'product.name': 'sounds', result: 76 }
                ],
                timeframe: {
                  start: '2019-03-20T00:00:00.000Z',
                  end: '2019-03-21T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 32 },
                  { 'product.name': 'books', result: 24 },
                  { 'product.name': 'games', result: 56 },
                  { 'product.name': 'sounds', result: 32 }
                ],
                timeframe: {
                  start: '2019-03-21T00:00:00.000Z',
                  end: '2019-03-22T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 27 },
                  { 'product.name': 'books', result: 32 },
                  { 'product.name': 'games', result: 18 },
                  { 'product.name': 'sounds', result: 33 }
                ],
                timeframe: {
                  start: '2019-03-22T00:00:00.000Z',
                  end: '2019-03-23T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 68 },
                  { 'product.name': 'books', result: 56 },
                  { 'product.name': 'games', result: 65 },
                  { 'product.name': 'sounds', result: 59 }
                ],
                timeframe: {
                  start: '2019-03-23T00:00:00.000Z',
                  end: '2019-03-24T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 38 },
                  { 'product.name': 'books', result: 48 },
                  { 'product.name': 'games', result: 50 },
                  { 'product.name': 'sounds', result: 26 }
                ],
                timeframe: {
                  start: '2019-03-24T00:00:00.000Z',
                  end: '2019-03-25T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 34 },
                  { 'product.name': 'books', result: 15 },
                  { 'product.name': 'games', result: 18 },
                  { 'product.name': 'sounds', result: 14 }
                ],
                timeframe: {
                  start: '2019-03-25T00:00:00.000Z',
                  end: '2019-03-26T00:00:00.000Z'
                }
              }
            ]
          },
          spline: {
            query: {
              analysis_type: 'count',
              event_collection: 'mobile_purchases',
              timeframe: {
                start: '2019-03-20T00:00:00.000-00:00',
                end: '2019-03-26T00:00:00.000-00:00'
              },
              group_by: ['product.name'],
              interval: 'daily',
              timezone: 7200
            },
            result: [
              {
                value: [
                  { 'product.name': 'apps', result: 53 },
                  { 'product.name': 'books', result: 47 },
                  { 'product.name': 'games', result: 24 },
                  { 'product.name': 'sounds', result: 76 }
                ],
                timeframe: {
                  start: '2019-03-20T00:00:00.000Z',
                  end: '2019-03-21T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 32 },
                  { 'product.name': 'books', result: 24 },
                  { 'product.name': 'games', result: 56 },
                  { 'product.name': 'sounds', result: 32 }
                ],
                timeframe: {
                  start: '2019-03-21T00:00:00.000Z',
                  end: '2019-03-22T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 27 },
                  { 'product.name': 'books', result: 32 },
                  { 'product.name': 'games', result: 18 },
                  { 'product.name': 'sounds', result: 33 }
                ],
                timeframe: {
                  start: '2019-03-22T00:00:00.000Z',
                  end: '2019-03-23T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 68 },
                  { 'product.name': 'books', result: 56 },
                  { 'product.name': 'games', result: 65 },
                  { 'product.name': 'sounds', result: 59 }
                ],
                timeframe: {
                  start: '2019-03-23T00:00:00.000Z',
                  end: '2019-03-24T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 38 },
                  { 'product.name': 'books', result: 48 },
                  { 'product.name': 'games', result: 50 },
                  { 'product.name': 'sounds', result: 26 }
                ],
                timeframe: {
                  start: '2019-03-24T00:00:00.000Z',
                  end: '2019-03-25T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 34 },
                  { 'product.name': 'books', result: 15 },
                  { 'product.name': 'games', result: 18 },
                  { 'product.name': 'sounds', result: 14 }
                ],
                timeframe: {
                  start: '2019-03-25T00:00:00.000Z',
                  end: '2019-03-26T00:00:00.000Z'
                }
              }
            ]
          },
          step: {
            query: {
              analysis_type: 'count',
              event_collection: 'mobile_purchases',
              timeframe: {
                start: '2019-03-20T00:00:00.000-00:00',
                end: '2019-03-26T00:00:00.000-00:00'
              },
              group_by: ['product.name'],
              interval: 'daily',
              timezone: 7200
            },
            result: [
              {
                value: [
                  { 'product.name': 'apps', result: 53 },
                  { 'product.name': 'books', result: 47 },
                  { 'product.name': 'games', result: 24 },
                  { 'product.name': 'sounds', result: 76 }
                ],
                timeframe: {
                  start: '2019-03-20T00:00:00.000Z',
                  end: '2019-03-21T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 32 },
                  { 'product.name': 'books', result: 24 },
                  { 'product.name': 'games', result: 56 },
                  { 'product.name': 'sounds', result: 32 }
                ],
                timeframe: {
                  start: '2019-03-21T00:00:00.000Z',
                  end: '2019-03-22T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 27 },
                  { 'product.name': 'books', result: 32 },
                  { 'product.name': 'games', result: 18 },
                  { 'product.name': 'sounds', result: 33 }
                ],
                timeframe: {
                  start: '2019-03-22T00:00:00.000Z',
                  end: '2019-03-23T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 68 },
                  { 'product.name': 'books', result: 56 },
                  { 'product.name': 'games', result: 65 },
                  { 'product.name': 'sounds', result: 59 }
                ],
                timeframe: {
                  start: '2019-03-23T00:00:00.000Z',
                  end: '2019-03-24T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 38 },
                  { 'product.name': 'books', result: 48 },
                  { 'product.name': 'games', result: 50 },
                  { 'product.name': 'sounds', result: 26 }
                ],
                timeframe: {
                  start: '2019-03-24T00:00:00.000Z',
                  end: '2019-03-25T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 34 },
                  { 'product.name': 'books', result: 15 },
                  { 'product.name': 'games', result: 18 },
                  { 'product.name': 'sounds', result: 14 }
                ],
                timeframe: {
                  start: '2019-03-25T00:00:00.000Z',
                  end: '2019-03-26T00:00:00.000Z'
                }
              }
            ]
          },
          area: {
            query: {
              analysis_type: 'count',
              event_collection: 'mobile_purchases',
              timeframe: {
                start: '2019-03-20T00:00:00.000-00:00',
                end: '2019-03-26T00:00:00.000-00:00'
              },
              group_by: ['product.name'],
              interval: 'daily',
              timezone: 7200
            },
            result: [
              {
                value: [
                  { 'product.name': 'apps', result: 53 },
                  { 'product.name': 'books', result: 47 },
                  { 'product.name': 'games', result: 24 },
                  { 'product.name': 'sounds', result: 76 }
                ],
                timeframe: {
                  start: '2019-03-20T00:00:00.000Z',
                  end: '2019-03-21T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 32 },
                  { 'product.name': 'books', result: 24 },
                  { 'product.name': 'games', result: 56 },
                  { 'product.name': 'sounds', result: 32 }
                ],
                timeframe: {
                  start: '2019-03-21T00:00:00.000Z',
                  end: '2019-03-22T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 27 },
                  { 'product.name': 'books', result: 32 },
                  { 'product.name': 'games', result: 18 },
                  { 'product.name': 'sounds', result: 33 }
                ],
                timeframe: {
                  start: '2019-03-22T00:00:00.000Z',
                  end: '2019-03-23T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 68 },
                  { 'product.name': 'books', result: 56 },
                  { 'product.name': 'games', result: 65 },
                  { 'product.name': 'sounds', result: 59 }
                ],
                timeframe: {
                  start: '2019-03-23T00:00:00.000Z',
                  end: '2019-03-24T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 38 },
                  { 'product.name': 'books', result: 48 },
                  { 'product.name': 'games', result: 50 },
                  { 'product.name': 'sounds', result: 26 }
                ],
                timeframe: {
                  start: '2019-03-24T00:00:00.000Z',
                  end: '2019-03-25T00:00:00.000Z'
                }
              },
              {
                value: [
                  { 'product.name': 'apps', result: 34 },
                  { 'product.name': 'books', result: 15 },
                  { 'product.name': 'games', result: 18 },
                  { 'product.name': 'sounds', result: 14 }
                ],
                timeframe: {
                  start: '2019-03-25T00:00:00.000Z',
                  end: '2019-03-26T00:00:00.000Z'
                }
              }
            ]
          },
          pie: {
            query: {
              analysis_type: 'count',
              event_collection: 'mobile_purchases',
              timeframe: {
                start: '2019-03-20T00:00:00.000-00:00',
                end: '2019-03-26T00:00:00.000-00:00'
              },
              group_by: ['product.name'],
              timezone: 7200
            },
            result: [
              { 'product.name': 'apps', result: 252 },
              { 'product.name': 'books', result: 222 },
              { 'product.name': 'games', result: 231 },
              { 'product.name': 'sounds', result: 240 }
            ]
          },
          donut: {
            query: {
              analysis_type: 'count',
              event_collection: 'mobile_purchases',
              timeframe: {
                start: '2019-03-20T00:00:00.000-00:00',
                end: '2019-03-26T00:00:00.000-00:00'
              },
              group_by: ['product.name'],
              timezone: 7200
            },
            result: [
              { 'product.name': 'apps', result: 252 },
              { 'product.name': 'books', result: 222 },
              { 'product.name': 'games', result: 231 },
              { 'product.name': 'sounds', result: 240 }
            ]
          },
          gauge: {
            query: {
              analysis_type: 'count',
              event_collection: 'mobile_purchases',
              timeframe: {
                start: '2019-03-21T00:00:00.000-00:00',
                end: '2019-03-22T00:00:00.000-00:00'
              },
              filters: [
                {
                  property_name: 'product.name',
                  operator: 'eq',
                  property_value: 'games'
                }
              ],
              timezone: 7200
            },
            result: 56
          },
          funnel: {
            steps: [
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'pageviews',
                optional: !1,
                inverted: !1
              },
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'signups',
                optional: !1,
                inverted: !1
              },
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'purchases',
                optional: !1,
                inverted: !1
              }
            ],
            result: [1128, 317, 89]
          },
          'horizontal-funnel': {
            steps: [
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'pageviews',
                optional: !1,
                inverted: !1
              },
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'signups',
                optional: !1,
                inverted: !1
              },
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'purchases',
                optional: !1,
                inverted: !1
              }
            ],
            result: [1128, 317, 89]
          },
          'funnel-3d': {
            steps: [
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'pageviews',
                optional: !1,
                inverted: !1
              },
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'banner_visibility',
                optional: !1,
                inverted: !1
              },
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'banner_clicks',
                optional: !1,
                inverted: !1
              },
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'signups',
                optional: !1,
                inverted: !1
              }
            ],
            result: [1128, 848, 581, 317]
          },
          'horizontal-funnel-3d': {
            steps: [
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'pageviews',
                optional: !1,
                inverted: !1
              },
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'banner_visibility',
                optional: !1,
                inverted: !1
              },
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'banner_clicks',
                optional: !1,
                inverted: !1
              },
              {
                with_actors: !1,
                actor_property: 'user.uuid',
                filters: [],
                timeframe: {
                  start: '2019-03-13T00:00:00+00:00',
                  end: '2019-08-14T00:00:00+00:00'
                },
                timezone: null,
                event_collection: 'signups',
                optional: !1,
                inverted: !1
              }
            ],
            result: [1128, 848, 581, 317]
          },
          choropleth: {
            query: {
              analysis_type: 'count',
              event_collection: 'homepage_views',
              timeframe: {
                start: '2019-04-13T00:00:00.000-00:00',
                end: '2019-04-14T00:00:00.000-00:00'
              },
              group_by: ['geo.country'],
              timezone: 3600
            },
            result: [
              { 'geo.country': 'Afghanistan', result: 49 },
              { 'geo.country': 'Albania', result: 61 },
              { 'geo.country': 'Algeria', result: 2 },
              { 'geo.country': 'Andorra', result: 1 },
              { 'geo.country': 'Angola', result: 15 },
              { 'geo.country': 'Antarctica', result: 23 },
              { 'geo.country': 'Argentina', result: 479 },
              { 'geo.country': 'Armenia', result: 73 },
              { 'geo.country': 'Australia', result: 339 },
              { 'geo.country': 'Austria', result: 10 },
              { 'geo.country': 'Azerbaijan', result: 71 },
              { 'geo.country': 'Bahamas', result: 59 },
              { 'geo.country': 'Bangladesh', result: 3 },
              { 'geo.country': 'Belarus', result: 9 },
              { 'geo.country': 'Belgium', result: 1 },
              { 'geo.country': 'Bolivia', result: 34 },
              { 'geo.country': 'Botswana', result: 7 },
              { 'geo.country': 'Brazil', result: 879 },
              { 'geo.country': 'Bulgaria', result: 3 },
              { 'geo.country': 'Cambodia', result: 52 },
              { 'geo.country': 'Cameroon', result: 3 },
              { 'geo.country': 'Canada', result: 192 },
              { 'geo.country': 'Chile', result: 37 },
              { 'geo.country': 'China', result: 587 },
              { 'geo.country': 'Colombia', result: 222 },
              { 'geo.country': 'Congo', result: 63 },
              { 'geo.country': 'Croatia', result: 4 },
              { 'geo.country': 'Denmark', result: 455 },
              { 'geo.country': 'Ecuador', result: 39 },
              { 'geo.country': 'Egypt', result: 133 },
              { 'geo.country': 'England', result: 297 },
              { 'geo.country': 'Estonia', result: 31 },
              { 'geo.country': 'Finland', result: 460 },
              { 'geo.country': 'France', result: 452 },
              { 'geo.country': 'Gambia', result: 7 },
              { 'geo.country': 'Germany', result: 155 },
              { 'geo.country': 'Ghana', result: 16 },
              { 'geo.country': 'Greece', result: 30 },
              { 'geo.country': 'Guatemala', result: 9 },
              { 'geo.country': 'Honduras', result: 9 },
              { 'geo.country': 'Hungary', result: 8 },
              { 'geo.country': 'Iceland', result: 18 },
              { 'geo.country': 'India', result: 478 },
              { 'geo.country': 'Indonesia', result: 17 },
              { 'geo.country': 'Iran', result: 40 },
              { 'geo.country': 'Iraq', result: 17 },
              { 'geo.country': 'Ireland', result: 46 },
              { 'geo.country': 'Israel', result: 28 },
              { 'geo.country': 'Italy', result: 25 },
              { 'geo.country': 'Jamaica', result: 21 },
              { 'geo.country': 'Japan', result: 97 },
              { 'geo.country': 'Liechtenstein', result: 22 },
              { 'geo.country': 'Madagascar', result: 9 },
              { 'geo.country': 'Malta', result: 1 },
              { 'geo.country': 'Mexico', result: 31 },
              { 'geo.country': 'Moldova', result: 39 },
              { 'geo.country': 'Mongolia', result: 54 },
              { 'geo.country': 'Netherlands', result: 28 },
              { 'geo.country': 'New Zealand', result: 16 },
              { 'geo.country': 'Norway', result: 22 },
              { 'geo.country': 'Pakistan', result: 45 },
              { 'geo.country': 'Paraguay', result: 59 },
              { 'geo.country': 'Poland', result: 667 },
              { 'geo.country': 'Portugal', result: 29 },
              { 'geo.country': 'Romania', result: 1 },
              { 'geo.country': 'Russia', result: 600 },
              { 'geo.country': 'Samoa', result: 62 },
              { 'geo.country': 'Scotland', result: 9 },
              { 'geo.country': 'Senegal', result: 15 },
              { 'geo.country': 'Serbia', result: 17 },
              { 'geo.country': 'Singapore', result: 9 },
              { 'geo.country': 'Slovakia', result: 27 },
              { 'geo.country': 'Slovenia', result: 1 },
              { 'geo.country': 'Somalia', result: 9 },
              { 'geo.country': 'South Korea', result: 61 },
              { 'geo.country': 'Spain', result: 60 },
              { 'geo.country': 'Sweden', result: 83 },
              { 'geo.country': 'Switzerland', result: 13 },
              { 'geo.country': 'Thailand', result: 9 },
              { 'geo.country': 'Ukraine', result: 13 },
              { 'geo.country': 'United States', result: 1299 },
              { 'geo.country': 'Uruguay', result: 12 },
              { 'geo.country': 'Venezuela', result: 63 },
              { 'geo.country': 'Vietnam', result: 30 },
              { 'geo.country': 'Wales', result: 91 }
            ]
          },
          'choropleth-us': {
            query: {
              analysis_type: 'count',
              event_collection: 'homepage_views',
              timeframe: {
                start: '2019-04-13T00:00:00.000-00:00',
                end: '2019-04-14T00:00:00.000-00:00'
              },
              group_by: ['geo.province'],
              filters: [
                {
                  property_name: 'geo.country',
                  operator: 'eq',
                  property_value: 'United States'
                }
              ],
              timezone: 3600
            },
            result: [
              { result: 6, 'geo.province': 'Alabama' },
              { result: 17, 'geo.province': 'Alaska' },
              { result: 9, 'geo.province': 'American Samoa' },
              { result: 11, 'geo.province': 'Arizona' },
              { result: 14, 'geo.province': 'Arkansas' },
              { result: 21, 'geo.province': 'California' },
              { result: 11, 'geo.province': 'Connecticut' },
              { result: 53, 'geo.province': 'Delaware' },
              { result: 66, 'geo.province': 'Florida' },
              { result: 26, 'geo.province': 'Georgia' },
              { result: 51, 'geo.province': 'Hawaii' },
              { result: 46, 'geo.province': 'Idaho' },
              { result: 9, 'geo.province': 'Illinois' },
              { result: 77, 'geo.province': 'Indiana' },
              { result: 7, 'geo.province': 'Iowa' },
              { result: 11, 'geo.province': 'Kansas' },
              { result: 15, 'geo.province': 'Kentucky' },
              { result: 157, 'geo.province': 'Louisiana' },
              { result: 27, 'geo.province': 'Maine' },
              { result: 16, 'geo.province': 'Maryland' },
              { result: 19, 'geo.province': 'Massachusetts' },
              { result: 54, 'geo.province': 'Michigan' },
              { result: 21, 'geo.province': 'Minnesota' },
              { result: 8, 'geo.province': 'Mississippi' },
              { result: 51, 'geo.province': 'Missouri' },
              { result: 8, 'geo.province': 'Montana' },
              { result: 25, 'geo.province': 'Nebraska' },
              { result: 61, 'geo.province': 'Nevada' },
              { result: 27, 'geo.province': 'New Jersey' },
              { result: 39, 'geo.province': 'New Mexico' },
              { result: 47, 'geo.province': 'New York' },
              { result: 18, 'geo.province': 'North Carolina' },
              { result: 54, 'geo.province': 'Ohio' },
              { result: 6, 'geo.province': 'Oklahoma' },
              { result: 9, 'geo.province': 'Oregon' },
              { result: 51, 'geo.province': 'Pennsylvania' },
              { result: 50, 'geo.province': 'Tennessee' },
              { result: 2, 'geo.province': 'Texas' },
              { result: 23, 'geo.province': 'Utah' },
              { result: 5, 'geo.province': 'Vermont' },
              { result: 8, 'geo.province': 'Virginia' },
              { result: 15, 'geo.province': 'Washington' },
              { result: 39, 'geo.province': 'Wisconsin' },
              { result: 9, 'geo.province': 'Wyoming' }
            ]
          },
          table: {
            query: {
              analysis_type: 'extraction',
              event_collection: 'user_action',
              timeframe: {
                start: '2014-02-02T00:00:00.000-00:00',
                end: '2014-02-12T00:00:00.000-00:00'
              },
              property_names: ['user.name', 'battery_level', 'keen.timestamp'],
              timezone: 3600
            },
            result: [
              {
                battery_level: 0.18,
                user: { name: 'Florence Clarke' },
                keen: { timestamp: '2014-02-07T20:29:30.915Z' }
              },
              {
                battery_level: 0.88,
                user: { name: 'Nora Briggs' },
                keen: { timestamp: '2014-02-10T18:39:46.587Z' }
              },
              {
                battery_level: 0.67,
                user: { name: 'Kyle Gonzales' },
                keen: { timestamp: '2014-02-10T10:49:19.067Z' }
              },
              {
                battery_level: 0.47,
                user: { name: 'Mason Chapman' },
                keen: { timestamp: '2014-02-08T14:54:31.495Z' }
              },
              {
                battery_level: 0.73,
                user: { name: 'Mollie Jordan' },
                keen: { timestamp: '2014-02-03T18:12:37.714Z' }
              },
              {
                battery_level: 0.78,
                user: { name: 'Jane Moss' },
                keen: { timestamp: '2014-02-11T10:17:42.047Z' }
              },
              {
                battery_level: 0.83,
                user: { name: 'Donald Boone' },
                keen: { timestamp: '2014-02-06T16:05:58.206Z' }
              },
              {
                battery_level: 0.25,
                user: { name: 'Donald Boone' },
                keen: { timestamp: '2014-02-11T09:39:57.938Z' }
              },
              {
                battery_level: 0.78,
                user: { name: 'Phoebe Mack' },
                keen: { timestamp: '2014-02-07T19:55:08.812Z' }
              },
              {
                battery_level: 0.3,
                user: { name: 'Callie Hansen' },
                keen: { timestamp: '2014-02-09T18:28:00.925Z' }
              },
              {
                battery_level: 0.18,
                user: { name: 'Steven McDonald' },
                keen: { timestamp: '2014-02-02T18:31:27.694Z' }
              },
              {
                battery_level: 0.35,
                user: { name: 'Amanda Obrien' },
                keen: { timestamp: '2014-02-04T12:48:03.587Z' }
              },
              {
                battery_level: 0.5,
                user: { name: 'Joe Chambers' },
                keen: { timestamp: '2014-02-06T12:24:13.906Z' }
              },
              {
                battery_level: 0.59,
                user: { name: 'Fanny Bell' },
                keen: { timestamp: '2014-02-10T12:11:11.525Z' }
              },
              {
                battery_level: 0.58,
                user: { name: 'Dominic Haynes' },
                keen: { timestamp: '2014-02-07T19:23:23.654Z' }
              },
              {
                battery_level: 0.28,
                user: { name: 'Lucas Stone' },
                keen: { timestamp: '2014-02-07T18:49:22.586Z' }
              }
            ]
          }
        },
        K = { label: 'Default', value: '' },
        J = [
          { label: 'Auto', value: 'auto' },
          { label: '10', value: 10 },
          { label: '12', value: 12 },
          { label: '14', value: 14 },
          { label: '16', value: 16 },
          { label: '18', value: 18 },
          { label: '20', value: 20 },
          { label: '24', value: 24 },
          { label: '30', value: 30 },
          { label: '36', value: 36 },
          { label: '48', value: 48 },
          { label: '60', value: 60 },
          { label: '72', value: 72 }
        ],
        Q = [
          { label: o.a.createElement(S, { width: '0.75rem' }), value: 'bold' },
          {
            label: o.a.createElement(O, { width: '0.625rem' }),
            value: 'italic'
          }
        ],
        ee = [
          { label: o.a.createElement(F, { width: '0.75rem' }), value: 'left' },
          {
            label: o.a.createElement(B, { width: '0.75rem' }),
            value: 'center'
          },
          { label: o.a.createElement(P, { width: '0.75rem' }), value: 'right' }
        ],
        te = [
          { label: o.a.createElement(Y, { width: '0.85em' }), value: 'top' },
          { label: o.a.createElement(Z, { width: '0.85em' }), value: 'middle' },
          { label: o.a.createElement(D, { width: '0.85em' }), value: 'bottom' }
        ],
        ne = [
          { value: 'default', label: 'Default' },
          { value: 'metric', label: 'Metric' },
          { value: 'table', label: 'Table' },
          { value: 'bar', label: 'Bar' },
          { value: 'line', label: 'Line' },
          { value: 'spline', label: 'Spline' },
          { value: 'step', label: 'Step' },
          { value: 'area', label: 'Area' },
          { value: 'pie', label: 'Pie' },
          { value: 'donut', label: 'Donut' },
          { value: 'gauge', label: 'Gauge' },
          { value: 'funnel', label: 'Funnel' },
          { value: 'horizontal-funnel', label: 'Horizontal funnel' },
          { value: 'funnel-3d', label: 'Funnel 3d' },
          { value: 'horizontal-funnel-3d', label: 'Horizontal funnel 3d' },
          { value: 'choropleth', label: 'Choropleth' }
        ],
        re = (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            'function' == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
              )),
              r.forEach(function(t) {
                G(e, t, n[t]);
              });
          }
          return e;
        })(
          {
            default: {
              colors: [
                '#00bbde',
                '#fe6672',
                '#eeb058',
                '#8a8ad6',
                '#ff855c',
                '#00cfbb',
                '#5a9eed',
                '#73d483',
                '#c879bb',
                '#0099b6',
                '#d74d58',
                '#cb9141',
                '#6b6bb6',
                '#d86945',
                '#00aa99',
                '#4281c9',
                '#57b566',
                '#ac5c9e',
                '#27cceb',
                '#ff818b',
                '#f6bf71',
                '#9b9be1',
                '#ff9b79',
                '#26dfcd',
                '#73aff4',
                '#87e096',
                '#d88bcb'
              ]
            }
          },
          x
        ),
        oe = [{ value: 'default', label: 'Default' }];
      Object.keys(x).forEach(function(e) {
        var t = { value: e, label: e.charAt(0).toUpperCase() + e.slice(1) };
        oe.push(t);
      });
      var ae = {
          title: '#222222',
          subtitle: '#6f6f6f',
          border: '#e8e8e8',
          background: '#ffffff',
          row: '#f3f5f6',
          rowHover: '#e7e7ec'
        },
        ie = [
          { label: 'Top', value: 'top' },
          { label: 'Right', value: 'right' },
          { label: 'Bottom', value: 'bottom' },
          { label: 'Left', value: 'left' }
        ],
        le = [
          { label: 'Top', value: 'top' },
          { label: 'Middle', value: 'middle' },
          { label: 'Bottom', value: 'bottom' }
        ],
        se = [
          { label: 'Left', value: 'left' },
          { label: 'Center', value: 'center' },
          { label: 'Right', value: 'right' }
        ],
        ce = [
          { label: 'Auto', value: '' },
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
          { label: '4', value: 4 },
          { label: '5', value: 5 },
          { label: '6', value: 6 },
          { label: '7', value: 7 },
          { label: '8', value: 8 },
          { label: '9', value: 9 },
          { label: '10', value: 10 }
        ],
        ue = [
          { label: '1px', value: 1 },
          { label: '2px', value: 2 },
          { label: '4px', value: 4 },
          { label: '8px', value: 8 }
        ],
        fe = [
          { label: 'Auto', value: 2.5 },
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
          { label: '4', value: 4 },
          { label: '5', value: 5 },
          { label: '6', value: 6 },
          { label: '7', value: 7 },
          { label: '8', value: 8 },
          { label: '9', value: 9 },
          { label: '10', value: 10 }
        ],
        de = [
          { label: 'None', value: '' },
          { label: 'Normal', value: 'normal' },
          { label: 'Percent', value: 'percent' }
        ],
        pe = [
          { label: 'World', value: 'world' },
          { label: 'United States', value: 'us' }
        ],
        he = [
          { label: 'Absolute', value: 'absolute' },
          { label: 'Relative', value: 'relative' }
        ],
        be = [
          { label: 'Both sides', value: 'both-sides' },
          { label: 'Left', value: 'left' },
          { label: 'Right', value: 'right' }
        ],
        ge = 60,
        me = 'transparent',
        ve = {
          appearance: !0,
          title: !0,
          axis: !0,
          legend: !0,
          gridline: !0,
          series: !0,
          tooltip: !0,
          table: !0,
          funnel: !0
        },
        _e = [
          'funnel',
          'funnel-3d',
          'horizontal-funnel',
          'horizontal-funnel-3d'
        ],
        ye = {
          chart: ne[0].value,
          chartPalette: oe[0].value,
          colors: re[oe[0].value].colors,
          general_prefix: '',
          general_suffix: '',
          chart_slider_show: !1,
          appearance_background: ae.background,
          appearance_border: ae.border,
          appearance_color: ae.background,
          appearance_font_family: K.value,
          appearance_font_size: J[11].value,
          appearance_font_bold: !0,
          appearance_font_italic: !1,
          appearance_sparkline: !1,
          title_show: !1,
          title_text: '',
          title_textAlign: se[0].value,
          title_color: ae.title,
          title_font_family: K.value,
          title_font_size: J[0].value,
          title_font_bold: !1,
          title_font_italic: !1,
          subtitle_show: !1,
          subtitle_text: '',
          subtitle_textAlign: se[0].value,
          subtitle_color: ae.subtitle,
          subtitle_font_family: K.value,
          subtitle_font_size: J[0].value,
          subtitle_font_bold: !1,
          subtitle_font_italic: !1,
          axis_vertical_title_show: !1,
          axis_vertical_title_text: '',
          axis_vertical_title_textAlign: le[1].value,
          axis_vertical_title_color: ae.title,
          axis_vertical_title_font_family: K.value,
          axis_vertical_title_font_size: J[0].value,
          axis_vertical_title_font_bold: !1,
          axis_vertical_title_font_italic: !1,
          axis_vertical_label_show: !1,
          axis_vertical_label_color: ae.title,
          axis_vertical_label_font_family: K.value,
          axis_vertical_label_font_size: J[0].value,
          axis_vertical_label_font_bold: !1,
          axis_vertical_label_font_italic: !1,
          axis_horizontal_title_show: !1,
          axis_horizontal_title_text: '',
          axis_horizontal_title_textAlign: se[0].value,
          axis_horizontal_title_color: ae.title,
          axis_horizontal_title_font_family: K.value,
          axis_horizontal_title_font_size: J[0].value,
          axis_horizontal_title_font_bold: !1,
          axis_horizontal_title_font_italic: !1,
          axis_horizontal_label_show: !1,
          axis_horizontal_label_color: ae.title,
          axis_horizontal_label_font_family: K.value,
          axis_horizontal_label_font_size: J[0].value,
          axis_horizontal_label_font_bold: !1,
          axis_horizontal_label_font_italic: !1,
          legend_show: !1,
          legend_color: ae.title,
          legend_font_family: K.value,
          legend_font_size: J[0].value,
          legend_font_bold: !1,
          legend_font_italic: !1,
          legend_layout: ie[0].value,
          legend_position_horizontal: se[0].value,
          legend_position_vertical: le[0].value,
          grid_show: !1,
          grid_lines_color: ae.border,
          grid_lines_count: ce[0].value,
          subgrid_show: !1,
          subgrid_lines_color: ae.border,
          subgrid_lines_count: ce[0].value,
          series_label_show: !1,
          series_label_color: ae.title,
          series_label_font_family: K.value,
          series_label_font_size: J[0].value,
          series_label_font_bold: !1,
          series_label_font_italic: !1,
          series_label_textAlign: se[1].value,
          series_line: ue[0].value,
          series_points_show: !1,
          series_points_size: fe[0].value,
          series_stacked: de[0].value,
          tooltip_color: ae.title,
          tooltip_font_family: K.value,
          tooltip_font_size: J[0].value,
          tooltip_font_bold: !1,
          tooltip_font_italic: !1,
          tooltip_background: ae.background,
          tooltip_border: me,
          tooltip_simpleTooltip: !1,
          table_pagination_show: !1,
          table_pagination_limit: '',
          table_header_show: !1,
          table_header_textAlign: se[0].value,
          table_header_color: ae.title,
          table_header_font_family: K.value,
          table_header_font_size: J[0].value,
          table_header_font_bold: !1,
          table_header_font_italic: !1,
          table_body_show: !1,
          table_body_textAlign: se[0].value,
          table_body_color: ae.title,
          table_body_font_family: K.value,
          table_body_font_size: J[0].value,
          table_body_font_bold: !1,
          table_body_font_italic: !1,
          table_body_row_alternate_color: ae.row,
          table_body_row_hover_background: ae.rowHover,
          choropleth_map: pe[0].value,
          choropleth_border_show: !1,
          choropleth_border_size: ue[0].value,
          choropleth_border_color: ae.border,
          funnel_lines: !1,
          funnel_results: !1,
          funnel_percents_show: !1,
          funnel_percents_count: he[0].value,
          funnel_percents_decimals: 0,
          funnel_hover: !1,
          funnel_margin: !1,
          funnel_minimal_size: '',
          funnel_effect3d: be[0].value,
          funnel_label_textAlign: se[1].value,
          funnel_label_color: ae.title,
          funnel_label_font_family: K.value,
          funnel_label_font_size: J[0].value,
          funnel_label_font_bold: !1,
          funnel_label_font_italic: !1
        };
      function xe() {
        return (xe =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var we = o.a.createElement(
          'defs',
          null,
          o.a.createElement('path', {
            d:
              'M6.838 2.185l3 3-6.515 6.516-2.675.295a.563.563 0 01-.621-.62l.297-2.678 6.514-6.513zm4.856-.446L10.285.329a1.126 1.126 0 00-1.592 0L7.368 1.656l3 3 1.326-1.325c.44-.44.44-1.152 0-1.591z',
            id: 'edit_svg__a'
          })
        ),
        ke = o.a.createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          o.a.createElement(
            'mask',
            { id: 'edit_svg__b', fill: '#fff' },
            o.a.createElement('use', { xlinkHref: '#edit_svg__a' })
          ),
          o.a.createElement('use', {
            fill: '#000',
            fillRule: 'nonzero',
            xlinkHref: '#edit_svg__a'
          }),
          o.a.createElement(
            'g',
            { mask: 'url(#edit_svg__b)', fill: '#FDFDFD' },
            o.a.createElement('path', { d: 'M-64-14.436H72v40H-64z' })
          )
        ),
        Se = function(e) {
          return o.a.createElement(
            'svg',
            xe({ width: 12, height: 12 }, e),
            we,
            ke
          );
        };
      function Ee() {
        return (Ee =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var ze = o.a.createElement(
          'defs',
          null,
          o.a.createElement('path', {
            d:
              'M.208.286l.038-.04A.84.84 0 011.393.208l.04.038L4.5 3.313 7.567.246A.84.84 0 018.714.208l.04.038a.84.84 0 01.038 1.147l-.038.04L5.687 4.5l3.067 3.067a.84.84 0 01.038 1.147l-.038.04a.84.84 0 01-1.147.038l-.04-.038L4.5 5.687 1.433 8.754a.84.84 0 01-1.147.038l-.04-.038a.84.84 0 01-.038-1.147l.038-.04L3.313 4.5.246 1.433A.84.84 0 01.208.286l.038-.04-.038.04z',
            id: 'remove-x_svg__a'
          })
        ),
        Oe = o.a.createElement(
          'g',
          { transform: 'translate(.5 .5)', fill: 'none', fillRule: 'evenodd' },
          o.a.createElement(
            'mask',
            { id: 'remove-x_svg__b', fill: '#fff' },
            o.a.createElement('use', { xlinkHref: '#remove-x_svg__a' })
          ),
          o.a.createElement('use', {
            fill: '#979797',
            fillRule: 'nonzero',
            xlinkHref: '#remove-x_svg__a'
          }),
          o.a.createElement(
            'g',
            { mask: 'url(#remove-x_svg__b)', fill: '#FFF' },
            o.a.createElement('path', { d: 'M-48-10.827H54v30H-48z' })
          )
        ),
        Ce = function(e) {
          return o.a.createElement(
            'svg',
            Ee({ width: 10, height: 10 }, e),
            ze,
            Oe
          );
        };
      function je(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          })()
        );
      }
      function Fe(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      var Te = Object(m.sortableHandle)(function() {
          return o.a.createElement('div', {
            style: {
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            }
          });
        }),
        Ae = Object(m.sortableElement)(function(e) {
          var t = e.value,
            n = e.index,
            a = e.removeItem,
            i = e.changeColor,
            l = e.shouldOpenPicker,
            s = Fe(Object(r.useState)(!1), 2),
            c = s[0],
            u = s[1],
            f = function() {
              return u(!0);
            };
          return (
            Object(r.useEffect)(function() {
              l && f();
            }, []),
            o.a.createElement(
              'div',
              { className: 'color-palette__item' },
              o.a.createElement(
                'button',
                {
                  className: 'color-palette__button btn-remove',
                  type: 'button',
                  onClick: function() {
                    return a(n);
                  },
                  style: { opacity: 0 }
                },
                o.a.createElement(Ce, null)
              ),
              o.a.createElement(
                'button',
                {
                  className: 'color-palette__button btn-edit',
                  type: 'button',
                  onClick: f,
                  style: { opacity: 0 }
                },
                o.a.createElement(Se, null)
              ),
              o.a.createElement(
                'div',
                {
                  className: 'color-palette__trigger',
                  style: {
                    backgroundColor: t,
                    width: '134px',
                    height: '34px',
                    padding: '5px',
                    border: '1px solid #ccc',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }
                },
                o.a.createElement(Te, null)
              ),
              c
                ? o.a.createElement(
                    'div',
                    { className: 'color-picker__popover' },
                    o.a.createElement('div', {
                      className: 'color-picker__cover',
                      onClick: function() {
                        return u(!1);
                      }
                    }),
                    o.a.createElement(y.SketchPicker, {
                      className: 'color-picker__picker',
                      color: t,
                      onChangeComplete: function(e) {
                        return i(e.hex, n);
                      },
                      disableAlpha: !0
                    })
                  )
                : null
            )
          );
        }),
        Pe = Object(m.sortableContainer)(function(e) {
          var t = e.children;
          return o.a.createElement(
            'div',
            { className: 'color-palette__list' },
            t
          );
        }),
        Ne = function(e) {
          var t = e.colors,
            n = e.onChange,
            a = Fe(Object(r.useState)(je(t)), 2),
            i = a[0],
            l = a[1],
            s = Fe(Object(r.useState)(!1), 2),
            c = s[0],
            u = s[1],
            d = Object(r.useRef)(),
            p = d.current;
          Object(r.useEffect)(
            function() {
              (d.current = i), f()(p, t) || l(t), u(!1);
            },
            [t]
          ),
            Object(r.useEffect)(
              function() {
                f()(i, t) || n(i), u(!1);
              },
              [i]
            );
          var h = function(e) {
              var t = je(i);
              t.splice(e, 1), l(t);
            },
            b = function(e, t) {
              var n = je(i);
              (n[t] = e), l(n);
            };
          return o.a.createElement(
            'div',
            { className: 'color-palette' },
            o.a.createElement(
              Pe,
              {
                onSortEnd: function(e) {
                  var t = e.oldIndex,
                    n = e.newIndex,
                    r = _()(i, t, n);
                  l(r);
                },
                useDragHandle: !0,
                axis: 'xy',
                helperClass: 'color-palette__item-drag'
              },
              i.map(function(e, t) {
                return o.a.createElement(Ae, {
                  key: 'color-'.concat(t),
                  index: t,
                  value: e,
                  removeItem: h,
                  changeColor: b,
                  shouldOpenPicker: c
                });
              })
            ),
            o.a.createElement(
              'button',
              {
                className: 'btn-list btn',
                type: 'button',
                onClick: function() {
                  var e = [].concat(je(i), ['#222222']);
                  l(e), u(!0);
                }
              },
              'Add'
            )
          );
        },
        Me = Ne;
      (Ne.propTypes = { colors: i.a.array, onChange: i.a.func }),
        (Ne.defaultProps = { colors: [], onChange: function() {} });
      var Be = function(e) {
          var t = e.items,
            n = e.singleChoice,
            r = e.groupName,
            a = e.activeItem,
            i = e.title,
            l = e.onChange,
            s = t.map(function(e) {
              return n
                ? o.a.createElement(
                    'label',
                    {
                      className: 'button-group__label '.concat(
                        e.value === a.value && 'active'
                      ),
                      key: e.value
                    },
                    e.label,
                    o.a.createElement('input', {
                      type: 'radio',
                      value: e.value,
                      checked: e.value === a.value,
                      name: r,
                      onChange: l,
                      className: 'button-group__input'
                    })
                  )
                : o.a.createElement(
                    'label',
                    {
                      className: 'button-group__label '.concat(
                        a[e.value] && 'active'
                      ),
                      key: e.value
                    },
                    e.label,
                    o.a.createElement('input', {
                      type: 'checkbox',
                      value: e.value,
                      checked: a[e.value],
                      onChange: l,
                      className: 'button-group__input'
                    })
                  );
            }),
            c = o.a.createElement(
              'div',
              { className: 'button-group__title' },
              i
            );
          return o.a.createElement(
            'div',
            { className: 'button-group' },
            i && c,
            o.a.createElement('div', { className: 'button-group__wrapper' }, s)
          );
        },
        Ie = Be;
      (Be.propTypes = {
        items: i.a.arrayOf(
          i.a.shape({
            label: i.a.oneOfType([i.a.string, i.a.object]),
            value: i.a.string
          })
        ).isRequired,
        singleChoice: i.a.bool.isRequired,
        groupName: i.a.string,
        activeItem: i.a.shape({
          label: i.a.oneOfType([i.a.string, i.a.object]),
          value: i.a.string
        }).isRequired,
        title: i.a.string,
        onChange: i.a.func.isRequired
      }),
        (Be.defaultProps = {
          items: [],
          singleChoice: !1,
          activeItem: [],
          onChange: function() {}
        });
      var Re = n(90);
      function Le(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      var De = function(e) {
          var t = e.title,
            n = e.initialColor,
            a = e.defaultColor,
            i = e.onChange,
            l = { hex: '#222222' },
            s = Le(Object(r.useState)(l), 2),
            c = s[0],
            u = s[1],
            f = Le(Object(r.useState)(!1), 2),
            d = f[0],
            p = f[1];
          Object(r.useEffect)(function() {
            n ? u({ hex: n }) : a && u({ hex: a });
          }, []);
          var h = {
              input: { border: 'none', outline: 'none', fontSize: '14px' },
              label: { display: 'none' },
              color: { background: ''.concat(c.hex) }
            },
            b = function() {
              p(!1);
            },
            g = function(e) {
              e.hex ? (u(e), i(e, t)) : u({ hex: n });
            };
          return o.a.createElement(
            'div',
            { className: 'custom-color-picker' },
            t &&
              o.a.createElement(
                'div',
                { className: 'custom-color-picker__title' },
                t
              ),
            o.a.createElement(
              'div',
              { className: 'custom-color-picker__wrapper' },
              o.a.createElement(
                'div',
                {
                  className: 'custom-color-picker__swatch',
                  style: h.swatch,
                  onClick: function() {
                    p(!d);
                  }
                },
                o.a.createElement('div', {
                  className: 'custom-color-picker__color',
                  style: h.color
                })
              ),
              o.a.createElement(Re.EditableInput, {
                style: h,
                label: 'hex',
                value: c.hex === me ? 'AUTO' : c.hex,
                onChange: g
              }),
              d
                ? o.a.createElement(
                    'div',
                    {
                      className: 'custom-color-picker__popover',
                      style: h.popover
                    },
                    o.a.createElement('div', {
                      className: 'custom-color-picker__cover',
                      style: h.cover,
                      onClick: b
                    }),
                    o.a.createElement(
                      'button',
                      {
                        className: 'btn btn__small btn-reset',
                        onClick: function() {
                          g({ hex: a || me });
                        }
                      },
                      'Auto'
                    ),
                    o.a.createElement(
                      'button',
                      { className: 'btn-close', onClick: b },
                      '×'
                    ),
                    o.a.createElement(y.SketchPicker, {
                      color: c,
                      onChange: g,
                      disableAlpha: !0
                    })
                  )
                : null
            )
          );
        },
        He = Object(y.CustomPicker)(De);
      (De.defaultProps = { title: '', onChange: function() {} }),
        (De.propTypes = {
          title: i.a.string,
          initialColor: i.a.string,
          onChange: i.a.func.isRequired
        });
      var Ue = n(91),
        We = n.n(Ue),
        Ze = function(e) {
          var t,
            n = e.family,
            r = e.fonts,
            a = e.title,
            i = e.onChange;
          n &&
            (We.a.load({ google: { families: [n] } }),
            (t = { label: n, value: n }));
          var l = [K];
          return (
            r &&
              r.length &&
              r.forEach(function(e) {
                var t = { label: e.family, value: e.family };
                l.push(t);
              }),
            o.a.createElement(
              'div',
              { className: 'font-picker' },
              o.a.createElement('div', { className: 'font-picker__title' }, a),
              o.a.createElement(h.a, {
                defaultValue: t || l[0],
                options: l,
                onChange: i,
                classNamePrefix: 'custom-dropdown'
              })
            )
          );
        },
        qe = Ze;
      function Ve(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Xe(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      (Ze.defaultProps = { title: '', fonts: [], onChange: function() {} }),
        (Ze.propTypes = {
          title: i.a.string.isRequired,
          family: i.a.string,
          fonts: i.a.array,
          onChange: i.a.func.isRequired
        });
      var Ye = function(e) {
        var t = e.isOpen,
          n = e.label,
          r = e.children,
          a = e.onClick,
          i = 'accordion__item';
        return (
          t && (i = ''.concat(i, ' open')),
          o.a.createElement(
            'div',
            { className: i },
            o.a.createElement(
              'div',
              {
                role: 'button',
                className: 'accordion__item__heading heading',
                onClick: function() {
                  return a(n);
                }
              },
              o.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  'aria-hidden': 'true',
                  viewBox: '0 0 20 20',
                  className: 'heading__icon'
                },
                o.a.createElement('defs', null),
                o.a.createElement('path', {
                  d:
                    'M7 16c-.4-.4-.5-1 0-1.6l3.7-3.9L7 6.6c-.5-.5-.4-1.1 0-1.6.4-.4 1.2-.4 1.6 0 .4.4 4.5 4.7 4.5 4.7.2.2.3.5.3.8s-.1.6-.3.8c0 0-4.1 4.3-4.5 4.7s-1.2.4-1.6 0z'
                })
              ),
              n
            ),
            o.a.createElement(
              'div',
              { className: 'accordion__item__content', hidden: !t },
              r
            )
          )
        );
      };
      (Ye.propTypes = {
        isOpen: i.a.bool,
        label: i.a.string,
        children: i.a.oneOfType([i.a.array, i.a.object]),
        onClick: i.a.func
      }),
        (Ye.defaultProps = {
          isOpen: !1,
          label: '',
          onClick: function() {},
          children: []
        });
      var Ge = function(e) {
          var t = e.children,
            n = e.allowMultipleOpen,
            a = Xe(Object(r.useState)({}), 2),
            i = a[0],
            l = a[1],
            s = function(e) {
              var t = !!i[e],
                r = n
                  ? (function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(
                                n,
                                e
                              ).enumerable;
                            })
                          )),
                          r.forEach(function(t) {
                            Ve(e, t, n[t]);
                          });
                      }
                      return e;
                    })({}, i, Ve({}, e, !t))
                  : Ve({}, e, !t);
              l(r);
            };
          return o.a.createElement(
            'div',
            { className: 'accordion' },
            t.map(function(e) {
              return (
                e &&
                o.a.createElement(
                  Ye,
                  {
                    key: e.props.label,
                    isOpen: !!i[e.props.label],
                    label: e.props.label,
                    onClick: s
                  },
                  e.props.children
                )
              );
            })
          );
        },
        $e = Ge;
      (Ge.defaultProps = { allowMultipleOpen: !1 }),
        (Ge.propTypes = {
          allowMultipleOpen: i.a.bool,
          children: i.a.array.isRequired
        });
      var Ke,
        Je = function(e) {
          var t = e.text,
            n = t.title,
            r = void 0 === n ? '' : n,
            a = t.on,
            i = void 0 === a ? 'On' : a,
            l = t.off,
            s = void 0 === l ? 'Off' : l,
            c = e.checked,
            u = e.onChange,
            f = e.children,
            d =
              f ||
              o.a.createElement('span', { className: 'switcher__title' }, r);
          return o.a.createElement(
            'div',
            { className: 'switcher '.concat(e.className && e.className) },
            o.a.createElement(
              'label',
              { className: 'switcher__label' },
              d,
              o.a.createElement('input', {
                type: 'checkbox',
                name: 'on-off-switch',
                className: 'switcher__input',
                checked: c,
                onChange: u
              }),
              o.a.createElement(
                'div',
                { className: 'switcher__toggle', 'aria-hidden': 'true' },
                o.a.createElement('div', { className: 'switcher__switch' })
              ),
              o.a.createElement(
                'div',
                { className: 'switcher__value' },
                o.a.createElement(
                  'span',
                  { className: 'switcher__value__label on' },
                  i
                ),
                o.a.createElement(
                  'span',
                  { className: 'switcher__value__label off' },
                  s
                )
              )
            )
          );
        },
        Qe = Je;
      function et(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function tt() {
        return (tt =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function nt(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      function rt(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      (Je.defaultProps = { text: {}, onChange: function() {} }),
        (Je.propTypes = {
          text: i.a.shape({
            title: i.a.string,
            on: i.a.string,
            off: i.a.string
          }),
          checked: i.a.bool.isRequired,
          onChange: i.a.func.isRequired
        });
      var ot = function(e) {
          var t = e.name,
            n = e.type,
            a = e.placeholder,
            i = e.onChange,
            l = e.className,
            s = e.value,
            c = e.error,
            u = (e.children, e.label),
            f = rt(e, [
              'name',
              'type',
              'placeholder',
              'onChange',
              'className',
              'value',
              'error',
              'children',
              'label'
            ]),
            d = nt(Object(r.useState)(''), 2),
            p = d[0],
            h = d[1];
          Object(r.useEffect)(function() {
            h(s);
          }, []);
          var b = l ? 'form-input__input '.concat(l) : 'form-input__input';
          return o.a.createElement(
            'div',
            { className: 'form-input' },
            u &&
              o.a.createElement(
                'label',
                { htmlFor: t, className: 'form-input__label' },
                u
              ),
            o.a.createElement(
              'input',
              tt(
                {
                  name: t,
                  type: n,
                  placeholder: a,
                  onChange: function(e) {
                    e.persist(),
                      h(e.target.value),
                      setTimeout(function() {
                        i(e);
                      }, 250);
                  },
                  value: p,
                  className: b,
                  style: c && { border: 'solid 1px red' }
                },
                f
              )
            ),
            c && o.a.createElement('p', null, c)
          );
        },
        at = ot;
      (ot.defaultProps = { type: 'text', className: '' }),
        (ot.propTypes =
          (et(
            (Ke = {
              name: i.a.string.isRequired,
              type: i.a.string,
              label: i.a.string,
              placeholder: i.a.string
            }),
            'type',
            i.a.oneOf(['text', 'number', 'password', 'email'])
          ),
          et(Ke, 'className', i.a.string),
          et(Ke, 'value', i.a.any),
          et(Ke, 'onChange', i.a.func.isRequired),
          Ke));
      var it = n(35),
        lt = n.n(it),
        st = n(92),
        ct = n.n(st),
        ut = n(93),
        ft = n.n(ut),
        dt = (n(229), n(94));
      function pt(e) {
        return (pt =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function ht() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    ',
          ' .keen-dataviz {\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .chart-title,\n    ',
          ' .chart-subtitle {\n      ',
          '\n    }\n    ',
          ' .keen-dataviz,\n    ',
          ' .c3 svg {\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .keen-dataviz-title,\n    ',
          ' .keen-dataviz .keen-dataviz-metric-title,\n    ',
          ' .chart-title input {\n      display: block;\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .keen-dataviz-subtitle,\n    ',
          ' .keen-dataviz .keen-dataviz-metric-subtitle,\n    ',
          ' .chart-subtitle input {\n      width: 100%;\n      display: block;\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .c3-axis.c3-axis-y .tick text {\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .c3-axis.c3-axis-x .tick text {\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .keen-c3-legend .legend-item-text {\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .c3-grid line,\n    ',
          ' .keen-dataviz .chart-lines {\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .c3-ygrid {\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .c3-axis .c3-axis-y-label {\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .c3-axis .c3-axis-x-label {\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .c3-chart-texts .c3-text {\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .c3-chart-lines .c3-shape.c3-line {\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .c3-tooltip {\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz .keen-dataviz-metric,\n    ',
          ' .keen-dataviz .keen-dataviz-metric-value {\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz-table th {\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz-table tr td,\n    ',
          ' .keen-dataviz-table .table-data-row {\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n    ',
          ' .keen-dataviz-table .table-data-row:nth-child(even) td {\n      ',
          '\n    }\n    ',
          ' .keen-dataviz-table .table-data-row:hover td {\n      ',
          '\n      color: inherit;\n    }\n    ',
          ' .keen-dataviz-rendering .text-label {\n      display: block;\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n      ',
          '\n    }\n  '
        ]);
        return (
          (ht = function() {
            return e;
          }),
          e
        );
      }
      function bt(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function gt(e) {
        var t = (function(e, t) {
          if ('object' !== pt(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== pt(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === pt(t) ? t : String(t);
      }
      function mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function(t) {
              vt(e, t, n[t]);
            });
        }
        return e;
      }
      function vt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var _t = function(e) {
        switch (e) {
          case 'left':
            return 'end';
          case 'right':
            return 'start';
          default:
            return 'middle';
        }
      };
      function yt(e) {
        return {
          chartBackground: e.appearance_background
            ? 'background-color: '.concat(e.appearance_background, ';')
            : 'background-color: inherit;',
          chartBorder: e.appearance_border
            ? 'border-color: '.concat(e.appearance_border, ';')
            : 'border-color: inherit;',
          chartFont: e.appearance_font_family
            ? 'font-family: "'.concat(e.appearance_font_family, '";')
            : 'font-family: inherit;',
          chartFontSize:
            'auto' !== e.appearance_font_size
              ? 'font-size: '.concat(e.appearance_font_size, 'px;')
              : 'font-size: inherit;',
          chartFontBold: e.appearance_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          chartFontItalic: e.appearance_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          chartColor: e.appearance_color
            ? 'color: '.concat(e.appearance_color, ';')
            : 'color: inherit;',
          titleTextAlign: 'text-align: '.concat(e.title_textAlign, ';'),
          titleColor: e.title_color
            ? 'color: '.concat(e.title_color, ';')
            : 'color: inherit;',
          titleFontFamily: e.title_font_family
            ? 'font-family: "'.concat(e.title_font_family, '";')
            : 'font-family: inherit;',
          titleFontSize:
            'auto' !== e.title_font_size
              ? 'font-size: '.concat(e.title_font_size, 'px;')
              : 'font-size: inherit;',
          titleFontBold: e.title_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          titleFontItalic: e.title_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          subtitleTextAlign: 'text-align: '.concat(e.subtitle_textAlign, ';'),
          subtitleColor: e.subtitle_color
            ? 'color: '.concat(e.subtitle_color, ';')
            : 'color: inherit;',
          subtitleFontFamily: e.subtitle_font_family
            ? 'font-family: "'.concat(e.subtitle_font_family, '";')
            : 'font-family: inherit;',
          subtitleFontSize:
            'auto' !== e.subtitle_font_size
              ? 'font-size: '.concat(e.subtitle_font_size, 'px;')
              : 'font-size: inherit;',
          subtitleFontBold: e.subtitle_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          subtitleFontItalic: e.subtitle_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          axisYTitleFont: e.axis_vertical_title_font_family
            ? 'font-family: "'.concat(e.axis_vertical_title_font_family, '";')
            : 'font-family: inherit;',
          axisYTitleFontSize:
            'auto' !== e.axis_vertical_title_font_size
              ? 'font-size: '.concat(e.axis_vertical_title_font_size, 'px;')
              : 'font-size: inherit;',
          axisYTitleFontBold: e.axis_vertical_title_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          axisYTitleFontItalic: e.axis_vertical_title_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          axisYTitleColor: e.axis_vertical_title_color
            ? 'fill: '.concat(e.axis_vertical_title_color, ';')
            : 'fill: inherit;',
          axisYLabelFont: e.axis_vertical_label_font_family
            ? 'font-family: "'.concat(e.axis_vertical_label_font_family, '";')
            : 'font-family: inherit;',
          axisYLabelFontSize:
            'auto' !== e.axis_vertical_label_font_size
              ? 'font-size: '.concat(e.axis_vertical_label_font_size, 'px;')
              : 'font-size: inherit;',
          axisYLabelFontBold: e.axis_vertical_label_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          axisYLabelFontItalic: e.axis_vertical_label_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          axisYLabelColor: e.axis_vertical_label_color
            ? 'fill: '.concat(e.axis_vertical_label_color, ';')
            : 'fill: inherit;',
          axisXTitleFont: e.axis_horizontal_title_font_family
            ? 'font-family: "'.concat(e.axis_horizontal_title_font_family, '";')
            : 'font-family: inherit;',
          axisXTitleFontSize:
            'auto' !== e.axis_horizontal_title_font_size
              ? 'font-size: '.concat(e.axis_horizontal_title_font_size, 'px;')
              : 'font-size: inherit;',
          axisXTitleFontBold: e.axis_horizontal_title_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          axisXTitleFontItalic: e.axis_horizontal_title_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          axisXTitleColor: e.axis_horizontal_title_color
            ? 'fill: '.concat(e.axis_horizontal_title_color, ';')
            : 'fill: inherit;',
          axisXLabelFont: e.axis_horizontal_label_font_family
            ? 'font-family: "'.concat(e.axis_horizontal_label_font_family, '";')
            : 'font-family: inherit;',
          axisXLabelFontSize:
            'auto' !== e.axis_horizontal_label_font_size
              ? 'font-size: '.concat(e.axis_horizontal_label_font_size, 'px;')
              : 'font-size: inherit;',
          axisXLabelFontBold: e.axis_horizontal_label_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          axisXLabelFontItalic: e.axis_horizontal_label_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          axisXLabelColor: e.axis_horizontal_label_color
            ? 'fill: '.concat(e.axis_horizontal_label_color, ';')
            : 'fill: inherit;',
          legendFont: e.legend_font_family
            ? 'font-family: "'.concat(e.legend_font_family, '";')
            : 'font-family: inherit;',
          legendFontSize:
            'auto' !== e.legend_font_size
              ? 'font-size: '.concat(e.legend_font_size, 'px;')
              : 'font-size: inherit;',
          legendFontBold: e.legend_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          legendFontItalic: e.legend_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          legendColor: e.legend_color
            ? 'color: '.concat(e.legend_color, ';')
            : 'color: inherit;',
          gridLineShow: e.grid_show
            ? 'stroke-opacity: 1;'
            : 'stroke-opacity: 0;',
          gridLineColor: e.grid_lines_color
            ? 'stroke: '.concat(e.grid_lines_color)
            : 'stroke: inherit;',
          subgridLineColor: e.subgrid_lines_color
            ? 'stroke: '.concat(e.subgrid_lines_count)
            : 'stroke: inherit;',
          seriesLabelFont: e.series_label_font_family
            ? 'font-family: "'.concat(e.series_label_font_family, '";')
            : 'font-family: inherit;',
          seriesLabelFontSize:
            'auto' !== e.series_label_font_size
              ? 'font-size: '.concat(e.series_label_font_size, 'px;')
              : 'font-size: inherit;',
          seriesLabelFontBold: e.series_label_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          seriesLabelFontItalic: e.series_label_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          seriesLabelColor: e.series_label_color
            ? 'fill: '.concat(e.series_label_color, ' !important;')
            : 'fill: inherit;',
          seriesLabelTextAlign: 'text-anchor: '.concat(
            _t(e.series_label_textAlign),
            ' !important;'
          ),
          seriesLineThickness: 'stroke-width: '.concat(e.series_line, 'px;'),
          tooltipFont: e.tooltip_font_family
            ? 'font-family: "'.concat(e.tooltip_font_family, '";')
            : 'font-family: inherit;',
          tooltipFontSize:
            'auto' !== e.tooltip_font_size
              ? 'font-size: '.concat(e.tooltip_font_size, 'px;')
              : 'font-size: inherit;',
          tooltipFontBold: e.tooltip_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          tooltipFontItalic: e.tooltip_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          tooltipColor: e.tooltip_color
            ? 'color: '.concat(e.tooltip_color, ';')
            : 'color: inherit;',
          tooltipBackground: e.tooltip_background
            ? 'background-color: '.concat(e.tooltip_background, ';')
            : '',
          tooltipBorder:
            e.tooltip_border && e.tooltip_border !== me
              ? 'border-color: '.concat(e.tooltip_border, ';')
              : '',
          tableHeaderFont: e.table_header_font_family
            ? 'font-family: "'.concat(e.table_header_font_family, '";')
            : 'font-family: inherit;',
          tableHeaderFontSize:
            'auto' !== e.table_header_font_size
              ? 'font-size: '.concat(e.table_header_font_size, 'px;')
              : 'font-size: inherit;',
          tableHeaderFontBold: e.table_header_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          tableHeaderFontItalic: e.table_header_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          tableHeaderTextAlign: 'text-align: '.concat(
            e.table_header_textAlign,
            ';'
          ),
          tableHeaderColor: e.table_header_color
            ? 'color: '.concat(e.table_header_color, ';')
            : 'color: inherit;',
          tableBodyFont: e.table_body_font_family
            ? 'font-family: "'.concat(e.table_body_font_family, '";')
            : 'font-family: inherit;',
          tableBodyFontSize:
            'auto' !== e.table_body_font_size
              ? 'font-size: '.concat(e.table_body_font_size, 'px;')
              : 'font-size: inherit;',
          tableBodyFontBold: e.table_body_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          tableBodyFontItalic: e.table_body_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;',
          tableBodyTextAlign: 'text-align: '.concat(
            e.table_body_textAlign,
            ';'
          ),
          tableBodyColor: e.table_body_color
            ? 'color: '.concat(e.table_body_color, ';')
            : 'color: inherit;',
          tableBodyRowAltBackground: e.table_body_row_alternate_color
            ? 'background-color: '.concat(e.table_body_row_alternate_color, ';')
            : 'background-color: inherit;',
          tableBodyRowHoverBackground: e.table_body_row_hover_background
            ? 'background-color: '.concat(
                e.table_body_row_hover_background,
                ';'
              )
            : 'background-color: inherit;',
          funnelLabelTextAlign: 'text-anchor: '.concat(
            _t(e.funnel_label_textAlign),
            ' !important;'
          ),
          funnelLabelColor: e.funnel_label_color
            ? 'fill: '.concat(e.funnel_label_color, ';')
            : 'fill: inherit;',
          funnelLabelFontFamily: e.funnel_label_font_family
            ? 'font-family: "'.concat(e.funnel_label_font_family, '";')
            : 'font-family: inherit;',
          funnelLabelFontSize:
            'auto' !== e.funnel_label_font_size
              ? 'font-size: '.concat(e.funnel_label_font_size, 'px;')
              : 'font-size: inherit;',
          funnelLabelFontBold: e.funnel_label_font_bold
            ? 'font-weight: bold;'
            : 'font-weight: inherit;',
          funnelLabelFontItalic: e.funnel_label_font_italic
            ? 'font-style: italic;'
            : 'font-style: inherit;'
        };
      }
      function xt(e) {
        var t = {},
          n = le.map(function(e) {
            return e.value;
          }),
          r = se.map(function(e) {
            return e.value;
          });
        if (
          (e.axis_vertical_title_show &&
            e.axis_vertical_title_text &&
            c()(t, 'y.label.text', e.axis_vertical_title_text),
          e.axis_horizontal_title_show &&
            e.axis_horizontal_title_text &&
            c()(t, 'x.label.text', e.axis_horizontal_title_text),
          e.axis_vertical_title_textAlign)
        ) {
          var o = n.includes(e.axis_vertical_title_textAlign)
            ? e.axis_vertical_title_textAlign
            : n[1];
          c()(t, 'y.label.position', 'outer-'.concat(o));
        }
        if (e.axis_horizontal_title_textAlign) {
          var a = r.includes(e.axis_horizontal_title_textAlign)
            ? e.axis_horizontal_title_textAlign
            : r[0];
          c()(t, 'x.label.position', 'outer-'.concat(a));
        }
        return (
          'auto' !== e.axis_horizontal_font_size && c()(t, 'x.height', ge),
          'auto' !== e.axis_vertical_font_size && c()(t, 'y.height', ge),
          t
        );
      }
      function wt() {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length,
            n = new Array(t > 1 ? t - 1 : 0),
            r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        if (Array.isArray(n)) {
          var o = mt({}, e);
          return (
            n.forEach(function(e) {
              var t = o,
                n = (t[e], bt(t, [e].map(gt)));
              o = mt({}, n);
            }),
            o
          );
        }
      }
      function kt(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        if (Array.isArray(n)) {
          if (n.length > 1) {
            var o = mt({}, e);
            return (
              n.forEach(function(e) {
                o = mt({}, kt(o, e));
              }),
              o
            );
          }
          switch (n[0]) {
            case 'axis':
              return wt(
                e,
                'axis_vertical_title_show',
                'axis_vertical_title_text',
                'axis_vertical_title_textAlign',
                'axis_vertical_title_color',
                'axis_vertical_title_font_family',
                'axis_vertical_title_font_size',
                'axis_vertical_title_font_bold',
                'axis_vertical_title_font_italic',
                'axis_vertical_label_show',
                'axis_vertical_label_color',
                'axis_vertical_label_font_family',
                'axis_vertical_label_font_size',
                'axis_vertical_label_font_bold',
                'axis_vertical_label_font_italic',
                'axis_horizontal_title_show',
                'axis_horizontal_title_text',
                'axis_horizontal_title_textAlign',
                'axis_horizontal_title_color',
                'axis_horizontal_title_font_family',
                'axis_horizontal_title_font_size',
                'axis_horizontal_title_font_bold',
                'axis_horizontal_title_font_italic',
                'axis_horizontal_label_show',
                'axis_horizontal_label_color',
                'axis_horizontal_label_font_family',
                'axis_horizontal_label_font_size',
                'axis_horizontal_label_font_bold',
                'axis_horizontal_label_font_italic'
              );
            case 'legend':
              return wt(
                e,
                'legend_show',
                'legend_color',
                'legend_font_family',
                'legend_font_size',
                'legend_font_bold',
                'legend_font_italic',
                'legend_layout',
                'legend_position_horizontal',
                'legend_position_vertical'
              );
            case 'grid':
              return wt(
                e,
                'grid_show',
                'grid_lines_color',
                'grid_lines_count',
                'subgrid_show',
                'subgrid_lines_color',
                'subgrid_lines_count'
              );
            case 'series':
              return wt(
                e,
                'series_label_show',
                'series_label_textAlign',
                'series_label_color',
                'series_label_font_family',
                'series_label_font_size',
                'series_label_font_bold',
                'series_label_font_italic',
                'series_label_textAlign',
                'series_line',
                'series_points_show',
                'series_points_size'
              );
            case 'tooltip':
              return wt(
                e,
                'tooltip_color',
                'tooltip_font_family',
                'tooltip_font_size',
                'tooltip_font_bold',
                'tooltip_font_italic',
                'tooltip_background',
                'tooltip_border'
              );
            case 'table':
              return wt(
                e,
                'table_pagination_show',
                'table_pagination_limit',
                'table_header_show',
                'table_header_textAlign',
                'table_header_color',
                'table_header_font_family',
                'table_header_font_size',
                'table_header_font_bold',
                'table_header_font_italic',
                'table_body_show',
                'table_body_textAlign',
                'table_body_color',
                'table_body_font_family',
                'table_body_font_size',
                'table_body_font_bold',
                'table_body_font_italic',
                'table_body_row_alternate_color',
                'table_body_row_hover_background'
              );
            case 'funnel':
              return wt(
                e,
                'funnel_lines',
                'funnel_results',
                'funnel_percents_show',
                'funnel_percents_count',
                'funnel_percents_decimals',
                'funnel_hover',
                'funnel_margin',
                'funnel_minimal_size',
                'funnel_effect3d',
                'funnel_label_textAlign',
                'funnel_label_color',
                'funnel_label_font_family',
                'funnel_label_font_size',
                'funnel_label_font_bold',
                'funnel_label_font_italic'
              );
            default:
              return e;
          }
        }
      }
      function St(e, t) {
        var n = yt(e),
          r = t ? '#'.concat(t) : '.keen-theme-builder';
        return Object(dt.stripIndent)(
          ht(),
          r,
          n.chartBackground,
          n.chartBorder,
          r,
          r,
          n.chartBackground,
          r,
          r,
          n.chartFont,
          r,
          r,
          r,
          n.titleColor,
          n.titleTextAlign,
          n.titleFontFamily,
          n.titleFontSize,
          n.titleFontBold,
          n.titleFontItalic,
          r,
          r,
          r,
          n.subtitleColor,
          n.subtitleTextAlign,
          n.subtitleFontFamily,
          n.subtitleFontSize,
          n.subtitleFontBold,
          n.subtitleFontItalic,
          r,
          n.axisYLabelColor,
          n.axisYLabelFont,
          n.axisYLabelFontSize,
          n.axisYLabelFontBold,
          n.axisYLabelFontItalic,
          r,
          n.axisXLabelColor,
          n.axisXLabelFont,
          n.axisXLabelFontSize,
          n.axisXLabelFontBold,
          n.axisXLabelFontItalic,
          r,
          n.legendFont,
          n.legendFontSize,
          n.legendFontBold,
          n.legendFontItalic,
          n.legendColor,
          r,
          r,
          n.gridLineColor,
          r,
          n.gridLineShow,
          r,
          n.axisYTitleFont,
          n.axisYTitleFontSize,
          n.axisYTitleFontBold,
          n.axisYTitleFontItalic,
          n.axisYTitleColor,
          r,
          n.axisXTitleFont,
          n.axisXTitleFontSize,
          n.axisXTitleFontBold,
          n.axisXTitleFontItalic,
          n.axisXTitleColor,
          r,
          n.seriesLabelFont,
          n.seriesLabelFontSize,
          n.seriesLabelFontBold,
          n.seriesLabelFontItalic,
          n.seriesLabelTextAlign,
          n.seriesLabelColor,
          r,
          n.seriesLineThickness,
          r,
          n.tooltipFont,
          n.tooltipFontSize,
          n.tooltipFontBold,
          n.tooltipFontItalic,
          n.tooltipColor,
          n.tooltipBackground,
          n.tooltipBorder,
          r,
          r,
          n.chartFont,
          n.chartFontSize,
          n.chartFontBold,
          n.chartFontItalic,
          n.chartColor,
          r,
          n.tableHeaderFont,
          n.tableHeaderFontSize,
          n.tableHeaderFontBold,
          n.tableHeaderFontItalic,
          n.tableHeaderTextAlign,
          n.tableHeaderColor,
          r,
          r,
          n.tableBodyFont,
          n.tableBodyFontSize,
          n.tableBodyFontBold,
          n.tableBodyFontItalic,
          n.tableBodyTextAlign,
          n.tableBodyColor,
          r,
          n.tableBodyRowAltBackground,
          r,
          n.tableBodyRowHoverBackground,
          r,
          n.funnelLabelColor,
          n.funnelLabelTextAlign,
          n.funnelLabelFontFamily,
          n.funnelLabelFontSize,
          n.funnelLabelFontBold,
          n.funnelLabelFontItalic
        );
      }
      function Et(e, t) {
        var n,
          r = 'default' !== e.chart ? e.chart : void 0,
          o = e.colors || [],
          a = !(!e.title_show || !e.title_text) && e.title_text,
          i = e.subtitle_show && e.subtitle_text ? e.subtitle_text : void 0,
          l = e.legend_show
            ? { show: e.legend_show, position: e.legend_layout }
            : { show: e.legend_show },
          s = xt(e),
          c = e.series_points_show
            ? { show: e.series_points_show, r: e.series_points_size }
            : { show: e.series_points_show },
          u = { labels: e.series_label_show },
          f =
            'metric' === e.chart && e.general_prefix
              ? e.general_prefix
              : void 0,
          d =
            'metric' === e.chart && e.general_suffix
              ? e.general_suffix
              : void 0,
          p = !!e.appearance_sparkline || void 0,
          h = e.series_stacked ? e.series_stacked : void 0,
          b = !!e.chart_slider_show,
          g =
            'table' === e.chart && e.table_pagination_show
              ? { pagination: { limit: e.table_pagination_limit } }
              : void 0,
          m =
            'choropleth' === e.chart
              ? {
                  map: e.choropleth_map,
                  borders: {
                    show: e.choropleth_border_show,
                    size: e.choropleth_border_show
                      ? e.choropleth_border_size
                      : void 0,
                    color: e.choropleth_border_show
                      ? e.choropleth_border_color
                      : void 0
                  },
                  showSlider: e.chart_slider_show
                }
              : void 0,
          v = _e.includes(e.chart)
            ? {
                lines: e.funnel_lines,
                resultValues: e.funnel_results,
                percents: {
                  show: e.funnel_percents_show,
                  countingMethod: e.funnel_percents_count || he[0].value,
                  decimals: e.funnel_percents_show
                    ? e.funnel_percents_decimals
                    : void 0
                },
                hover: e.funnel_hover,
                marginBetweenSteps: e.funnel_margin,
                minimalSize: e.funnel_minimal_size,
                effect3d: e.funnel_effect3d
              }
            : void 0;
        'heatmap' === r &&
          (n = { showSlider: b, simpleTooltip: e.tooltip_simpleTooltip });
        var _ = {
            container: '#some_container',
            type: r,
            title: a,
            subtitle: i,
            legend: l,
            axis: s,
            point: c,
            data: u,
            colors: o,
            prefix: f,
            suffix: d,
            heatmap: n,
            choropleth: m,
            funnel: v,
            sparkline: p,
            stacked: h,
            table: g
          },
          y = bt(_, ['container', 'type']);
        return t
          ? y
          : 'const chart = new KeenDataviz('.concat(
              JSON.stringify(_, null, 2),
              ')'
            );
      }
      function zt(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      lt.a.registerLanguage('css', ct.a),
        lt.a.registerLanguage('js', ft.a),
        (document.createElement('li').className = 'placeholder');
      var Ot = function(e) {
          var t = e.type,
            n = e.data,
            r = (zt(e, ['type', 'data']), 'js' === t ? Et(n) : St(n));
          return o.a.createElement(
            o.a.Fragment,
            null,
            (function(e) {
              return o.a.createElement(
                'button',
                {
                  className: 'builder__btn-copy btn',
                  onClick: function(t) {
                    return (function(e, t) {
                      e.preventDefault();
                      var n = document.createElement('textarea');
                      (n.value = t),
                        (n.classList = 'copy-to-clipboard'),
                        document.body.appendChild(n),
                        n.select(),
                        document.execCommand('copy'),
                        document.body.removeChild(n);
                    })(t, e);
                  }
                },
                'Copy to Clipboard'
              );
            })(r),
            o.a.createElement(lt.a, {
              language: t,
              value: r,
              className: 'builder__editor'
            })
          );
        },
        Ct = Ot;
      (Ot.defaultProps = { type: 'js', data: {} }),
        (Ot.propTypes = {
          type: i.a.oneOf(['js', 'css']).isRequired,
          data: i.a.object.isRequired
        });
      var jt = n(14),
        Ft = n.n(jt);
      function Tt() {
        return (Tt =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function At(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var Pt = function(e) {
          var t,
            n = e.type,
            r = e.colors,
            a = void 0 === r ? [] : r,
            i = e.legend,
            l = void 0 === i ? {} : i,
            s = e.axis,
            c = void 0 === s ? {} : s,
            u = e.title,
            f = e.subtitle,
            d = e.data,
            p = e.point,
            h = e.prefix,
            b = e.suffix,
            g = e.choropleth,
            m = e.funnel,
            v = e.slider,
            _ = e.simpleTooltip,
            y = e.sparkline,
            x = e.stacked,
            w = e.pagination,
            k =
              (At(e, [
                'type',
                'colors',
                'legend',
                'axis',
                'title',
                'subtitle',
                'data',
                'point',
                'prefix',
                'suffix',
                'choropleth',
                'funnel',
                'slider',
                'simpleTooltip',
                'sparkline',
                'stacked',
                'pagination'
              ]),
              function(e) {
                var t = function() {
                  return d && d.labels
                    ? { label: { show: !0 } }
                    : { label: { show: !1 } };
                };
                return 'pie' === e
                  ? { pie: t() }
                  : 'donut' === e
                  ? { donut: t() }
                  : 'gauge' === e
                  ? { gauge: t() }
                  : void 0;
              }),
            S = {};
          'heatmap' === n && (t = { showSlider: v, simpleTooltip: _ }),
            'table' === n && w && (S = { pagination: { limit: w } });
          return 'default' === n
            ? o.a.createElement(
                'div',
                { className: 'builder__default-charts' },
                o.a.createElement(Ft.a, {
                  type: 'bar',
                  title: u,
                  subtitle: f,
                  colors: a,
                  legend: l,
                  axis: c,
                  data: d,
                  point: p,
                  sparkline: y,
                  stacked: x,
                  results: $.bar
                }),
                o.a.createElement(Ft.a, {
                  type: 'area',
                  title: u,
                  subtitle: f,
                  colors: a,
                  legend: l,
                  axis: c,
                  data: d,
                  point: p,
                  sparkline: y,
                  stacked: x,
                  results: $.area
                }),
                o.a.createElement(Ft.a, {
                  type: 'funnel-3d',
                  title: u,
                  subtitle: f,
                  colors: a,
                  legend: l,
                  data: d,
                  point: p,
                  results: $['funnel-3d']
                }),
                o.a.createElement(
                  Ft.a,
                  Tt(
                    {
                      type: 'donut',
                      title: u,
                      subtitle: f,
                      colors: a,
                      legend: l,
                      data: d,
                      point: p,
                      sparkline: y,
                      results: $.donut
                    },
                    k('donut')
                  )
                )
              )
            : o.a.createElement(
                Ft.a,
                Tt(
                  {
                    type: n,
                    title: u,
                    subtitle: f,
                    colors: a,
                    legend: l,
                    axis: c,
                    data: d,
                    point: p,
                    prefix: h,
                    suffix: b,
                    heatmap: t,
                    choropleth: g,
                    funnel: m,
                    sparkline: y,
                    stacked: x,
                    table: S,
                    results:
                      'choropleth' === n && 'us' === g.map
                        ? $['choropleth-us']
                        : $[n]
                  },
                  k(n)
                )
              );
        },
        Nt = Pt;
      Pt.propTypes = {
        type: i.a.string.isRequired,
        colors: i.a.array.isRequired
      };
      n(232), n(234), n(236);
      function Mt(e) {
        return (Mt =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function Bt(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          })()
        );
      }
      function It(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function(t) {
              Lt(e, t, n[t]);
            });
        }
        return e;
      }
      function Lt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function Dt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Ht(e, t) {
        return !t || ('object' !== Mt(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Ut(e) {
        return (Ut = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Wt(e, t) {
        return (Wt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Zt = (function(e) {
        function t(e) {
          var n;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            ((n = Ht(
              this,
              Ut(t).call(this, e)
            )).handleChartTypeChange = function(e) {
              e.value && n.setState({ chart: e.value, isModified: !0 });
            }),
            (n.handleChartPaletteChange = function(e) {
              var t = e.value ? re[e.value].colors : [];
              n.setState({ chartPalette: e.value, colors: t, isModified: !0 });
            }),
            (n.handleColorsChange = function(e) {
              n.setState({ colors: e, isModified: !0 });
            }),
            (n.renderFontSize = function(e, t) {
              var r = J.find(function(e) {
                return e.value === n.state[''.concat(t, '_font_size')];
              });
              return o.a.createElement(
                'div',
                { className: 'accordion__item__row two-elements' },
                o.a.createElement(qe, {
                  key: ''.concat(t, '.font'),
                  title: e,
                  family: n.state[''.concat(t, '_font_family')],
                  fonts: n.state.fonts,
                  onChange: function(e) {
                    return n.handleTextStateUpdate(
                      ''.concat(t, '_font_family'),
                      e.value
                    );
                  }
                }),
                o.a.createElement(h.a, {
                  defaultValue: r || J[0],
                  options: J,
                  onChange: function(e) {
                    return n.handleTextStateUpdate(
                      ''.concat(t, '_font_size'),
                      e.value
                    );
                  },
                  classNamePrefix: 'custom-dropdown'
                })
              );
            }),
            (n.renderFontStyle = function(e, t, r, a) {
              var i = n.state[''.concat(t, '_textAlign')],
                l = r
                  ? 'accordion__item__row three-elements'
                  : 'accordion__item__row two-elements';
              return o.a.createElement(
                'div',
                { className: l },
                o.a.createElement(He, {
                  key: t,
                  title: e,
                  initialColor: n.state[''.concat(t, '_color')],
                  defaultColor: a || ae.title,
                  onChange: function(e) {
                    return n.handleTextStateUpdate(
                      ''.concat(t, '_color'),
                      e.hex
                    );
                  }
                }),
                o.a.createElement(Ie, {
                  items: Q,
                  singleChoice: !1,
                  groupName: ''.concat(t, '_style'),
                  activeItem: {
                    bold: n.state[''.concat(t, '_font_bold')],
                    italic: n.state[''.concat(t, '_font_italic')]
                  },
                  onChange: function(e) {
                    return n.handleTextStateUpdate(
                      ''.concat(t, '_font_').concat(e.target.value),
                      !n.state[''.concat(t, '_font_').concat(e.target.value)]
                    );
                  }
                }),
                r &&
                  o.a.createElement(h.a, {
                    defaultValue:
                      ee.find(function(e) {
                        return e.value === i;
                      }) || ee[0],
                    options: ee,
                    onChange: function(e) {
                      return n.handleTextStateUpdate(
                        ''.concat(t, '_textAlign'),
                        e.value
                      );
                    },
                    classNamePrefix: 'custom-dropdown'
                  })
              );
            });
          var r = n.props.options.chart,
            a = (function() {
              switch (
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ''
              ) {
                case 'bar':
                case 'horizontal-bar':
                case 'area':
                case 'line':
                case 'spline':
                case 'area-spline':
                case 'step':
                case 'area-step':
                  return mt({}, kt(ye, 'table', 'funnel'));
                case 'table':
                  return mt(
                    {},
                    kt(
                      ye,
                      'axis',
                      'legend',
                      'grid',
                      'series',
                      'tooltip',
                      'funnel'
                    )
                  );
                case 'metric':
                  return mt(
                    {},
                    kt(
                      ye,
                      'axis',
                      'legend',
                      'grid',
                      'series',
                      'tooltip',
                      'table',
                      'funnel'
                    )
                  );
                case 'pie':
                case 'donut':
                case 'gauge':
                  return mt({}, kt(ye, 'axis', 'grid', 'table', 'funnel'), {
                    series_label_show: !0
                  });
                case 'gauge':
                  return mt(
                    {},
                    kt(ye, 'axis', 'grid', 'legend', 'table', 'funnel')
                  );
                case 'heatmap':
                case 'choropleth':
                  return mt(
                    {},
                    kt(
                      ye,
                      'axis',
                      'series',
                      'legend',
                      'gridline',
                      'table',
                      'funnel'
                    )
                  );
                case 'funnel':
                case 'funnel-3d':
                case 'horizontal-funnel':
                case 'horizontal-funnel-3d':
                  return mt(
                    {},
                    kt(
                      ye,
                      'series',
                      'legend',
                      'grid',
                      'tooltip',
                      'table',
                      'axis'
                    )
                  );
                default:
                  return mt({}, ye);
              }
            })(void 0 === r ? '' : r);
          return (n.state = Rt({}, a, e.options, { isModified: !1 })), n;
        }
        var n, r, a;
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Wt(e, t);
          })(t, e),
          (n = t),
          (r = [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                fetch(
                  ''
                    .concat(
                      'https://www.googleapis.com/webfonts/v1/webfonts',
                      '/?key='
                    )
                    .concat('AIzaSyC529qus-Wu8LEftuMjSSBOt7mKu5lMm2E')
                )
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(t) {
                    return e.setState({ fonts: t.items });
                  })
                  .catch(function(e) {
                    return console.error(e);
                  });
              }
            },
            {
              key: 'componentDidUpdate',
              value: function(e, t) {
                var n = this;
                f()(e, this.props) ||
                  this.setState(function(e) {
                    return Rt({}, e, n.props.options);
                  });
                var r = this.state,
                  o = (r.fonts, r.isModified),
                  a = It(r, ['fonts', 'isModified']),
                  i = (t.fonts, t.isModified, It(t, ['fonts', 'isModified'])),
                  l = this.props,
                  s = l.isDashboardBuilderActive,
                  c = l.containerId,
                  u = l.onChange,
                  d = St(a, c).replace(/(\r\n|\n|\r)/gm, ''),
                  p = s ? { theme: a, style: d, options: Et(a, !0) } : a;
                o && !f()(a, i) && u && this.props.onChange(p);
              }
            },
            {
              key: 'handleStateChange',
              value: function(e, t) {
                var n = Object(l.a)(this.state, function(n) {
                  (n.isModified = !0), c()(n, e, t);
                });
                this.setState(function() {
                  return n;
                });
              }
            },
            {
              key: 'addItem',
              value: function() {
                this.setState(function(e) {
                  return {
                    colors: [].concat(Bt(e.colors), ['#222222']),
                    isModified: !0
                  };
                });
              }
            },
            {
              key: 'removeItem',
              value: function(e) {
                this.setState(function(t) {
                  var n = Bt(t.colors);
                  return n.splice(e, 1), { colors: n, isModified: !0 };
                });
              }
            },
            {
              key: 'onColorChange',
              value: function(e, t) {
                this.setState(function(n) {
                  var r = Bt(n.colors);
                  return (r[t] = e), { colors: r, isModified: !0 };
                });
              }
            },
            {
              key: 'renderChartTypeItem',
              value: function() {
                var e = this,
                  t = ne.find(function(t) {
                    return t.value === e.state.chart;
                  });
                return o.a.createElement(
                  'div',
                  { className: 'keen-theme-builder__row' },
                  o.a.createElement(
                    'label',
                    { className: 'control-label' },
                    'Available chart types'
                  ),
                  o.a.createElement(h.a, {
                    defaultValue: t || ne[0],
                    options: ne,
                    onChange: this.handleChartTypeChange,
                    className: 'chart-types',
                    classNamePrefix: 'custom-dropdown'
                  })
                );
              }
            },
            {
              key: 'handleTextStateUpdate',
              value: function(e, t) {
                this.setState(function(n) {
                  return Rt(
                    {},
                    n,
                    Lt({ isModified: !0 }, e, t !== me ? t : '')
                  );
                });
              }
            },
            {
              key: 'renderTitleSection',
              value: function() {
                var e = this,
                  t = this.props.options.chart;
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  'default' !== t &&
                    o.a.createElement(
                      'div',
                      { className: 'accordion__item__row' },
                      o.a.createElement(at, {
                        key: 'title',
                        type: 'text',
                        name: 'title',
                        value: this.state.title_text,
                        onChange: function(t) {
                          return e.handleTextStateUpdate(
                            'title_text',
                            t.target.value
                          );
                        }
                      })
                    ),
                  this.renderFontSize('Title font', 'title'),
                  this.renderFontStyle('Title format', 'title', !0)
                );
              }
            },
            {
              key: 'renderSubtitleSection',
              value: function() {
                var e = this,
                  t = this.props.options.chart;
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  'default' !== t &&
                    o.a.createElement(
                      'div',
                      { className: 'accordion__item__row' },
                      o.a.createElement(at, {
                        key: 'subtitle',
                        type: 'text',
                        name: 'subtitle',
                        value: this.state.subtitle_text,
                        onChange: function(t) {
                          return e.handleTextStateUpdate(
                            'subtitle_text',
                            t.target.value
                          );
                        }
                      })
                    ),
                  this.renderFontSize('Subtitle font', 'subtitle'),
                  this.renderFontStyle(
                    'Subtitle format',
                    'subtitle',
                    !0,
                    ae.subtitle
                  )
                );
              }
            },
            {
              key: 'renderVerticalAxisTitleSection',
              value: function() {
                var e = this;
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    'div',
                    { className: 'accordion__item__row' },
                    o.a.createElement(at, {
                      key: 'vertical-axis-title',
                      type: 'text',
                      name: 'vertical-axis-title',
                      value: this.state.axis_vertical_title_text,
                      onChange: function(t) {
                        return e.handleTextStateUpdate(
                          'axis_vertical_title_text',
                          t.target.value
                        );
                      }
                    })
                  ),
                  this.renderFontSize('Title font', 'axis_vertical_title'),
                  o.a.createElement(
                    'div',
                    { className: 'accordion__item__row three-elements' },
                    o.a.createElement(He, {
                      title: 'Title format',
                      initialColor: this.state.axis_vertical_title_color,
                      defaultColor: ae.title,
                      onChange: function(t) {
                        return e.handleTextStateUpdate(
                          'axis_vertical_title_color',
                          t.hex
                        );
                      }
                    }),
                    o.a.createElement(Ie, {
                      items: Q,
                      singleChoice: !1,
                      groupName: 'verticalAxisTitleStyle',
                      activeItem: {
                        bold: this.state.axis_vertical_title_font_bold,
                        italic: this.state.axis_vertical_title_font_italic
                      },
                      onChange: function(t) {
                        return e.handleTextStateUpdate(
                          'axis_vertical_title_font_'.concat(t.target.value),
                          !e.state[
                            'axis_vertical_title_font_'.concat(t.target.value)
                          ]
                        );
                      }
                    }),
                    o.a.createElement(h.a, {
                      defaultValue: te[1],
                      options: te,
                      onChange: function(t) {
                        return e.handleTextStateUpdate(
                          'axis_vertical_title_textAlign',
                          t.value
                        );
                      },
                      classNamePrefix: 'custom-dropdown'
                    })
                  )
                );
              }
            },
            {
              key: 'renderVerticalAxisLabelSection',
              value: function() {
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  this.renderFontSize('Axis font', 'axis_vertical_label'),
                  this.renderFontStyle('Axis format', 'axis_vertical_label', !1)
                );
              }
            },
            {
              key: 'renderHorizontalAxisTitleSection',
              value: function() {
                var e = this;
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    'div',
                    { className: 'accordion__item__row' },
                    o.a.createElement(at, {
                      key: 'horizotanl-axis-title',
                      type: 'text',
                      name: 'horizontal-axis-title',
                      value: this.state.axis_horizontal_title_text,
                      onChange: function(t) {
                        return e.handleTextStateUpdate(
                          'axis_horizontal_title_text',
                          t.target.value
                        );
                      }
                    })
                  ),
                  this.renderFontSize('Title font', 'axis_horizontal_title'),
                  this.renderFontStyle(
                    'Title format',
                    'axis_horizontal_title',
                    !0
                  )
                );
              }
            },
            {
              key: 'renderHorizontalAxisLabelSection',
              value: function() {
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  this.renderFontSize('Axis font', 'axis_horizontal_label'),
                  this.renderFontStyle(
                    'Axis format',
                    'axis_horizontal_label',
                    !1
                  )
                );
              }
            },
            {
              key: 'renderLegendSection',
              value: function() {
                var e = this,
                  t = this.state.legend_layout;
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    'div',
                    { className: 'accordion__item__row' },
                    o.a.createElement(Ie, {
                      items: ie,
                      singleChoice: !0,
                      groupName: 'legendLayout',
                      title: 'Layout',
                      activeItem: ie.find(function(t) {
                        return t.value === e.state.legend_layout;
                      }),
                      onChange: function(t) {
                        return e.handleTextStateUpdate(
                          'legend_layout',
                          t.target.value
                        );
                      }
                    })
                  ),
                  o.a.createElement(
                    'div',
                    { className: 'accordion__item__row' },
                    ('top' === t || 'bottom' === t) &&
                      o.a.createElement(Ie, {
                        items: se,
                        singleChoice: !0,
                        groupName: 'legendPositionHorizontal',
                        title: 'Alignment',
                        activeItem: se.find(function(t) {
                          return t.value === e.state.legend_position_horizontal;
                        }),
                        onChange: function(t) {
                          return e.handleTextStateUpdate(
                            'legend_position_horizontal',
                            t.target.value
                          );
                        }
                      }),
                    ('left' === t || 'right' === t) &&
                      o.a.createElement(Ie, {
                        items: le,
                        singleChoice: !0,
                        groupName: 'legendPositionVertical',
                        title: 'Alignment',
                        activeItem: le.find(function(t) {
                          return t.value === e.state.legend_position_vertical;
                        }),
                        onChange: function(t) {
                          return e.handleTextStateUpdate(
                            'legend_position_vertical',
                            t.target.value
                          );
                        }
                      })
                  ),
                  this.renderFontSize('Legend font', 'legend'),
                  this.renderFontStyle('Legend format', 'legend', !1)
                );
              }
            },
            {
              key: 'renderGridSection',
              value: function() {
                var e = this;
                return o.a.createElement(
                  'div',
                  { className: 'accordion__item__row two-elements' },
                  o.a.createElement(He, {
                    title: 'Lines color',
                    initialColor: this.state.grid_lines_color,
                    defaultColor: ae.border,
                    onChange: function(t) {
                      return e.handleTextStateUpdate('grid_lines_color', t.hex);
                    }
                  }),
                  o.a.createElement(
                    'div',
                    { className: 'dropdown disabled' },
                    o.a.createElement(
                      'span',
                      { className: 'dropdown__label' },
                      'Count'
                    ),
                    o.a.createElement(h.a, {
                      defaultValue: ce[0],
                      options: ce,
                      onChange: function(t) {
                        return e.handleTextStateUpdate('grid_count', t.value);
                      },
                      classNamePrefix: 'custom-dropdown'
                    })
                  )
                );
              }
            },
            {
              key: 'renderSubgridSection',
              value: function() {
                var e = this;
                return o.a.createElement(
                  'div',
                  { className: 'accordion__item__row two-elements' },
                  o.a.createElement(He, {
                    title: 'Lines color',
                    initialColor: this.state.subgrid_lines_color,
                    defaultColor: ae.border,
                    onChange: function(t) {
                      return e.handleTextStateUpdate(
                        'subgrid_lines_color',
                        t.hex
                      );
                    }
                  }),
                  o.a.createElement(
                    'div',
                    { className: 'dropdown' },
                    o.a.createElement(
                      'span',
                      { className: 'dropdown__label' },
                      'Count'
                    ),
                    o.a.createElement(h.a, {
                      defaultValue: ce[0],
                      options: ce,
                      onChange: function(t) {
                        return e.handleTextStateUpdate(
                          'subgrid_count',
                          t.value
                        );
                      },
                      classNamePrefix: 'custom-dropdown'
                    })
                  )
                );
              }
            },
            {
              key: 'renderSeriesLabelsSection',
              value: function() {
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  this.renderFontSize('Labels font', 'series_label'),
                  this.renderFontStyle('Labels format', 'series_label', !0)
                );
              }
            },
            {
              key: 'renderSeriesSection',
              value: function() {
                var e = this,
                  t = ue.find(function(t) {
                    return t.value === e.state.series_line;
                  });
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    'div',
                    { className: 'accordion__item__row' },
                    o.a.createElement(
                      'span',
                      { className: 'control-label' },
                      'Line thickness'
                    ),
                    o.a.createElement(h.a, {
                      defaultValue: t || ue[0],
                      options: ue,
                      onChange: function(t) {
                        return e.handleTextStateUpdate('series_line', t.value);
                      },
                      classNamePrefix: 'custom-dropdown'
                    })
                  )
                );
              }
            },
            {
              key: 'renderSeriesPointsSection',
              value: function() {
                var e = this,
                  t = fe.find(function(t) {
                    return t.value === e.state.series_points_size;
                  });
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    'div',
                    { className: 'accordion__item__row' },
                    o.a.createElement(
                      'span',
                      { className: 'control-label' },
                      'Points size'
                    ),
                    o.a.createElement(h.a, {
                      defaultValue: t || fe[0],
                      options: fe,
                      onChange: function(t) {
                        return e.handleTextStateUpdate(
                          'series_points_size',
                          t.value
                        );
                      },
                      classNamePrefix: 'custom-dropdown'
                    })
                  )
                );
              }
            },
            {
              key: 'renderMetricOptions',
              value: function() {
                var e = this;
                return o.a.createElement(
                  'div',
                  { className: 'keen-theme-builder__row two-elements' },
                  o.a.createElement(at, {
                    key: 'metric-prefix',
                    type: 'text',
                    label: 'Prefix',
                    name: 'metric-prefix',
                    value: this.state.general_prefix,
                    onChange: function(t) {
                      return e.handleTextStateUpdate(
                        'general_prefix',
                        t.target.value
                      );
                    }
                  }),
                  o.a.createElement(at, {
                    key: 'metric-suffix',
                    type: 'text',
                    label: 'Suffix',
                    name: 'metric-suffix',
                    value: this.state.general_suffix,
                    onChange: function(t) {
                      return e.handleTextStateUpdate(
                        'general_suffix',
                        t.target.value
                      );
                    }
                  })
                );
              }
            },
            {
              key: 'renderAppearanceFont',
              value: function() {
                var e = this;
                return 'metric' === this.state.chart
                  ? o.a.createElement(
                      'div',
                      { className: 'accordion__item__row' },
                      this.renderFontSize('Chart font', 'appearance'),
                      this.renderFontStyle('Chart format', 'appearance', !1)
                    )
                  : o.a.createElement(
                      'div',
                      { className: 'accordion__item__row' },
                      o.a.createElement(qe, {
                        title: 'Font',
                        family: this.state.appearance_font_family,
                        fonts: this.state.fonts,
                        onChange: function(t) {
                          return e.handleStateChange(
                            'appearance_font_family',
                            t.value
                          );
                        }
                      })
                    );
              }
            },
            {
              key: 'generateHoverColor',
              value: function(e) {
                if (!e.hsl) return ae.rowHover;
                var t = e.hsl,
                  n = t.h,
                  r = t.s,
                  o = t.l,
                  a = t.a,
                  i =
                    o < 0.5
                      ? { h: n, s: r, l: o + 0.2, a: a }
                      : { h: n, s: r, l: o - 0.2, a: a };
                return (function(e, t, n) {
                  var r = (1 - Math.abs(2 * n - 1)) * t,
                    o = r * (1 - Math.abs(((e / 60) % 2) - 1)),
                    a = n - r / 2,
                    i = 0,
                    l = 0,
                    s = 0;
                  return (
                    0 <= e && e < 60
                      ? ((i = r), (l = o), (s = 0))
                      : 60 <= e && e < 120
                      ? ((i = o), (l = r), (s = 0))
                      : 120 <= e && e < 180
                      ? ((i = 0), (l = r), (s = o))
                      : 180 <= e && e < 240
                      ? ((i = 0), (l = o), (s = r))
                      : 240 <= e && e < 300
                      ? ((i = o), (l = 0), (s = r))
                      : 300 <= e && e < 360 && ((i = r), (l = 0), (s = o)),
                    (i = Math.round(255 * (i + a)).toString(16)),
                    (l = Math.round(255 * (l + a)).toString(16)),
                    (s = Math.round(255 * (s + a)).toString(16)),
                    1 == i.length && (i = '0' + i),
                    1 == l.length && (l = '0' + l),
                    1 == s.length && (s = '0' + s),
                    '#' + i + l + s
                  );
                })(i.h, i.s, i.l);
              }
            },
            {
              key: 'renderChoroplethMapDropdown',
              value: function() {
                var e = this,
                  t = pe.find(function(t) {
                    return t.value === e.state.choropleth_map;
                  });
                return o.a.createElement(
                  'div',
                  { className: 'keen-theme-builder__row' },
                  o.a.createElement(
                    'span',
                    { className: 'control-label' },
                    'Map'
                  ),
                  o.a.createElement(h.a, {
                    defaultValue: t || pe[0],
                    options: pe,
                    onChange: function(t) {
                      return e.handleTextStateUpdate('choropleth_map', t.value);
                    },
                    classNamePrefix: 'custom-dropdown'
                  })
                );
              }
            },
            {
              key: 'renderMapBorderSettings',
              value: function() {
                var e = this,
                  t = ue.find(function(t) {
                    return t.value === e.state.choropleth_border_size;
                  });
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    'div',
                    { className: 'accordion__item__row' },
                    o.a.createElement(
                      'span',
                      { className: 'control-label' },
                      'Border size'
                    ),
                    o.a.createElement(h.a, {
                      defaultValue: t || ue[0],
                      options: ue,
                      onChange: function(t) {
                        return e.handleTextStateUpdate(
                          'choropleth_border_size',
                          t.value
                        );
                      },
                      className: 'predefined-palette',
                      classNamePrefix: 'custom-dropdown'
                    })
                  ),
                  o.a.createElement(
                    'div',
                    { className: 'accordion__item__row' },
                    o.a.createElement(He, {
                      title: 'Chart border',
                      initialColor: this.state.choropleth_border_color,
                      defaultColor: ae.border,
                      onChange: function(t) {
                        return e.handleStateChange(
                          'choropleth_border_color',
                          t.hex
                        );
                      }
                    })
                  )
                );
              }
            },
            {
              key: 'renderChoroplethSettings',
              value: function() {
                var e = this;
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    Qe,
                    {
                      checked: !!this.state.choropleth_border_show,
                      onChange: function() {
                        return e.handleStateChange(
                          'choropleth_border_show',
                          !e.state.choropleth_border_show
                        );
                      },
                      text: { on: 'Show', off: 'Hide' }
                    },
                    o.a.createElement(
                      'span',
                      { className: 'control-label' },
                      'Map border'
                    )
                  ),
                  this.state.choropleth_border_show &&
                    this.renderMapBorderSettings()
                );
              }
            },
            {
              key: 'renderFunnelPercentsSection',
              value: function() {
                var e = this,
                  t = he.find(function(t) {
                    return t.value === e.state.funnel_percents_count;
                  });
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    'div',
                    { className: 'accordion__item__row' },
                    o.a.createElement(
                      'span',
                      { className: 'control-label' },
                      'Counting method'
                    ),
                    o.a.createElement(h.a, {
                      defaultValue: t || he[0],
                      options: he,
                      onChange: function(t) {
                        return e.handleTextStateUpdate(
                          'funnel_percents_count',
                          t.value
                        );
                      },
                      className: 'predefined-palette',
                      classNamePrefix: 'custom-dropdown'
                    })
                  ),
                  o.a.createElement(
                    'div',
                    { className: 'accordion__item__row' },
                    o.a.createElement(at, {
                      key: 'funnel-percents-decimals',
                      type: 'text',
                      label: 'Decimals',
                      name: 'funnel-percents-decimals',
                      value: this.state.funnel_percents_decimals,
                      onChange: function(t) {
                        return e.handleTextStateUpdate(
                          'funnel_percents_decimals',
                          t.target.value
                        );
                      },
                      maxLength: '2'
                    })
                  )
                );
              }
            },
            {
              key: 'renderFunnel3dOptions',
              value: function() {
                var e = this,
                  t = be.find(function(t) {
                    return t.value === e.state.funnel_effect3d;
                  });
                return o.a.createElement(
                  'div',
                  { className: 'accordion__item__row' },
                  o.a.createElement(
                    'span',
                    { className: 'control-label' },
                    '3d effect'
                  ),
                  o.a.createElement(h.a, {
                    defaultValue: t || be[0],
                    options: be,
                    onChange: function(t) {
                      return e.handleTextStateUpdate(
                        'funnel_effect3d',
                        t.value
                      );
                    },
                    className: 'predefined-palette',
                    classNamePrefix: 'custom-dropdown'
                  })
                );
              }
            },
            {
              key: 'renderConfigSection',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.isDashboardBuilderActive,
                  r = (function() {
                    switch (
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : ''
                    ) {
                      case 'bar':
                      case 'horizontal-bar':
                      case 'area':
                      case 'line':
                      case 'spline':
                      case 'area-spline':
                      case 'step':
                      case 'area-step':
                        return mt({}, ve, { table: !1, funnel: !1 });
                      case 'table':
                        return mt({}, ve, {
                          axis: !1,
                          legend: !1,
                          gridline: !1,
                          series: !1,
                          tooltip: !1,
                          funnel: !1
                        });
                      case 'metric':
                        return mt({}, ve, {
                          axis: !1,
                          legend: !1,
                          gridline: !1,
                          series: !1,
                          tooltip: !1,
                          table: !1,
                          funnel: !1
                        });
                      case 'pie':
                      case 'donut':
                        return mt({}, ve, {
                          axis: !1,
                          gridline: !1,
                          table: !1,
                          funnel: !1
                        });
                      case 'gauge':
                        return mt({}, ve, {
                          axis: !1,
                          gridline: !1,
                          legend: !1,
                          table: !1,
                          funnel: !1
                        });
                      case 'heatmap':
                      case 'choropleth':
                        return mt({}, ve, {
                          axis: !1,
                          series: !1,
                          legend: !1,
                          gridline: !1,
                          table: !1,
                          funnel: !1
                        });
                      case 'funnel':
                      case 'funnel-3d':
                      case 'horizontal-funnel':
                      case 'horizontal-funnel-3d':
                        return mt({}, ve, {
                          axis: !1,
                          series: !1,
                          legend: !1,
                          gridline: !1,
                          tooltip: !1,
                          table: !1
                        });
                      default:
                        return ve;
                    }
                  })(t.options.chart),
                  a = oe.find(function(t) {
                    return t.value === e.state.chartPalette;
                  });
                return o.a.createElement(
                  'section',
                  { className: 'builder__config' },
                  o.a.createElement(
                    'h2',
                    { className: 'builder__header' },
                    'Chart style'
                  ),
                  !n && this.renderChartTypeItem(),
                  'metric' === this.state.chart && this.renderMetricOptions(),
                  'choropleth' === this.state.chart &&
                    this.renderChoroplethMapDropdown(),
                  ('heatmap' === this.state.chart ||
                    'choropleth' === this.state.chart) &&
                    o.a.createElement(
                      Qe,
                      {
                        checked: !!this.state.chart_slider_show,
                        onChange: function() {
                          return e.handleStateChange(
                            'chart_slider_show',
                            !e.state.chart_slider_show
                          );
                        },
                        text: { on: 'Show', off: 'Hide' }
                      },
                      o.a.createElement(
                        'span',
                        { className: 'control-label' },
                        'Slider'
                      )
                    ),
                  o.a.createElement(
                    $e,
                    null,
                    r.appearance &&
                      o.a.createElement(
                        'div',
                        { label: 'Appearance' },
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.appearance_sparkline,
                            onChange: function() {
                              return e.handleStateChange(
                                'appearance_sparkline',
                                !e.state.appearance_sparkline
                              );
                            }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'control-label' },
                            'Sparkline'
                          )
                        ),
                        o.a.createElement(
                          'div',
                          { className: 'accordion__item__row' },
                          o.a.createElement(He, {
                            title: 'Chart background',
                            initialColor: this.state.appearance_background,
                            defaultColor: ae.background,
                            onChange: function(t) {
                              return e.handleStateChange(
                                'appearance_background',
                                t.hex
                              );
                            }
                          })
                        ),
                        o.a.createElement(
                          'div',
                          { className: 'accordion__item__row' },
                          o.a.createElement(He, {
                            title: 'Chart border',
                            initialColor: this.state.appearance_border,
                            defaultColor: ae.border,
                            onChange: function(t) {
                              return e.handleStateChange(
                                'appearance_border',
                                t.hex
                              );
                            }
                          })
                        ),
                        this.renderAppearanceFont(),
                        'choropleth' === this.state.chart &&
                          this.renderChoroplethSettings(),
                        o.a.createElement(
                          'div',
                          { className: 'accordion__item__row' },
                          o.a.createElement(
                            'span',
                            { className: 'control-label' },
                            'Plot colors'
                          ),
                          o.a.createElement(h.a, {
                            defaultValue: a || oe[0],
                            options: oe,
                            onChange: this.handleChartPaletteChange,
                            className: 'predefined-palette',
                            classNamePrefix: 'custom-dropdown'
                          })
                        ),
                        o.a.createElement(Me, {
                          colors: this.state.colors,
                          onChange: this.handleColorsChange
                        })
                      ),
                    r.title &&
                      o.a.createElement(
                        'div',
                        { label: 'Title & Subtitle' },
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.title_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'title_show',
                                !e.state.title_show
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Title'
                          )
                        ),
                        this.state.title_show && this.renderTitleSection(),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.subtitle_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'subtitle_show',
                                !e.state.subtitle_show
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Subtitle'
                          )
                        ),
                        this.state.subtitle_show && this.renderSubtitleSection()
                      ),
                    r.axis &&
                      o.a.createElement(
                        'div',
                        { label: 'Vertical axis' },
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.axis_vertical_title_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'axis_vertical_title_show',
                                !e.state.axis_vertical_title_show
                              );
                            }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Axis title'
                          )
                        ),
                        this.state.axis_vertical_title_show &&
                          this.renderVerticalAxisTitleSection(),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.axis_vertical_label_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'axis_vertical_label_show',
                                !e.state.axis_vertical_label_show
                              );
                            }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Axis labels'
                          )
                        ),
                        this.state.axis_vertical_label_show &&
                          this.renderVerticalAxisLabelSection()
                      ),
                    r.axis &&
                      o.a.createElement(
                        'div',
                        { label: 'Horizontal axis' },
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.axis_horizontal_title_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'axis_horizontal_title_show',
                                !e.state.axis_horizontal_title_show
                              );
                            }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Axis title'
                          )
                        ),
                        this.state.axis_horizontal_title_show &&
                          this.renderHorizontalAxisTitleSection(),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.axis_horizontal_label_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'axis_horizontal_label_show',
                                !e.state.axis_horizontal_label_show
                              );
                            }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Axis labels'
                          )
                        ),
                        this.state.axis_horizontal_label_show &&
                          this.renderHorizontalAxisLabelSection()
                      ),
                    r.legend &&
                      o.a.createElement(
                        'div',
                        { label: 'Legend' },
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.legend_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'legend_show',
                                !e.state.legend_show
                              );
                            }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Legend'
                          )
                        ),
                        this.state.legend_show && this.renderLegendSection()
                      ),
                    r.gridline &&
                      o.a.createElement(
                        'div',
                        { label: 'Gridline' },
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.grid_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'grid_show',
                                !e.state.grid_show
                              );
                            }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Gridline'
                          )
                        ),
                        this.state.grid_show && this.renderGridSection(),
                        o.a.createElement(
                          Qe,
                          {
                            className: 'disabled',
                            checked: !!this.state.subgrid_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'subgrid_show',
                                !e.state.subgrid_show
                              );
                            }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Subgrid'
                          )
                        ),
                        this.state.subgrid_show && this.renderSubgridSection()
                      ),
                    r.series &&
                      o.a.createElement(
                        'div',
                        { label: 'Series' },
                        this.renderSeriesSection(),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.series_points_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'series_points_show',
                                !e.state.series_points_show
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Points'
                          )
                        ),
                        this.state.series_points_show &&
                          this.renderSeriesPointsSection(),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.series_label_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'series_label_show',
                                !e.state.series_label_show
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Data labels'
                          )
                        ),
                        this.state.series_label_show &&
                          this.renderSeriesLabelsSection(),
                        o.a.createElement(Ie, {
                          items: de,
                          singleChoice: !0,
                          groupName: 'stacked',
                          title: 'Stacked',
                          activeItem: de.find(function(t) {
                            return t.value === e.state.series_stacked;
                          }),
                          onChange: function(t) {
                            return e.handleTextStateUpdate(
                              'series_stacked',
                              t.target.value
                            );
                          }
                        })
                      ),
                    r.tooltip &&
                      o.a.createElement(
                        'div',
                        { label: 'Tooltip' },
                        this.renderFontSize('Tooltip font', 'tooltip'),
                        this.renderFontStyle('Tooltip format', 'tooltip', !1),
                        o.a.createElement(
                          'div',
                          { className: 'accordion__item__row' },
                          o.a.createElement(He, {
                            key: 'tooltip_background',
                            title: 'Tooltip background',
                            initialColor: this.state.tooltip_background,
                            defaultColor: ae.background,
                            onChange: function(t) {
                              return e.handleTextStateUpdate(
                                'tooltip_background',
                                t.hex
                              );
                            }
                          })
                        ),
                        o.a.createElement(
                          'div',
                          { className: 'accordion__item__row' },
                          o.a.createElement(He, {
                            key: 'tooltip_border',
                            title: 'Tooltip border',
                            initialColor: this.state.tooltip_border,
                            onChange: function(t) {
                              return e.handleTextStateUpdate(
                                'tooltip_border',
                                t.hex
                              );
                            }
                          })
                        ),
                        'heatmap' === this.state.chart &&
                          o.a.createElement(
                            Qe,
                            {
                              checked: !!this.state.tooltip_simpleTooltip,
                              onChange: function() {
                                return e.handleStateChange(
                                  'tooltip_simpleTooltip',
                                  !e.state.tooltip_simpleTooltip
                                );
                              }
                            },
                            o.a.createElement(
                              'span',
                              { className: 'control-label' },
                              'Simple tooltip'
                            )
                          )
                      ),
                    r.table &&
                      o.a.createElement(
                        'div',
                        { label: 'Table' },
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.table_pagination_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'table_pagination_show',
                                !e.state.table_pagination_show
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Pagination'
                          )
                        ),
                        this.state.table_pagination_show &&
                          o.a.createElement(
                            'div',
                            { className: 'accordion__item__row' },
                            o.a.createElement(at, {
                              key: 'table-pagination',
                              type: 'text',
                              label: 'Pagination limit',
                              name: 'table-pagination',
                              value: this.state.table_pagination_limit,
                              onChange: function(t) {
                                return e.handleTextStateUpdate(
                                  'table_pagination_limit',
                                  t.target.value
                                );
                              },
                              maxLength: '2'
                            })
                          ),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.table_header_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'table_header_show',
                                !e.state.table_header_show
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Table header'
                          )
                        ),
                        this.state.table_header_show &&
                          o.a.createElement(
                            o.a.Fragment,
                            null,
                            this.renderFontSize('Header font', 'table_header'),
                            this.renderFontStyle(
                              'Header format',
                              'table_header',
                              !0
                            )
                          ),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.table_body_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'table_body_show',
                                !e.state.table_body_show
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Table body'
                          )
                        ),
                        this.state.table_body_show &&
                          o.a.createElement(
                            o.a.Fragment,
                            null,
                            this.renderFontSize('Body font', 'table_body'),
                            this.renderFontStyle(
                              'Body format',
                              'table_body',
                              !0
                            ),
                            o.a.createElement(
                              'div',
                              { className: 'accordion__item__row' },
                              o.a.createElement(He, {
                                title: 'Alternate row background',
                                initialColor: this.state
                                  .table_body_row_alternate_color,
                                defaultColor: ae.row,
                                onChange: function(t) {
                                  e.handleTextStateUpdate(
                                    'table_body_row_alternate_color',
                                    t.hex
                                  );
                                  var n = e.generateHoverColor(t);
                                  e.handleTextStateUpdate(
                                    'table_body_row_hover_background',
                                    n
                                  );
                                }
                              })
                            )
                          )
                      ),
                    r.funnel &&
                      o.a.createElement(
                        'div',
                        { label: 'Funnel' },
                        this.renderFontSize('Label font', 'funnel_label'),
                        this.renderFontStyle(
                          'Label format',
                          'funnel_label',
                          !0
                        ),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.funnel_lines,
                            onChange: function() {
                              return e.handleStateChange(
                                'funnel_lines',
                                !e.state.funnel_lines
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'control-label' },
                            'Lines'
                          )
                        ),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.funnel_results,
                            onChange: function() {
                              return e.handleStateChange(
                                'funnel_results',
                                !e.state.funnel_results
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'control-label' },
                            'Results'
                          )
                        ),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.funnel_percents_show,
                            onChange: function() {
                              return e.handleStateChange(
                                'funnel_percents_show',
                                !e.state.funnel_percents_show
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'section-title' },
                            'Percents'
                          )
                        ),
                        this.state.funnel_percents_show &&
                          this.renderFunnelPercentsSection(),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.funnel_hover,
                            onChange: function() {
                              return e.handleStateChange(
                                'funnel_hover',
                                !e.state.funnel_hover
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'control-label' },
                            'Hover'
                          )
                        ),
                        o.a.createElement(
                          Qe,
                          {
                            checked: !!this.state.funnel_margin,
                            onChange: function() {
                              return e.handleStateChange(
                                'funnel_margin',
                                !e.state.funnel_margin
                              );
                            },
                            text: { on: 'Show', off: 'Hide' }
                          },
                          o.a.createElement(
                            'span',
                            { className: 'control-label' },
                            'Margin between steps'
                          )
                        ),
                        o.a.createElement(
                          'div',
                          { className: 'accordion__item__row' },
                          o.a.createElement(at, {
                            key: 'funnel-minimal-size',
                            type: 'number',
                            label: 'Minimal size',
                            name: 'funnel-minimal-size',
                            value: this.state.funnel_minimal_size,
                            onChange: function(t) {
                              return e.handleTextStateUpdate(
                                'funnel_minimal_size',
                                t.target.value
                              );
                            }
                          })
                        ),
                        ('funnel-3d' === this.state.chart ||
                          'horizontal-funnel-3d' === this.state.chart) &&
                          this.renderFunnel3dOptions()
                      )
                  )
                );
              }
            },
            {
              key: 'renderTabChart',
              value: function() {
                var e = yt(this.state),
                  t =
                    !(!this.state.title_show || !this.state.title_text) &&
                    this.state.title_text,
                  n =
                    this.state.subtitle_show && this.state.subtitle_text
                      ? this.state.subtitle_text
                      : '',
                  r =
                    'top' === this.state.legend_layout ||
                    'bottom' === this.state.legend_layout
                      ? this.state.legend_position_horizontal
                      : this.state.legend_position_vertical,
                  a = {
                    show: this.state.legend_show,
                    position: this.state.legend_layout,
                    alignment: r
                  },
                  i = !!this.state.series_label_show && { labels: !0 },
                  l = {
                    show: this.state.series_points_show,
                    r: this.state.series_points_size
                  },
                  s = this.state.general_prefix
                    ? this.state.general_prefix
                    : void 0,
                  c = this.state.general_suffix
                    ? this.state.general_suffix
                    : void 0,
                  u = parseInt(this.state.table_pagination_limit),
                  f = this.state.table_pagination_show && u ? u : void 0,
                  d =
                    'choropleth' === this.state.chart
                      ? {
                          map: this.state.choropleth_map,
                          borders: {
                            show: this.state.choropleth_border_show,
                            size: this.state.choropleth_border_size,
                            color: this.state.choropleth_border_color
                          },
                          showSlider: this.state.chart_slider_show
                        }
                      : void 0,
                  p = _e.includes(this.state.chart)
                    ? {
                        lines: this.state.funnel_lines,
                        resultValues: this.state.funnel_results,
                        percents: {
                          show: this.state.funnel_percents_show,
                          countingMethod: this.state.funnel_percents_count,
                          decimals: this.state.funnel_percents_decimals
                        },
                        hover: this.state.funnel_hover,
                        marginBetweenSteps: this.state.funnel_margin,
                        minimalSize: this.state.funnel_minimal_size,
                        effect3d: this.state.funnel_effect3d
                      }
                    : void 0;
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(Nt, {
                    type: this.state.chart,
                    colors: this.state.colors,
                    legend: a,
                    title: t,
                    subtitle: n,
                    axis: xt(this.state),
                    data: i,
                    point: l,
                    prefix: s,
                    suffix: c,
                    choropleth: d,
                    funnel: p,
                    simpleTooltip: this.state.tooltip_simpleTooltip,
                    sparkline: this.state.appearance_sparkline,
                    stacked: this.state.series_stacked,
                    pagination: f
                  }),
                  o.a.createElement(
                    g.a,
                    {
                      id: '3712229450',
                      dynamic: [
                        e.chartBackground,
                        e.chartBorder,
                        e.chartFont,
                        e.titleColor,
                        e.titleTextAlign,
                        e.titleFontFamily,
                        e.titleFontSize,
                        e.titleFontBold,
                        e.titleFontItalic,
                        e.subtitleColor,
                        e.subtitleTextAlign,
                        e.subtitleFontFamily,
                        e.subtitleFontSize,
                        e.subtitleFontBold,
                        e.subtitleFontItalic,
                        e.axisYLabelColor,
                        e.axisYLabelFont,
                        e.axisYLabelFontSize,
                        e.axisYLabelFontBold,
                        e.axisYLabelFontItalic,
                        e.axisXLabelColor,
                        e.axisXLabelFont,
                        e.axisXLabelFontSize,
                        e.axisXLabelFontBold,
                        e.axisXLabelFontItalic,
                        e.legendFont,
                        e.legendFontSize,
                        e.legendFontBold,
                        e.legendFontItalic,
                        e.legendColor,
                        e.gridLineColor,
                        e.gridLineShow,
                        e.axisYTitleFont,
                        e.axisYTitleFontSize,
                        e.axisYTitleFontBold,
                        e.axisYTitleFontItalic,
                        e.axisYTitleColor,
                        e.axisXTitleFont,
                        e.axisXTitleFontSize,
                        e.axisXTitleFontBold,
                        e.axisXTitleFontItalic,
                        e.axisXTitleColor,
                        e.seriesLabelFont,
                        e.seriesLabelFontSize,
                        e.seriesLabelFontBold,
                        e.seriesLabelFontItalic,
                        e.seriesLabelTextAlign,
                        e.seriesLabelColor,
                        e.seriesLineThickness,
                        e.tooltipFont,
                        e.tooltipFontSize,
                        e.tooltipFontBold,
                        e.tooltipFontItalic,
                        e.tooltipColor,
                        e.tooltipBackground,
                        e.tooltipBorder,
                        e.chartFont,
                        e.chartFontSize,
                        e.chartFontBold,
                        e.chartFontItalic,
                        e.chartColor,
                        e.tableHeaderFont,
                        e.tableHeaderFontSize,
                        e.tableHeaderFontBold,
                        e.tableHeaderFontItalic,
                        e.tableHeaderTextAlign,
                        e.tableHeaderColor,
                        e.tableBodyFont,
                        e.tableBodyFontSize,
                        e.tableBodyFontBold,
                        e.tableBodyFontItalic,
                        e.tableBodyTextAlign,
                        e.tableBodyColor,
                        e.tableBodyRowAltBackground,
                        e.tableBodyRowHoverBackground,
                        e.funnelLabelColor,
                        e.funnelLabelTextAlign,
                        e.funnelLabelFontFamily,
                        e.funnelLabelFontSize,
                        e.funnelLabelFontBold,
                        e.funnelLabelFontItalic
                      ]
                    },
                    [
                      '.keen-theme-builder .keen-dataviz{'
                        .concat(e.chartBackground, ' ')
                        .concat(e.chartBorder, ';}'),
                      '.keen-dataviz,.c3 svg{'.concat(e.chartFont, ';}'),
                      '.keen-dataviz .keen-dataviz-title,.keen-theme-builder .keen-dataviz .keen-dataviz-metric-title{display:block;'
                        .concat(e.titleColor, ' ')
                        .concat(e.titleTextAlign, ' ')
                        .concat(e.titleFontFamily, ' ')
                        .concat(e.titleFontSize, ' ')
                        .concat(e.titleFontBold, ' ')
                        .concat(e.titleFontItalic, ';}'),
                      '.keen-dataviz .keen-dataviz-subtitle,.keen-theme-builder .keen-dataviz .keen-dataviz-metric-subtitle{width:100%;display:block;'
                        .concat(e.subtitleColor, ' ')
                        .concat(e.subtitleTextAlign, ' ')
                        .concat(e.subtitleFontFamily, ' ')
                        .concat(e.subtitleFontSize, ' ')
                        .concat(e.subtitleFontBold, ' ')
                        .concat(e.subtitleFontItalic, ';}'),
                      '.keen-dataviz .c3-axis.c3-axis-y .tick text{'
                        .concat(e.axisYLabelColor, ' ')
                        .concat(e.axisYLabelFont, ' ')
                        .concat(e.axisYLabelFontSize, ' ')
                        .concat(e.axisYLabelFontBold, ' ')
                        .concat(e.axisYLabelFontItalic, ';}'),
                      '.keen-dataviz .c3-axis.c3-axis-x .tick text{'
                        .concat(e.axisXLabelColor, ' ')
                        .concat(e.axisXLabelFont, ' ')
                        .concat(e.axisXLabelFontSize, ' ')
                        .concat(e.axisXLabelFontBold, ' ')
                        .concat(e.axisXLabelFontItalic, ';}'),
                      '.keen-dataviz .keen-c3-legend .legend-item-text{'
                        .concat(e.legendFont, ' ')
                        .concat(e.legendFontSize, ' ')
                        .concat(e.legendFontBold, ' ')
                        .concat(e.legendFontItalic, ' ')
                        .concat(e.legendColor, ';}'),
                      '.keen-dataviz .c3-grid line,.keen-dataviz .chart-lines{'.concat(
                        e.gridLineColor,
                        ';}'
                      ),
                      '.keen-theme-builder .keen-dataviz .c3-ygrid{'.concat(
                        e.gridLineShow,
                        ';}'
                      ),
                      '.keen-theme-builder .keen-dataviz .c3-axis .c3-axis-y-label{'
                        .concat(e.axisYTitleFont, ' ')
                        .concat(e.axisYTitleFontSize, ' ')
                        .concat(e.axisYTitleFontBold, ' ')
                        .concat(e.axisYTitleFontItalic, ' ')
                        .concat(e.axisYTitleColor, ';}'),
                      '.keen-theme-builder .keen-dataviz .c3-axis .c3-axis-x-label{'
                        .concat(e.axisXTitleFont, ' ')
                        .concat(e.axisXTitleFontSize, ' ')
                        .concat(e.axisXTitleFontBold, ' ')
                        .concat(e.axisXTitleFontItalic, ' ')
                        .concat(e.axisXTitleColor, ';}'),
                      '.keen-theme-builder .keen-dataviz .c3-chart-texts .c3-text,.keen-theme-builder .keen-dataviz .c3-chart-arcs .c3-chart-arc text,.keen-theme-builder .keen-dataviz .c3-chart-arcs-gauge-min,.keen-theme-builder .keen-dataviz .c3-chart-arcs-gauge-max{'
                        .concat(e.seriesLabelFont, ' ')
                        .concat(e.seriesLabelFontSize, ' ')
                        .concat(e.seriesLabelFontBold, ' ')
                        .concat(e.seriesLabelFontItalic, ' ')
                        .concat(e.seriesLabelTextAlign, ' ')
                        .concat(e.seriesLabelColor, ';}'),
                      '.keen-theme-builder .keen-dataviz .c3-chart-lines .c3-shape.c3-line{'.concat(
                        e.seriesLineThickness,
                        ';}'
                      ),
                      '.keen-theme-builder .keen-dataviz .c3-tooltip{'
                        .concat(e.tooltipFont, ' ')
                        .concat(e.tooltipFontSize, ' ')
                        .concat(e.tooltipFontBold, ' ')
                        .concat(e.tooltipFontItalic, ' ')
                        .concat(e.tooltipColor, ' ')
                        .concat(e.tooltipBackground, ' ')
                        .concat(e.tooltipBorder, ';}'),
                      '.keen-theme-builder .keen-dataviz .keen-dataviz-metric,.keen-theme-builder .keen-dataviz .keen-dataviz-metric-value{'
                        .concat(e.chartFont, ' ')
                        .concat(e.chartFontSize, ' ')
                        .concat(e.chartFontBold, ' ')
                        .concat(e.chartFontItalic, ' ')
                        .concat(e.chartColor, ';}'),
                      '.keen-theme-builder .keen-dataviz-table th{'
                        .concat(e.tableHeaderFont, ' ')
                        .concat(e.tableHeaderFontSize, ' ')
                        .concat(e.tableHeaderFontBold, ' ')
                        .concat(e.tableHeaderFontItalic, ' ')
                        .concat(e.tableHeaderTextAlign, ' ')
                        .concat(e.tableHeaderColor, ';}'),
                      '.keen-theme-builder .keen-dataviz-table tr td,.keen-theme-builder .keen-dataviz-table .table-data-row{'
                        .concat(e.tableBodyFont, ' ')
                        .concat(e.tableBodyFontSize, ' ')
                        .concat(e.tableBodyFontBold, ' ')
                        .concat(e.tableBodyFontItalic, ' ')
                        .concat(e.tableBodyTextAlign, ' ')
                        .concat(e.tableBodyColor, ';}'),
                      '.keen-theme-builder .keen-dataviz-table .table-data-row:nth-child(even) td{'.concat(
                        e.tableBodyRowAltBackground,
                        ';}'
                      ),
                      '.keen-theme-builder .keen-dataviz-table .table-data-row:hover td{'.concat(
                        e.tableBodyRowHoverBackground,
                        ' color:inherit;}'
                      ),
                      '.keen-theme-builder .keen-dataviz-rendering .text-label{display:block;'
                        .concat(e.funnelLabelColor, ' ')
                        .concat(e.funnelLabelTextAlign, ' ')
                        .concat(e.funnelLabelFontFamily, ' ')
                        .concat(e.funnelLabelFontSize, ' ')
                        .concat(e.funnelLabelFontBold, ' ')
                        .concat(e.funnelLabelFontItalic, ';}')
                    ]
                  )
                );
              }
            },
            {
              key: 'renderMockUpSection',
              value: function() {
                return o.a.createElement(
                  'div',
                  { className: 'builder__mockup' },
                  o.a.createElement(
                    'h2',
                    { className: 'builder__header' },
                    'Preview'
                  ),
                  !this.props.isDashboardBuilderActive &&
                    o.a.createElement(
                      d.Tabs,
                      null,
                      o.a.createElement(
                        d.TabList,
                        null,
                        o.a.createElement(d.Tab, null, 'Chart'),
                        o.a.createElement(d.Tab, null, 'CSS'),
                        o.a.createElement(d.Tab, null, 'Javascript')
                      ),
                      o.a.createElement(
                        d.TabPanel,
                        null,
                        this.renderTabChart()
                      ),
                      o.a.createElement(
                        d.TabPanel,
                        null,
                        o.a.createElement(Ct, { data: this.state, type: 'css' })
                      ),
                      o.a.createElement(
                        d.TabPanel,
                        null,
                        o.a.createElement(Ct, { data: this.state, type: 'js' })
                      )
                    )
                );
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props.isDashboardBuilderActive
                  ? 'keen-theme-builder no-mockup'
                  : 'keen-theme-builder';
                return o.a.createElement(
                  'div',
                  { className: e },
                  this.renderConfigSection(),
                  !this.props.isDashboardBuilderActive &&
                    this.renderMockUpSection()
                );
              }
            }
          ]) && Dt(n.prototype, r),
          a && Dt(n, a),
          t
        );
      })(r.PureComponent);
      (Zt.propTypes = {
        options: i.a.object.isRequired,
        isDashboardBuilderActive: i.a.bool,
        onChange: i.a.func.isRequired
      }),
        (Zt.defaultProps = {
          options: ye,
          isDashboardBuilderActive: !1,
          onChange: function() {}
        }),
        n.d(t, 'getStyles', function() {
          return qt;
        });
      t.default = Zt;
      var qt = function(e, t) {
        return St(e, t);
      };
    }
  ]);
});
//# sourceMappingURL=module.js.map
