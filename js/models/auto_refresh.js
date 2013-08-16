// Define `checkForNewRecords` in your controller.
Kpcc.AutoRefresh = {
    start: function(controller, seconds) {
        this.controller = controller;
        this.timer = setInterval(this.query.bind(this), seconds*1000);
    },

    stop: function() {
        clearInterval(this.timer);
    },

    query: function() {
        this.controller.checkForNewRecords();
    }
}
