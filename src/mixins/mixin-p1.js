const mixinP1 = {
  mounted () {
    this.hello()
  },
  methods: {
    hello (me) {
      // alert(me)
      console.log('mixinP1')
    }
  },
  data: function () {
    return {
      // visible: true,
      me: '我是P1 mixin'
    }
  }
}
export default mixinP1
