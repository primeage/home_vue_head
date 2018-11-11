<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h2>Vue研究思考-每天学一点，不问结果</h2>
    <hr/>

    <!--插槽Slot研究-->
    <h3>插槽研究</h3>
    <!--1. 无插槽-->
    <h4-title>1. 无插槽情况</h4-title>
    <child-component>我没显示</child-component>

    <!--2.一个插槽-->
    <h4-title>2. 一个插槽</h4-title>
    <slot-one>我是插槽显示内容</slot-one>

    <!--默认插槽会作为所有未匹配到插槽的内容的统一出口-->
    <h4-title>3. 具名插槽和默认插槽</h4-title>
    <slot-named>
    <template slot="first">第一个具名插槽内容</template>
    <template slot="second">第二个具名插槽内容</template>
    <template slot="third">第三个具名插槽内容</template>
    <div>我是默认插槽内容</div>
    </slot-named>

    <!--4. slot-scope实例-->
    <h4-title>4. slot-scope实例</h4-title>
    <slot-scoped>
      <template slot-scope="a">
        {{ a }}
      </template>
    </slot-scoped>

    <!--5. slot-scope应用-->
    <h4-title>5. slot-scope应用</h4-title>
    <slot-scoped-applied :lists="nameList">
      <template slot-scope="a">
          <!--{{ a }}-->
        <div v-if="a.b.id==1">你好：{{ a.b.name }} 张静远先生</div>
        <div v-else>{{ a.b.name }}</div>
      </template>
    </slot-scoped-applied>

    <hr/>
    <h3>Vuex研究思考</h3>
    <h4-title>1. state</h4-title>
    <h5> {{ $store.state.count }}</h5>

    <H4Title>2. mutation</H4Title>
    <div>
      <h5> {{ $store.state.count }}</h5>
      <button @click="handleAddClick(10)">增加</button>
      <button @click="handleReduceClick(10)">减少</button>
    </div>

    <H4Title>3. Actions异步操作</H4Title>
    <div>
      <button @click="handleActionsAdd(10)">异步增加</button>
      <button @click="handleActionsReduce(10)">异步减少</button>
    </div>

    <H4Title>4. Getters操作</H4Title>
    <div>
      <button>Getter增加{{ count }}</button>
    </div>

    <router-view/>
  </div>
</template>

<script>
import ChildComponent from './components/slot-example/child-component'
import SlotOne from './components/slot-example/slot-one'
import SlotNamed from './components/slot-example/slot-named'
import SlotScoped from './components/slot-example/slot-scoped'
import H4Title from './components/decorater/h4-title'
import SlotScopedApplied from './components/slot-example/slot-scoped-applied'

export default {
  name: 'App',
  components: {SlotScopedApplied, H4Title, SlotScoped, SlotNamed, SlotOne, ChildComponent},
  data: function () {
    return {
      nameList: [
        {id: 1, name: '老大'},
        {id: 2, name: '老二'},
        {id: 3, name: '老三'},
        {id: 4, name: '老四'}
      ]
    }
  },
  methods: {
    handleAddClick: function (n) {
      // 调用vuex中mutations的方法
      this.$store.commit('mutationsAddCount', n)
    },
    handleReduceClick: function (n) {
      // 调用vuex中mutations的方法
      this.$store.commit('mutationsReduceCount', n)
    },
    handleActionsAdd: function (n) {
      this.$store.dispatch('actionsAddCount', n)
    },
    handleActionsReduce: function (n) {
      this.$store.dispatch('actionsReduceCount', n)
    }

  },
  computed: {
    count: function () {
      return this.$store.getters.getterCount + 15
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
