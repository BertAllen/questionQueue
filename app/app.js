(function () {
    angular.module("MasterApp", [])
        .controller("QueueController", function () {
            var qc = this;
            qc.activeView = 0;
            // qc.openModel = function (mod) {
            //     qc.activeView = mod;
            // }

            qc.changeView = function (view) { 
                qc.activeView = view;
            }

        })

} ())