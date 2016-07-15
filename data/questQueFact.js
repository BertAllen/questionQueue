(function () {
    angular.module("MasterApp")
        .factory("QuestionQueueFactory", function () {
            let qqf = this;

            return {
                //list of functions goes here .....
                x: "this is from the factory"
            }
        })
}())