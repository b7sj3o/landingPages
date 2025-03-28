last_window_size_x = window.innerWidth;
last_window_size_y = window.innerHeight;

function window_resize(){
	
	if (last_window_size_x !== window.innerWidth || last_window_size_y !== window.innerHeight){
		
		gallery_element_pos_start_func();
		menu_resize();
		
		last_window_size_x = window.innerWidth;
		last_window_size_y = window.innerHeight;
		
	}
	
	setTimeout(window_resize,3000);
	
}
window_resize();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.trunc(Math.floor(Math.random() * (max - min) + min));
}

//як тільки запускається сайт, то через 1 секунду створюється 20 елементів.

function line_start_func(){
	
	for (i = 0; i < 20; i++){
	
		setTimeout(() => {
			line_create_func(getRandomInt(0, 100),getRandomInt(0, 100));
		},1000)
	
	}
	
	setTimeout(() => {
		
		line_create_trigger_func();
		
	},1500);
	
}
line_start_func();

line_el_id = 0;

class line{
	
	constructor(e, time){
		this.e = e;
		this.time = time * 1000;
	}
	
	destroy_el(){
		
		setTimeout(() => {
			
			this.e.remove();
			
		}, this.time);
		
	}
	
}

function line_create_func(pos_x, pos_y){
	
	element_html = `<div id="line_` + line_el_id + `" class="position-absolute line2"></div>`;
	
	line_container.insertAdjacentHTML('afterBegin',element_html);
	
	line_el = document.getElementById('line_' + line_el_id);
	
	line_el.style.left = 'calc(' + pos_x + '% - 400px)';
	line_el.style.top = pos_y + '%';
	line_el.style.width = getRandomInt(5, 20) + 'rem';
	
	getComputedStyle(line_el).left;
	getComputedStyle(line_el).top;
	getComputedStyle(line_el).width;
	
	time = getRandomInt(10, 30);
	
	line_el.style.transition = 'all ' + time + 's linear';
	
	line_el.style.left = '100%';
	
	line_obj = new line(line_el, time);
	
	line_obj.destroy_el();
	
	line_el_id ++;
	
}

function line_create_trigger_func(){
	
	//за раз створюємо 4 лінії
	for (i = 0; i < 4; i++){
	
		setTimeout(() => {
			
			line_create_func(0,getRandomInt(0, 100));
			
		},100)
	
	}
	
	//чим більший час, тим менше ліній
	setTimeout(() => {
		
		line_create_trigger_func();
		
	},getRandomInt(3000, 14000));
	
}

function onEntry1(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			if (change.target.classList.contains('element-animation')){
				change.target.classList.remove('element-animation');
			}
		}
	});
}
let options1 = { threshold: [0.6] };
let observer1 = new IntersectionObserver(onEntry1, options1);
let elements1 = document.querySelectorAll('.element-animation');
for (let elm1 of elements1) {
	observer1.observe(elm1);
}



//POPAP FUNCTION

function popap_func(){
	
	if (getComputedStyle(popap).opacity == 0){
		
		//значить попап треба відкрити
		
		popap.style.transition = 'all 0s';
		popap.style.left = '50%';
		
		getComputedStyle(popap).transition;
		getComputedStyle(popap).opacity;
		
		popap.style.transition = 'all 0.3s';
		getComputedStyle(popap).transition;
		
		popap.style.opacity = 1;
		
		popap_dark_wall.style.transition = 'all 0s';
		popap_dark_wall.style.left = '50%';
		
		getComputedStyle(popap_dark_wall).transition;
		getComputedStyle(popap_dark_wall).opacity;
		
		popap_dark_wall.style.transition = 'all 0.3s';
		getComputedStyle(popap_dark_wall).transition;
		
		popap_dark_wall.style.opacity = 1;
		
		return;
		
	}
	
	if (getComputedStyle(popap).opacity == 1){
		
		//значить попап треба закрити
		
		popap.style.opacity = 0;
		
		setTimeout(() => {
			
			popap.style.transition = 'all 0s';
			getComputedStyle(popap).transition;
			popap.style.left = '10000px';
			
		},300);
		
		popap_dark_wall.style.opacity = 1;
		
		setTimeout(() => {
			
			popap_dark_wall.style.transition = 'all 0s';
			getComputedStyle(popap_dark_wall).transition;
			popap_dark_wall.style.left = '10000px';
			
		},300);
		
		return;
		
	}
	
}


//GALLERY ELEMENT FUNCTION

g_el = document.querySelectorAll('.gallery_element');
g2_el = document.querySelectorAll('.gallery2_element');

function gallery_element_pos_start_func(){
	
	all_gallery_width = 0;
	all_gallery2_width = 0;
	
	//скільки елементів влізає
	gallery_count = gallery.clientWidth / g_el[0].clientWidth;
	gallery2_count = gallery.clientWidth / g2_el[0].clientWidth;
	
	//Знаходимо дистанцію, яка має бути між послугами, щоб вони вписувалися у блок рівно
	// "/ ((Math.trunc(gallery2_count) - 1) / 2)" чому треба добавляти це не знаю, чисто експерементально вивів цей додаток до формули. Якщо тобі треба розібратися в цьому, то F
	distance = (gallery.clientWidth - g_el[0].clientWidth * Math.trunc(gallery_count)) / 2 / ((Math.trunc(gallery2_count) - 1) / 2);
	distance2 = (gallery2.clientWidth - g2_el[0].clientWidth * Math.trunc(gallery2_count)) / 2 / ((Math.trunc(gallery2_count) - 1) / 2);
	
	for (h = 0; h < g_el.length; h++){
		
		g_el[h].dataset.number = h;
		
		g_el[h].style.left = h * (g_el[0].clientWidth + distance) + 'px';
		
		all_gallery_width = all_gallery_width + h * (g_el[0].clientWidth + distance);
		
	}
	
	for (h = 0; h < g2_el.length; h++){
		
		g2_el[h].dataset.number = h;
		
		g2_el[h].style.left = h * (g2_el[0].clientWidth + distance2) + 'px';
		
		all_gallery2_width = all_gallery2_width + h * (g2_el[0].clientWidth + distance2);
		
	}
	
}
gallery_element_pos_start_func();

cooldown1 = 0;
let current_element_gallery = 1;

function previous_gallery_func(){
	
	if (cooldown1 !== 0 || current_element_gallery == 1){
		return;
	}
	
	if (parseInt(getComputedStyle(g_el[0]).left.slice(0,-2)) < 0){
		
		for (b = 0; b < g_el.length; b++){
			
			g_el[b].style.left = parseInt(getComputedStyle(g_el[b]).left.slice(0,-2)) + g_el[0].clientWidth + distance + 'px';
			
		}
		
	}
	
	if (parseInt(getComputedStyle(g2_el[0]).left.slice(0,-2)) < 0){
		
		for (b = 0; b < g2_el.length; b++){
			
			g2_el[b].style.left = parseInt(getComputedStyle(g2_el[b]).left.slice(0,-2)) + g2_el[0].clientWidth + distance2 + 'px';
			
		}
		
	}

	current_element_gallery--;
	
	cooldown1 = 1;
	setTimeout(() => {
		cooldown1 = 0;
	},600);
	
}

function next_gallery_func(){
	
	if (cooldown1 !== 0 || current_element_gallery == g2_el.length){
		return;
	}
	
		
	for (b = 0; b < g_el.length; b++){
		
		g_el[b].style.left = parseInt(getComputedStyle(g_el[b]).left.slice(0,-2)) - g_el[0].clientWidth - distance + 'px';
		
	}
	
	
	for (b = 0; b < g2_el.length; b++){
		
		g2_el[b].style.left = parseInt(getComputedStyle(g2_el[b]).left.slice(0,-2)) - g2_el[0].clientWidth - distance2 + 'px';
		
	}
	
	current_element_gallery++;

	
	cooldown1 = 1;
	setTimeout(() => {
		cooldown1 = 0;
	},600);
	
}




//MENU FUNCTION

function menu_1_func(){
	document.getElementById("first_block").scrollIntoView({behavior: "smooth"});
	menu_func();
}
function menu_2_func(){
	document.getElementById("about_us_block").scrollIntoView({behavior: "smooth"});
	menu_func();
}
// function menu_3_func(){
// 	document.getElementById("why_us_block").scrollIntoView({behavior: "smooth"});
// 	menu_func();
// }
function menu_4_func(){
	document.getElementById("job_placement_block").scrollIntoView({behavior: "smooth"});
	menu_func();
}
function menu_5_func(){
	document.getElementById("city_block").scrollIntoView({behavior: "smooth"});
	menu_func();
}
function menu_6_func(){
	document.getElementById("partner_block").scrollIntoView({behavior: "smooth"});
	menu_func();
}



//LANGUAGE FUNCTION

lang1_e = document.querySelectorAll('.language1_button');
lang2_e = document.querySelectorAll('.language2_button');

lang_c = [];
lang_c[0] = page_language;

//запишем усі мови, які доступні, у массив.

for (s = 0; s < lang1_e.length; s++){
	
	lang_c[s + 1] = lang1_e[s].innerHTML.toLowerCase();
	
}

//робимо, щоб коли нажимаєм на кнопку, то переходило на іншу мову.

// for (s = 0; s < lang1_e.length; s++){
	
// 	lang1_e[s].addEventListener('click', function(event){
		
// 		//перевіримо, якщо не вибрана жодна мова, то треба додати до лінку слеш і мову.
		
// 		test = 1;
		
// 		//якшо є слеш в кінці, то добавляємо без слешу.
// 		if (location.href[location.href.length - 1] == '/'){
			
// 			test = 2;
			
// 		}
		
// 		if (test == 2){
			
// 			location = location.href + event.target.innerHTML.toLowerCase();
			
// 			return;
			
// 		}
		
// 		for (f = 0; f < lang_c.length; f++){
			
// 			if (location.href.indexOf('/' + lang_c[f]) !== -1){
				
// 				test = 0;
				
// 			}
			
// 		}
		
// 		if (test == 1){
			
// 			location = location.href + '/' + event.target.innerHTML.toLowerCase();
			
// 			return;
			
// 		}
		
// 		//якщо ні, то стираємо перші два символи і вписуємо мову.
		
// 		location = location.href.slice(0,-2) + event.target.innerHTML.toLowerCase();
		
// 	});
	
// 	//це теж те саме, просто ці елементи на мобільній версії.
	
// 	lang2_e[s].addEventListener('click', function(event){
		
// 		//перевіримо, якщо не вибрана жодна мова, то треба додати до лінку слеш і мову.
		
// 		test = 1;
		
// 		//якшо є слеш в кінці, то добавляємо без слешу.
// 		if (location.href[location.href.length - 1] == '/'){
			
// 			test = 2;
			
// 		}
		
// 		if (test == 2){
			
// 			location = location.href + event.target.innerHTML.toLowerCase();
			
// 			return;
			
// 		}
		
// 		for (f = 0; f < lang_c.length; f++){
			
// 			if (location.href.indexOf('/' + lang_c[f]) !== -1){
				
// 				test = 0;
				
// 			}
			
// 		}
		
// 		if (test == 1){
			
// 			location = location.href + '/' + event.target.innerHTML.toLowerCase();
			
// 			return;
			
// 		}
		
// 		//якщо ні, то стираємо перші два символи і вписуємо мову.
		
// 		location = location.href.slice(0,-2) + event.target.innerHTML.toLowerCase();
		
// 	});
	
// }

//задамо позицію для мовних кнопок

for (s = 0; s < lang1_e.length; s++){
	
	lang1_e[s].style.transition = 'all 0s';
	lang1_e[s].style.left = '-10000px';
	lang1_e[s].style.opacity = 0;
	lang1_e[s].style.bottom = 0;
	lang2_e[s].style.transition = 'all 0s';
	lang2_e[s].style.left = '-10000px';
	lang2_e[s].style.opacity = 0;
	lang2_e[s].style.bottom = 0;
	
}

function language1_func(){
	
	if (getComputedStyle(lang1_e[0]).opacity == 0){
		
		//значить закрите. Відкриваємо його
		
		for (l = 0; l < lang1_e.length; l++){
			
			lang1_e[l].style.transition = 'all 0s';
			lang1_e[l].style.opacity = 0;
			lang1_e[l].style.left = 0;
			getComputedStyle(lang1_e[l]).transition;
			getComputedStyle(lang1_e[l]).opacity;
			getComputedStyle(lang1_e[l]).left;
			
			lang1_e[l].style.transition = 'all 0.3s';
			lang1_e[l].style.opacity = 1;
			
			//робимо відступи, мінімум 2rem
			lang1_e[l].style.bottom = (-2) * (l + 1) + 'rem';
			
		}
		
		lang1_button.classList.remove('effect2_r');
		
	}
	
	if (getComputedStyle(lang1_e[0]).opacity == 1){
		
		//значить відкрите. Закриваємо його
		
		for (l = 0; l < lang1_e.length; l++){
			
			lang1_e[l].style.transition = 'all 0.3s';
			getComputedStyle(lang1_e[l]).transition;
			
			lang1_e[l].style.bottom = 0;
			lang1_e[l].style.opacity = 0;
			
		}
		
		setTimeout(() => {
			
			for (l = 0; l < lang1_e.length; l++){
				
				lang1_e[l].style.transition = 'all 0s';
				lang1_e[l].style.left = '-10000px';
				
			}
			
		},300);
		
		lang1_button.classList.add('effect2_r');
		
	}
	
}

function language2_func(){
	
	if (getComputedStyle(lang2_e[0]).opacity == 0){
		
		//значить закрите. Відкриваємо його
		
		for (l = 0; l < lang2_e.length; l++){
			
			lang2_e[l].style.transition = 'all 0s';
			lang2_e[l].style.opacity = 0;
			lang2_e[l].style.left = 0;
			getComputedStyle(lang2_e[l]).transition;
			getComputedStyle(lang2_e[l]).opacity;
			getComputedStyle(lang2_e[l]).left;
			
			lang2_e[l].style.transition = 'all 0.3s';
			lang2_e[l].style.opacity = 1;
			
			//робимо відступи, мінімум 2rem
			lang2_e[l].style.bottom = (-2) * (l + 1) + 'rem';
			
		}
		
		lang2_button.classList.remove('effect2_r');
		
	}
	
	if (getComputedStyle(lang2_e[0]).opacity == 1){
		
		//значить відкрите. Закриваємо його
		
		for (l = 0; l < lang2_e.length; l++){
			
			lang2_e[l].style.transition = 'all 0.3s';
			getComputedStyle(lang2_e[l]).transition;
			
			lang2_e[l].style.bottom = 0;
			lang2_e[l].style.opacity = 0;
			
		}
		
		setTimeout(() => {
			
			for (l = 0; l < lang2_e.length; l++){
				
				lang2_e[l].style.transition = 'all 0s';
				lang2_e[l].style.left = '-10000px';
				
			}
			
		},300);
		
		lang2_button.classList.add('effect2_r');
		
	}
	
}



doc_min_width = getComputedStyle(menu_block).minWidth.slice(0, -2);

function menu_resize(){
	if (window.screen.width < doc_min_width){
		menu_block.style.height = 100 * (doc_min_width / window.screen.width) + 'vh';
		graph_container.style.height = 100 * (doc_min_width / window.screen.width) + 'vh';
	}
}

function menu_func(){
	
	if (getComputedStyle(menu_block).right == '-10000px'){
		
		//значить меню закрите. Відкриваємо його
		
		menu_block.style.right = 0;
		
		menu_dark_wall.style.transition = 'all 0s';
		menu_dark_wall.style.left = '50%';
		
		getComputedStyle(menu_dark_wall).transition;
		getComputedStyle(menu_dark_wall).left;
		
		menu_dark_wall.style.transition = 'all 0.3s';
		getComputedStyle(menu_dark_wall).transition;
		
		menu_dark_wall.style.opacity = 1;
		
	}
	
	if (getComputedStyle(menu_block).right == 0 || getComputedStyle(menu_block).right == '0px'){
		
		//значить меню закрите. Закриваємо його
		
		menu_block.style.right = '-10000px';
		
		menu_dark_wall.style.transition = 'all 0.3s';
		menu_dark_wall.style.opacity = 0;
		
		setTimeout(() => {
			
			menu_dark_wall.style.transition = 'all 0s';
			menu_dark_wall.style.left = '10000px';
			
		},300);
		
		
	}
	
}

//OPTIMIZATION

//будемо добавляти деякі класси по ходу прокрутки, тому що на даному етапі сайт грузить на 22мб, треба хочаб у два рази зменшити.

setTimeout(() => {
	popap.classList.add('bg14');
},2000);

// function about_us_block_bg_func(){
// 	if (window.scrollY > 200){
// 		//about_us_1_img.src = 'styles/images/other/56.png';
// 		about_us_2_img.src = 'styles/images/other/56.png';
// 		about_us_3_img.src = 'styles/images/other/98.png';
// 		about_us_4_img.src = 'styles/images/other/98.png';
// 		return;
// 	}
// 	setTimeout(about_us_block_bg_func,300);
// }
// about_us_block_bg_func();

// function why_us_block_bg_func(){
// 	if (window.scrollY > 800){
// 		why_us_block.classList.add('bg10');
// 		return;
// 	}
// 	setTimeout(why_us_block_bg_func,300);
// }
// why_us_block_bg_func();

function city_block_bg_func(){
	if (window.scrollY > 2000){
		city_block.classList.add('bg13');
		// city_img1.src = 'styles/images/city/IMG_0647.PNG';
		city_img11.src = 'styles/images/city/IMG_0647.PNG';
		city_img2.src = 'styles/images/city/IMG_0648.PNG';
		city_img12.src = 'styles/images/city/IMG_0648.PNG';
		city_img3.src = 'styles/images/city/IMG_0649.PNG';
		city_img13.src = 'styles/images/city/IMG_0649.PNG';
		city_img4.src = 'styles/images/city/1657.png';
		city_img14.src = 'styles/images/city/1657.png';
		city_img5.src = 'styles/images/city/6654.png';
		city_img15.src = 'styles/images/city/6654.png';
		city_img6.src = 'styles/images/city/IMG_0656.PNG';
		city_img16.src = 'styles/images/city/IMG_0656.PNG';
		city_img7.src = 'styles/images/city/IMG_0657.PNG';
		city_img17.src = 'styles/images/city/IMG_0657.PNG';
		city_img8.src = 'styles/images/city/IMG_0658.PNG';
		city_img18.src = 'styles/images/city/IMG_0658.PNG';
		city_img9.src = 'styles/images/city/IMG_0659.PNG';
		city_img19.src = 'styles/images/city/IMG_0659.PNG';
		city_img10.src = 'styles/images/city/praga.png';
		city_img20.src = 'styles/images/city/praga.png';
		return;
	}
	setTimeout(city_block_bg_func,300);
}
city_block_bg_func();


const popupForm = document.getElementById('popup_form');

const botToken = "6406654898:AAH01hMh8y8CqJP55D6XtLUYOan7DQh-KeU"
const chatId = "836342715"

popupForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const phone = popupForm.elements["phone"].value;
	const email = popupForm.elements['email'].value;

	const message = `Номер телефону: ${phone}%0AE-mail: ${email}`

	const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

	fetch(url, {
		method: 'POST',
	})
		.then((response) => {
			if (response.status == 404) {
				alert('Помилка при надсиланні даних');
			} else if (response.status == 200) {
				alert('Дані успішно надіслано на Telegram бота');
			}
			popap_func()
		})
		.catch((error) => {
			alert(`Помилка при надсиланні даних: ${error}`);
		});
})

const languageButtons = document.querySelectorAll(".change_language");
const mainLanguageButton1 = document.getElementById("main_language_text1");
const mainLanguageButton2 = document.getElementById("main_language_text2");

languageButtons.forEach(languageButton => {
	languageButton.addEventListener("click", e => {
		e.preventDefault()
		
		const language = languageButton.textContent.toLowerCase();
	
		const texts = document.querySelectorAll('[data-' + language + ']');
		texts.forEach(text => {
			if (text.placeholder) {
				text.placeholder = text.getAttribute('data-' + language);
			} else {
				text.innerHTML = text.getAttribute('data-' + language)
			}
		})
		
		mainLanguageButton1.textContent = languageButton.textContent;
		mainLanguageButton2.textContent = languageButton.textContent;
	})
})

// Start with english language
document.addEventListener('DOMContentLoaded', () => {
	const enLanguageButton = document.querySelector('.change_language:nth-child(3)');
	
	if (enLanguageButton) {
		enLanguageButton.click();
	
		setTimeout(() => {
			enLanguageButton.click();
		}, 400);
	}
});

const videos = document.querySelectorAll(".video-element")

videos.forEach(video => {
	video.volume = 0.4;
})