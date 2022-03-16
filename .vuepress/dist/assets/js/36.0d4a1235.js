(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{479:function(t,s,e){"use strict";e.r(s);var a=e(8),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mint"}},[t._v("#")]),t._v(" Mint")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("mint")]),t._v(" module is responsible for creating tokens in a flexible way to reward\nvalidators, incentivize providing pool liquidity, provide funds for Osmosis governance, and pay developers to maintain and improve Osmosis.")]),t._v(" "),e("p",[t._v("The module is also responsible for reducing the token creation and distribution by a set amount and a set period of time until it reaches its maximum supply (see "),e("code",[t._v("reduction_factor")]),t._v(" and "),e("code",[t._v("reduction_period_in_epochs")]),t._v(")")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("h3",{attrs:{id:"network-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network-parameters"}},[t._v("#")]),t._v(" Network Parameters")]),t._v(" "),e("p",[t._v("Below are all the network parameters for the "),e("code",[t._v("mint")]),t._v(" module:")]),t._v(" "),e("ul",[e("li",[e("strong",[e("code",[t._v("mint_denom")])]),t._v(" - Token type being minted")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("genesis_epoch_provisions")])]),t._v(" - Amount of tokens generated at epoch to the distribution categories (see distribution_proportions)")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("epoch_identifier")])]),t._v(" - Type of epoch that triggers token issuance (day, week, etc.)")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("reduction_period_in_epochs")])]),t._v(" - How many epochs must occur before implementing the reduction factor")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("reduction_factor")])]),t._v(" - What the total token issuance factor will reduce by after reduction period passes (if set to 66.66%, token issuance will reduce by 1/3)")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("distribution_proportions")])]),t._v(" - Categories in which the specified proportion of newly released tokens are distributed to\n"),e("ul",[e("li",[e("strong",[e("code",[t._v("staking")])]),t._v(" - Proportion of minted funds to incentivize staking OSMO")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("pool_incentives")])]),t._v(" - Proportion of minted funds to incentivize pools on Osmosis")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("developer_rewards")])]),t._v(" - Proportion of minted funds to pay developers for their past and future work")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("community_pool")])]),t._v(" - Proportion of minted funds to be set aside for the community pool")])])]),t._v(" "),e("li",[e("strong",[e("code",[t._v("weighted_developer_rewards_receivers")])]),t._v(" - Addresses that developer rewards will go to. The weight attached to an address is the percent of the developer rewards that the specific address will receive")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("minting_rewards_distribution_start_epoch")])]),t._v(" - What epoch will start the rewards distribution to the aforementioned distribution categories")])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"queries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[t._v("#")]),t._v(" Queries")]),t._v(" "),e("h3",{attrs:{id:"params"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" params")]),t._v(" "),e("p",[t._v("Query all the current mint parameter values")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("query mint params\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example")]),t._v(" "),e("p",[t._v("List all current min parameters in json format by:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("osmosisd query mint params -o json "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("An example of the output:")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mint_denom"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uosmo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"genesis_epoch_provisions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"821917808219.178082191780821917"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"epoch_identifier"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"day"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reduction_period_in_epochs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"365"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reduction_factor"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.666666666666666666"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"distribution_proportions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"staking"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.250000000000000000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pool_incentives"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.450000000000000000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"developer_rewards"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.250000000000000000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"community_pool"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.050000000000000000"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weighted_developer_rewards_receivers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo14kjcwdwcqsujkdt8n5qwpd8x8ty2rys5rjrdjj"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.288700000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo1gw445ta0aqn26suz2rg3tkqfpxnq2hs224d7gq"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.229000000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo13lt0hzc6u3htsk7z5rs6vuurmgg4hh2ecgxqkf"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.162500000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo1kvc3he93ygc0us3ycslwlv2gdqry4ta73vk9hu"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.109000000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo19qgldlsk7hdv3ddtwwpvzff30pxqe9phq9evxf"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.099500000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo19fs55cx4594een7qr8tglrjtt5h9jrxg458htd"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.060000000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo1ssp6px3fs3kwreles3ft6c07mfvj89a544yj9k"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.015000000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo1c5yu8498yzqte9cmfv5zcgtl07lhpjrj0skqdx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.010000000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo1yhj3r9t9vw7qgeg22cehfzj7enwgklw5k5v7lj"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.007500000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo18nzmtyn5vy5y45dmcdnta8askldyvehx66lqgm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.007000000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo1z2x9z58cg96ujvhvu6ga07yv9edq2mvkxpgwmc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.005000000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo1tvf3373skua8e6480eyy38avv8mw3hnt8jcxg9"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.002500000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo1zs0txy03pv5crj2rvty8wemd3zhrka2ne8u05n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.002500000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo1djgf9p53n7m5a55hcn6gg0cm5mue4r5g3fadee"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.001000000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"osmo1488zldkrn8xcjh3z40v2mexq7d088qkna8ceze"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.000800000000000000"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minting_rewards_distribution_start_epoch"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br"),e("span",{staticClass:"line-number"},[t._v("46")]),e("br"),e("span",{staticClass:"line-number"},[t._v("47")]),e("br"),e("span",{staticClass:"line-number"},[t._v("48")]),e("br"),e("span",{staticClass:"line-number"},[t._v("49")]),e("br"),e("span",{staticClass:"line-number"},[t._v("50")]),e("br"),e("span",{staticClass:"line-number"},[t._v("51")]),e("br"),e("span",{staticClass:"line-number"},[t._v("52")]),e("br"),e("span",{staticClass:"line-number"},[t._v("53")]),e("br"),e("span",{staticClass:"line-number"},[t._v("54")]),e("br"),e("span",{staticClass:"line-number"},[t._v("55")]),e("br"),e("span",{staticClass:"line-number"},[t._v("56")]),e("br"),e("span",{staticClass:"line-number"},[t._v("57")]),e("br"),e("span",{staticClass:"line-number"},[t._v("58")]),e("br"),e("span",{staticClass:"line-number"},[t._v("59")]),e("br"),e("span",{staticClass:"line-number"},[t._v("60")]),e("br"),e("span",{staticClass:"line-number"},[t._v("61")]),e("br"),e("span",{staticClass:"line-number"},[t._v("62")]),e("br"),e("span",{staticClass:"line-number"},[t._v("63")]),e("br"),e("span",{staticClass:"line-number"},[t._v("64")]),e("br"),e("span",{staticClass:"line-number"},[t._v("65")]),e("br"),e("span",{staticClass:"line-number"},[t._v("66")]),e("br"),e("span",{staticClass:"line-number"},[t._v("67")]),e("br"),e("span",{staticClass:"line-number"},[t._v("68")]),e("br"),e("span",{staticClass:"line-number"},[t._v("69")]),e("br"),e("span",{staticClass:"line-number"},[t._v("70")]),e("br"),e("span",{staticClass:"line-number"},[t._v("71")]),e("br"),e("span",{staticClass:"line-number"},[t._v("72")]),e("br"),e("span",{staticClass:"line-number"},[t._v("73")]),e("br"),e("span",{staticClass:"line-number"},[t._v("74")]),e("br"),e("span",{staticClass:"line-number"},[t._v("75")]),e("br"),e("span",{staticClass:"line-number"},[t._v("76")]),e("br")])])]),t._v(" "),e("h3",{attrs:{id:"epoch-provisions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#epoch-provisions"}},[t._v("#")]),t._v(" epoch-provisions")]),t._v(" "),e("p",[t._v("Query the current epoch provisions")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("query mint epoch-provisions\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example")]),t._v(" "),e("p",[t._v("List the current epoch provisions:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("osmosisd query mint epoch-provisions\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("As of this writing, this number will be equal to the "),e("code",[t._v("genesis-epoch-provisions")]),t._v(". Once the "),e("code",[t._v("reduction_period_in_epochs")]),t._v(" is reached, the "),e("code",[t._v("reduction_factor")]),t._v(" will be initiated and reduce the amount of OSMO minted per epoch.")])]),t._v(" "),e("h2",{attrs:{id:"appendix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appendix"}},[t._v("#")]),t._v(" Appendix")]),t._v(" "),e("h3",{attrs:{id:"current-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#current-configuration"}},[t._v("#")]),t._v(" Current Configuration")]),t._v(" "),e("p",[e("code",[t._v("mint")]),t._v(" "),e("strong",[t._v("module: Network Parameter effects and current configuration")])]),t._v(" "),e("p",[t._v("The following tables show overall effects on different configurations of the "),e("code",[t._v("mint")]),t._v(" related network parameters:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[e("code",[t._v("mint_denom")])]),t._v(" "),e("th",[e("code",[t._v("epoch_provisions")])]),t._v(" "),e("th",[e("code",[t._v("epoch_identifier")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("string (dec)")]),t._v(" "),e("td",[t._v("string")])]),t._v(" "),e("tr",[e("td",[t._v("Higher")]),t._v(" "),e("td",[t._v("N/A")]),t._v(" "),e("td",[t._v("Higher inflation rate")]),t._v(" "),e("td",[t._v("Increases time to "),e("code",[t._v("reduction_period")])])]),t._v(" "),e("tr",[e("td",[t._v("Lower")]),t._v(" "),e("td",[t._v("N/A")]),t._v(" "),e("td",[t._v("Lower inflation rate")]),t._v(" "),e("td",[t._v("Decreases time to "),e("code",[t._v("reduction_period")])])]),t._v(" "),e("tr",[e("td",[t._v("Constraints")]),t._v(" "),e("td",[t._v("N/A")]),t._v(" "),e("td",[t._v("Value has to be a positive integer")]),t._v(" "),e("td",[t._v("String must be "),e("code",[t._v("day")]),t._v(", "),e("code",[t._v("week")]),t._v(", "),e("code",[t._v("month")]),t._v(", or "),e("code",[t._v("year")])])]),t._v(" "),e("tr",[e("td",[t._v("Current configuration")]),t._v(" "),e("td",[e("code",[t._v("uosmo")])]),t._v(" "),e("td",[e("code",[t._v("821917808219.178")]),t._v(" (821,9178 OSMO)")]),t._v(" "),e("td",[e("code",[t._v("day")])])])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[e("code",[t._v("reduction_period_in_epochs")])]),t._v(" "),e("th",[e("code",[t._v("reduction_factor")])]),t._v(" "),e("th",[e("code",[t._v("staking")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("string (dec)")]),t._v(" "),e("td",[t._v("string (dec)")])]),t._v(" "),e("tr",[e("td",[t._v("Higher")]),t._v(" "),e("td",[t._v("Longer period of time until "),e("code",[t._v("reduction_factor")]),t._v(" implemented")]),t._v(" "),e("td",[t._v("Reduces time until maximum supply is reached")]),t._v(" "),e("td",[t._v("More epoch provisions go to staking rewards than other categories")])]),t._v(" "),e("tr",[e("td",[t._v("Lower")]),t._v(" "),e("td",[t._v("Shorter period of time until "),e("code",[t._v("reduction_factor")]),t._v(" implemented")]),t._v(" "),e("td",[t._v("Increases time until maximum supply is reached")]),t._v(" "),e("td",[t._v("Less epoch provisions go to staking rewards than other categories")])]),t._v(" "),e("tr",[e("td",[t._v("Constraints")]),t._v(" "),e("td",[t._v("Value has to be a whole number greater than or equal to "),e("code",[t._v("1")])]),t._v(" "),e("td",[t._v("Value has to be less or equal to "),e("code",[t._v("1")])]),t._v(" "),e("td",[t._v("Value has to be less or equal to "),e("code",[t._v("1")]),t._v(" and all distribution categories combined must equal "),e("code",[t._v("1")])])]),t._v(" "),e("tr",[e("td",[t._v("Current configuration")]),t._v(" "),e("td",[e("code",[t._v("365")]),t._v(" (epochs)")]),t._v(" "),e("td",[e("code",[t._v("0.666666666666666666")]),t._v(" (66.66%)")]),t._v(" "),e("td",[e("code",[t._v("0.250000000000000000")]),t._v(" (25%)")])])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[e("code",[t._v("pool_incentives")])]),t._v(" "),e("th",[e("code",[t._v("developer_rewards")])]),t._v(" "),e("th",[e("code",[t._v("community_pool")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("string (dec)")]),t._v(" "),e("td",[t._v("string (dec)")]),t._v(" "),e("td",[t._v("string (dec)")])]),t._v(" "),e("tr",[e("td",[t._v("Higher")]),t._v(" "),e("td",[t._v("More epoch provisions go to pool incentives than other categories")]),t._v(" "),e("td",[t._v("More epoch provisions go to developer rewards than other categories")]),t._v(" "),e("td",[t._v("More epoch provisions go to community pool than other categories")])]),t._v(" "),e("tr",[e("td",[t._v("Lower")]),t._v(" "),e("td",[t._v("Less epoch provisions go to pool incentives than other categories")]),t._v(" "),e("td",[t._v("Less epoch provisions go to developer rewards than other categories")]),t._v(" "),e("td",[t._v("Less epoch provisions go to community pool than other categories")])]),t._v(" "),e("tr",[e("td",[t._v("Constraints")]),t._v(" "),e("td",[t._v("Value has to be less or equal to "),e("code",[t._v("1")]),t._v(" and all distribution categories combined must equal "),e("code",[t._v("1")])]),t._v(" "),e("td",[t._v("Value has to be less or equal to "),e("code",[t._v("1")]),t._v(" and all distribution categories combined must equal "),e("code",[t._v("1")])]),t._v(" "),e("td",[t._v("Value has to be less or equal to "),e("code",[t._v("1")]),t._v(" and all distribution categories combined must equal "),e("code",[t._v("1")])])]),t._v(" "),e("tr",[e("td",[t._v("Current configuration")]),t._v(" "),e("td",[e("code",[t._v("0.450000000000000000")]),t._v(" (45%)")]),t._v(" "),e("td",[e("code",[t._v("0.250000000000000000")]),t._v(" (25%)")]),t._v(" "),e("td",[e("code",[t._v("0.050000000000000000")]),t._v(" (5%)")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);