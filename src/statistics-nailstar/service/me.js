var _ = require("underscore");
var async = require("async");
var dbHelper = require(FRAMEWORKPATH + "/utils/dbHelper");

exports.statistics = statistics;

//我的页面数据统计
function statistics(req, res, next) {

    var final_result = {
        infos: []
    };

    async.parallel([
        _queryFollowAndAverage,
        _queryBackgroundChangeRate,
        _queryPhotoChangeRate
    ], function(err){
        if(err){
            return next(err);
        }
        console.log(final_result);
        doResponse(req, res, final_result);
    });

    //总关注数&平均每人关注数
    function _queryFollowAndAverage(nextStep){

        var follow = 0;
        async.series([_queryFollowCount, _queryAverageFollow], function(err){
            if(err){
                return nextStep(err);
            }
            nextStep();
        });

        //总关注数
        function _queryFollowCount(nextOne){

            var sql = "select count(id) 'follow' from account_relations";
            dbHelper.execSql(sql, {}, function (err, result) {
                if (err) {
                    return nextOne(err);
                }
                if(result && result[0]){
                    follow = result[0].follow;
                    final_result.infos.push({
                        title: "总关注数",
                        value: result[0].follow
                    });
                }
                nextOne();
            });
        }

        //平均每人关注数
        function _queryAverageFollow(nextOne){

            var sql = "select count(id) 'count' from accounts";
            dbHelper.execSql(sql, {}, function (err, result) {
                if (err) {
                    return nextOne(err);
                }
                if(result && result[0]){
                    final_result.infos.push({
                        title: "平均每人关注数",
                        value: (follow / result[0].count * 100).toFixed(2) + "%"
                    });
                }
                nextOne();
            });
        }
    }


    //注册用户修改背景图片率
    function _queryBackgroundChangeRate(nextStep){

        var sql = "select count(homepage_background)/count(id) 'background_rate' from accounts";
        dbHelper.execSql(sql, {}, function (err, result) {
            if (err) {
                return nextStep(err);
            }
            if(result && result[0]){
                final_result.infos.push({
                    title: "注册用户修改背景图片率",
                    value: (result[0].background_rate * 100).toFixed(2) + "%"
                });
            }
            nextStep();
        });
    }

    //注册用户修改个人图像率
    function _queryPhotoChangeRate(nextStep){

        var sql = "select count(photo_url)/count(id) 'photo_rate' from accounts";
        dbHelper.execSql(sql, {}, function (err, result) {
            if (err) {
                return nextStep(err);
            }
            if(result && result[0]){
                final_result.infos.push({
                    title: "注册用户修改个人图像率",
                    value: (result[0].photo_rate * 100).toFixed(2) + "%"
                });
            }
            nextStep();
        });
    }


}