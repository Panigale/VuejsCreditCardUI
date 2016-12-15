$(document).ready(function () {

    $('.only-numbers').keyup(function () {
        if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
            this.value = this.value.replace(/[^0-9\.]/g, '');
        }
    });

    $('.flipFront').click(function () {
        $('.credit-card').removeClass('flipped');
    });
    $('.flipBack').click(function () {
        $('.credit-card').addClass('flipped');
    });
    $('.flipBack').focus(function () {
        $('.credit-card:not(data-send)').addClass('flipped');
    });

    $('#sendCreditCardData').click(function () {
        $('.credit-card').toggleClass('data-send');
        $('.data-table').fadeToggle('slow');
    })
});


var app = new Vue({
    el: '#app',
    data: {
        inputNumbers: "",
        month: "",
        year: "",
        firstName: "",
        lastName: "",
        cvcNumber: "",
        sentTime: ""
    },
    computed: {
        numberGroup1: function () {
            if (this.inputNumbers.substr(0, 4) == '') {
                return '****'
            } else {
                numberGroup1 = this.inputNumbers.substr(0, 4)
                return numberGroup1
            }
        },
        numberGroup2: function () {
            if (this.inputNumbers.substr(4, 4) == '') {
                return '****'
            } else {
                numberGroup2 = this.inputNumbers.substr(4, 4)
                return numberGroup2
            }
        },
        numberGroup3: function () {
            if (this.inputNumbers.substr(8, 4) == '') {
                return '****'
            } else {
                numberGroup3 = this.inputNumbers.substr(8, 4)
                return numberGroup3
            }
        },
        numberGroup4: function () {
            if (this.inputNumbers.substr(12, 4) == '') {
                return '****'
            } else {
                numberGroup4 = this.inputNumbers.substr(12, 4)
                return numberGroup4
            }
        },
        showMonth: function () {
            if (this.month == "") {
                return "MM"
            } else {
                return this.month
            }
        },
        showYear: function () {
            if (this.year == "") {
                return "YY"
            } else {
                return "20" + this.year
            }
        },
        fullName: function () {
            if (this.firstName == '' && this.lastName == '') {
                return 'Your Name'
            } else {
                return this.firstName + " " + this.lastName
            }

        },
        creditCardType: function () {
            firstNumber = this.inputNumbers.split('')
            if (firstNumber[0] == '4') {
                return 'visa'
            } else if (firstNumber[0] == '5') {
                return 'master'
            } else if (firstNumber[0] == '3') {
                return 'american-express'
            } else if (firstNumber[0] == '1' || firstNumber[0] == '2') {
                return 'jcb'
            } else {
                return firstNumber[0]
            }
        },

        calculateSentTime: function () {
            this.sentTime = new Date()
            return this.sentTime
        }

    }
})
