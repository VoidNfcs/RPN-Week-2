const dataHandling2 = (input) => {
	const [id, nama, provinsi, ttl, hobi] = input;
	const result1 = [
		id,
		nama + 'Elsharawy',
		'Provinsi' + provinsi,
		ttl,
		'Pria',
		'SMA Internasional Metro',
	];

	// Convert Bulan
	const [tanggal, bulanIndex, tahun] = ttl.split('/');
	const bulan = [
		'Januari',
		'Febuari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember',
	][bulanIndex - 1];

	const reFormatTtl = `${tanggal}-${bulanIndex}-${tahun}`;

	const limitName = nama.slice(0, 14);

	// Result
	console.log(result1);
	console.log(bulan);
	console.log(reFormatTtl);
	console.log(limitName);
};

let input = [
	'0001',
	'Roman Alamsyah ',
	'Bandar Lampung',
	'21/05/1989',
	'Membaca',
];

dataHandling2(input);
