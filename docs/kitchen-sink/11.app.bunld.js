(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    752: function (e, a, l) {
      'use strict';
      l.r(a),
        l.d(a, 'default', function () {
          return n;
        });
      var t = l(0),
        c = l.n(t),
        r = l(30),
        m = Object(r.K)({
          placeHolder: {
            background: '#1976d2',
            width: 100,
            height: 100,
            color: '#fff',
            marginTop: 5,
            textAlign: 'center',
          },
        });
      function n(e) {
        var a = m();
        return c.a.createElement(
          r.A,
          { name: 'Flex', navbar: !0 },
          '默认',
          c.a.createElement(
            r.r,
            null,
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
          ),
          '换行',
          c.a.createElement(
            r.r,
            { wrap: 'wrap' },
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
          ),
          '间距',
          c.a.createElement(
            r.r,
            { gutter: 0.1 },
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
          ),
          '等宽伸缩',
          c.a.createElement(
            r.r,
            { flex: !0 },
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
            c.a.createElement('div', { className: a.placeHolder }, 'FlexItem'),
          ),
        );
      }
    },
  },
]);
