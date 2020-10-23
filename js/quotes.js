function carouselDisplay(caro, norm){
	var caroLife = document.getElementById(caro);
	caroLife.style.display = "block";
	caroLife.style.width = "100%";
	var norLife = document.getElementById(norm);
	norLife.style.display = "none";
	
}

function addQuotes(parentId, num){
	$(parentId).append('<textarea name="text" value="" placeholder="Quote" id="text" style="width:100%; height:20%;"></textarea>');
	$(parentId).append('<input type="text" name="text" placeholder="Who qouted?" id="textName">');
	var poreAdd = document.getElementsByClassName('poreAdd');
	poreAdd = poreAdd[num];
	poreAdd.style.display = "block";
}

function addTo(caroId, norId, num){
	var text = document.getElementById('text');
	var textName = document.getElementById('textName');
	var parentNormal = document.getElementById(norId);
	var parentCaro = document.getElementById(caroId);

	//for carousel
	var mainDiv = document.createElement('div');
	mainDiv.className = 'carousel-item';
	var caroBlock = document.createElement('blockquote');
	caroBlock.className = "blockquote border-bottom border-left border-right";
	var fpara = document.createElement('p');
	var spara = document.createElement('p');
	spara.className = "blockquote-footer text-right";
	var cite = document.createElement('cite');
	fpara.textContent = text.value;
	cite.textContent = textName.value;
	spara.appendChild(cite);
	caroBlock.appendChild(fpara);
	caroBlock.appendChild(spara);
	mainDiv.appendChild(caroBlock);
	parentCaro.appendChild(mainDiv);

	//for normal
	var norBlock = document.createElement('blockquote');
	norBlock.className = "blockquote border-bottom border-left border-right";
	var fnp = document.createElement('p');
	var snp = document.createElement('p');
	snp.className = "blockquote-footer text-right";
	var ncite = document.createElement('cite');
	ncite.textContent = textName.value;
	fnp.textContent = text.value;
	snp.appendChild(ncite);
	norBlock.appendChild(fnp);
	norBlock.appendChild(snp);
	parentNormal.appendChild(norBlock);

	//vanishes all data
	text.parentNode.removeChild(text);
	textName.parentNode.removeChild(textName);

	document.getElementsByClassName('poreAdd')[num].style.display = 'none';
}

/*

				*/