const ComponentQuestion1 = {
  template: `
  <div class="row">
  <div class="ten columns" style="margin-top: 25%">
  <p>{{question}}</p>
  <div class="row"  style="margin-left: 50%">
  <div class="three columns">
  <p style="font-size:18px;" class="button" v-on:click="onClick" >Ja</p>
  </div>
  </div>
  </div>
  </div>
  `,
  data: function() {
    return {
      question: "Wil je tickets kopen voor deze voorstelling?",
    }
  },
  methods: {
    onClick () {
      this.$emit('click', "component-question-2")
    }
  }
}

const ComponentQuestion2 = {
  template: `
  <div class="row">
  <div class="ten columns" style="margin-top: 25%">
  <p>{{question}}</p>
  <div class="row"  style="margin-left: 30%">
  <div class="three columns">
  <input class="" placeholder="Naam">
  <p style="font-size:18px;" class="button" v-on:click="onClick" >&#8688;</p>
  </div>
  </div>
  </div>
  </div>
  `,
  data: function() {
    return {
      question: "Vul je naam in",
    }
  },
  methods: {
    onClick () {
      this.$emit('click', "component-question-3")
    }
  }
}

const ComponentQuestion3 = {
  template: `
  <div class="row">
  <div class="ten columns" style="margin-top: 25%">
  <p>{{question}}</p>
  <div class="row"  style="margin-left: 50%">
  <div class="three columns">
  <p style="font-size:18px;" class="button" v-on:click="onClick" >Ja zekers</p>
  </div>
  </div>
  </div>
  </div>
  `,
  data: function() {
    return {
      question: "Is Lewis nen homo?",
    }
  },
  methods: {
    onClick () {
      this.$emit('click', "component-question-4")
    }
  }
}

var app = new Vue({
  el: '#app',
  components: {
    "component-question-1": ComponentQuestion1,
    "component-question-2": ComponentQuestion2,
    "component-question-3": ComponentQuestion3
    // "component-question-4": ComponentQuestion4
    // "component-question-5": ComponentQuestion5
  },
  data: {
    questionNr: "component-question-1"
  },
  methods: {
    updateComponents (v) {
      this.questionNr = v
    }
  }
})
