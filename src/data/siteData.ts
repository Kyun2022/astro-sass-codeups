interface Props {
	href?: string;
	title?: string;
	subText?: string;
	isBig?: boolean;
	description?: string;
	text?: string;
	hrefData?: string;
	textData?: string;
	srcset?: string;
	media?: string;
	src?: string;
	alt?: string;
}

export const siteData: Props = {
	title: "Kyun's Portfolio Site",
	description: 'This is a portfolio site made with Astro.',
};
export const navData: Props[] = [
	{
		href: './campaign.html',
		title: 'campaign',
		subText: 'キャンペーン',
		isBig: true,
	},
	{
		href: './aboutus.html',
		title: 'about us',
		subText: '私たちについて',
		isBig: true,
	},
	{
		href: './information.html',
		title: 'information',
		subText: 'ダイビング情報',
		isBig: true,
	},
	{
		href: './blog.html',
		title: 'blog',
		subText: 'ブログ',
		isBig: true,
	},
	{
		href: './voice.html',
		title: 'voice',
		subText: 'お客様の声',
		isBig: true,
	},
	{
		href: './price.html',
		title: 'price',
		subText: '料金一覧',
		isBig: true,
	},
	{
		href: './faq.html',
		title: 'faq',
		subText: 'よくある質問',
		isBig: false,
	},
	{
		href: './contact.html',
		title: 'contact',
		subText: 'お問い合わせ',
		isBig: true,
	},
];
export const drawerData1: Props[] = [
	{
		href: './campaign.html#campaign1',
		text: 'ライセンス講習',
	},
	{
		href: './campaign.html#campaign2',
		text: '貸切体験ダイビング',
	},
	{
		href: './campaign.html#campaign3',
		text: 'ナイトダイビング',
	},
];
export const drawerData2: Props[] = [
	{
		href: './information.html#tab_panel-1',
		text: 'ライセンス講習',
	},
	{
		href: './information.html#tab_panel-3',
		text: '体験ダイビング',
	},
	{
		href: './information.html#tab_panel-2',
		text: 'ファンダイビング',
	},
];
export const drawerData3: Props[] = [
	{
		href: './price.html#Price1',
		text: 'ライセンス講習',
	},
	{
		href: './price.html#Price2',
		text: '体験ダイビング',
	},
	{
		href: './price.html#Price3',
		text: 'ファンダイビング',
	},
];

export const drawerOneData: Props[] = [
	{
		hrefData: './campaign.html',
		textData: 'キャンペーン',
	},
	{
		hrefData: './aboutus.html',
		textData: '私たちについて',
	},
	{
		hrefData: './information.html',
		textData: 'ダイビング情報',
	},
	{
		hrefData: './blog.html',
		textData: 'ブログ',
	},
	{
		hrefData: './voice.html',
		textData: 'お客様の声',
	},
	{
		hrefData: './faq.html',
		textData: '料金一覧',
	},
	{
		hrefData: './price.html',
		textData: 'よくある質問',
	},
	{
		hrefData: './privacy-policy.html',
		textData: '',
	},
	{
		hrefData: './terms-of-service.html',
		textData: '利用規約',
	},
	{
		hrefData: './contact.html',
		textData: 'お問い合わせ',
	},
];
export const mvData: Props[] = [
	{
		srcset: 'src/assets/mv-pc_1.jpg',
		media: '(min-width: 768px)',
		src: 'src/assets/mv-sp_1.jpg',
		alt: '透き通った海の中で大きな亀が泳いでいる様子',
	},
	{
		srcset: 'src/assets/mv-pc_2.jpg',
		media: '(min-width: 768px)',
		src: 'src/assets/mv-sp_2.jpg',
		alt: '透き通った海の中から見上げると二人のダイバーと大きな亀が対面している',
	},
	{
		srcset: 'src/assets/mv-pc_3.jpg',
		media: '(min-width: 768px)',
		src: 'src/assets/mv-sp_3.jpg',
		alt: '海の向こうに２つの島が見え、近くに船が動いている様子',
	},
	{
		srcset: 'src/assets/mv-pc_4.jpg',
		media: '(min-width: 768px)',
		src: 'src/assets/mv-sp_4.jpg',
		alt: '青天のなか青々とした穏やかなな波が綺麗な砂浜に注ぎ込んでいる様子',
	},
];

