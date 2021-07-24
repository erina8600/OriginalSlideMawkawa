let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://1.bp.blogspot.com/-g3FNYi15ims/X9lJsx5GxZI/AAAAAAABc8U/WjQVc2iG-WorNAc4fUrL5WTxn0fg5fivgCNcBGAsYHQ/s350/yukata_kids_girl.png",
"https://1.bp.blogspot.com/-8k05qnP1EYw/X9lJsuPOVXI/AAAAAAABc8Q/oqz1SLysT6QkpE-9hSzrA-6R12pMqDE8ACNcBGAsYHQ/s350/yukata_kids_boy_uchiwa.png",
"https://1.bp.blogspot.com/-ql3uPQh1z3E/X9lJtUtvlAI/AAAAAAABc8Y/J-7CE6305lgLFySfH9szVuChIAZSWY5sACNcBGAsYHQ/s600/yukata_kids_group.png",
"https://1.bp.blogspot.com/-XcLeZbXHBSo/XwkxmLnTPsI/AAAAAAABaDI/3ATSbjbUueAhsqeN0vuq1jNfesnqJYp1ACNcBGAsYHQ/s400/tozan_trekking_woman.png",
"https://1.bp.blogspot.com/-YYCj951wrs0/XwkxmC4CgfI/AAAAAAABaDE/daNnLxwyUuEUMU-PeL6Z8ZJcu93vqRlAQCNcBGAsYHQ/s400/tozan_trekking_man.png",
"https://1.bp.blogspot.com/-CR4-CxIOGJ4/Xy98QQ4rqhI/AAAAAAABah4/LX1qs8531JcwMl_jPbqeVZOe9wBOgG5wQCNcBGAsYHQ/s400/online_ohakamairi_daikou.png",
"https://1.bp.blogspot.com/-ZITDvKBMd24/Xy99KtxGSUI/AAAAAAABaiE/CmSczxVRe1wBF3rwmRQ1sZlTJRm8oIa9QCNcBGAsYHQ/s450/online_ohakamairi.png",
"https://1.bp.blogspot.com/-FCyV1or_Ylw/Xlyfr0Le8wI/AAAAAAABXoA/12RlrHH1NJ094g9EwaA3gpCCX4K4ULnPACNcBGAsYHQ/s400/drink_beer_yukata_woman.png",
"https://1.bp.blogspot.com/-3XfMA0UhT70/XlyfrsiokjI/AAAAAAABXn8/j_CLCc73TTEi-PCK19hnUwY3D-pJgmjvQCNcBGAsYHQ/s400/drink_beer_yukata_man.png",
"https://1.bp.blogspot.com/-5TCuewwI7-s/XkZdSnUgSTI/AAAAAAABXWA/pw7777sR6o0Y5zmFx5KUTFAlQiJO2lnQgCNcBGAsYHQ/s400/tsukamidori_unagi.png",
"https://1.bp.blogspot.com/-wnGllQqb_EQ/XVKf-cHag3I/AAAAAAABUGE/2B34CZYgiCEL2vHtCDxASAoqy1k9_2VXwCLcBGAs/s400/hirune_soto_schoolgirl.png",
"https://1.bp.blogspot.com/-Kd4HayajZ80/XVKf9I_7t1I/AAAAAAABUGA/0yM91YPpb0UUtag_WjinWubIUSw9MpDsACLcBGAs/s400/hirune_soto_schoolboy.png",
"https://1.bp.blogspot.com/-H1l839Z4Fdc/XVjgIsL-cTI/AAAAAAABUMg/_A6HhRIJvjgofihufBjbo53_DxKUgo8IgCLcBGAs/s400/fish_tsukamidori.png",
"https://1.bp.blogspot.com/-_-sAp3NPRTc/XQyWRfK0IHI/AAAAAAABTWE/noNC3IRKG6U_RupZvworNvv_g_E-WrFXwCLcBGAs/s400/party_beer_garden_casual_night.png",
"https://1.bp.blogspot.com/-DmedggzXB3E/XQNuo499HZI/AAAAAAABTJs/tQ7gjwGbz44FRbqrQXsfiVi5O5Icn6UugCLcBGAs/s400/school_syuugyoushiki_nimotsu_girl.png",
"https://1.bp.blogspot.com/-Da_lnBnUSxY/XQNuoZZSLPI/AAAAAAABTJo/zSZP_TDmKVA7upSEtStRW-k41jNmY0unACLcBGAs/s400/school_syuugyoushiki_nimotsu_boy.png",
"https://1.bp.blogspot.com/-sUw0VH26Lro/XNE-tlzdkgI/AAAAAAABSr4/b5Ynb5oZUxsYs_9b1DoTA2BsI9c6sHM3QCLcBGAs/s400/camp_takibi_man_summer.png",
"https://1.bp.blogspot.com/-IBEo3d-WLTw/XMZ-AlmUbjI/AAAAAAABSnM/y3F2RNhfgYAAPuL2Aii-wQK2jQswt8itwCLcBGAs/s400/seisyun_hamabe_oikakekko_couple.png",
"https://4.bp.blogspot.com/-SRv2P8X5HRE/XLuxumMjbxI/AAAAAAABSfU/ITDiiVo99zIcZRRJgv1Bf1IaoKXE9KCTQCLcBGAs/s450/camp_bush_craft.png",
"https://1.bp.blogspot.com/-lI1_vP0DFW0/X7zMkHoDHZI/AAAAAAABcdY/oGFg81eBmmE4-v9Ugfh-Gm_EG_dR2d_-gCNcBGAsYHQ/s400/sports_volleyball_woman_recieve.png",
"https://1.bp.blogspot.com/-zqnT6rZaC2Q/X7zMj7V4haI/AAAAAAABcdU/K1kCirVJ610kbsIwsap0hFGLDNj_zgQ4wCNcBGAsYHQ/s400/sports_volleyball_man_recieve.png",
"https://1.bp.blogspot.com/-9pd9fr1Zbs8/X68aagNQYWI/AAAAAAABcPw/hbi5fY106Jg7gqUecTWSN6eEDnLGt3oVwCNcBGAsYHQ/s400/yoga_chouza_tsue_woman.png",
"https://1.bp.blogspot.com/-_-iDscv2noo/X68aaidOBHI/AAAAAAABcPs/usUVzM1AxKcDmlqVnbKko4kUHgSQfarwACNcBGAsYHQ/s400/yoga_chouza_tsue_man.png"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
