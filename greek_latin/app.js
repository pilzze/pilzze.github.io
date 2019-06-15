var ex1 = new Vue({
  el: '#example-1',
  data: {
    right: 0,
    wrong: 0,
    words: [['dictionary', true],['circus', true], ['manual', true], 
    ['kinetic', false], ['dynamic', false], 
    ['photo', false]].sort(() => Math.random() - 0.5)
  },
  methods: {
    randomWord: function (words) {
      // `this` inside methods points to the Vue instance
      return words[Math.floor(Math.random() * words.length)];
    }
  }
})
