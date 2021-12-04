<template>
    <CommonCard 
        title="累计用戶數"
        value="2,157,420"
    >
        <template>
            <div id="total-user-chart" :style="{width:'100%',height:'100%'}"></div>
        </template>
        <template v-slot:footer>
            <div class="total-user-footer">
                <span>日同比</span>
                <span class="emphasis">8.73%</span>
                <div class="increase"></div>
                <span class="month">月同比</span>
                <span class="emphasis">5.73%</span>
                <div class="decrease"></div>
            </div>
          
        </template>  
    </CommonCard>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
    mixins:[commonCardMixin],
    mounted(){
        let chart = this.$echarts.init(document.getElementById('total-user-chart'));
       
        chart.setOption({
            xAxis:{
                type:'value',
                //max:250,
                
            },
            yAxis:{
                type:'category',
            },
            series:[
                {
                    type:'bar',
                    stack:'總量',
                    data:[120],
                    barWidth:10,
                    itemStyle:{
                        color:'#45c946'
                    }
                },{
                    type:'bar',
                    stack:'總量',
                    data:[300],
                    itemStyle:{
                        color:'#eee'
                    }
                }
            ],
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
.total-user-footer{
    display: flex;
    align-items: center;
    .month{
        margin-left: 10px;
    }
}
</style>
