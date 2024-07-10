/* --------------------------------------------
  /* ハンバーガーメニュー
  /* -------------------------------------------- */
// ハンバーガー
document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.js-hamburger');
	const drawerMenu = document.querySelector('.js-drawerMenu');
	const body = document.body;

	hamburger.addEventListener('click', () => {
		if (hamburger.classList.contains('is-open')) {
			fadeOut(drawerMenu);
			hamburger.classList.remove('is-open');
			body.classList.remove('active');
		} else {
			fadeIn(drawerMenu);
			hamburger.classList.add('is-open');
			body.classList.add('active');
		}
	});

	function fadeOut(element) {
		element.style.opacity = 1;
		(function fade() {
			if ((element.style.opacity -= 0.1) < 0) {
				element.style.display = 'none';
			} else {
				requestAnimationFrame(fade);
			}
		})();
	}

	function fadeIn(element) {
		element.style.opacity = 0;
		element.style.display = 'block';
		(function fade() {
			let val = parseFloat(element.style.opacity);
			if (!((val += 0.1) > 1)) {
				element.style.opacity = val;
				requestAnimationFrame(fade);
			}
		})();
	}
});

/* --------------------------------------------
  /* スクロールした際の動きを関数でまとめる
  /* ------------------------------------------ */
function PageTopAnime() {
	const scroll = window.scrollY; // スクロール値を取得
	const pageTop = document.getElementById('pageTop');
	const footer = document.getElementById('footer');

	if (scroll >= 200) {
		// 200pxスクロールしたら
		pageTop.classList.remove('DownMove'); // DownMoveというクラス名を除去して
		pageTop.classList.add('UpMove'); // UpMoveというクラス名を追加して出現
	} else {
		// それ以外は
		if (pageTop.classList.contains('UpMove')) {
			// UpMoveというクラス名が既に付与されていたら
			pageTop.classList.remove('UpMove'); // UpMoveというクラス名を除去し
			pageTop.classList.add('DownMove'); // DownMoveというクラス名を追加して非表示
		}
	}

	const wH = window.innerHeight; // 画面の高さを取得
	const footerPos = footer.getBoundingClientRect().top + window.scrollY; // footerの位置を取得
	if (scroll + wH >= footerPos + 10) {
		const pos = scroll + wH - footerPos + 10; // スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
		pageTop.style.bottom = `${pos}px`; // #pageTopに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
	} else {
		// それ以外は
		if (pageTop.classList.contains('UpMove')) {
			// UpMoveというクラス名がついていたら
			pageTop.style.bottom = '10px'; // 下から10pxの位置にページリンクを指定
		}
	}
}

// スクロールイベントにPageTopAnime関数を紐づける
window.addEventListener('scroll', PageTopAnime);

/* --------------------------------------------
  /* スクロール
  /* -------------------------------------------- */
// 画面をスクロールしたら動かしたい場合の記述
window.addEventListener('scroll', () => {
	PageTopAnime(); // スクロールした際の動きの関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
window.addEventListener('load', () => {
	PageTopAnime(); // スクロールした際の動きの関数を呼ぶ
});

// #pageTopをクリックした際の設定
document.getElementById('pageTop').addEventListener('click', (event) => {
	event.preventDefault(); // リンク自体の無効化
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

// スクロールするとロゴの色変更
document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('scroll', () => {
		const sliderHeight = document.querySelector('.mv').clientHeight;
		const header = document.querySelector('.js-header');
		if (sliderHeight - 30 < window.scrollY) {
			header.classList.add('headerColorScroll');
		} else {
			header.classList.remove('headerColorScroll');
		}
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// 別ページの場合は以下
	if (location.hash) {
		window.scrollTo(0, 0);
		setTimeout(() => {
			const headerHeight = 130; // ヘッダーの高さ
			const target = document.querySelector(location.hash);
			const position =
				target.getBoundingClientRect().top +
				window.scrollY -
				headerHeight;
			window.scrollTo({
				top: position,
				behavior: 'smooth',
			});
		}, 100);
	}
});

// ページ内スクロール
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', (event) => {
		event.preventDefault();
		const href = anchor.getAttribute('href');
		const target = document.querySelector(
			href === '#' || href === '' ? 'html' : href,
		);
		const position = target.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({
			top: position,
			behavior: 'smooth',
		});
	});
});

/* --------------------------------------------
  /* ローディングアニメーション
  /* -------------------------------------------- */
window.addEventListener('load', function () {
	let loadCount = sessionStorage.getItem('loadCount');

	// 初回のロード時の処理
	if (loadCount === null) {
		const jsLoading = document.querySelector('.js-loading');
		const jsLoadingTitle = document.querySelector('.js-loadingTitle');
		const body = document.body;

		fadeIn(jsLoading, 0, 900);
		fadeIn(jsLoadingTitle, 300, 800);
		setTimeout(() => {
			fadeOut(jsLoading, 2500, 900);
			setTimeout(() => {
				body.classList.remove('js-fixed');
			}, 2500);
		}, 2500);

		sessionStorage.setItem('loadCount', 1);
	} else {
		// 2回目以降のロード時の処理
		document.querySelector('.js-loading').style.display = 'none';
		document.querySelector('.js-loadingTitle').style.display = 'none';
		document.body.classList.remove('js-fixed');
		window.scrollTo(0, 0); // スクロール位置をトップに戻す
	}
});

function fadeIn(element, delay, duration) {
	setTimeout(() => {
		element.style.transition = `opacity ${duration}ms`;
		element.style.opacity = 1;
		element.style.display = 'block';
	}, delay);
}

function fadeOut(element, delay, duration) {
	setTimeout(() => {
		element.style.transition = `opacity ${duration}ms`;
		element.style.opacity = 0;
		setTimeout(() => {
			element.style.display = 'none';
		}, duration);
	}, delay);
}

/* --------------------------------------------
  /* Swiper
  /* -------------------------------------------- */
import Swiper from 'swiper';
import 'swiper/css/bundle';
import { Autoplay, EffectFade, FreeMode, Parallax } from 'swiper/modules';

const swiper = new Swiper('.js-mv-slider', {
	modules: [Autoplay, FreeMode, EffectFade, Parallax],
	loop: true,
	allowTouchMove: false,
	effect: 'fade',
	speed: 3000,
	autoplay: {
		delay: 3000,
	},
});

/* --------------------------------------------
  /* Swiper-card
  /* -------------------------------------------- */
const mySwiperWrapper = document.querySelector('.swiper-wrapper');
const horizonSlider = new Swiper('.js-campaign-slider', {
	modules: [Autoplay, FreeMode, EffectFade, Parallax],
	loop: true,
	effect: 'slide',
	disableOnInteraction: false,
	// 矢印をクリックしても自動再生を止めない
	slidesPerView: 1.26,
	breakpoints: {
		768: {
			slidesPerView: 3.29,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3.49,
			spaceBetween: 40,
		},
	},
	spaceBetween: 24,
	speed: 2000,
	autoplay: {
		delay: 1000,
	},
	// 前後の矢印
	navigation: {
		prevEl: '.slider__prevButton',
		nextEl: '.slider__nextButton',
	},
});

/* --------------------------------------------
  /* 背景色アニメーション
  /* -------------------------------------------- */
// 要素の取得とスピードの設定
const boxes = document.querySelectorAll('.js-slideColor');
const speed = 600;

// .js-slideColorの付いた全ての要素に対して下記の処理を行う
boxes.forEach((box) => {
	box.insertAdjacentHTML('beforeend', '<div class="is-view"></div>');
	const color = box.querySelector('.is-view');
	const image = box.querySelector('img');
	let counter = 0;
	image.style.opacity = '0';
	color.style.width = '0%';

	// inviewイベントの設定（IntersectionObserverを使用）
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && counter === 0) {
					setTimeout(() => {
						animateWidth(color, '100%', speed, () => {
							image.style.opacity = '1';
							color.style.left = '0';
							color.style.right = 'auto';
							animateWidth(color, '0%', speed);
						});
					}, 300);
					counter = 1;
				}
			});
		},
		{ threshold: 0.5 },
	);

	observer.observe(color);
});

function animateWidth(element, width, duration, callback) {
	const startWidth = parseFloat(element.style.width);
	const endWidth = parseFloat(width);
	const frameDuration = 1000 / 60;
	const totalFrames = Math.round(duration / frameDuration);
	let currentFrame = 0;

	function updateFrame() {
		currentFrame++;
		const progress = currentFrame / totalFrames;
		const currentWidth = startWidth + (endWidth - startWidth) * progress;
		element.style.width = `${currentWidth}%`;

		if (currentFrame < totalFrames) {
			requestAnimationFrame(updateFrame);
		} else {
			if (callback) callback();
		}
	}

	requestAnimationFrame(updateFrame);
}

/* --------------------------------------------
  /* about us
  /* -------------------------------------------- */
MicroModal.init({
	awaitCloseAnimation: true,
	awaitOpenAnimation: true,
	disableScroll: true,
});

/* --------------------------------------------
  /* タブメニュー
  /* -------------------------------------------- */
const jsTabs = document.querySelectorAll('.js-infoTab-trigger');
const jsTabTargets = document.querySelectorAll('.js-infoContent-target');
const cls = 'is-active';

jsTabs.forEach((tab) => {
	tab.addEventListener('click', function () {
		const thisCategory = this.getAttribute('data-category');
		jsTabs.forEach((tab) => tab.classList.remove(cls));
		this.classList.add(cls);
		jsTabTargets.forEach((target) => {
			target.classList.remove(cls);
			if (thisCategory === target.getAttribute('data-target')) {
				target.classList.add(cls);
			}
		});
	});
});

/* --------------------------------------------
  /* タブへダイレクトリンクの実装
  /* -------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
	let hash = location.hash.match(/^#tab_panel-\d+$/)
		? location.hash.slice(1)
		: 'tab_panel-1';
	const tabNo = Array.from(
		document.querySelectorAll('.js-infoContent-target'),
	).findIndex((target) => target.id === hash);
	if (tabNo !== -100) {
		document
			.querySelectorAll('.js-infoTab-trigger')
			[tabNo].classList.add(cls);
		document
			.querySelectorAll('.js-infoContent-target')
			[tabNo].classList.add(cls);
	}
});

/* --------------------------------------------
  /* アーカイブ　月別リンク
  /* -------------------------------------------- */
document.querySelectorAll('.js-archive-item--open').forEach((item) => {
	item.addEventListener('click', function () {
		this.nextElementSibling.classList.toggle('close');
	});
});

/* --------------------------------------------
  /* FAQ アコーディオン
  /* -------------------------------------------- */
document.querySelectorAll('.js-faqAccordion-title').forEach((title) => {
	title.addEventListener('click', function () {
		this.nextElementSibling.style.display =
			this.nextElementSibling.style.display === 'none' ? '' : 'none';
		this.classList.toggle('open');
	});
});

/* --------------------------------------------
  /* コンタクトページ　バリデーション
  /* -------------------------------------------- */
document.querySelector('.form-submit').addEventListener('click', () => {
	document
		.querySelectorAll('.wpcf7-form-control-wrap')
		.forEach((wrap) => wrap.classList.add('is-show'));
	document
		.querySelectorAll('.js-errorMessage')
		.forEach((msg) => msg.classList.add('is-show'));
});
