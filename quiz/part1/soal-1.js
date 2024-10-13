const dataHandling = (arr) => {
	arr.map((e) => {
		const id = e[0];
		const nama = e[1];
		const ttl = `${e[2]} ${e[3]}`;
		const hobi = e[4];
		console.log(`
            Nomor ID : ${id}
            Nama Lengkap : ${nama}
            TTL : ${ttl}
            Hobi : ${hobi}
            `);
	});
};

let input = [
	['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
	['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
	['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
	['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun'],
];

dataHandling(input);
