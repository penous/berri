const ComponentQuestion1 = {
  template: `
  <div class="ten columns" style="margin-top: 25%">
  <p>{{question}}</p>
  <div class="row"  style="margin-left: 40%">
  <div class="three columns">
  <p style="font-size:18px;" class="button" v-on:click="onClick" >Ja</p>
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
  <div style="margin-top: 25%">
  <p>{{question}}</p>
  <div class="row">
  <div class="three columns">
  <input class="u-full-width" placeholder="Naam">
  </div>
  <div class="three columns">
  <p style="font-size:18px; width:50%;" class="button" v-on:click="onClick" >&#8688;</p>
  </div>
  </div>
  </div>
  `,
  data: function() {
    return {
      question: "Vul je naam in.",
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
  <div class="ten columns" style="margin-top: 25%">
  <p>{{question}}</p>
  <div class="row">
  <div class="one-third column">
  <p style="font-size:18px;" class="button" v-on:click="onClick" >18:30</p>
  </div>
  <div class="one-third column">
  <p style="font-size:18px;" class="button" v-on:click="onClick" >20:00</p>
  </div>
  <div class="one-third column">
  <p style="font-size:18px;" class="button" v-on:click="onClick" >21:30</p>
  </div>
  </div>
  </div>
  `,
  data: function() {
    return {
      question: "Sa kohë doni të shihni performancën?",
    }
  },
  methods: {
    onClick () {
      this.$emit('click', "component-question-4")
    }
  }
}

const ComponentQuestion4 = {
  template: `
  <div style="margin-top: 25%">
  <p>{{question}}</p>
  <div class="row">
  <div class="two columns">
  <img src="./pictures/ubs.png" class="button" style="padding:5px; height:64px" @click="onClick" />
  </div>
  <div class="two columns">
  <img src="./pictures/visa.png" class="button" style="margin-left:15px; padding:5px; height:64px" @click="onClick" />
  </div>
  <div class="two columns">
  <img src="./pictures/pekao.jpg" class="button" style="padding:5px; height:64px" @click="onClick" />
  </div>
  </div>
  </div>
  `,
  data: function() {
    return {
      question: "Hoe ga je betalen?",
    }
  },
  methods: {
    onClick () {
      this.$emit('click', "component-question-5")
    }
  }
}

const ComponentQuestion5 = {
  template: `
  <div class="ten columns" style="margin-top: 25%">
  <p>{{question}}</p>
  <div class="row"  style="margin-left: 25%">
  <div class="three columns">
  <p style="font-size:18px;" class="button" v-on:click="onClick" >Next</p>
  </div>
  </div>
  </div>
  `,
  data: function() {
    return {
      question: "Proficiat. U kocht de tickets aan.",
    }
  },
  methods: {
    onClick () {
      this.$emit('click', "component-question-6")
    }
  }
}

const ComponentQuestion6 = {
  template: `
  <div class="ten columns" style="margin-top: 15%">
  <p>{{question}}</p>
  <div class="row"  style="margin-left: 40%">
  <div class="three columns">
  <p style="font-size:18px;" class="button" v-on:click="onClick" >Next</p>
  </div>
  </div>
  </div>
  `,
  data: function() {
    return {
      question: `
      Wist je dat het voor mensen in armoede moeilijk is om tickets te kopen?
Sommige spreken onvoldoende Nederlands, anderen hebben niet de juiste betaalkaart.
Soms weten ze niet hoe ze op het internet kunnen werken of waar ze naartoe kunnen gaan.
`,
    }
  },
  methods: {
    onClick () {
      this.$emit('click', "component-question-7")
    }
  }
}

const ComponentQuestion7 = {
  template: `
  <div class="ten columns" style="margin-top: 20%">
  <p>{{question}}</p>
  <div class="row"  style="margin-left: 40%">
  <div class="three columns">
  <p style="font-size:18px;" class="button" v-on:click="onClick" >Next</p>
  </div>
  </div>
  </div>
  `,
  data: function() {
    return {
      question: `
      We kiezen ervoor dat cultuur en vrije tijd geen luxeproduxt is.
      Cultuur verbindt, ontstrest, geeft de nodige ademruimte.
`,
    }
  },
  methods: {
    onClick () {
      this.$emit('click', "component-question-8")
    }
  }
}

const ComponentQuestion8 = {
  template: `
  <div class="ten columns" style="margin-top: 20%">
  <p>{{question}}</p>
  <div class="row"  style="margin-left: 25%">
  <div class="three columns">
  <p style="font-size:18px;" class="button" v-on:click="onClick" >Terug naar start</p>
  </div>
  </div>
  </div>
  `,
  data: function() {
    return {
      question: `
      Elke maand organiseren we één uitstap.
      Zo kunnen ook onze klanten deelnemen aan het rijke culturele leven van Antwerpen
`,
    }
  },
  methods: {
    onClick () {
      this.$emit('click', "component-question-1")
    }
  }
}

var app = new Vue({
  el: '#app',
  components: {
    "component-question-1": ComponentQuestion1,
    "component-question-2": ComponentQuestion2,
    "component-question-3": ComponentQuestion3,
    "component-question-4": ComponentQuestion4,
    "component-question-5": ComponentQuestion5,
    "component-question-6": ComponentQuestion6,
    "component-question-7": ComponentQuestion7,
    "component-question-8": ComponentQuestion8,
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
