(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    750: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return l;
        });
      var r = n(0),
        o = n.n(r),
        c = n(30);
      function l(t) {
        return o.a.createElement(
          c.A,
          { name: 'Dialog', navbar: !0 },
          o.a.createElement(
            c.m,
            { header: 'Default' },
            o.a.createElement(
              c.r,
              null,
              o.a.createElement(
                c.g,
                {
                  onClick: function t() {
                    c.o.alert({ text: 'Queue.1', title: 'Title' }),
                      c.o.alert({ text: 'Queue.2', title: 'Title' });
                  },
                },
                'alert',
              ),
              o.a.createElement(
                c.g,
                {
                  onClick: function t() {
                    return c.o.confirm({
                      text: 'Confirm Text',
                      title: 'Title',
                      onOk: function t() {
                        return c.o.alert({ text: 'ok', title: 'Callback' });
                      },
                      onCancel: function t() {
                        return c.o.alert({ text: 'cancel', title: 'Callback' });
                      },
                    });
                  },
                },
                'confirm',
              ),
              o.a.createElement(
                c.g,
                {
                  onClick: function t() {
                    return c.o.confirm({
                      text: 'Tap hold',
                      title: 'Title',
                      onOk: function t() {
                        return new Promise(function (t) {
                          c.o.toast('Tap hold', 2e3);
                        });
                      },
                    });
                  },
                },
                'Tap hold',
              ),
            ),
          ),
          o.a.createElement(
            c.m,
            { header: 'Custom' },
            o.a.createElement(
              c.r,
              null,
              o.a.createElement(
                c.g,
                {
                  onClick: function t() {
                    return c.o.custom({
                      title: 'Custom Title',
                      text: 'Custom Text',
                      content: o.a.createElement('div', null, 'TextAfter node'),
                      actions: [
                        {
                          text: 'First button',
                          primary: !0,
                          onClick: function t() {
                            return c.o.alert({ text: 'First' });
                          },
                        },
                        {
                          text: 'Second button',
                          onClick: function t() {
                            return c.o.alert({ text: 'Second' });
                          },
                        },
                        {
                          text: 'Third button',
                          onClick: function t() {
                            return c.o.alert({ text: 'Third' });
                          },
                        },
                        { text: 'Cancel' },
                      ],
                    });
                  },
                },
                'multi-button',
              ),
              o.a.createElement(
                c.g,
                {
                  onClick: function t() {
                    return c.o.custom({
                      actions: [
                        {
                          text: 'First button',
                          primary: !0,
                          onClick: function t() {
                            return c.o.alert({ text: 'First' });
                          },
                        },
                        {
                          text: 'Second button',
                          onClick: function t() {
                            return c.o.alert({ text: 'Second' });
                          },
                        },
                        {
                          text: 'Third button',
                          onClick: function t() {
                            return c.o.alert({ text: 'Third' });
                          },
                        },
                        { text: 'Cancel' },
                      ],
                    });
                  },
                },
                'actions',
              ),
              o.a.createElement(
                c.g,
                {
                  onClick: function t() {
                    return c.o.custom({
                      title: 'Agreement',
                      text: o.a.createElement(
                        'p',
                        { style: { textAlign: 'left' } },
                        'text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text,text, text, text, text, text,text, text, text, text, text, text, text, text, text, text,text, text, text, text, text,text, text, text, text, text,',
                      ),
                      content: function t(e) {
                        var n = e.ref;
                        return o.a.createElement(
                          'p',
                          null,
                          o.a.createElement(
                            'label',
                            null,
                            o.a.createElement('input', {
                              type: 'checkbox',
                              ref: n,
                            }),
                            'I agree to this agreement',
                          ),
                        );
                      },
                      actions: [
                        { text: 'Cancel' },
                        {
                          text: 'Agree',
                          primary: !0,
                          onClick: function t(e, n) {
                            var r = n.contentRef;
                            return new Promise(function (t) {
                              r.current.checked
                                ? t()
                                : c.o.toast('Please check the checkbox.');
                            });
                          },
                        },
                      ],
                    });
                  },
                },
                'content',
              ),
            ),
          ),
        );
      }
    },
  },
]);
