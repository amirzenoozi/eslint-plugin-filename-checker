/**
 * @fileoverview Rule to ensure that filenames match a convention (default: camelCase)
 * @author Amirhossein D.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

"use strict";

var path = require("path");
var parseFilename = require('../common/parse-filename');

module.exports = (context) => {
    var defaultRegexp = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/g
    var conventionRegexp = (context.options[0]['regex']) ? new RegExp(context.options[0]['regex']) : defaultRegexp;

    return {
        "Program": (node) => {
            var filename = context.getFilename();
            var absoluteFilename = path.resolve(filename);
            var parsed = parseFilename(absoluteFilename);
            var matchesRegex = conventionRegexp.test(parsed.name);

            if (!matchesRegex) {
                context.report(node, `Filename ${parsed.name} does not match the naming convention.`, {
                    name: parsed.base
                });
            }
        }
    };
};
