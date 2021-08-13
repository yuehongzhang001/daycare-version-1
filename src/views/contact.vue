<template>
  <div>
    <div class="contact-container">
      <div class="row sqs-row">
        <div class="col sqs-col-2 span-2">
          <div
            class="sqs-block spacer-block sqs-block-spacer sized vsize-1"
            data-block-type="21"
            id="block"
          >
            <div class="sqs-block-content">&nbsp;</div>
          </div>
        </div>
        <div class="col sqs-col-10 span-10">
          <div class="row sqs-row">
            <div class="col sqs-col-5 span-5">
              <div
                class="sqs-block html-block sqs-block-html"
                data-block-type="2"
                id="block"
              >
                <div class="sqs-block-content">
                  <h3 style="white-space:pre-wrap;">Contact Us</h3>
                  <p class="" style="white-space:pre-wrap;">
                    Director: Limei Lin
                  </p>
                  <p class="" style="white-space:pre-wrap;">
                    201 Princess St<br />
                    Winnipeg, MB R3B 3E9
                  </p>
                  <p class="" style="white-space:pre-wrap;">
                    <span>(204) 947-3433</span><br /><a
                      href="mailto:rupertsland1986@gmail.com"
                      >rupertsland1986@gmail.com</a
                    >
                  </p>
                  <p class="" style="white-space:pre-wrap;">
                    <strong>Application Form</strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="col sqs-col-5 span-5">
              <div
                class="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                data-block-type="21"
                id="block"
              >
                <div class="sqs-block-content">&nbsp;</div>
              </div>
            </div>
          </div>
          <div class="row sqs-row">
            <div class="col sqs-col-5 span-5">
              <div
                class="sqs-block form-block sqs-block-form"
                data-block-type="9"
                id="block-2f12c312829a463292a8"
              >
                <div class="sqs-block-content">
                  <div class="form-wrapper">
                    <div class="form-inner-wrapper">
                      <form
                        data-form-id="5c37eed58a922dd17382ae9c"
                        data-success-redirect=""
                        autocomplete="on"
                        method="POST"
                        action="#"
                        novalidate=""
                        onsubmit="return false"
                      >
                        <div class="field-list clear">
                          <fieldset
                            id="name"
                            class="form-item fields name required"
                          >
                            <legend class="title">
                              Name
                              <span class="required" aria-hidden="true">*</span>
                            </legend>

                            <div class="field first-name">
                              <label class="caption">
                                <input
                                  class="field-element field-control"
                                  name="fname"
                                  x-autocompletetype="given-name"
                                  type="text"
                                  spellcheck="false"
                                  maxlength="30"
                                  data-title="First"
                                  aria-required="true"
                                  v-model="templateParams.fname"
                                />
                                <span class="caption-text">First Name</span>
                              </label>
                            </div>
                            <div class="field last-name">
                              <label class="caption">
                                <input
                                  class="field-element field-control"
                                  name="lname"
                                  x-autocompletetype="surname"
                                  type="text"
                                  spellcheck="false"
                                  maxlength="30"
                                  data-title="Last"
                                  aria-required="true"
                                  v-model="templateParams.lname"
                                />
                                <span class="caption-text">Last Name</span>
                              </label>
                            </div>
                          </fieldset>
                          <div
                            id="email"
                            class="form-item field email required"
                          >
                            <label class="title" for="email">
                              Email Address
                              <span class="required" aria-hidden="true">*</span>
                            </label>

                            <input
                              class="field-element"
                              id="email"
                              name="email"
                              type="email"
                              autocomplete="email"
                              spellcheck="false"
                              aria-required="true"
                              v-model="templateParams.email"
                            />
                          </div>

                          <div id="text" class="form-item field text required">
                            <label class="title" for="text-field">
                              Subject

                              <span class="required" aria-hidden="true">*</span>
                            </label>

                            <input
                              class="field-element text"
                              type="text"
                              id="text-field"
                              aria-required="true"
                              v-model="templateParams.subject"
                            />
                          </div>

                          <div
                            id="textarea"
                            class="form-item field textarea required"
                          >
                            <label class="title" for="textarea">
                              Message

                              <span class="required" aria-hidden="true">*</span>
                            </label>

                            <textarea
                              class="field-element "
                              id="textarea"
                              aria-required="true"
                              v-model="templateParams.message"
                            ></textarea>
                          </div>
                        </div>
                        <div
                          data-animation-role="button"
                          class="form-button-wrapper form-button-wrapper--align-left"
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
            <div class="col sqs-col-5 span-5">
              <div
                class="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                data-block-type="21"
                id="block"
              >
                <div class="sqs-block-content">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailAPI from "@/apis/email_api.js";
export default {
  data() {
    return {
      templateParams: {
        fname: "",
        lname: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    dosubmit() {
      console.log(this.templateParams);
      //   this.$router.push("/waiting-list/ok")

      emailAPI
        .sendMessageByEmail(this.templateParams)
        .then((response) => {
            // prompt success message
          this.$message({
            type: "success",
            message: "You have send an email, thank you!",
          });
          console.log("dosubmit response: ", response);
        })
        .catch((error) => {
          console.log("dosubmit error: ", error);
        });
    },
  },
};
</script>

<style src="@/assets/bootstrap/css/bootstrap.css" scoped></style>
<style lang="css" scoped>
.contact-container {
  max-width: 60rem;
  margin: auto;
}
</style>
