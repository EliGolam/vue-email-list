// Initial Handshake
console.log('Script: LOADED!');


const app = new Vue({
    el: '#app',

    data: {
        emailList: [],

        // Results
        exerciseResults:  [],
        message: '',
    }, 

    methods: {
        // API methods
        getEmailAPI() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((serverData) => {
                if (serverData.status === 200 && serverData.data.success) {
                    return serverData.data.response;
                }
            }).catch((error) => {
                console.warn(error)
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

        while (this.emailList.length < 10) {
            const email = this.getEmailAPI();
            console.log('DEBUG - new API email:', email);
            this.emailList.push(email);
        }

        console.log('Created Email List:', this.emailList);

        this.exerciseResults.push(...this.emailList);
    }
});





 