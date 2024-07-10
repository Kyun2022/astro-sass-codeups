/* --------------------------------------------
/* common
/*　-------------------------------------------- */

// ハンバーガーメニュー
document.querySelectorAll('.js-hamburger').forEach((button) => {
	button.addEventListener('click', function () {
		const drawerMenu = document.querySelector('.js-drawerMenu');
		if (this.classList.contains('is-open')) {
			drawerMenu.style.display = 'none';
			this.classList.remove('is-open');
			document.body.classList.remove('active');
		} else {
			drawerMenu.style.display = 'block';
			this.classList.add('is-open');
			document.body.classList.add('active');
		}
	});
});

//　　スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	const scroll = window.scrollY;
	const pageTop = document.getElementById('pageTop');
	if (scroll >= 200) {
		pageTop.classList.remove('DownMove');
		pageTop.classList.add('UpMove');
	} else {
		if (pageTop.classList.contains('UpMove')) {
			pageTop.classList.remove('UpMove');
			pageTop.classList.add('DownMove');
		}
	}
}

const wH = window.innerHeight; // 画面の高さを取得
const footer = document.getElementById('footer');
const footerPos = footer.getBoundingClientRect().top + window.scrollY; // footerの位置を取得
const pageTop = document.getElementById('pageTop');

if (scroll + wH >= footerPos + 10) {
	const pos = scroll + wH - footerPos + 10; // スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得
	pageTop.style.bottom = `${pos}px`; // pageTopに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
} else {
	if (pageTop.classList.contains('UpMove')) {
		pageTop.style.bottom = '10px'; // 下から10pxの位置にページリンクを指定
	}
}
window.addEventListener('scroll', PageTopAnime);

// ページトップへスクロール
document.getElementById('pageTop').addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

// スクロール時のイベント
window.addEventListener('scroll', function () {
	PageTopAnime(); // スクロール時のアニメーション関数を呼び出し
	headerColorChange(); // ヘッダーの色変更機能
});

// ページ読み込み時のイベント
window.addEventListener('load', function () {
	PageTopAnime(); // スクロール時のアニメーション関数を呼び出し
});

// ページトップへのスクロール
pageTop.addEventListener('click', function (event) {
	event.preventDefault(); // リンクのデフォルト動作をキャンセル
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

// ヘッダーの色変更
function headerColorChange() {
	const sliderHeight = document.querySelector('.mv').offsetHeight;
	const scrollPosition = window.scrollY; // 'pageYOffset' の代わりに 'scrollY' を使用
	const header = document.querySelector('.js-header');
	if (sliderHeight - 30 < scrollPosition) {
		header.classList.add('headerColorScroll');
	} else {
		header.classList.remove('headerColorScroll');
	}
}

// ハッシュに基づくページ内スクロール;
window.addEventListener('load', function () {
	const urlHash = location.hash;
	if (urlHash) {
		window.scrollTo(0, 0); // ページ上部にスクロール
		setTimeout(function () {
			const headerHeight = 130; // ヘッダーの高さ
			const targetElement = document.querySelector(urlHash);
			if (targetElement) {
				const position =
					targetElement.getBoundingClientRect().top +
					window.scrollY -
					headerHeight; // 'pageYOffset' の代わりに 'scrollY' を使用
				window.scrollTo({
					top: position,
					behavior: 'smooth',
				});
			}
		}, 100);
	}
});

/* --------------------------------------------
/* Top
/*　-------------------------------------------- */

// ローディングアニメーション
window.addEventListener('load', function () {
	const loadCount = sessionStorage.getItem('loadCount');

	if (loadCount === null) {
		const loading = document.querySelector('.js-loading');
		const loadingTitle = document.querySelector('.js-loadingTitle');
		loading.style.display = 'block'; // fadeInの代わり
		loadingTitle.style.display = 'block'; // fadeInの代わり
		setTimeout(() => {
			loading.style.display = 'none'; // fadeOutの代わり
			document.body.classList.remove('js-fixed');
		}, 2900);
		sessionStorage.setItem('loadCount', 1);
	} else {
		document.querySelector('.js-loading').style.display = 'none';
		document.querySelector('.js-loadingTitle').style.display = 'none';
		document.body.classList.remove('js-fixed');
		window.scrollTo(0, 0);
	}
});

// Swiper
const swiper = new Swiper('.js-mv-slider', {
	loop: true,
	allowTouchMove: false,
	effect: 'fade',
	speed: 3000,
	autoplay: {
		delay: 3000,
	},
});

// Swiperカード
const mySwiperWrapper = document.querySelector('.swiper-wrapper');
const horizonSlider = new Swiper('.js-campaign-slider', {
	loop: true,
	effect: 'slide',
	disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
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

// 背景色アニメーション
// 要素の取得とスピードの設定
function setupSlideColorAnimation(selector, speed) {
	const boxes = document.querySelectorAll(selector);

	boxes.forEach((box) => {
		const view = document.createElement('div');
		view.className = 'is-view';
		box.appendChild(view);
		const image = box.querySelector('img');
		image.style.opacity = '0';
		view.style.width = '0%';

		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						view.style.transition = `width ${speed}ms`;
						view.style.width = '100%';
						setTimeout(() => {
							image.style.opacity = '1';
							view.style.width = '0%';
							observer.unobserve(entry.target); // 一度アニメーションが完了したら監視を停止
						}, speed);
					}
				});
			},
			{ threshold: 0.1 },
		);

		observer.observe(view);
	});
}

setupSlideColorAnimation('.js-slideColor', 600);

/* --------------------------------------------
/* aboutUs
/*　-------------------------------------------- */

MicroModal.init({
	awaitCloseAnimation: true,
	awaitOpenAnimation: true,
	disableScroll: true,
});

/* --------------------------------------------
/* information
/*　-------------------------------------------- */

// タブメニュー
document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.js-infoTab-trigger');
	const tabContents = document.querySelectorAll('.js-infoContent-target');
	const cls = 'is-active';

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			const thisCategory = tab.getAttribute('data-category');

			tabs.forEach((t) => t.classList.remove(cls));
			tab.classList.add(cls);

			tabContents.forEach((content) => {
				content.classList.remove(cls);
				if (content.getAttribute('data-target') === thisCategory) {
					content.classList.add(cls);
				}
			});
		});
	});

	// タブへダイレクトリンクの実装
	const hash = location.hash;
	const validHash = hash.match(/^#tab_panel-\d+$/);
	const tabName = validHash ? hash.slice(1) : 'tab_panel-1';

	tabs.forEach((t) => t.classList.remove(cls));
	tabContents.forEach((c) => c.classList.remove(cls));

	const activeTab = document.querySelector(
		`.js-infoTab-trigger[data-category="${tabName}"]`,
	);
	const activeContent = document.getElementById(tabName);

	if (activeTab && activeContent) {
		activeTab.classList.add(cls);
		activeContent.classList.add(cls);
	}
});

/* --------------------------------------------
/* blog
/*　-------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
	// 古いアーカイブアイテムの処理
	document.querySelectorAll('.js-archive-item--old').forEach((item) => {
		item.addEventListener('click', () => {
			const subItems = item.nextElementSibling;
			toggleVisibility(subItems);
			item.classList.toggle('open');
			document
				.querySelector('.archive__item--oldLayout')
				.classList.toggle('open');
		});
	});

	// 新しいアーカイブアイテムの処理
	document.querySelectorAll('.js-archive-item--new').forEach((item) => {
		item.addEventListener('click', () => {
			const subItems = item.nextElementSibling;
			toggleVisibility(subItems);
			item.classList.toggle('open');
			document
				.querySelector('.archive__item--newLayout')
				.classList.toggle('open');
		});
	});

	function toggleVisibility(element) {
		if (element.style.display === 'none' || element.style.display === '') {
			element.style.display = 'block';
			setTimeout(() => {
				element.style.height = null; // CSSで設定された高さに戻す
			}, 600); // アニメーション時間
		} else {
			element.style.height = element.scrollHeight + 'px'; // 現在の高さをピクセルで設定
			element.offsetHeight; // CSSの再計算を強制
			element.style.transition = 'height 600ms ease';
			element.style.height = '0px'; // 高さを0にアニメーション
			setTimeout(() => {
				element.style.display = 'none'; // 完全に隠す
				element.style.height = null; // スタイルをクリア
				element.style.transition = null; // トランジションをクリア
			}, 600); // アニメーション時間
		}
	}
});

/* --------------------------------------------
/* FAQ
/*　-------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
	// FAQアコーディオンのタイトル要素に対するイベントリスナーを設定
	document.querySelectorAll('.js-faqAccordion-title').forEach((title) => {
		title.addEventListener('click', () => {
			const content = title.nextElementSibling; // クリックされたタイトルの次の要素を取得
			toggleVisibility(content); // 表示切り替え関数を呼び出す
			title.classList.toggle('open'); // openクラスの付け外し
		});
	});

	// 要素の表示を切り替える関数
	function toggleVisibility(element) {
		if (element.style.display === 'none' || element.style.display === '') {
			element.style.display = 'block';
			element.style.height = 'auto'; // 高さを自動で設定
			setTimeout(() => {
				element.style.height = null; // 高さの設定をクリア
			}, 300); // アニメーション時間
		} else {
			element.style.height = element.scrollHeight + 'px'; // 現在の高さを設定
			element.offsetHeight; // CSSの再計算を強制
			element.style.transition = 'height 300ms ease'; // トランジションを設定
			element.style.height = '0px'; // 高さを0にアニメーション
			setTimeout(() => {
				element.style.display = 'none'; // 完全に隠す
				element.style.height = null; // 高さのスタイルをクリア
				element.style.transition = null; // トランジションをクリア
			}, 300); // アニメーション時間
		}
	}
});
