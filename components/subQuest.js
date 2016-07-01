(function () {
    angular.module("MasterApp")
        .component("submitQuestion", {
            templateUrl: "components/subQuestMod.html",
            controller: SubQuestion,
            controllerAs: 'sq',
            bindings: {
                changeView: "<"
            }
        });
    function SubQuestion() {
        var sq = this;
        sq.closeModal = function () { 
            sq.changeView(0);
        }
    }
} ())