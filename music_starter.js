
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
	background(240)
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
	 rect(width*.5,400,200,100);
	 fill(0,255,0);
	 	 // display "words"
		  fill(0);
		  rect(width*.5,550,170,50);
		  fill(0,255,0);
		  //scale(20);
		  textFont('Courier');
		  textAlign(CENTER);
		  textSize(vocal*0.3);
		  text(words, width*.5, 560);
		  
		 fill(200);
		 rect(width*.5,470,40,40);//play
		 fill(0);
		 triangle(width*.5+10,470,width*.5-8,470-10,width*.5-8,470+10);
		 noFill();
		 rect(width*.5+40,470,40,40);//skip
		 rect(width*.5-40,470,40,40);//back
		 rect(width*.5+80,470,40,40);//skip
		 rect(width*.5-80,470,40,40);//back
		 
		  //status screen
		  textSize(7);
		  text("Now Playing... SIRENS - Travis Scott", width*.5, 370);
	   


	//little visual labels mimicking masking tape and hand writing to indicate which speakers are for what

	//BASS LABEL
	translate(width*.3,650);
	fill(255, 247, 217);
	rect(0,0,100,30);
	fill(0);
	textSize(20);
	textFont('Brush Script MT');
	text("BASS", 0,5);
	translate(-width*.3,-650);
	//DRUM LABEL
	translate(width*.1,670);
	fill(255, 247, 217);
	rect(0,0,100,30);
	fill(0);
	text("DRUMS",0,5);
	translate(-width*.1,-670);
	//VOCALS LABEL
	translate(width*.5,100);
	fill(255, 247, 217);
	rect(0,0,100,30);
	fill(0);
	text("VOCALS", 0,5);
	translate(-width*.5,-100);
	//OTHER LABEL
	translate(width*.05,120);
	fill(255, 247, 217);
	rect(0,0,100,30);
	fill(0);
	text("OTHER", 0,5);
	translate(-width*.05,-120);

	

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
	//bass map central indicator
	for(let i = 1; i <=bassMap; i++){
		let offsety = i*5;
		rect((width*.5)+30,450-offsety,20,5);
	}

	

	// sub woofers to show different types of sound, they will continually oscilate in scale a little to mimick vibration
//SPEAKER STATIC OUTER FRAME
	fill(40);
	
	//BASS SPEAKERS
	ellipse(width*.3,500,200);
	ellipse(width*.7,500,200);
	ellipse(width*.33,334,120);
	ellipse(width*.66,334,120);

	//DRUM SPEAKERS
	fill(36);
	translate(-50,150);
	ellipse(width*.2,376,90);
	ellipse(width*.13,376,60);
	ellipse(width*.15,257,150);
	translate(100,0);
	ellipse(width*.8,376,90);
	ellipse(width*.87,376,60);
	ellipse(width*.85,257,150);
	translate(-50,-150);


	//VOCAL SPEAKERS
	fill(48);
	rotate(-24);
	translate(-160,220);
	ellipse(width*.45,230,60);
	ellipse(width*.45,160,60);
	ellipse(width*.4,140,45);
	ellipse(width*.45,70,100);
	translate(160,-220);
	rotate(48);
	translate(40,-300);
	ellipse(width*.55,230,60);
	ellipse(width*.55,160,60);
	ellipse(width*.6,140,45);
	ellipse(width*.55,70,100);
	translate(-40,300);
	rotate(-24);

	
	//OTHER SPEAKERS
	fill(56);
	rotate(-40);
	translate(-130,140);
	ellipse(width*.097,190,100);
	ellipse(width*.07,90,70);
	ellipse(width*.21,120,200);
	translate(130,-140);
	rotate(80);
	translate(-190,-670);
	ellipse(width*.903,190,100);
	ellipse(width*.93,90,70);
	ellipse(width*.79,120,200);
	translate(190,670);
	rotate(-40);

//SPEAKER MIDDLE MOVING PIECE
	//BASS SPEAKERS
	fill(22);
	ellipse(width*.3,500,100+bass);
	ellipse(width*.7,500,100+bass);
	ellipse(width*.33,334,40+bass);
	ellipse(width*.66,334,40+bass);
	//DRUM SPEAKERS
	fill(28);
	translate(-50,150);
	ellipse(width*.2,376,30+(drum*0.7));
	ellipse(width*.13,376,20+(drum*0.5));
	ellipse(width*.15,257,50+drum);
	translate(100,0);
	ellipse(width*.8,376,30+(drum*0.7));
	ellipse(width*.87,376,20+(drum*0.5));
	ellipse(width*.85,257,50+drum);
	translate(-50,-150);

	//VOCAL SPEAKERS
	fill(38);
	rotate(-24);
	translate(-160,220);
	ellipse(width*.45,230,10+(vocal*0.6));
	ellipse(width*.45,160,10+(vocal*0.5));
	ellipse(width*.4,140,10+(vocal*0.3));
	ellipse(width*.45,70,10+vocal);
	translate(160,-220);
	rotate(48);
	translate(40,-300);
	ellipse(width*.55,230,10+(vocal*0.6));
	ellipse(width*.55,160,10+(vocal*0.5));
	ellipse(width*.6,140,10+(vocal*0.3));
	ellipse(width*.55,70,10+vocal);
	translate(-40,300);
	rotate(-24);

	//OTHER SPEAKERS
	fill(72);
	rotate(-40);
	translate(-130,140);
	ellipse(width*.097,190,40+(other*0.7));
	ellipse(width*.07,90,10+(other*0.7));
	ellipse(width*.21,120,100+other);
	translate(130,-140);
	rotate(80);
	translate(-190,-670);
	ellipse(width*.903,190,40+(other*0.7));
	ellipse(width*.93,90,10+(other*0.7));
	ellipse(width*.79,120,100+other);
	translate(190,670);
	rotate(-40);

//SPEAKER CENTER MOVING PIECE
	//BASS SPEAKERS
	fill(44);
	ellipse(width*.3,500,10+(bass*0.4));
	ellipse(width*.7,500,10+(bass*0.4));
	ellipse(width*.33,334,10+(bass*0.2));
	ellipse(width*.66,334,10+(bass*0.2));

	//DRUM SPEAKERS
	fill(50);
	translate(-50,150);
	ellipse(width*.2,376,10+(drum*0.25));
	ellipse(width*.13,376,10+(drum*0.04));
	ellipse(width*.15,257,10+(drum*0.2));
	translate(100,0);
	ellipse(width*.8,376,10+(drum*0.25));
	ellipse(width*.87,376,10+(drum*0.04));
	ellipse(width*.85,257,10+(drum*0.2));
	translate(-50,-150);

	//VOCAL SPEAKERS
	rotate(-24);
	translate(-160,220);
	ellipse(width*.45,230,6+(vocal*0.2));
	ellipse(width*.45,160,6+(vocal*0.2));
	ellipse(width*.4,140,2+(vocal*0.2));
	ellipse(width*.45,70,6+(vocal*0.2));
	translate(160,-220);
	rotate(48);
	translate(40,-300);
	ellipse(width*.55,230,6+(vocal*0.2));
	ellipse(width*.55,160,6+(vocal*0.2));
	ellipse(width*.6,140,2+(vocal*0.2));
	ellipse(width*.55,70,6+(vocal*0.2));
	translate(-40,300);
	rotate(-24);

	//OTHER SPEAKERS
	fill(56);
	rotate(-40);
	translate(-130,140);
	ellipse(width*.097,190,10+(other*0.2));
	ellipse(width*.07,90,10+(other*0.2));
	ellipse(width*.21,120,30+(other*0.2));
	translate(130,-140);
	rotate(80);
	translate(-190,-670);
	ellipse(width*.903,190,10+(other*0.2));
	ellipse(width*.93,90,10+(other*0.2));
	ellipse(width*.79,120,30+(other*0.2));
	translate(190,670);
	rotate(-40);
}