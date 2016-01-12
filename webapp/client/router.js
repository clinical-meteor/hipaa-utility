Router.configure({
  layoutTemplate: 'appLayout',
  notFoundTemplate: 'pageNotFound',
  loadingTemplate: 'appLoading',
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    }
  }
});

Router.route('/', {
  name: 'homeRoute',
  template: 'hipaaLogPage',
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },
    'keybindingsModal': {
      to: 'keybindingsModal'
    }
  }
});
