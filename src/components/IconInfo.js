import css from "lib/x/tpl"
import dataset from "data/dataset"
import IconsInfo from "components/IconsInfo"
import px from "lib/x/px"
import SVG from "lib/x/SVG"

import {
	AtSign as SVGAtSign,
	Check as SVGCheck,
	GitHub as SVGGitHub,
	Instagram as SVGInstagram,
	Mail as SVGMail,
	Twitter as SVGTwitter,
} from "react-feather"

function Demo1() {
	return (
		<div id="demo-1" className="flex flex-row justify-center items-center h-full">

			<style>
				{css`
					#demo-1 > svg:nth-of-type(1) {
						width: ${px(16)};
						height: ${px(16)};
					}
					#demo-1 > svg:nth-of-type(2) {
						width: ${px(24)};
						height: ${px(24)};
					}
					#demo-1 > svg:nth-of-type(3) {
						width: ${px(36)};
						height: ${px(36)};
					}
					#demo-1 > svg:nth-of-type(4) {
						width: ${px(54)};
						height: ${px(54)};
					}
				`}
			</style>

			<SVGGitHub className="m-3 text-gray-800" />
			<SVGGitHub className="m-3 text-gray-800" />
			<SVGGitHub className="m-3 text-gray-800" />
			<SVGGitHub className="m-3 text-gray-800" />
		</div>
	)
}

function Demo2() {
	return (
		<div className="flex flex-row justify-center items-center h-full">
			<div>

				<div className="relative">
					<div className="px-5 py-2 absolute bottom-full inset-x-0">
						<p className="font-medium text-xs leading-none text-gray-800">
							<span className="inline-flex flex-row items-center align-top">
								<SVGGitHub className="text-gray-600" style={{ width: "1em", height: "1em" /* , color: "#1da1f2" */ }} /* strokeWidth={2.25} */ />
								&nbsp;&nbsp;
								<span>
									Username:
								</span>
							</span>
						</p>
					</div>
				</div>

				{/* TODO: <input> */}
				<div className="relative">
					<input
						// NOTE: Use text-black not text-gray-*.
						className="px-5 w-56 h-10 bg-gray-200 rounded-full"
						placeholder="username"
						value="username_ZAYDEK"
					/>
				</div>

				{/* <div className="relative"> */}
				{/* 	<div className="p-3 absolute top-full inset-x-0"> */}
				{/* 		<div className="flex flex-row justify-end"> */}
				{/* 			<p className="font-medium text-xs leading-none text-gray-800"> */}
				{/* 				<span className="inline-flex flex-row items-center align-top"> */}
				{/* 					<span> */}
				{/* 						Available */}
				{/* 					</span> */}
				{/* 					&nbsp; */}
				{/* 					<SVGCheck */}
				{/* 						className="text-green-400" */}
				{/* 						style={{ width: "1em", height: "1em" }} */}
				{/* 						strokeWidth={3} */}
				{/* 					/> */}
				{/* 				</span> */}
				{/* 			</p> */}
				{/* 		</div> */}
				{/* 	</div> */}
				{/* </div> */}

			</div>
		</div>
	)
}

function Demo3() {
	return (
		<div className="flex flex-row justify-center items-center h-full">
			<button className="px-8 py-4 rounded-full" style={{ backgroundColor: "#1da1f2" }}>
				<p className="font-medium leading-none text-white" style={{ fontSize: px(17) }}>
					<span className="inline-flex flex-row items-center align-top">
						<SVGGitHub style={{ width: px(20), height: px(20) }} /* strokeWidth={2.25} */ />
						<span className="w-3" />
						<span>
							Follow on Twitter
						</span>
					</span>
				</p>
			</button>
		</div>
	)
}

function Demo6() {
	const svgs = [SVGInstagram, SVGTwitter, SVGGitHub, SVGMail]

	return (
		<div className="flex flex-row justify-center items-center h-full">
			{svgs.map(each => (
				<SVG key={each.name} className="m-3 w-5 h-5 text-gray-800" svg={each} />
			))}
		</div>
	)
}

export default function IconInfo() {
	return (
		<>

			{/* Bento */}
			<div className="flex flex-row justify-between">

				{/* LHS */}
				<div className="flex flex-row items-center">
					<div className="w-8 h-8 rounded-full bg-gray-100" />
					<div className="w-4" />
					<div className="w-40 h-6 bg-gray-100 rounded-full" />
				</div>

				{/* RHS */}
				<div className="flex flex-row items-center">
					<div className="w-40 h-6 bg-gray-100 rounded-full" />
					<div className="w-4" />
					<div className="w-8 h-8 rounded-full bg-gray-100" />
				</div>
			</div>

			<style>
				{css`
					#bento-grid {
						display: grid;
						grid-template-rows: 0.6fr 0.4fr;
						grid-template-columns: 0.6fr 0.15fr 0.25fr;
						grid-template-areas:
							"a b b"
							"a d c";
						gap: 0.75rem;

						height: 20rem;
					}

					.bento-child {
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;

						background-color: var(--gray-100);
					}

					.bento-child:nth-of-type(1) {
						grid-area: a;
					}
					.bento-child:nth-of-type(2) {
						grid-area: b;
					}
					.bento-child:nth-of-type(3) {
						grid-area: c;
					}
					.bento-child:nth-of-type(4) {
						grid-area: d;
					}

					.bento-child:nth-of-type(1) > svg {
						width: ${px(54)};
						height: ${px(54)};
					}
					.bento-child:nth-of-type(2) > svg {
						width: ${px(36)};
						height: ${px(36)};
					}
					.bento-child:nth-of-type(3) > svg {
						width: ${px(24)};
						height: ${px(24)};
					}
					.bento-child:nth-of-type(4) > svg {
						width: ${px(16)};
						height: ${px(16)};
					}

					@media (max-width: ${816 - 1}px) {
						#bento-grid {
							grid-template-rows: 1fr;
							grid-template-columns: 1fr;
							gap: 0;
						}
						.bento-child:nth-of-type(2) {
							display: none;
						}
						.bento-child:nth-of-type(3) {
							display: none;
						}
						.bento-child:nth-of-type(4) {
							display: none;
						}
					}
				`}
			</style>

			<div className="h-4" />
			<div id="bento-grid">
				<div className="bento-child">
					<SVGGitHub className="text-gray-800" />
				</div>
				<div className="bento-child">
					<SVGGitHub className="text-gray-800" />
				</div>
				<div className="bento-child">
					<SVGGitHub className="text-gray-800" />
				</div>
				<div className="bento-child">
					<SVGGitHub className="text-gray-800" />
				</div>
			</div>

			{/* Demo */}
			<div className="h-16" />
			<div className="flex flex-row items-center">
				<div className="w-8 h-8 rounded-full bg-gray-100" />
				<div className="w-4" />
				<div className="w-40 h-6 bg-gray-100 rounded-full" />
			</div>

			<style>
				{css`
					#demo-grid {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
						gap: 0.75rem;
					}
				`}
			</style>

			<div className="h-4" />
			<div id="demo-grid">
				<div className="h-40 bg-gray-100">
					<Demo1 />
				</div>
				<div className="h-40 bg-gray-100">
					<Demo2 />
				</div>
				<div className="h-40 bg-gray-100">
					<Demo3 />
				</div>
				<div className="h-40 bg-gray-100">
					{/* <Demo1 /> */}
				</div>
				<div className="h-40 bg-gray-100">
					{/* <Demo1 /> */}
				</div>
				<div className="h-40 bg-gray-100">
					<Demo6 />
				</div>
			</div>

			{/* More */}
			<div className="h-16" />
			<div className="flex flex-row items-center">
				<div className="w-8 h-8 rounded-full bg-gray-100" />
				<div className="w-4" />
				<div className="w-40 h-6 bg-gray-100 rounded-full" />
			</div>

			<div className="h-4" />
			<IconsInfo svgs={dataset.slice(0, 6)} />

		</>
	)
}
