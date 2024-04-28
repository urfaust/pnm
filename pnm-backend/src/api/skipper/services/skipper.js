'use strict';

/**
 * skipper service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::skipper.skipper');
