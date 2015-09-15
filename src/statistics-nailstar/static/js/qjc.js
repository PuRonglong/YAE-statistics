app.controller('dakaQjcCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {

    (function init(){
        initVote();
        initPic();
    })();

    $scope.pic_result = [];
    $scope.vote_result = [];

    //默认参数
    $scope.vote = {
        recentVote: 10,
        showVoteSpline: true
    };
    $scope.photo = {
        recentPhoto: 10,
        showPicSpline: true
    };

    //获取投票参数
    $scope.qjcVoteCount = function (recentVote){

        $http.get("/svc/dakatongji/qjcVoteCount?num=" + recentVote).success(function(data) {

            var details = data.result.details;

            $scope.vote_result = _.map(details, function(element){
                return [element.no, element.count];
            });
            resetRefresh();
            console.log($scope.vote_result);

        }).error(function(data, status) {

            console.log("qjcVoteCount in error");

        });
    };

    //监听投票参数变化
    $scope.$watch('vote',function(newVal,oldVal){
        if(newVal !== oldVal && newVal.recentVote !== oldVal.recentVote){
            $scope.qjcVoteCount($scope.vote.recentVote);
        }
        if(newVal !== oldVal && newVal.showVoteSpline !== oldVal.showVoteSpline){
            resetRefresh();
        }
    },true);

    //获取上传图片参数
    $scope.qjcPicCount = function (recentPhoto){
        $http.get("/svc/dakatongji/qjcPicCount?num=" + recentPhoto).success(function(data) {

            var details = data.result.details;

            $scope.pic_result = _.map(details, function(element){
              return [element.no, element.count];
            });
            resetRefreshPic();
            console.log($scope.pic_result);

        }).error(function(data, status) {

            console.log("qjcPicCount in error");

        });
    };

    //监听上传图片参数变化
    $scope.$watch('photo',function(newVal,oldVal){
        if(newVal !== oldVal && newVal.recentPhoto !== oldVal.recentPhoto){
            $scope.qjcPicCount($scope.photo.recentPhoto);
        }
        if(newVal !== oldVal && newVal.showPicSpline !== oldVal.showPicSpline){
            resetRefreshPic();
        }
    },true);

    //获取投票最新活动期数
    function initVote(){
        $http.get("/svc/dakatongji/getNewestActivity").success(function(data) {

            $scope.no = data.result.no;
            $http.get("/svc/dakatongji/qjcVoteCount?num=" + $scope.vote.recentVote).success(function(data) {

                var details = data.result.details;
                $scope.vote_result = _formatData(details, $scope.no, $scope.vote.recentVote);
                resetRefresh();
                console.log($scope.vote_result);

            }).error(function(data, status) {

                console.log("qjcVoteCount in error");

            });

        }).error(function(data, status) {

            console.log("qjcVoteCount in error");

        });
    }

    //获取上传图片最新活动期数
    function initPic(){
        $http.get("/svc/dakatongji/getNewestActivity").success(function(data) {
            $scope.no = data.result.no;
            $http.get("/svc/dakatongji/qjcPicCount?num=" + $scope.photo.recentPhoto).success(function(data) {

                var details = data.result.details;
                $scope.pic_result = _formatData(details, $scope.no, $scope.photo.recentPhoto);
                resetRefreshPic();
                console.log($scope.pic_result);

            }).error(function(data, status) {

                console.log("qjcPicCount in error");

            });
        }).error(function(data, status) {

            console.log("qjcPicCount in error");

        });
    }

    //判断所选期数的数据是否为空
    function _formatData(details, no, num){
        var length = details.length;
        if(num == length){
            return _.map(details, function(el){
                return [el.no, el.count];
            });
        }
        for(var i=0; i<num; i++){
            var flag = true;
            for(var j=0; j<details.length; j++){
                var detail = details[j];
                if(detail.no === (no - i)){
                    flag = false;
                    break;
                }
            }
            if(flag){
                details.splice(i, 0, {no: no - i,count: 0});
            }
        }
        return _.map(details, function(el){
            return [el.no, el.count];
        });
    }

    //产生随机数用于监听
    function resetRefresh(){
        $scope.refresh = Math.random();
    }
    function resetRefreshPic(){
        $scope.refreshPic = Math.random();
    }

}]);