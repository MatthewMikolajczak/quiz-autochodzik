Vue.component('todo-component', {
    template: '#todo-component',
    data() {
        return {
            view: '',
            set: 0,
            sets: 4,
            setSize: 10,
            questions: [],
            old_questions: [],
            user_answers: [],
            qimage: '',
            qtext: '',
            answers: [],
            show_results: false,
            results: [],
            correct: 0,
            last_score: '',
            banner: 'baner1.jpg'
        }
    },
    methods: {
        start: function() {
            this.set += 1;
            this.drawQuestions();
            this.showQuestion();
        },
        loading: function(view) {
            this.view = 'ladowanie';
            var self = this;
            setTimeout(function() {
                self.view = view;
            }, 2000);
        },
        drawQuestions: function() {
            var random;
            for (var i = 0; i < this.setSize; i++) {
                do {
                    random = Math.round(Math.random() * (questionText.length - 1));
                } while (random > questionText.length - 1 || (this.questions.indexOf(random) !== -1) || (this.old_questions.indexOf(random) !== -1))
                this.questions.push(random);
                this.old_questions.push(random);
            }
        },
        showQuestion: function() {
            if (this.user_answers.length == 10) {
                this.loading('koniec');
                this.makeResults();
            } else {
                this.loading('gra');
                var question = this.user_answers.length;
                this.qimage = questionImage[this.questions[question]];
                this.qtext = questionText[this.questions[question]];
                this.answers.push({
                    text: answersTexts[this.questions[question]][0],
                    image: answersImages[this.questions[question]][0],
                    correct: true
                });
                this.answers.push({
                    text: answersTexts[this.questions[question]][1],
                    image: answersImages[this.questions[question]][1],
                    correct: false
                });
                this.answers.push({
                    text: answersTexts[this.questions[question]][2],
                    image: answersImages[this.questions[question]][2],
                    correct: false
                });
                this.answers = this.swapAnswers(this.answers);
            }
        },
        swapAnswers: function(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        },
        next: function(answer) {
            this.user_answers.push(this.answers[answer].correct);
            this.answers = [];
            this.showQuestion();
        },
        makeResults: function() {
            for (var i = 0; i < this.user_answers.length; i++) {
                this.results.push({
                    questionImage: questionImage[this.questions[i]],
                    questionText: questionText[this.questions[i]],
                    answerImage: answersImages[this.questions[i]][0],
                    answerText: answersTexts[this.questions[i]][0],
                    correct: this.user_answers[i]
                });
                if(this.user_answers[i] == true) this.correct += 1;
            }
            this.last_score = this.correct + ' na ' + this.results.length;
        },
        nextSet: function() {
            if (this.set < 4) {
                this.questions = [];
                this.user_answers = [];
                this.show_results = false;
                this.results = [];
                this.view = 'start';
                this.correct = 0;
            } else location.reload();
        },
        changeBanner: function() {
            switch(this.banner){
                case 'baner1.jpg':
                    this.banner = 'baner2.jpg';
                    break;
                case 'baner2.jpg':
                    this.banner = 'baner3.jpg';
                    break;
                case 'baner3.jpg':
                    this.banner = 'baner1.jpg';
                    break;
            }
        }
    }
});
var app = new Vue({
    el: '#vue-app'
});
