/*jslint esversion: 6 */
import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';
let myURLSetter;
myURLSetter = function(superClass) {
    return class extends superClass {
        constructor() {
            super();
        }
        static get properties() {
            return {
                baseAPIurl: {
                    type: String,
                    value: function() {
                        return "http://backend.worbliportal:9000";
                    }
                },
                jwt: String
            };
        }
    };
};
export const MyURLSetter = dedupingMixin(myURLSetter);

