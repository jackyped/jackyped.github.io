var comCounter=Vue.extend({
  el:function(){
    return "comCounter"
  },  
  
  template:
  '<h1 v-bind:style="h1_bgStyle(color)">{{ heading }}</h1>' +
  '<button @click="count += 1">投 {{ heading }} 的人： {{count}}</button>',
  
  props: ['heading','color'],  <!-- heading作为组件的一个变量 -->
  
  data: function(){
    return {count:0};
  },

  methods:{
    h1_bgStyle:function(color){
      return "background:"+color;
    }
  }
});