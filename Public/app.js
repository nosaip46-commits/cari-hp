async function cari() {
const harga = document.getElementById('harga').value.split('-')
const ram = document.getElementById('ram').value


const res = await fetch(`/api?min=${harga[0]}&max=${harga[1]}&ram=${ram}`)
const data = await res.json()


document.getElementById('hasil').innerHTML = data.map(hp => `
<div>
<h3>${hp.brand} ${hp.model}</h3>
<p>RAM ${hp.ram}GB | Storage ${hp.storage}GB</p>
<p>Kamera ${hp.camera_rear}MP | Baterai ${hp.battery}mAh</p>
<a href="${hp.reseller_link}" target="_blank">Beli Sekarang</a>
</div>
`).join('')
}