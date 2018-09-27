<template>
    <div>hello world <div class="example1"> <span>{{msg}}</span></span></div></div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="less" scoped>
.example1{
	color:red;
	span{
		color:green;
	}
}
</style>