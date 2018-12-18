<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h2>Vue研究思考-每天学一点，不问结果</h2>
    <hr/>
    <mixinEx></mixinEx>
    <h4Title>v-model</h4Title>
    <div>
      <input type="text" v-model.lazy="modelName1">
      <pre>{{ modelName1 }}</pre>
      <br>
      <input type="text" v-model.trim="modelName2">
      {{ modelName2 }}
      <br>
      <input type="text" v-model.number="modelName3">
      {{ modelName3 }}
    </div>

    <h4Title>v-model</h4Title>
    <div id="sex">
      <label for="man">
        男
      </label>
      <input type="checkbox" id="man" v-model="sex" value="男">
      <label for="female">
        女
      </label>
      <input type="checkbox" id="female" v-model="sex" value="女">
      <br>
      {{ sex }}

    </div>

    <h4Title>v-for</h4Title>
    <ul id="ex-1">
      <li v-for="item of items" :key="item.id">
        {{ item.message }}
      </li>
    </ul>

    <ul id="ex-2">
      <li v-for="(item, index) in items" :key="item.id">
        {{ parentMessage }} - {{  index }} - {{ item.message }}
      </li>
    </ul>
    <button id="pushBtn" @click="pushMessage()">Push Message</button>
    <button id="popBtn" @click="popMessage()">Pop Message</button>
    <button id="shiftBtn" @click="shiftMessage()">shift Message</button>
    <button id="unshiftBtn" @click="unshiftMessage()">unshift Message</button>
    <button id="spliceBtn" @click="spliceMessage()">splice Message</button>
    <button id="sortBtn" @click="sortMessage()">sort Message</button>
    <button id="reverseBtn" @click="reverseMessage()">reverse Message</button>

    <h3>用 v-for 通过一个对象的属性来迭代</h3>
    <ul class="class" id="v-for-object">
      <li v-for="value in object" :key="value.key">
        {{ value }}
      </li>
    </ul>
    <h3>提供第二个的参数为键名</h3>
    <ul class="class" id="v-for-object-key">
      <li v-for="(value, key) in object" :key="key">
       {{ key }} : {{ value }}
      </li>
    </ul>
    <h3>第三个参数为索引</h3>
    <ul class="class" id="v-for-object-index">
      <li v-for="(value, key, index) in object" :key="key">
       {{ index }} : {{ key }} : {{ value }}
      </li>
    </ul>

    <h4Title>条件渲染</h4Title>
    <h1 v-if="ok">Yes</h1>
    <h1 v-else>No</h1>
    <template v-if="ok">
      <h1>Template v-if</h1>
      <p>Para 1 </p>
      <p>Para 2</p>
    </template>

    <h4Title>v-if  v-else v-else-if</h4Title>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A\B\C</div>

    <h4Title>用key 管理可复用的元素</h4Title>
    <template v-if="loginType === 'username'">
      <label for="username">UserName</label>
      <input type="text" id="username" placeholder="Enter your username">
    </template>
    <template v-else>
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Enter your Email address">
    </template>

    <h4-title>v-bind学习</h4-title>
    <!--<a v-bind:href="url">点我</a>-->
    <br>
    <a :href="url" :class="kclass">Click Me
    <br>
    <!--<img v-bind:src="imageUrl">-->
    </a>
    <hr>

    <!--模板语法-->
    <h4-title>模板语法</h4-title>
    <a v-bind:href="url">v-bind</a>
    <button v-on:click="doClick">one v-on</button>
    <button @click="doClick">second v-on</button>

    <a :href="url"> URL </a>

    <!--Vue Router 研究思考-->
    <h4-title>Vue Router 研究思考</h4-title>
    <!--使用router-link 定义点击后导航到哪个途径下-->
    <header>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <hr>
    <!--对应的组件内容渲染到router-view中-->
    <!--保持路由组件alive-->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <hr>

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

    <!--<router-view/>-->
  </div>
</template>

<script>
import ChildComponent from './components/slot-example/child-component'
import SlotOne from './components/slot-example/slot-one'
import SlotNamed from './components/slot-example/slot-named'
import SlotScoped from './components/slot-example/slot-scoped'
import H4Title from './components/decorater/h4-title'
import SlotScopedApplied from './components/slot-example/slot-scoped-applied'
import mixinEx from './components/mixin-component/mixin_ex'
export default {
  name: 'App',
  // router, // 注入到根实例 2018.11.17
  components: {SlotScopedApplied, H4Title, SlotScoped, SlotNamed, SlotOne, ChildComponent, mixinEx},
  data: function () {
    return {
      nameList: [
        {id: 1, name: '老大'},
        {id: 2, name: '老二'},
        {id: 3, name: '老三'},
        {id: 4, name: '老四'}
      ],
      url: 'http://www.baidu.com',
      imageUrl: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
      isActive: true,
      ok: true,
      loginType: 'email',
      type: 'B',
      modelName1: 'HAHA1',
      modelName2: 'HAHA2',
      modelName3: 'HAHA3',
      parentMessage: 'Parent',
      items: [
        {message: 'foo'},
        {message: 'bar'}
      ],
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      sex: ['男']
    }
  },
  methods: {
    pushMessage: function () {
      this.items.push({message: 'Bas'})
    },
    popMessage: function () {
      this.items.pop()
    },
    shiftMessage: function () {
      this.items.shift()
    },
    unshiftMessage: function () {
      this.items.unshift('sxs')
    },
    spliceMessage: function () {
      this.items.splice(1, 'haha')
    },
    sortMessage: function () {
      this.items.sort()
    },
    reverseMessage: function () {
      this.items.reverse()
    },
    doClick: function () {
      alert(' Do Click !')
    },
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
    },
    kclass: function () {
      return {
        active: this.isActive
      }
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
.active {
  background: red;
  font-size: larger;
  /*text-transform: lowercase;*/
}
</style>
