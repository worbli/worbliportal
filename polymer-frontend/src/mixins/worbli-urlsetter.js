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
                        return "http://0.0.0.0:5000/";
                    }
                },
				jwt: String,
				onfidoAPIToken:{
					type: String,
					value : function(){
						return "token=test_cYzbqYVlmYixWQN0V6CYD3AOlIYdeZk9"
					}
				}
            };
        }
    };
};
export const MyURLSetter = dedupingMixin(myURLSetter);

