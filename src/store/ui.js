/*
 *
 * Copyright (c) 2019-present for NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License ");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import router from '../router';
import { Address, AccountHttp } from 'symbol-sdk';
import { i18n, keyRedirects } from '../config';
import { NamespaceService, MosaicService, AccountService } from '../infrastructure';
import Vue from 'vue';
import helper from '../helper';

export default {
	namespaced: true,
	state: {
		languages: i18n.languages,
		currentLanguage: localStorage.getItem('userLanguage'),
		keyPages: keyRedirects,
		theme: localStorage.getItem('theme')
	},

	getters: {
		getNameByKey: state => key => i18n.getName(key),
		languages: state => state.languages,
		currentLanguage: state => state.currentLanguage,
		theme: state => state.theme,

		getPageHref: state => payload => {
			if (payload.pageName);
			{
				let key = payload.pageName;

				let pageName = state.keyPages[key] || key;

				let value = payload.param;

				if (value != null)
					return `/${pageName}/${value}`;
				else
					return `/${pageName}`;
			}
		},

		isMobile() {
			const agent = navigator.userAgent || navigator.vendor || window.opera;

			let check = false;

			if (
				/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
					.test(agent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
        	.test(agent.substr(0, 4))
			)
				check = true;
			else if (Vue.config.devtools && window.innerWidth <= 800 && window.innerHeight <= 600)
				check = true;

			return check;
		}
	},

	mutations: {
		setTheme: (state, theme) => {
			state.theme = theme;
			localStorage.setItem('theme', theme);
		}
	},
	actions: {
		openPage: ({ state }, payload) => {
			if (payload.pageName);
			{
				let key = payload.pageName;

				let pageName = state.keyPages[key] || key;

				let value = payload.param;

				if (value != null)
					router.push({ path: `/${pageName}/${value}` });
				else
					router.push({ path: `/${pageName}` });
			}
		},

		search: ({ dispatch, rootGetters }, searchString) => {
			return new Promise(async (resolve, reject) => {
				if (searchString !== null && searchString !== '') {
					searchString = searchString.replace(/\s|-/g, '');
					if (helper.isBlockHeight(searchString)) {
						dispatch('openPage', {
							pageName: 'block',
							param: searchString
						});
						resolve();
					}
					else
					if (helper.isAccountPublicKey(searchString)) {
						// check the string is a public key of an account

						const api = rootGetters['api/currentNode'];

						let accountHttp = new AccountHttp(api);

						let accountAddress;

						let accountInfo;

						try {
							accountInfo = await accountHttp
								.getAccountInfo(new Address(searchString))
								.toPromise();
							accountAddress = accountInfo.address.address;
						}
						catch (e) { }
						if (accountAddress) {
							dispatch('openPage', {
								pageName: 'account',
								param: accountAddress
							});
							resolve();
						}
						else {
							// transaction hash
							dispatch('openPage', {
								pageName: 'transaction',
								param: searchString
							});
							resolve();
						}
					}
					else
					if (helper.isAccountAddress(searchString)) {
						dispatch('openPage', {
							pageName: 'account',
							param: searchString
						});
						resolve();
					}
					else
					if (helper.isMosaicOrNamespaceId(searchString)) {
						let result = void 0;

						try {
							result = await MosaicService.getMosaicInfo(searchString);
							if (result) {
								dispatch('openPage', {
									pageName: 'mosaic',
									param: searchString
								});
								resolve();
							}
						}
						catch (e) {}
					}
					else {
						try {
							let result = await NamespaceService.getNamespaceInfo(searchString);

							if (result) {
								dispatch('openPage', {
									pageName: 'namespace',
									param: searchString
								});
								resolve();
							}
						}
						catch (e) {
							const isNisAddress = await AccountService.checkNis1Account(searchString);

							if (isNisAddress)
								reject(new Error('errorNisAddressNotAllowed'));

							reject(new Error('errorNothingFound'));
						}
					}
				}
				else
					reject(new Error('errorNothingFound'));
			});
		},

		changeLanguage: ({ state }, language) => {
			if (language !== null &&
        language !== void 0)
				i18n.setCurrentLanguage(language);
			else throw Error('Cannot change language. language is not supported: ' + language);
		},

		changeTheme: ({ commit, rootGetters }, theme) => {
			commit('setTheme', theme);
			document.documentElement.setAttribute('data-theme', theme);
		}
	}
};
