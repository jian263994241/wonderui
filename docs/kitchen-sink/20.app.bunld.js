(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    762: function (e, a, l) {
      'use strict';
      l.r(a);
      var r = l(0),
        t = l.n(r),
        c = l(30);
      a.default = c.s.create()(function e(a) {
        var l = a.form;
        return t.a.createElement(
          c.A,
          { name: 'Tag', navbar: !0 },
          t.a.createElement(
            c.m,
            { header: 'Tag Preset Color' },
            t.a.createElement(c.F, { color: 'primary' }, 'primary'),
            t.a.createElement(c.F, { color: 'secondary' }, 'secondary'),
          ),
          t.a.createElement(
            c.m,
            { header: 'Tag Custom Color' },
            t.a.createElement(c.F, { color: '#FE9E20' }, '#5576F0'),
            t.a.createElement(c.F, { color: '#FD561F' }, '#FD561F'),
            t.a.createElement(c.F, { color: '#3981DA' }, '#3981DA'),
          ),
          t.a.createElement(
            c.m,
            { header: 'Size' },
            t.a.createElement(
              c.F,
              { color: '#FE9E20', size: 'small' },
              '#5576F0',
            ),
            t.a.createElement(c.F, { color: '#FD561F' }, '#FD561F'),
            t.a.createElement(
              c.F,
              { color: '#3981DA', size: 'large' },
              '#3981DA',
            ),
          ),
          t.a.createElement(
            c.m,
            { header: '细边框' },
            t.a.createElement(
              c.F,
              { color: '#FD561F', hairline: !0 },
              '#FD561F',
            ),
          ),
          t.a.createElement(
            c.m,
            { header: 'CheckableTag disabled' },
            t.a.createElement(
              c.i,
              { checked: !0, disabled: !0 },
              'checked disabled',
            ),
            t.a.createElement(c.i, { disabled: !0 }, 'disabled'),
          ),
          t.a.createElement(
            c.m,
            { header: 'CheckableTag' },
            l.getFieldDecorator('isChecked', {
              initialValue: !0,
              valuePropName: 'checked',
            })(t.a.createElement(c.i, null, 'CheckableTag default checked')),
          ),
          t.a.createElement(
            c.m,
            { header: 'CheckableTagGroup' },
            t.a.createElement('span', null, '多选: '),
            l.getFieldDecorator('group', { initialValue: [] })(
              t.a.createElement(c.j, {
                data: [
                  { label: '公司', value: '0' },
                  { label: '个人', value: '1' },
                ],
              }),
            ),
          ),
          t.a.createElement(
            c.m,
            { header: 'CheckableTagGroup Exclusive' },
            t.a.createElement('span', null, '单选: '),
            l.getFieldDecorator('group2', { initialValue: '0' })(
              t.a.createElement(c.j, {
                exclusive: !0,
                data: [
                  { label: '公司', value: '0' },
                  { label: '个人', value: '1' },
                ],
              }),
            ),
          ),
        );
      });
    },
  },
]);
