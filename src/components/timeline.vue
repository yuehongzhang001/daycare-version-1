<template>
<div class="page-body">
  <div class="timeline-container">
    <div class="block">
      <el-timeline>
        
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
              <div class="timeline-badge" >May<div>2021</div></div>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>

</div>
  
</template>

<script>

export default {

}
</script>

<style>
.page-body{
    text-align: center;
    padding: 3rem 0 0 0;
}
.timeline-container{
    max-width: 80rem;
    margin: auto;
}



.timeline-badge{
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
    visibility: visible;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    list-style-type: none;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    color: #fff;
    width: 50px;
    height: 50px;
    padding-top: 11px;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    position: absolute;
    top: 0%;
    left: 0.4%;
    margin-left: -25px;
    z-index: 100;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    background-color: #b70707;

}
.el-timeline-item__wrapper{
  padding: 1rem;
  max-width: 60rem;
}
</style>
