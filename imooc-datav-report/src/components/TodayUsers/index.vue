<template>
    <CommonCard 
        title="累计訂單量"
        value="2,157,420"
    >
        <template>
            <div id="todays-users-chart" :style="{width:'100%',height:'100%'}"></div>
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
        let chart = this.$echarts.init(document.getElementById('todays-users-chart'));
       
        chart.setOption({
            color:['#3398DB'],
            xAxis:{
                type:'category',
                data:['00:00','00:10','00:20','00:30','00:40','00:50','00:60','00:70','00:80','00:90','00:10','00:20','00:30'],
            },
            yAxis:{
                show:false
            },
            series:[{
                type:'bar',
                barWidth:'60%',
                data:[300,400,100,200,150,100,200,300,500,200,400,555,666],
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
.today-user{

}
</style>
