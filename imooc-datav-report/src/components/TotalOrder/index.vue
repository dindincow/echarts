<template>   
    <CommonCard
        title="累计訂單量"
        value="2,157,420"
    >
        <template>
            <div id="total-order-chart" :style="{width:'100%',height:'100%'}">
        
            </div>
        </template>
        <template v-slot:footer>
            <span>昨日销售额 </span>
            <span class="emphasis">123456</span>
        </template>    
    </CommonCard>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
    mixins:[commonCardMixin],
    mounted(){
        let chart = this.$echarts.init(document.getElementById('total-order-chart'));
       
        chart.setOption({
            xAxis:{
                type:'category',
                boundaryGap: false
            },
            yAxis:{
                show:false
            },
            series:[{
                type:'line',
                data:[300,400,100,200,150,100,200,300,500,200,400,555,666],
                areaStyle:{
                    color:'purple'
                },
                lineStyle:{
                    width:0
                },
                itemStyle:{
                    opacity:0
                },
                smooth:true
            }],
            grid:{
                top:0,
                bottom:0,
                left:0,
                right:0
            }
          

        })
    }
}
</script>
<style scoped lang="scss">
.total-sales{

}
</style>
