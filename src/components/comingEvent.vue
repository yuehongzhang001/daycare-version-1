<template>
  <div class="coming-event">
      <div class="comingEvent-container">

        <div class="event-coming" ><i class="el-icon-date"></i>UPCOMING EVENT</div>
        <div class="event-content">
          <p>
            {{event.eventContent}}
          </p><p class="date-style">on {{event.date}}</p>
        </div>
        <div class="event-button-container">
            <el-button type="primary"> <router-link to="/calendar">ALL EVENTS </router-link></el-button>
        </div>
      </div>
  </div>

</template>

<script>
import calendarAPI from '@/apis/calendarAPI'
export default {
    data () {
        return {
            event:''
        }
    },
    created () {
        calendarAPI.getComingEvent().then(response=>{
           this.event = response.data.data.data;
        })
    }
}
</script>

<style lang="css">
.coming-event{
    background: #f8f7f3;
    box-shadow: 0 2px 0 rgb(0 0 0 / 7%);
}
.comingEvent-container{
    max-width: 80rem;
    margin: auto;

}

.event-content{
    padding: 1rem ;
    margin: 0;
    line-height: 0.6rem;
    max-width: 30rem;
    min-width: 20rem;
    text-align: center;
}
.event-button-container{
    max-width: 30rem;
     min-width: 15rem;
    text-align: right;
    padding: 0 0 1rem 0;
}
.event-coming{
     max-width: 30rem;
     min-width: 20rem;
    font-size:2rem;padding:1rem
}
.comingEvent-container div{
    display: inline-block;

}
.date-style{
    font-style: italic;
}
</style>