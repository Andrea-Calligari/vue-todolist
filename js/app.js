const { createApp } = Vue

createApp({
    data() {
        return {

            toDoList: [
                {
                    text: 'Spazzare il giardino',
                    done: false
                },
                {
                    text: 'Portare la macchina dal meccanico',
                    done: false
                },
                {
                    text: 'Andare dalla nonna',
                    done: false
                },
                {
                    text: 'Portare fuori il cane',
                    done: false
                },
            ],
            valueInput: '',
            classLine: 'line-trought'

        }
    },
    methods: {
        removeTask(i) {
            this.toDoList.splice(i, 1);
        },

        addTask() {
            if (this.valueInput.trim() !== '') {
                this.toDoList.push({
                    text: this.valueInput,
                    done: false
                })
            }
            this.valueInput = ''
        }
    }
}).mount('#app')
