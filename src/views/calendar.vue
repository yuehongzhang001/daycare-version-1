<template>
  
    <div class="calendar-container" >
      <el-calendar ref="cal">
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    
    slot-scope="{date, data}" >
    
    <div> {{data.day.split('-')[2]}} </div>
    <div style="height: 60px; overflow:hidden; font-size:5px; line-height: 15px" :class="events[data.day]?'eventDay':''">
    {{ events[data.day]}}
    </div>
  </template>
</el-calendar>
    </div>
    
</template>

<script>

import calendarAPI from '@/apis/calendarAPI.js'
export default {
  data() {
    return {
      events:{
      },
    };
  },
  created () {
    this.$nextTick(() => {
      this.initEvent(this.$refs.cal.curMonthDatePrefix);
      // 点击前一个月
      let prevBtn = document.querySelector(
        ".el-calendar__button-group .el-button-group>button:nth-child(1)"
      );
      prevBtn.addEventListener("click", () => {
        this.initEvent(this.$refs.cal.curMonthDatePrefix);
        
      });
 
      //点击下一个月
      let nextBtn = document.querySelector(
        ".el-calendar__button-group .el-button-group>button:nth-child(3)"
      );
      nextBtn.addEventListener("click", () => {
       this.initEvent(this.$refs.cal.curMonthDatePrefix);
      });
 
      //点击今天
      let todayBtn = document.querySelector(
        ".el-calendar__button-group .el-button-group>button:nth-child(2)"
      );
      todayBtn.addEventListener("click", () => {
        this.initEvent(this.$refs.cal.curMonthDatePrefix);
    });
  })
  },
  methods: {
    initEvent(datePrefix){
      calendarAPI.get(datePrefix).then(response=>{
        this.events = response.data.data.data;
        console.log(this.events);
      });
    }

  }
};
</script>

<style>
.calendar-container {
  max-width: 50rem;
  margin: auto;
}

.el-calendar-day{
   height: 100% !important;
   padding: 1px !important;
}
.eventDay{
  background-color: aqua;
}
</style>
