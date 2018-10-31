/*jslint esversion: 6 */
import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';
// This has the system baseURL and other things
//
import "../../config.json";

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
                        return configBaseURL;
                    }
                },
                jwt: String,
                onfidoAPIToken:{
                    type: String,
                    value : function(){
                        return "token=test_cYzbqYVlmYixWQN0V6CYD3AOlIYdeZk9";
                    }
                }
            };
        }
    };
};
export const MyURLSetter = dedupingMixin(myURLSetter);
