// Initial Handshake
console.log('Script: LOADED!');


const app = new Vue({
    el: '#app',

    data: {
        emailList: [],
        emailURL: 'https://flynn.boolean.careers/exercises/api/random/mail',

        // Results
        exerciseResults:  [],
        loading: false
    }, 

    methods: {
        // API methods
        getEmailAPI(amount) {
            this.loading = true; // Begin loading

            amount = isNaN(amount) ? 1 : amount; // Check the parameter

            let promises = []; // Create an array of Promises


            // Loop API calls
            for (let i = 0; i < amount; i++) {
                promises.push(
                    axios
                        .get(this.emailURL)
                        .then(response => this.emailList.push(response.data.response))
                        .catch((error) => console.warn(error))
                );
            }


            // When all promises are resolved -> then execute
            Promise.all(promises).then(() => {
                this.exerciseResults = [...this.emailList];
                this.loading = false;
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





 