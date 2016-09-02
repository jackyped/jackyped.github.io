var comCounter=Vue.extend({
  el:function(){
    return "comCounter"
  },  
  
  template:
  '<h1 v-bind:style=" '+
  "'background:'"+
  '+color">{{ heading }}</h1>' +
  '<button @click="count += 1">submit {{count}}</button>',
  
  props: ['heading','color'],  <!-- heading作为组件的一个变量 -->
  
  data: function(){
    return {count:0};
  }

  

});