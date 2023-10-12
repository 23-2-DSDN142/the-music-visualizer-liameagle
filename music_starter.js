
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
	background(180)
	fontRegular = loadFont()
	textFont('Helvetica'); // please use CSS safe fonts
	rectMode(CENTER)
	textSize(8);
  
	 let bar_spacing = height / 10;
	 let bar_height = width / 12;
	 let bar_pos_x = width / 2;

	 let vocalMap = map(vocal, 40,90,1,5);
	 let bassMap = map(bass,40,100,1,5);
	 let drumMap = map(drum,50,100,1,5);
	 let otherMap = map(other,55,80,1,5);

	 fill(0);
	 rect(width*.5,400,170,100);
	 fill(0,255,0);



	 fill(255, 247, 217);
	 rect(width*.3,650,100,30);
	 fill(0);
	 textSize(20);
	 textFont('Brush Script MT');
	 text("Bass", width*.3,655);

	

	 fill(0, 255, 0);
	 //vocal map central indicator
	 for(let i = 1; i <=vocalMap; i++){
		 let offsety = i*5;
		 rect((width*.5)-30,450-offsety,20,5);
	 }
	//other central indicator bar
	for(let i = 1; i <=otherMap; i++){
		let offsety = i*5;
		rect((width*.5)-10,450-offsety,20,5);
	}
	 //drum central indicator
	 for(let i = 1; i <=drumMap; i++){
		let offsety = i*5;
		rect((width*.5)+10,450-offsety,20,5);
	}

	//=======BASS VISUALS
	//bass map central indicator
	for(let i = 1; i <=bassMap; i++){
		let offsety = i*5;
		rect((width*.5)+30,450-offsety,20,5);
	}
	// sub woofers to show bass, they will continually oscilate in scale a little to mimick vibration and then i will also multiply the scale to the bass bar 
	fill(50);
	//sub woofer static outside frame
	ellipse(width*.3,500,200);
	ellipse(width*.7,500,200);
	//sub woofer middle moving piece
	ellipse(width*.3,500,100+bass);
	ellipse(width*.7,500,100+bass);
	fill(60);
	//subwoofer centre thing
	ellipse(width*.3,500,10+(bass*0.4));
	ellipse(width*.7,500,10+(bass*0.4));
	fill(0);

	 // display "words"
	 fill(0);
	 rect(width*.5,550,170,50);
	 fill(0,255,0);
	 //scale(20);
	 textFont('Courier');
	 textAlign(CENTER);
	 textSize(vocal*0.3);
	 text(words, width*.5, 560);
  }