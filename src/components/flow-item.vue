<template>
  <div class="card">
    <ul>
      <li v-for="(item,index) in treeData" :key="index">
        <div class="item" :class="{'line-left':index!==0,'line-right':index!=treeData.length-1}">
          <div class="item-name" :class="{'line-bottom':item.child&&item.child.length>0,'line-top':!treeFirst}">
            <!-- <div v-if="!treeFirst" class="reduce" @click="delChild(index)">-</div> -->
            <div v-for="(nameItem, index) in item.list" :key="index" :style="nameItem.style">
              {{nameItem.name}}
            </div>
            <!-- <div class="plus" @click="addChild(index)">+</div> -->
          </div>
        </div>
        <flow-item v-if="item.child&&item.child.length>0" :tree-data="item.child" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FlowItem',
  props: {
    treeData: {
      type: Array,
      default: () => []
    },
    treeFirst: { //判断是否第一个
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    // 添加子元素
    addChild(index) {
      if (this.treeData[index].child) {
        this.treeData[index].child.push({ name: '1' })
      } else {
        this.$set(this.treeData[index], 'child', [{ 'name': '1' }])
      }
    },
    // 删除子元素
    delChild(index) {
      this.treeData.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
$line-length: .2rem; //线长
$spacing: .2rem; //间距
$extend:calc(#{$spacing} + .02rem); //延长线
// 线样式
*{
  font-size: .2rem;
}
@mixin line{
  content: "";
  display: block;
  width: .01rem;
  height: $line-length;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background: #89A0B2;
}
.card{
  ul{
    display: flex;
    justify-content: center;
    li{
      list-style: none;
      .item{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &-name{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: .05rem;
          margin: $spacing;
          margin-left: 0;
          margin-right: 0;
          flex-direction: column;
        }
      }
    }
  }
  // 向下的线
  .line-bottom{
    &::after{
      @include line();
      bottom: -$line-length;
    }
  }
  // 向上的线
  .line-top{
    &::before{
      @include line();
      top: -$line-length;
    }
  }
  // 向左的线
  .line-left{
    &::after{
      @include line();
      width: calc(50% + #{$spacing});
      height: .01rem;
      left: calc(-50% - #{$extend});
      top: 0;
    }
  }
  // 向右的线
  .line-right{
    &::before{
      @include line();
      width: calc(50% + #{$spacing});
      height: .01rem;
      right: calc(-50% - #{$extend});
      top: 0;
    }
  }
}
</style>