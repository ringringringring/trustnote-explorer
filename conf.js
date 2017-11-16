/*jslint node: true */
"use strict";

exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.webPort = 6000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
	'34RULWDZ6IKSAOTXTPO6DBVM36P4K2ZG',
	'A36V5DWD7TX4VVVAMU2BGJ3GFQHE5AES',
	'DSG3LOT7ZWVJRSZQ6ZFFPSXMKRZ6NLYV',
	'FC6ZZPKCWJXTGHRQ3UBFL3OX7KGQWGZB',
	'JNIE6LFM4OEHZSS52QRSLEKO4IVYJKJY',
	'L2JJJLE6YXMWMMLJTIBR6BFTBEBWX3KV',
	'LVEHHTT5B5UOAO74Q6BIQ4HQ3GOOEW7C',
	'QTUR5V7Z7QZDSE4TDZ5UUOI45UU7CJRQ',
	'R6IQDPX6KBXAKEUUZZKVQU2HCTMKYTYD',
	'WJMVP3K7R2DB6EQ5BOVL5LR5I2TC26AW',
	'Y3PAMLR6VLMQGKWGVDXRACDQTJHV6IDF',
	'ZP27CT6WMUBJ3HRGUB4OBLKYBMTBGY7R'
];

/* new testnet
exports.initial_witnesses = [
	'2FF7PSL7FYXVU5UIQHCVDTTPUOOG75GX',
	'2GPBEZTAXKWEXMWCTGZALIZDNWS5B3V7',
	'4H2AMKF6YO2IWJ5MYWJS3N7Y2YU2T4Z5',
	'DFVODTYGTS3ILVOQ5MFKJIERH6LGKELP',
	'ERMF7V2RLCPABMX5AMNGUQBAH4CD5TK4',
	'F4KHJUCLJKY4JV7M5F754LAJX4EB7M4N',
	'IOF6PTBDTLSTBS5NWHUSD7I2NHK3BQ2T',
	'O4K4QILG6VPGTYLRAI2RGYRFJZ7N2Q2O',
	'OPNUXBRSSQQGHKQNEPD2GLWQYEUY5XLD',
	'PA4QK46276MJJD5DBOLIBMYKNNXMUVDP',
	'RJDYXC4YQ4AZKFYTJVCR5GQJF5J6KPRI',
	'WELOXP3EOA75JWNO6S5ZJHOO3EYFKPIR'
];
*/

/* old testnet
exports.initial_witnesses = [
	'5K7CSLTRPC5LFLOS3D34GBHG7RFD4TPO',
	'BTCI3SJOBSRA6TFF6GHI3SO4WDC3G2LY',
	'CCNMWLURGSS5NS4YFLOPGAVXKMQXTXZR',
	'EQYZCJQAJ4KHFTJ4BKUJFBWATCU5UO5A',
	'FZ2S2HU42RECG46BEJYV44DIQYGFFNI2',
	'IXFO5VS57ZMTBUTBZVG66ZF3K4WFLPJJ',
	'NZOBDXWJIL2JVXZGY3OBP5MMMZMR2YUD',
	'VEZA54TWIXIHZLHFHCEEBU3XFC7NKVKX',
	'WJWKAJ2H5REGDSCCQMFGCENCODK6MN3X',
	'ZAMTST6CVMQERNXQY3ZWIC5L2OMWWWTP',
	'ZUWW66QUJR57BZSVA3NLM5FRHAFSX6B7',
	'ZVT76QDYAXIIVYMWJWFMJPGYBZRY7JW7'
];
*/

/*'wss://trustgraph.org/tg' */
exports.initial_peers = [
	'ws://211.159.160.220/tn'
];

console.log('finished explorer conf');
