

var app = new Vue({
     el: 'header',
     data:{
         newRight:"-400px",
     },
     methods:{
         showSide: function (event){
             if(this.newRight==="0px"){
                 this.newRight = "-400px"
             }
             else{
                 this.newRight = "0px"
             }
            console.log(this.newRight);
         }
     }
 });
var calendar = new Vue({
    el: '#calendar',
    data:{
        curEvent: 0,
        items:
            [
                { event: 'Конкурс Лучшей Группы' },
                { event: 'Какое-то Сероприятие' },
                { event: 'Какой-то Другой Конкурс' },
            ]
        ,
    },

    methods:{
        next: function () {
            if(this.curEvent<this.items.length-1){
                this.curEvent ++;
            }
            console.log(this.curEvent);
        },
        prev: function () {
            if(this.curEvent>0){
                this.curEvent --;
            }
            console.log(this.curEvent);
        }
    }
});
// calendar.use(MotionPlugin);