<template>

    <div class="calendar-edit-root">
<div class="calendar-container" >
      <el-calendar ref="cal">
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    
    slot-scope="{date, data}" >
    
    <div @click="click(data.day)">
      <div > {{data.day.split('-')[2]}} </div>
    <div style="height: 60px; overflow:hidden; font-size:5px; line-height: 15px" :class="events[data.day]?'eventDay':''">
    {{ events[data.day]}}
    </div>
    </div>
    
  </template>
</el-calendar>
    </div>
    <div class="editor-container" >
      <el-form ref="form" :model="event" label-width="80px">
  <el-form-item label="content">
    <el-input v-model="event.eventContent"></el-input>
  </el-form-item>
  <el-form-item label="date">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="date" v-model="event.date" style="width: 50%;" value-format="yyyy-MM-dd"></el-date-picker>
    </el-col>
  </el-form-item>
      
      <el-form-item>
    <el-button type="primary" @click="saveOrUpdate">Save</el-button>
    <el-button  @click="cancel">Cancel</el-button>
  </el-form-item>
  </el-form>
    </div>
    </div>
    
    
</template>

<script>

import calendarAPI from '@/admin/admin-api/calendarAPI.js'

export default {
  data() {
    return {
      events:{
      },
      event:{},
      dateStr: ''
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
        console.log("initEvent: ",this.$refs.cal);
      });
    },
    click(dateStr){
      this.dateStr = dateStr;
      this.initEditorForm();
    },
    initEditorForm(){
      calendarAPI.getEventByDate(this.dateStr).then(response=>{
        if(response.data.data.data)
          this.event= response.data.data.data;
        else{
          this.event={date:this.dateStr}
        }
      })
    },
    saveOrUpdate(){
      if(this.event.eventId){//this is a update
        calendarAPI.updateCalendarEvent(this.event).then(()=>{
          // init the calendar
          this.initEvent(this.$refs.cal.curMonthDatePrefix)
          // prompt the success message
          this.$message({
            type: "success",
            message:"The changes has been saved"
          });
        });
      }else{//this is a save
        calendarAPI.saveEvent(this.event).then(()=>{
          // init the calendar
          this.initEvent(this.$refs.cal.curMonthDatePrefix)
          // prompt the success message
          this.$message({
            type: "success",
            message:"The event has been created"
          });

        });
      }
    },
    cancel(){
      this.initEditorForm();
      this.$message({
            
            message:"The changes have been cancelled"
      });
    }

  }
};
</script>

<style>
.editor-container{
  min-width: 55%;
  padding: 5rem 1rem;
  text-align: left;
}

.el-calendar-day{
   height: 100% !important;
   padding: 1px !important;
}
.eventDay{
  background-color: aqua;
}
.calendar-edit-root{
  display: flex;
}
</style>
