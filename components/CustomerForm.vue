<template>

<div class="customform">

    <div class="customform__fields" v-if="!showBilling && activeStep === 2">
    <h4 class="step-title">Shipping Info</h4>

        <!-- customform__row begin -->
        <div class="customform__row">

            <!-- First Name begin -->
            <div class="customform-group" :class="{ 'customform-group--error': $v.name.$error }">
                <input autocomplete="off" class="base-input" id="username" placeholder="First Name" v-model.trim="name" @input="$v.name.$touch()"/>
                <div class="error" v-if="$v.name.$error">
                    <span v-if="!$v.name.minLength || !$v.name.maxLength">Name must contain at least {{$v.name.$params.minLength.min}} and no more than {{$v.name.$params.maxLength.max}} letters.</span>
                    <span v-if="!$v.name.alpha">Name must contain only english letters</span>
                </div>
            </div>
            <!-- First Name end -->
            
            <!-- Last Name begin -->
            <div class="customform-group" :class="{ 'customform-group--error': $v.lastname.$error }">
                <input autocomplete="off" class="base-input" id="userlastname" placeholder="Last Name" v-model.trim="lastname" @input="$v.lastname.$touch()"/>
                <div class="error" v-if="$v.lastname.$error">
                    <span v-if="!$v.lastname.minLength || !$v.lastname.maxLength">Last Name must contain at least {{$v.lastname.$params.minLength.min}} and no more than {{$v.lastname.$params.maxLength.max}} letters</span>
                    <span v-if="!$v.lastname.alpha">Name must contain only english letters</span>
                </div>
            </div>
            <!-- Last Name end -->

        </div>
        <!-- customform__row end -->

        <!-- Company begin -->
        <div class="customform-group" :class="{ 'customform-group--error': $v.company.$error }">
            <input autocomplete="off" class="base-input" id="usercompany" placeholder="Company Name (Optional)" v-model.trim="company" @input="$v.company.$touch()"/>
            <div class="error" v-if="$v.company.$error">
                <span v-if="!$v.company.minLength || !$v.company.maxLength">Company Name must have at least {{$v.company.$params.minLength.min}} and {{$v.company.$params.maxLength.max}}</span>
            </div>
        </div>
        <!-- Company end -->


        <!-- customform__row begin -->
        <div class="customform__row">

            <!-- Street Adress begin -->
            <div class="customform-group" :class="{ 'customform-group--error': $v.street.$error }">
                <input autocomplete="off" class="base-input" id="userstreet" placeholder="Street Address" v-model.trim="street" @input="$v.street.$touch()"/>
                <div class="error" v-if="!$v.street.minLength || !$v.street.maxLength"><span>Street must contain at least {{$v.street.$params.minLength.min}} and no more than {{$v.street.$params.maxLength.max}} letters.</span></div>
            </div>
            <!-- Street Adress end -->
            
            <!-- Apartment begin -->
            <div class="customform-group" :class="{ 'customform-group--error': $v.apartment.$error }">
                <input autocomplete="off" class="base-input" id="userapart" placeholder="Apartment, unit etc (Optional)" v-model="apartment" @input="$v.apartment.$touch()"/>
                <div class="error" v-if="$v.apartment.$error">
                    <span v-if="!$v.apartment.minLength || !$v.apartment.maxLength">Apatment must contain at least {{$v.apartment.$params.minLength.min}} and no more than {{$v.apartment.$params.maxLength.max}} numbers.</span>
                    <span v-if="!$v.apartment.alphaNum">Apartment must contain only numbers</span>
                </div>
            </div>
            <!-- Apartment end -->

        </div>
        <!-- customform__row end -->

        <!-- customform__row begin -->
        <div class="customform__row">

            <!-- City or Town begin -->
            <div class="customform-group" :class="{ 'customform-group--error': $v.city.$error }">
                <input autocomplete="off" class="base-input" id="usercity" placeholder="City / Town" v-model.trim="city" @input="$v.city.$touch()"/>
                <div class="error" v-if="$v.city.$error">
                    <span v-if="!$v.city.minLength || !$v.city.maxLength">City or Town contain at least {{$v.city.$params.minLength.min}} and no more than {{$v.city.$params.maxLength.max}} letters.</span>
                    <span v-if="!$v.city.alpha">City or Town must contain only english letters</span>
                </div>
            </div>
            <!-- City or Town end -->

            <!-- State begin -->
            <div class="customform-group" :class="{ 'customform-group--error': $v.state.$error }">
                <!-- <input autocomplete="off" class="base-input" id="userstate" placeholder="State" v-model.trim="state" @input="setState($event.target.value)"/> -->


                <select
                    name="State"
                    id="state"
                    class="base-input"
                    placeholder="State"
                    v-model="state"
                    @input="$v.state.$touch()">
                    <option value="" disabled="disabled">State</option>
                    <option v-for="item in states" :value="item" :key="item">{{ item }}</option>
                </select>

                <div class="error" v-if="$v.state.$error">
                    <span v-if="!$v.state.minLength || !$v.state.maxLength">State contain at least {{$v.state.$params.minLength.min}} and no more than {{$v.state.$params.maxLength.max}} letters.</span>
                    <!-- <span v-if="!$v.state.alpha">State must contain only english letters</span> -->
                </div>
            </div>
            <!-- State end -->

        </div>
        <!-- customform__row end -->

        <!-- customform__row begin -->
        <div class="customform__row">

            <!-- Postcode begin -->
            <div class="customform-group" :class="{ 'customform-group--error': $v.postcode.$error }">
                <input autocomplete="off" class="base-input" id="userpostcode" placeholder="Postcode" v-model="postcode" @input="$v.postcode.$touch()"/>
                <div class="error" v-if="$v.postcode.$error">
                    <span v-if="!$v.postcode.minLength || !$v.postcode.maxLength">Postcode must contain at least {{$v.postcode.$params.minLength.min}} and no more than {{$v.postcode.$params.maxLength.max}} numbers.</span>
                    <span v-if="!$v.postcode.alphaNum">Postcode must contain only numbers</span>
                </div>
            </div>
            <!-- Postcode end -->

            <!-- unstate begin -->
            <div class="customform-group">
                <input autocomplete="off" class="base-input" id="userunstate" placeholder="" v-model="unstate" readonly/>
            </div>
            <!-- unstate end -->


        </div>
        <!-- customform__row end -->

        <!-- customform__row begin -->
        <div class="customform__row">

            <!-- Phone begin -->
            <div class="customform-group" :class="{ 'customform-group--error': $v.phone.$error }">
                <input autocomplete="off" class="base-input" id="userphone" placeholder="Phone" v-model="phone" @input="$v.phone.$touch()"/>
                <div class="error" v-if="$v.phone.$error">
                    <span v-if="!$v.phone.minLength || !$v.phone.maxLength">Phone must contain {{$v.phone.$params.minLength.min}} numbers.</span>
                    <span v-if="!$v.phone.alphaNum">Phone must contain only numbers</span>
                </div>
            </div>
            <!-- Phone end -->

            <!-- Email Adress begin -->
            <div class="customform-group" :class="{ 'customform-group--error': $v.email.$error }">
                <input autocomplete="off" class="base-input" id="useremail" placeholder="Email" v-model.trim="email" @input="$v.email.$touch()"/>
                <div class="error" v-if="$v.email.$error">
                    <span v-if="!$v.email.minLength || !$v.email.maxLength">Email must contain at least {{$v.email.$params.minLength.min}} and no more than {{$v.email.$params.maxLength.max}} letters.</span>
                    <span v-if="!$v.email.email">Email must contain @</span>
                </div>
            </div>
            <!-- Email Adress end -->
        </div>
        <!-- customform__row end -->

        <!-- Information begin -->
        <div class="customform-group" :class="{ 'customform-group--error': $v.information.$error }">
            <textarea
                class="base-input"
                placeholder="Additional Information"
                v-model.trim="information"
                @input="$v.information.$touch()"
                name=""
                id="usermessage"
                cols="30"
                rows="5"></textarea>

            <div class="error" v-if="!$v.information.error">
                <span v-if="!$v.information.minLength || !$v.information.maxLength">Company Name must have at least {{$v.information.$params.minLength.min}} and {{$v.information.$params.maxLength.max}}</span>
            </div>
        </div>
        <!-- Information end -->
        <label><input type="checkbox">
            <strong>Priority Shipping ($6.47: 2-3 days priority shipping)</strong>
        </label>
        <label><input type="checkbox" v-model='priority'> By clicking here I agree to the terms and conditions </label>
        <div class="error" v-if="!priority">
            <span>Please agree the terms and conditions.</span>
        </div>

    </div>

    <payment />
    
    <div class="text-right">
        <btn-def text="next step" @click.native="ShowNextStep" icon="/img/icons/arrow-right.svg">
            <img src="/img/icons/arrow-right.svg" class="totalinfo__arrow" alt=">">
        </btn-def>
    </div>

</div>




</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { required, minLength, maxLength, between, helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Z]*$/);
const alphaNum = helpers.regex('alphaNum', /^[0-9]*$/);
const email = helpers.regex('alphaNum', /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/);

export default {
  data() {
    return {
        name: '',
        lastname: '',
        company: '',
        information: '',
        street: '',
        priority: true,
        email: '',
        city: '',
        state: '',
        unstate: 'United States (US)',
        apartment: null,
        postcode: null,
        phone: null,
        icon: '/img/icons/arrow-right.svg',
        states:[
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'District Of Columbia',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
            'Armed Forces (AA)',
            'Armed Forces (AE)',
            'Armed Forces (AP)',
        ]
    }
  },
  validations: {
    name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(25),
        alpha: alpha
    },
    lastname: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(25),
        alpha: alpha
    },
    priority:{
        required
    },
    age: {
        between: between(16, 60)
    },
    company: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(25)
    },
    information: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(300)
    },
    street: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(40)
    },
    email: {
        required,
        minLength: minLength(7),
        maxLength: maxLength(40),
        email: email
    },
    apartment: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(5),
        alphaNum: alphaNum
    },
    city: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(25),
        alpha: alpha
    },
    state: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(35),
        // alpha: alpha
    },
    postcode: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(5),
        alphaNum: alphaNum
    },
    phone: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
        alphaNum: alphaNum
    }
  },
  mounted(){
      console.log(this.$v);
  },
  methods: {
    ShowNextStep(){
        this.$v.$touch()
        if(this.$v.$anyError || !this.priority){
            console.log('form is not valid');
            this.CHANGE_BILLING_SEP(false);
            this.CHANGE_ACTIVE_STATE(2);
        }else{
            console.log('form is valid');
            this.CHANGE_BILLING_SEP(true);
            this.CHANGE_ACTIVE_STATE(3);
        }
    },
    ...mapMutations([
        'CHANGE_ACTIVE_STATE',
        'CHANGE_BILLING_SEP'
    ]),
    showFirstStep(){
        this.CHANGE_BILLING_SEP(false)
        this.CHANGE_ACTIVE_STATE(2)
    }
  },
  computed:{
      ...mapState({
          showBilling: 'billingInfoStep',
          activeStep: 'activeStep'
      })
  },
  mounted(){
    this.showFirstStep();
  }
}
</script>

<style lang="sass" scoped>
.customform
    &__row
        font-size: 0px
        .customform-group
            display: inline-block
            width: 48.8%
            margin-right: 15px
            vertical-align: top
            &:nth-child(2)
                margin-right: 0
    .def-btn
        padding: 8px 50px 8px 45px


</style>