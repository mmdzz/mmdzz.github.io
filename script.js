  
  new Vue({
    el: '#nescss',
    data() {
      return {
        animateOctocat: false,
        copiedBalloon: {
          display: 'none',
          top: 0,
          left: 0,
        },
        scrollPos: 0,
      };
    },
    filters: {
      capitalize(val) {
        if (!val) return '';
        val = val.toString();
        return val.charAt(0).toUpperCase() + val.slice(1);
      },
    },
    mounted() {
      document.addEventListener('scroll', () => {
        this.scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
      });
      hljs.initHighlightingOnLoad();
      [].forEach.call(document.querySelectorAll('dialog'), (a) => {
        dialogPolyfill.registerDialog(a);
      });
    },
    methods: {
      startAnimate() {
        this.animateOctocat = true;
      },
      stopAnimate() {
        this.animateOctocat = false;
      },
    },
  });