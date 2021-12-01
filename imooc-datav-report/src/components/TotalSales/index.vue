<template>
    <div class="total-sales">
        <CommonCard title="累計銷售額" value="$ 123,500,1">
            <template>
                <div class="compare"></div>
            </template>
            <template v-slot:footer>
               <sapn> 昨日銷售額 </sapn>
               <sapn class="money"> $ 12,533,000 </sapn>
            </template>
        </CommonCard>
    </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
    mixins:[commonCardMixin]
}
</script>
<style scoped lang="scss">
.compare{
    height: 100%;
    background: #ccc;
}
span{
    font-size: 12px;
}
.money{
    margin-left: 5px;
    color: #000;
    font-family: system-ui;
    font-weight: 800;
}
</style>
