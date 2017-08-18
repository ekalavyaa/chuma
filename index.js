'use strict';
const check = require('./src/zeus');

exports.validation = (validationRules, req) => {
    // return function(req, res, next) {
        console.log(validationRules);
        Object.keys(validationRules).forEach(function(rule) {
            var fieldsApplicableToRule = validationRules[rule];
			fieldsApplicableToRule.forEach((field) => {
                var ruleName = rule.split(':');
                switch(ruleName[0]) {
                    case 'q':
                        return check(req, field, req.query, ruleName[1]);
                    break;    
                    case 'p':
                        return check(req, field).ruleName[1]();
                    break;
                    case 'b':
                        return check(req, field).ruleName[1]();
                    break;
                    default:
                        throw Error('Unknown validation type : ' + ruleNamePrefix);
                    break;
                }
			});
		});
		returnResponse (req.validationErrors, res, next);	
    // };
};


var returnResponse = (err, res, next ) => {
	if(err) {
		res.json(jsonUtil.buildValidationError(err));
	} else {
		next();
	}
}