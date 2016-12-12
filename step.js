function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    if( document.getElementById("soil").src.endsWith("soil.jpg")){
        document.getElementById("soil").src="img/seed1.jpg";
        document.getElementById("water0").style.display = "inherit";

        document.getElementById("title").innerHTML="Germinating Tea Seeds";
        document.getElementById("p1").innerHTML="Use freshly harvested seeds. Soak them in water for 24 hours. You may want to use a bag made of cheesecloth to help submerge the seeds. After the soaking, empty the bag into the water and use a strainer to separate the “floaters” from the “sinkers.” Use the sinkers as your primary batch for sowing. The floaters," +
                " which may germinate but could become weaker plants, should be labeled as such and separated for follow-up growth observation";
        document.getElementById("p2").innerHTML="Spread the seeds on a tarp or a plastic nursery flat in full sun and keep them moist with frequent sprays of water. Plant seeds that after a day or two have developed a crack in the seed coat. Sow the seed with its 'eye' (the hilum) in a horizontal position (parallel to the surface of the medium). Bury it under 1 inch of medium. Use a medium that has good drainage. Coarse vermiculite has both excellent moisture-holding capacity and good drainage. Keep newly planted seeds under shade (shadecloth rated 80%), and keep the medium moist. Seeds will germinate in about 1–2 months.";
        document.getElementById("remind").innerHTML="Your seed has getminated, give it some water!";
        return;
    }
    if( document.getElementById("soil").src.endsWith("seed1.jpg")){
        document.getElementById("soil").src="img/seed.gif";
        document.getElementById("water1").style.display = "inherit";

        document.getElementById("title").innerHTML="Growing Up of Tea Tree";
        document.getElementById("p1").innerHTML="After three to four leaves have developed, the roots should be fairly well established." +
                " Move plants to 30–40% shade. You may apply a few granules of slow-release fertilizer " +
                " and a light dose (half the strength recommended on the label)of a foliar fertilizer formulated for “acid-loving plants." +
                " Soluble formulations for azalea, camellia, gardenia, and rhododendron are suitable and usually have NPK in the ratio 3:1:1" +
                " , plus micronutrients. As the seedling develops, gradually move it to full sun in preparation for" +
                " transplanting when it is about 1 foot tall.";
        document.getElementById("p2").innerHTML="Like fine wine, the quality, flavor, and aroma of tea is influenced by its growing conditions." +
                " Some of the finest tea in the world is usually grown at high elevations with ample rainfall year round. (at least 40 inches)." +
                " You'll often find that some of the best teas to drink are grown in areas of high elevation on the side of hills where they will get" +
                " the moisture they need, but where any excess water will drain off. Many teas are often grown in areas where the humidity is relatively" +
                " high and the air is constantly moist.";
        document.getElementById("remind").innerHTML="More water, it will grow faster!";
        return;
    }
    if( document.getElementById("soil").src.endsWith("seed.gif")){
        document.getElementById("soil").src="img/stem1.gif";
        document.getElementById("soil").style.cursor='url(img/cut.png) 4 6, auto';
        document.getElementById("cut").style.display = "inherit";

        document.getElementById("title").innerHTML="Harvesting of Tea";
        document.getElementById("p1").innerHTML="When plucking the leaves, pick young shoots with 2-3 leaves (bud and the second and third leaves)." +
                " This is called fine plucking. If more leaves are taken with the bud it is called coarse plucking and produces a lower quality tea. " +
                "Tea is harvested by hand, not all leaves are picked during harvesting but only a few top young and juicy leaves with a portion of the stem" +
                "on which they have grown and the so-called bud (or tip) – an unexpanded leaf at the end of the shoot.A few leaves, part of the stem and a tip are called 'flush'." +
                " Flush is the basis of tea production. Flush with two or three leaves is called 'golden flush'. Flushes are collected with three, four and even five leaves.";
        document.getElementById("p2").innerHTML="Tea is cultivated solely for the purpose of leaves. They are collected as many times per year as tea plant " +
                "vegetates, i.e. produces new shoots with leaves. In Indonesia, Sri Lanka, Kenya, the south of India and China summer is all year round." +
                " The further north the plantations are located the shorter is tea harvesting season: in North-Eastern India it lasts eight months," +
                " in the North of China tea leaves are harvested up to four times a year from April till September.";
        document.getElementById("remind").innerHTML="It's the time to harvest!";
        return;
    }

}

function cutdown(){

    if( document.getElementById("soil").src.endsWith("stem1.gif")||document.getElementById("soil").src.endsWith("dropdown1.gif")) {
        document.getElementById("soil").style.cursor="url('img/cut0.png') 4 6, auto";
        document.getElementById("soil").src = "img/dropdown1.gif";
    }

}
function mouseup(){
     if( document.getElementById("soil").src.endsWith("stem1.gif")||document.getElementById("soil").src.endsWith("dropdown1.gif")){
         document.getElementById("soil").style.cursor='url(img/cut.png) 4 6, auto';
        }

}

function turnGreen(){
    document.getElementById("greenblock").className="item textslide active";
    document.getElementById("blackblock").className="item textslide";
    document.getElementById("oolongblock").className="item textslide";
}
function turnBlack(){
    document.getElementById("greenblock").className="item textslide";
    document.getElementById("blackblock").className="item textslide  active";
    document.getElementById("oolongblock").className="item textslide";
}
function turnOolong(){
    document.getElementById("greenblock").className="item textslide";
    document.getElementById("blackblock").className="item textslide";
    document.getElementById("oolongblock").className="item textslide  active";
}