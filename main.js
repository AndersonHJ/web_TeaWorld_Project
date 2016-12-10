var recommand = [1,1,1,1,1];
var questions = [];
var nextques = [];
var answers = [];
var record = [];
var anImg;

nextQ = function(cur, next, answer){

	/* calculate recommand argument*/
	switch (cur){
		case 'age':
			questions.push('age');
			nextques.push('gender');
			switch(answer){
				case '1':
					answers.push(4);
					record.push(2);
					anImg = 1;
					break;
				case '20':
					answers.push(0);
					record.push(2);
					anImg = 2;
					break;
				case '40':
					answers.push(3);
					record.push(2);
					anImg = 3;
					break;
				case '60':
					answers.push(2);
					record.push(3);
					anImg = 4;
					break;
				case '80':
					answers.push(4);
					record.push(3);
					anImg = 5;
					break;
			}
			break;
		case 'gender':
			questions.push('gender');
			nextques.push('weight');
			switch(answer){
				case 'Male':
					answers.push(4);
					record.push(1);
					anImg = 1;
					break;
				case 'Female':
					answers.push(0);
					record.push(2);
					anImg = 2;
					break;
				case 'Other':
					answers.push(2);
					record.push(1);
					anImg = 3;
					break;
			}
			break;
		case 'weight':
			questions.push('weight');
			nextques.push('period');
			switch(answer){
				case '50':
					answers.push(3);
					record.push(1);
					anImg = 1;
					break;
				case '120':
					answers.push(0);
					record.push(1);
					anImg = 2;
					break;
				case '160':
					answers.push(4);
					record.push(1);
					anImg = 3;
					break;
				case '200':
					answers.push(2);
					record.push(1);
					anImg = 4;
					break;
				case '240':
					answers.push(1);
					record.push(1);
					anImg = 3;
					break;
				case '300':
					answers.push(4);
					record.push(1);
					anImg = 4;
					break;
			}
			break;
		case 'period':
			questions.push('period');
			nextques.push('result');
			switch(answer){
				case 'Daytime':
					answers.push(0);
					record.push(1);
					anImg = 1;
					break;
				case 'Evening':
					answers.push(4);
					record.push(1);
					anImg = 2;
					break;
				case 'Midnight':
					answers.push(3);
					record.push(1);
					anImg = 3;
					break;
			}
			break;
	}



	/* move UI */
	var pre = document.getElementById(cur);
	pre.style.display = 'none';
	
	var ele = document.getElementById(next);
	ele.style.display = 'block';
	var elems = document.querySelectorAll("#"+next+" .item");
	
	var ans = document.getElementById(cur+"3");
	ans.style.top = '60vw';
	ans.style.display = 'block';
	ans.innerHTML = '<img align="right" src="/TeaWorld/img/chat/a_'+cur+'_'+anImg+'.png">';
	$("#"+cur+"3").animate({
		top: '-=60vw'
	});

	for(var i = 0; i<elems.length; i++){
		elems[i].style.display = 'block';
		elems[i].style.left = ((i*20)+50)+'vw';
	}
	
	for(var j = 0;j<elems.length; j++){
		$("#"+next+" .item:eq("+j+")").animate({
        	left: '-='+(50+(j*20))+'vw'
    	});
	}

	if(next!='result'){
		var ques = document.getElementById(next+"2");
		ques.style.display = 'block';
		ques.style.top = '360vw';
		$("#"+next+"2").animate({
	       	top: '-=360vw'
	    });
	}
	else{
		for(var i = 0; i<record.length; i++){
			recommand[answers[i]]+=record[i];
		}
		var max = 0;
		var index = 0;
		for(var i = 0; i<recommand.length; i++){
			if(recommand[i]>max) {
				max = recommand[i];
				index = i;
			}
		}
		var res = document.getElementById("resimage");
		var res2 = document.getElementById("context");
		//console.log(res.innerHTML);
		
		if(index == 0){
			res.innerHTML = '<img src="/TeaWorld/img/blacktea.jpg">';
			res2.innerHTML = '<h2>Black Tea</h2><p>Black tea is allowed to wither, which precedes a process called oxidation \
			during which water evaporates out of the leaf and the leaf absorbs more oxygen from the air. \
			Black teas usually undergo full oxidation, and the results are the characteristic dark brown and black leaf.</p>';
		}
		else if(index == 1){
			res.innerHTML = '<img src="/TeaWorld/img/oolongtea.jpg">';
			res2.innerHTML = '<h2>Oolong Tea</h2><p>Oolong tea (also known as wulong tea) is allowed to undergo partial oxidation.\
			 These teas have a caffeine content between that of green teas and black teas.  \
			 Oolongs (wulongs) are often compared to the taste and aroma of fresh flowers or fresh fruit.</p>';
		}
		else if(index == 2){
			res.innerHTML = '<img src="/TeaWorld/img/tea/tea7-2.jpg">';
			res2.innerHTML = '<h2>Pu er</h2><p>Puer is an aged black tea from China prized for its medicinal properties and earthy\
			 flavor. It is perhaps the most mysterious of all tea. It is very strong with an incredibly \
			 deep and rich flavor, and no bitterness, and an element that could best be described as almost peaty in flavor.</p>';
		}
		else if(index == 3){
			res.innerHTML = '<img src="/TeaWorld/img/general/9.jpg">';
			res2.innerHTML = '<h2>White Tea</h2><p>White teas are the most delicate of all teas. They are hand-processed using the youngest shoots of the tea plant, with no oxidation. \
			When brewed correctly, with a very low temperature and a short steeping time, white teas can produce low amounts of caffeine.</p>';
		}
		else{
			res.innerHTML = '<img src="/TeaWorld/img/general/4.jpg">';
			res2.innerHTML = '<h2>Green Tea</h2><p>Green Tea is allowed to wither only slightly after being picked. \
			Then the oxidation process is stopped very quickly by firing (rapidly heating) the leaves. Therefore, \
			when brewed at lower temperatures and for less time, green teas tend to have less caffeine.</p>';
		}

		ele.style.left = '60vw';
		$("#"+next).animate({
        	left: '-=60vw'
    	});
	}


    
}

backQ = function(){
	/* return recommandation*/
	var ques = questions.pop();
	var nextq = nextques.pop();
	answers.pop();
	record.pop();

	/* back to question*/
	var elems = document.querySelectorAll("#"+nextq+" .item");
	
	for(var j = 0;j<elems.length; j++){
		$("#"+nextq+" .item:eq("+j+")").animate({
        	left: '+=50vw'
    	});
	}

	$("#"+ques+"3").animate({
		top: '+=60vw'
	});
	$("#"+nextq+"2").animate({
	    top: '+=30vw'
	 });

	for(var i = 0; i<elems.length; i++){
		elems[i].style.display = 'none';
	}

   	var pre = document.getElementById(ques);
	pre.style.display = 'block';

	var ele = document.getElementById(nextq);
	ele.style.display = 'none';
	ele.style.left = '0vw';
	
	
	
}


nextQ2 = function(cur, next, answer){

	/* calculate recommand argument*/
	switch (cur){
		case 'agem':
			questions.push('agem');
			nextques.push('genderm');
			switch(answer){
				case '1':
					answers.push(4);
					record.push(2);
					anImg = 1;
					break;
				case '20':
					answers.push(0);
					record.push(2);
					anImg = 2;
					break;
				case '40':
					answers.push(3);
					record.push(2);
					anImg = 3;
					break;
				case '60':
					answers.push(2);
					record.push(3);
					anImg = 4;
					break;
				case '80':
					answers.push(4);
					record.push(3);
					anImg = 5;
					break;
			}
			break;
		case 'genderm':
			questions.push('genderm');
			nextques.push('weightm');
			switch(answer){
				case 'Male':
					answers.push(4);
					record.push(1);
					anImg = 1;
					break;
				case 'Female':
					answers.push(0);
					record.push(2);
					anImg = 2;
					break;
				case 'Other':
					answers.push(2);
					record.push(1);
					anImg = 3;
					break;
			}
			break;
		case 'weightm':
			questions.push('weightm');
			nextques.push('periodm');
			switch(answer){
				case '50':
					answers.push(3);
					record.push(1);
					anImg = 1;
					break;
				case '120':
					answers.push(0);
					record.push(1);
					anImg = 2;
					break;
				case '160':
					answers.push(4);
					record.push(1);
					anImg = 3;
					break;
				case '200':
					answers.push(2);
					record.push(1);
					anImg = 4;
					break;
				case '240':
					answers.push(1);
					record.push(1);
					anImg = 3;
					break;
				case '300':
					answers.push(4);
					record.push(1);
					anImg = 4;
					break;
			}
			break;
		case 'periodm':
			questions.push('periodm');
			nextques.push('resultm');
			switch(answer){
				case 'Daytime':
					answers.push(0);
					record.push(1);
					anImg = 1;
					break;
				case 'Evening':
					answers.push(4);
					record.push(1);
					anImg = 2;
					break;
				case 'Midnight':
					answers.push(3);
					record.push(1);
					anImg = 3;
					break;
			}
			break;
	}


	
	/* move UI */
	var pre = document.getElementById(cur);
	console.log(pre.style.display);
	pre.style.display = 'none';
	
	var ele = document.getElementById(next);
	ele.style.display = 'block';

	
	if(next!='resultm'){
		var preq = document.getElementById(cur.slice(0,-1)+"2m");
		preq.style.display = 'none';
		var ques = document.getElementById(next.slice(0,-1)+"2m");
		ques.style.display = 'block';
	}
	else{
		for(var i = 0; i<record.length; i++){
			recommand[answers[i]]+=record[i];
		}
		var max = 0;
		var index = 0;
		for(var i = 0; i<recommand.length; i++){
			if(recommand[i]>max) {
				max = recommand[i];
				index = i;
			}
		}
		var res = document.getElementById("resimagem");
		var res2 = document.getElementById("contextm");
		//console.log(res.innerHTML);
		
		if(index == 0){
			res.innerHTML = '<img src="/TeaWorld/img/general/4.jpg">';
			res2.innerHTML = '<h2>Green Tea</h2><p>Green Tea is allowed to wither only slightly after being picked. \
			Then the oxidation process is stopped very quickly by firing (rapidly heating) the leaves. Therefore, \
			when brewed at lower temperatures and for less time, green teas tend to have less caffeine.</p>';
		}
		else if(index == 1){
			res.innerHTML = '<img src="/TeaWorld/img/oolongtea.jpg">';
			res2.innerHTML = '<h2>Oolong Tea</h2><p>Oolong tea (also known as wulong tea) is allowed to undergo partial oxidation.\
			 These teas have a caffeine content between that of green teas and black teas.  \
			 Oolongs (wulongs) are often compared to the taste and aroma of fresh flowers or fresh fruit.</p>';
		}
		else if(index == 2){
			res.innerHTML = '<img src="/TeaWorld/img/tea/tea7-2.jpg">';
			res2.innerHTML = '<h2>Pu er</h2><p>Puer is an aged black tea from China prized for its medicinal properties and earthy\
			 flavor. It is perhaps the most mysterious of all tea. It is very strong with an incredibly \
			 deep and rich flavor, and no bitterness, and an element that could best be described as almost peaty in flavor.</p>';
		}
		else if(index == 3){
			res.innerHTML = '<img src="/TeaWorld/img/general/9.jpg">';
			res2.innerHTML = '<h2>White Tea</h2><p>White teas are the most delicate of all teas. They are hand-processed using the youngest shoots of the tea plant, with no oxidation. \
			When brewed correctly, with a very low temperature and a short steeping time, white teas can produce low amounts of caffeine.</p>';
		}
		else{
			res.innerHTML = '<img src="/TeaWorld/img/blacktea.jpg">';
			res2.innerHTML = '<h2>Black Tea</h2><p>Black tea is allowed to wither, which precedes a process called oxidation \
			during which water evaporates out of the leaf and the leaf absorbs more oxygen from the air. \
			Black teas usually undergo full oxidation, and the results are the characteristic dark brown and black leaf.</p>';
		}
	}


    
}

backQ2 = function(){
	/* return recommandation*/
	var ques = questions.pop();
	var nextq = nextques.pop();
	answers.pop();
	record.pop();

	/* back to question*/
	

   	var pre = document.getElementById(ques);
	pre.style.display = 'block';

	var ele = document.getElementById(nextq);
	ele.style.display = 'none';
	
	var preq = document.getElementById(ques.slice(0,-1)+"2m");
	preq.style.display = 'block';
	var ques = document.getElementById(nextq.slice(0,-1)+"2m");
	ques.style.display = 'none';
	
}



$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});