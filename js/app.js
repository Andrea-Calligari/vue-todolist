const { createApp } = Vue

createApp({
  data() {
    return {
       toDoList:[
        {
            text: 'Andare dal barbiere',
            done: false
        },
        {
            text: 'Andare a fare la spesa',
            done: true
        },
        {
            text: 'Pulire la casa',
            done: true
        },
        {
            text: 'Spazzare il giardino',
            done: false
        },
        {
            text: 'Portare fuori il cane',
            done: false
        },
        {
            text: 'Andare dalla nonna',
            done: true
        },
    ]
    
}
},
methods:{
    removeTask(i){
       this.toDoList.splice(i, 1);
    }
}
}).mount('#app')
