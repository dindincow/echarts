<template>
    <div class="top-view">
        <el-row :gutter="20">
            <el-col :span="6"> 
                <el-card shadow="hover" class="box-card">
                    <TotalSales/>
                </el-card>
            </el-col>
            <el-col :span="6"> 
                <el-card shadow="hover" class="box-card">
                    <TotalOrder/>
                </el-card>
            </el-col>
             <el-col :span="6"> 
                <el-card shadow="hover" class="box-card">
                    <TodayUsers/>
                </el-card>
            </el-col>
            <el-col :span="6"> 
                <el-card shadow="hover" class="box-card">
                    <TotalUsers/>
                </el-card>
            </el-col>
          
        </el-row>
    </div>
</template>

<script>
import TotalSales from '@/components/TotalSales'
import TotalOrder from '@/components/TotalOrder'
import TodayUsers from '@/components/TodayUsers'
import TotalUsers from '@/components/TotalUsers'

export default {
    components:{
        TotalSales,
        TotalOrder,
        TodayUsers,
        TotalUsers
    }
};
</script>

<style scoped lang="scss">
.top-view{
    
}
</style>