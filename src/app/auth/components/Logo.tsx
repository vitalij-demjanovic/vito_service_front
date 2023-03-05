import { Unica_One } from '@next/font/google';

const font = Unica_One({
	weight: '400',
	subsets: ['latin'],
});
export default function Logo() {
	return (
		<div className={font.className}>
			<h1 className='animate-[wiggle_1s_ease-in-out] text-6xl'>vito service</h1>
		</div>
	);
}
