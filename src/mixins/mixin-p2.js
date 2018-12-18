const mixinP2 = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('mixinP2')
    }
  }
}
export default mixinP2
