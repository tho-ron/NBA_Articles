// grab title and url
async function setButtons(){
    const res = await fetch("https://api.sportsdata.io/v3/nba/scores/json/News?key=231d07f130b5427582e08586bca5b793");
    const articles = await res.json();
    const title = "Title";
    const linkurl = "Url";
    const siteUrl = articles[0][linkurl];
    document.getElementById("news1").value = articles[0][title];
    const button1 = document.getElementById("news1");
    button1.addEventListener('click', () => {
        window.open(siteUrl, '_blank');
    });
    document.getElementById("news2").value = articles[1][title];
    const siteUrl2 = articles[1][linkurl];
    const button2 = document.getElementById("news2");
    button2.addEventListener('click', () => {
        window.open(siteUrl2, '_blank');
    });
    document.getElementById("news3").value = articles[2][title];
    const siteUrl3 = articles[2][linkurl];
    const button3 = document.getElementById("news3");
    button3.addEventListener('click', () => {
        window.open(siteUrl3, '_blank');
    });
    document.getElementById("news4").value = articles[3][title];
    const siteUrl4 = articles[3][linkurl];
    const button4 = document.getElementById("news4");
    button4.addEventListener('click', () => {
        window.open(siteUrl4, '_blank');
    });
    document.getElementById("news5").value = articles[4][title];
    const siteUrl5 = articles[4][linkurl];
    const button5 = document.getElementById("news5");
    button5.addEventListener('click', () => {
        window.open(siteUrl5, '_blank');
    });
}
setButtons();