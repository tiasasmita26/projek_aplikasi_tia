document.querySelectorAll('.btnDetail').forEach(item=>{
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').scr;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;


        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        // let image = document.createElement('img');
        // image.src = gambar;
        // document.querySelector('.modalImage').innerHTML = '';
        // document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalHarga').innerHTML = harga;
        
        const nohp ='6281299277437';
        let pesan = 'https://api.whatsapp.com/send?phone=$(nohp)&text=Halo kak, saya mau pesan produk ini';

        document.querySelector('.btnBeli').href = pesan;
    });
});