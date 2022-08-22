<template>
  <div class="tree">
    <div class="tree-content" @mousedown.stop="move">
      <flow-item :tree-data="treeData" :tree-first="true" />
    </div>
  </div>
</template>

<script>
import flowItem from './../../components/flow-item'
export default {
  name: 'Tree',
  components: {
    flowItem
  },
  data() {
    return {
      treeData: [{
        list: [
          { name: '集成电路产业链', style: 'padding: .2rem .63rem;border: .01rem solid #89A0B2;font-size: 0.2rem;font-family: PingFang SC;font-weight: 500;color: #FFFFFF;min-width: 1.2rem;text-shadow: 0px 0px .15rem #0091FF'}
        ],
        child: [
          {
            list: [
              { name: '上游', style: 'width: 1.4rem;height: 0.5rem;line-height: .5rem;text-shadow: 0px 0px .15rem #0091FF;background: rgba(137,160,178,0.3);border-radius: 0.04rem;font-size: 0.2rem;font-family: PingFang SC;font-weight: 500;color: #FFFFFF;'}
            ],
            child: [
              { 
                list: [
                  { name: '芯片IP', style: `background: url(${require('./../../assets/image/border3.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FF893B;`},
                  { name: 'IC设计服务', style: `background: url(${require('./../../assets/image/border2.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #BDBDBD;`}
                ] 
              }
            ]
          },
          {
            list: [
              { name: '中游', style: 'width: 1.4rem;height: 0.5rem;line-height: .5rem;text-shadow: 0px 0px .15rem #0091FF;background: rgba(137,160,178,0.3);border-radius: 0.04rem;font-size: 0.2rem;font-family: PingFang SC;font-weight: 500;color: #FFFFFF;'}
            ],
            child: [
              {
                list: [
                  { name: '制造设备', style: `background: url(${require('./../../assets/image/border1.png')}) no-repeat;background-size: 100%;width: 1.39rem;height: 0.47rem;line-height: .47rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;text-shadow: rgb(0 249 88) 0px 0px 0.15rem;`}
                ],
                child: [
                  { 
                    list: [
                      { name: '半导体检测设备', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;`},
                      { name: '离子注入设备', style: `background: url(${require('./../../assets/image/border3.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FF893B;`},
                      { name: '抛光设备', style: `background: url(${require('./../../assets/image/border5.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FF6A6A;`},
                      { name: '刻蚀设备', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;`},
                      { name: '光刻设备', style: `background: url(${require('./../../assets/image/border3.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FF893B;`},
                      { name: '薄膜设备', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;`}
                    ]
                  }
                ]
              },
              {
                list: [
                  { name: '前道材料', style: `background: url(${require('./../../assets/image/border1.png')}) no-repeat;background-size: 100%;width: 1.39rem;height: 0.47rem;line-height: .47rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;text-shadow: rgb(0 249 88) 0px 0px 0.15rem;`}
                ],
                child: [
                  { 
                    list: [
                      { name: '光刻胶', style: `background: url(${require('./../../assets/image/border3.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FF893B;`},
                      { name: '光掩膜版', style: `background: url(${require('./../../assets/image/border3.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FF893B;`},
                      { name: 'CMP抛光液', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;`},
                      { name: '电子特种气体', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;`},
                      { name: '半导体用靶材', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;`}
                    ]
                  }
                ]
              },
              { list: [
                  { name: '制造材料', style: `background: url(${require('./../../assets/image/border1.png')}) no-repeat;background-size: 100%;width: 1.39rem;height: 0.47rem;line-height: .47rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;text-shadow: rgb(0 249 88) 0px 0px 0.15rem;`}
                ],
                child: [
                  { 
                    list: [
                      { name: 'IC大硅片', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;`}
                    ]
                  }
                ]
              },
              { list: [
                  { name: '集成电路制造', style: `background: url(${require('./../../assets/image/border1.png')}) no-repeat;background-size: 100%;width: 1.39rem;height: 0.47rem;line-height: .47rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;text-shadow: rgb(0 249 88) 0px 0px 0.15rem;`}
                ],
                child: [
                  { 
                    list: [
                      { name: '电路制造', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;`}
                    ]
                  }
                ]
              }
            ]
          },
          {
            list: [
              { name: '下游', style: 'width: 1.4rem;height: 0.5rem;line-height: .5rem;text-shadow: 0px 0px .15rem #0091FF;background: rgba(137,160,178,0.3);border-radius: 0.04rem;font-size: 0.2rem;font-family: PingFang SC;font-weight: 500;color: #FFFFFF;'}
            ],
            child: [
              {
                list: [
                  { name: '集成电路封测设备', style: `background: url(${require('./../../assets/image/border1.png')}) no-repeat;background-size: 100%;width: 1.39rem;height: 0.47rem;line-height: .47rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;text-shadow: rgb(0 249 88) 0px 0px 0.15rem;`}
                ],
                child: [
                  {
                    list: [
                      { name: '植球设备', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;` },
                      { name: '电镀设备', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;` },
                      { name: '塑膜设备', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;` },
                    ]
                  }
                ]
              },
              {
                list: [
                  { name: '集成电路封测', style: `background: url(${require('./../../assets/image/border1.png')}) no-repeat;background-size: 100%;width: 1.39rem;height: 0.47rem;line-height: .47rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;text-shadow: rgb(0 249 88) 0px 0px 0.15rem;`}
                ],
                child: [
                  {
                    list: [
                      { name: '电路封测', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;` }
                    ]
                  }
                ]
              },
              { list: [
                  { name: '封装材料', style: `background: url(${require('./../../assets/image/border1.png')}) no-repeat;background-size: 100%;width: 1.39rem;height: 0.47rem;line-height: .47rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #FFFFFF;text-shadow: rgb(0 249 88) 0px 0px 0.15rem;`}
                ],
                child: [
                  {
                    list: [
                      { name: '引线框架', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;` },
                      { name: '封装基板', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;` },
                      { name: '芯片粘合材料', style: `background: url(${require('./../../assets/image/border4.png')}) no-repeat;background-size: 100%;width: 1.5rem;height: 0.48rem;line-height: .5rem;font-size: 0.14rem;font-family: PingFang SC;font-weight: 400;color: #9EFFAE;` },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }]
    }
  },
  methods: {
    // 拖拽移动
    move(e) {
      const odiv = e.currentTarget // 获取元素
      console.log(odiv)
      // 算出鼠标相对元素的位置
      const disX = e.clientX - odiv.offsetLeft
      const disY = e.clientY - odiv.offsetTop
      document.onmousemove = (e) => { // 鼠标按下并移动的事件
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        const left = e.clientX - disX
        const top = e.clientY - disY
        // 绑定元素位置到positionX和positionY上面
        this.positionX = top
        this.positionY = left
        // 移动当前元素
        odiv.style.left = left + 'px'
        odiv.style.top = top + 'px'
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tree{
  background: #fff;
  min-height: calc(100vh - 110px);
  position: relative;
  &-content{
    background: black;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>