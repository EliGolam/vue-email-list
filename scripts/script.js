// Initial Handshake
console.log('Script: LOADED!');


const app = new Vue({
    el: '#app',

    data: {
        emailList: [],

        // Results
        exerciseResults:  [],
        loaded: true
    }, 

    methods: {
        // API methods
        getEmailAPI(amount) {
            this.loaded = false;

            // Check the parameter
            amount = isNaN(amount) ? 1 : amount;

            // Create an array of Promises
            let promises = []; 

            for (let i = 0; i < amount; i++) {
                promises.push(
                    axios
                        .get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            if (response.data.success) {
                                this.emailList.push(response.data.response);
                            }
                        })
                        .catch((error) => {
                            console.warn(error)
                    })
                )
            }

            // When all promises are resolved -> then execute
            Promise.all(promises).then(() => {
                this.exerciseResults = [...this.emailList];
                this.loaded = true;
            });
        },

        // Results in DOM Methods
        addResult(message) {
            if (message === undefined || message.trim().length <= 0) return;
            // console.log('DEBUG - Adding message', message);
            this.exerciseResults.push(message.trim());
        }
    },

    mounted() {
        // TEST APP 
        /*
        this.addResult('Test 1');
        this.addResult();
        this.addResult('');
        this.addResult('       ');
        this.addResult('Test 2');
        this.addResult('Test 3');
        console.log('DEBUG - results', this.exerciseResults);
        this.getEmailAPI();
        */ 
        this.getEmailAPI(100);
    }
});





 