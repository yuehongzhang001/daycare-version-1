<template>
  <div class="register-body">
    <div class="main" role="main">
      <div id="content" class="content full">
        <!-- start page section -->
        <section class="page-section">
          <div class="container">
            <div class="row">
              <!-- start post -->
              <article class="col-md-12">
                <!-- start of register form -->
                <section class="Main-content" data-content-field="main-content">
                  <div
                    class="sqs-layout sqs-grid-12 columns-12"
                    data-type="page"
                    data-updated-on="1626885693351"
                    id="page-60f8485686d1dd7b304967a7"
                  >
                    <div class="row sqs-row">
                      <div class="col sqs-col-8 span-8">
                        <div
                          class="sqs-block html-block sqs-block-html form-item"
                          data-block-type="2"
                          id="block-a2cf0c48e7a4dd2e3991"
                        >
                          <div class="sqs-block-content">
                            <h1 style="white-space:pre-wrap;" class="h1style">Register for our Waitlist List …
                            </h1>
                            <p class="pstyle" style="white-space:pre-wrap;">If you are adding multiple children, please submit
                              a separate request for each child. Children must
                              be 2.5yr old in September and fully toilet trained
                              to enroll for the current school year. Please feel
                              free to contact us if you have any questions.
                            </p>
                          </div>
                        </div>
                        <div
                          class="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                          data-block-type="21"
                          id="block-07ddc1c5e2234f6f8209"
                        >
                          <div class="sqs-block-content">&nbsp;</div>
                        </div>
                        <div
                          class="sqs-block form-block sqs-block-form formstyle"
                          data-block-type="9"
                          id="block-"
                        >
                          <div class="sqs-block-content">
                            <div class="form-wrapper">
                              <div class="form-inner-wrapper">
                                <form
                                  data-form-id="60f84856cc89e2641a5c4520"
                                  data-success-redirect=""
                                  autocomplete="on"
                                  method="POST"
                                  action="#"
                                  novalidate
                                  onsubmit="return false"
                                >
                                  <div class="field-list clear">
                                    <fieldset
                                      id="name"
                                      class="form-item fields name required"
                                    >
                                      <legend class="title">
                                        Child's Name

                                        <span
                                          class="required"
                                          aria-hidden="true"
                                          >*</span
                                        >
                                      </legend>

                                      <div class="field first-name">
                                        <label class="caption">
                                          <input
                                            class="field-element field-control"
                                            name="fname"
                                            v-model="templateParams.fname"
                                            x-autocompletetype="given-name"
                                            type="text"
                                            spellcheck="false"
                                            maxlength="30"
                                            data-title="First"
                                            aria-required="true"
                                          />
                                          <span class="caption-text"
                                            >First Name</span
                                          >
                                        </label>
                                      </div>
                                      <div class="field last-name">
                                        <label class="caption">
                                          <input
                                            class="field-element field-control"
                                            name="lname"
                                            v-model="templateParams.lname"
                                            x-autocompletetype="surname"
                                            type="text"
                                            spellcheck="false"
                                            maxlength="30"
                                            data-title="Last"
                                            aria-required="true"
                                          />
                                          <span class="caption-text"
                                            >Last Name</span
                                          >
                                        </label>
                                      </div>
                                    </fieldset>

                                    <fieldset
                                      id="date-298de985-3053-40fb-8d6b-13948ff2253c"
                                      class="form-item fields date"
                                    >
                                      <legend class="title">
                                        Child's Date of Birth
                                      </legend>

                                      <div class="field month two-digits">
                                        <label class="caption">
                                          <input
                                            class="field-element"
                                            type="text"
                                            maxlength="2"
                                            data-title="Month"
                                            name="MM"
                                            v-model="templateParams.MM"
                                          />
                                          <span class="caption-text">MM</span>
                                        </label>
                                      </div>
                                      <div class="field day two-digits">
                                        <label class="caption">
                                          <input
                                            class="field-element"
                                            type="text"
                                            maxlength="2"
                                            data-title="Day"
                                            name="DD"
                                            v-model="templateParams.DD"
                                          />
                                          <span class="caption-text">DD</span>
                                        </label>
                                      </div>
                                      <div class="field year four-digits">
                                        <label class="caption">
                                          <input
                                            class="field-element"
                                            type="text"
                                            maxlength="4"
                                            data-title="Year"
                                            name="YYYY"
                                            v-model="templateParams.YYYY"
                                          />
                                          <span class="caption-text">YYYY</span>
                                        </label>
                                      </div>
                                    </fieldset>

                                    <div
                                      id="select-17eff1f1-c5bc-472e-9136-fc88900fa8f0"
                                      class="form-item field select"
                                    >
                                      <label class="title" for="program">
                                        Program
                                      </label>

                                      <div class="description">
                                        Please select your preferred program. We
                                        offer 2/3/5 day half day and full day
                                        classes for our preschool program and 5
                                        day half day and full day classes for
                                        our Kindergarten Program.
                                      </div>

                                      <select
                                        id="select-17eff1f1-c5bc-472e-9136-fc88900fa8f0-field"
                                        name="program" v-model="templateParams.program"
                                      >
                                        <option value="2 day full day (Mon/Tue)"
                                          >2 day full day (Mon/Tue)</option
                                        >

                                        <option
                                          value="2 day half day morning (Mon/Tue)"
                                          >2 day half day morning
                                          (Mon/Tue)</option
                                        >

                                        <option
                                          value="2 day half day afternoon (Mon/Tue)"
                                          >2 day half day afternoon
                                          (Mon/Tue)</option
                                        >

                                        <option value="3 day full day (Wed-Fri)"
                                          >3 day full day (Wed-Fri)</option
                                        >

                                        <option
                                          value="3 day half day morning (Wed-Fri)"
                                          >3 day half day morning
                                          (Wed-Fri)</option
                                        >

                                        <option
                                          value="3 day half day afternoon  (Wed-Fri)"
                                        >
                                          3 day half day afternoon
                                          (Wed-Fri)</option
                                        >

                                        <option
                                          value="5 day full day (Mon-Fri) "
                                          >5 day full day (Mon-Fri)
                                        </option>

                                        <option
                                          value="5 day half day morning (Mon-Fri) "
                                          >5 day half day morning (Mon-Fri)
                                        </option>

                                        <option
                                          value="5 day half day afternoon (Mon-Fri) "
                                        >
                                          5 day half day afternoon (Mon-Fri)
                                        </option>

                                        <option
                                          value="5 day Kindergarten morning"
                                          >5 day Kindergarten morning</option
                                        >

                                        <option
                                          value="5 day Kindergarten afternoon "
                                          >5 day Kindergarten afternoon
                                        </option>

                                        <option
                                          value="5 day Kindergarten full day "
                                          >5 day Kindergarten full day
                                        </option>

                                        <optgroup label=""></optgroup>
                                      </select>
                                    </div>

                                    <fieldset
                                      id="name-f7a6cdc9-2ae4-4e78-8437-f17e7736f809"
                                      class="form-item fields name"
                                    >
                                      <legend class="title">
                                        Parent/Guardian Name
                                      </legend>

                                      <div class="field first-name">
                                        <label class="caption">
                                          <input
                                            class="field-element field-control"
                                            name="pfname"
                                            v-model="templateParams.pfname"
                                            x-autocompletetype="given-name"
                                            type="text"
                                            spellcheck="false"
                                            maxlength="30"
                                            data-title="First"
                                          />
                                          <span class="caption-text"
                                            >First Name</span
                                          >
                                        </label>
                                      </div>
                                      <div class="field last-name">
                                        <label class="caption">
                                          <input
                                            class="field-element field-control"
                                            name="plname"
                                            v-model="templateParams.plname"
                                            x-autocompletetype="surname"
                                            type="text"
                                            spellcheck="false"
                                            maxlength="30"
                                            data-title="Last"
                                          />
                                          <span class="caption-text"
                                            >Last Name</span
                                          >
                                        </label>
                                      </div>
                                    </fieldset>

                                    <div
                                      id="email-e5d8ad66-fdbd-45e9-94c8-cf626d90c647"
                                      class="form-item field email"
                                    >
                                      <label
                                        class="title"
                                        for="email-e5d8ad66-fdbd-45e9-94c8-cf626d90c647-field"
                                      >
                                        Email
                                      </label>

                                      <input
                                        class="field-element"
                                        id="email-e5d8ad66-fdbd-45e9-94c8-cf626d90c647-field"
                                        name="email"
                                        v-model="templateParams.email"
                                        type="email"
                                        autocomplete="email"
                                        spellcheck="false"
                                      />
                                    </div>

                                    <fieldset
                                      id="phone-6ce74ff5-77b5-4726-9db3-ebd84de3fe84"
                                      class="form-item fields phone"
                                    >
                                      <legend class="title">
                                        Phone
                                      </legend>

                                      <div class="field text three-digits">
                                        <label class="caption">
                                          <input
                                            class="field-element"
                                            x-autocompletetype="phone-area-code"
                                            type="text"
                                            maxlength="3"
                                            data-title="Areacode"
                                            name="phone_01"
                                            v-model="templateParams.phone_01"
                                          />
                                          <span class="caption-text"
                                            >(###)</span
                                          >
                                        </label>
                                      </div>

                                      <div
                                        class="field text"
                                        style="width: 8em;"
                                      >
                                        <label class="caption">
                                          <input
                                            class="field-element"
                                            x-autocompletetype="phone-local-suffix"
                                            type="text"
                                            maxlength="7"
                                            data-title="Line"
                                            name="phone_02"
                                            v-model="templateParams.phone_02"
                                          />
                                          <span class="caption-text"
                                            >#######</span
                                          >
                                        </label>
                                      </div>
                                    </fieldset>

                                    <div
                                      id="select-0fbec92c-2029-4764-9dae-a42a08c1869e"
                                      class="form-item field select"
                                    >
                                      <label
                                        class="title"
                                        for="enrollment_year"
                                      >
                                        Anticipated Year of Enrollment
                                      </label>

                                      <select
                                        id="enrollment_year"
                                        name="enrollment_year"
                                        v-model="templateParams.enrollment_year"
                                      >
                                        <option value="2021-2022"
                                          >2021-2022</option
                                        >

                                        <option value="2022-2023"
                                          >2022-2023</option
                                        >

                                        <option value="2023-2024"
                                          >2023-2024</option
                                        >

                                        <option value="2024-2025"
                                          >2024-2025</option
                                        >

                                        <option value="2025-2026"
                                          >2025-2026</option
                                        >

                                        <option value="2026-2027"
                                          >2026-2027</option
                                        >

                                        <option value="2027-2028"
                                          >2027-2028</option
                                        >

                                        <optgroup label=""></optgroup>
                                      </select>
                                    </div>

                                    <div
                                      id="textarea-467af134-e8cc-414f-9d82-99f5095704c9"
                                      class="form-item field textarea"
                                    >
                                      <label class="title" for="message">
                                        Message
                                      </label>

                                      <textarea
                                        class="field-element "
                                        id="message"
                                        name="message"
                                        v-model="templateParams.message"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div
                                    data-animation-role="button"
                                    class="
                  form-button-wrapper"
                                  >
                                    <input
                                      class="button sqs-system-button sqs-editable-button"
                                      type="submit"
                                      value="Submit"
                                      @click="dosubmit"
                                    />
                                  </div>

                                  <div class="hidden form-submission-text">
                                    Thank you!
                                  </div>
                                  <div
                                    class="hidden form-submission-html"
                                    data-submission-html=""
                                  ></div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col sqs-col-4 span-4">
                        <div
                          class="sqs-block html-block sqs-block-html"
                          data-block-type="2"
                          id="block-fab0d1ce39df7671b773"
                        >
                          <div class="sqs-block-content">
                            <h3 style="white-space:pre-wrap;">
                              Rupertsland Daycare Ctr
                            </h3>
                            <p class="" style="white-space:pre-wrap;">
                              201 Princess St, Winnipeg, MB R3B 3E9
                            </p>
                          </div>
                        </div>
                        <div
                          class="sqs-block map-block sqs-block-map sized vsize-12"
                        >
                          <div id="map" style="height: 500px;"></div>

                          <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
                          <!-- <script
                            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFrzy71_H7XTAZqAhSQf2yjPNUsKNYldk&callback=initMap&libraries=&v=weekly"
                            async
                          ></script> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <!-- end of register form -->
              </article>
              <!-- end post -->
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- Start Featured Gallery -->
    
  </div>
</template>

<script>
/* eslint-disable */
import emailAPI from '@/apis/email_api.js'
// import mapAPI from '@/apis/map_api.js'
import { Loader } from "@googlemaps/js-api-loader";
export default {
    data () {
        return {
            templateParams:{
                fname: '',
                lname:'',
                MM:'',
                DD:'',
                YYYY:'',
                program:'',
                pfname:'',
                plname:'',
                email:'',
                phone_01:'',
                phone_02:'',
                enrollment_year:'',
                message:''
            }
        }
    },
    created () {
        
    },
    mounted () {
        this.loadMap()
    },
    methods: {
        loadMap() {
    let map;
    const YOUR_API_KEY = "AIzaSyBFrzy71_H7XTAZqAhSQf2yjPNUsKNYldk";
    const loader = new Loader({
      apiKey: YOUR_API_KEY,
      version: "weekly",
    });
    
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map"), {// eslint-disable-line no-undef
        center: { lat: 49.90098687626329, lng: -97.14019542594642 },
        zoom: 14,
      });
      const marker = new google.maps.Marker({// eslint-disable-line no-undef
        position: { lat: 49.90098687626329, lng: -97.14019542594642 },
        map,
        title: "Rupertsland Daycare Ctr",
      });
      marker.addListener("click", () => {
        window.open(
          "https://www.google.com/maps/place/Rupertsland+Daycare+Ctr/@49.901366,-97.1410876,15.25z/data=!4m5!3m4!1s0x52ea715d75fd8ed5:0x10712985b6aea173!8m2!3d49.9009774!4d-97.1401983")
      });
    });
  },
        dosubmit(){
          this.$router.push("/waiting-list/ok")
            // emailAPI.sendFormByEmail(this.templateParams).then(response=>{
            //     console.log("dosubmit response: ", response)
            // }).catch(error=>{
            //     console.log("dosubmit error: ", error)
            // })
        }
    }

};
</script>

<style>

.h1style {
  -webkit-text-size-adjust: 100%;
  pointer-events: auto;
  -webkit-font-smoothing: subpixel-antialiased;
  margin: 0.67em 0;
  text-rendering: optimizeLegibility;
  font-family: sofia-pro;
  font-weight: 700;
  font-style: normal;
  font-size: 35px;
  letter-spacing: 0em;
  line-height: 1.1em;
  text-transform: none;
  color: #656773;
  margin-top: 0;
  white-space: pre-wrap;
}
.pstyle {
  -webkit-text-size-adjust: 100%;
  pointer-events: auto;
  font-family: sofia-pro;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0em;
  line-height: 1.8em;
  text-transform: none;
  color: #656773;
  -webkit-font-smoothing: subpixel-antialiased;
  word-wrap: break-word;
  margin-bottom: 0;
  white-space: pre-wrap;
}
.formstyle {
  -webkit-text-size-adjust: 100%;
  pointer-events: auto;
  font-family: sofia-pro;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0em;
  text-transform: none;
  color: #656773;
  -webkit-font-smoothing: subpixel-antialiased;
  line-height: normal;
}
.tp-caption a {
  color: #ff7302;
  text-shadow: none;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
}

.tp-caption a:hover {
  color: #ffa902;
}

.tp-caption a {
  color: #ff7302;
  text-shadow: none;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
}

.tp-caption a:hover {
  color: #ffa902;
}
.form-wrapper .field-list .field{
    position: relative;
    margin: 0 0 24px;
    display: block;
}

.form-item{
    text-align: left;
}
p{
    white-space:nowrap;
}
.col-md-12{
    max-width: 80rem;
    margin: auto;
}
</style>
