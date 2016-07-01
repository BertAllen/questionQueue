(function () {
    angular.module("MasterApp")
        .component("viewQueue", {
            templateUrl: "components/viewQueueMod.html",
            controller: ViewQueue, 
            controllerAs: "vq",
            bindings: {
                changeView: "<"
            }
        });
    function ViewQueue() {
        var vq = this;
        vq.closeModal = function () {
                vq.changeView(0);
            }
        }
} ())