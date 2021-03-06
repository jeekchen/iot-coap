var resultReturn = require('../server/retunResultAndCode.js');

describe('query data status code test', function() {

    var res = function(){};
    res.end = function(){};

    it('should return 4.04 when result empty', function(done) {
        var request = "[]";
        resultReturn.jsonAndCode(request, res);
        var result = res.code;
        expect(result).to.eql("4.04");
        done();
    });

    it('should return 2.05 when result empty', function(done) {
        var request = "[{hello:'world'}]";
        resultReturn.jsonAndCode(request, res);
        var result = res.code;
        expect(result).to.eql("2.05");
        done();
    });

});