// fullscreen mode
window.onload = () => {
  setTimeout(()=>{
    if(document.documentElement.requestFullscreen){
      document.documentElement.requestFullscreen().catch(()=>{});
    }
  },500);
};

// refresh tiap 1 jam
setInterval(()=>{
  location.reload();
},3600000);

const pengumuman = [
"📢 Mohon merapatkan shaf ketika sholat",
"📢 Mohon menonaktifkan HP saat sholat",
"📢 Infak masjid dapat dimasukkan ke kotak amal"
];

document.getElementById("runningPengumuman").innerText =
pengumuman.join("   |   ");