<script lang="ts">
	import {
		fly, fade
	} from 'svelte/transition';

	import {
		hasMetamask,
		init,
    wallet,
    playerStatus,
		playerName
	} from '$lib/store';
	import { scrollto } from "svelte-scrollto";


	import getContract from '../contracts/contracts';
	import Contract from '$lib/Contract.svelte';
  
  import JSConfetti from 'js-confetti'
	
	import { onMount } from 'svelte';
	
	onMount(async () => {
		await init();
	})

	
  let currentStep = 0;
	$: if($playerStatus == 'ready') {
		currentStep = 3;
	} else if($playerName !== '') {
		currentStep = 2;
	} else if($wallet) {
		currentStep = 1;
	} else {
		currentStep = 0;
	}


  let fail = false;

  async function connectMetamask() {
		await (window as any).ethereum.enable();
		await init();
		currentStep = 1;
    const jsConfetti = new JSConfetti();
	  jsConfetti.addConfetti();
	}

  async function checkStep1() {
		fail = false;
		const Player = await getContract('Player');
		const playerName = await Player.playerName($wallet);
		fail = Number(playerName) === 0;
		if (!fail) {
			currentStep = 2;
    	const jsConfetti = new JSConfetti();
	  	jsConfetti.addConfetti();
		}
  }

	async function checkStep2() {
		fail = false;
		const Player = await getContract('Player');
		const playerName = await Player.canPlay($wallet);
		fail = Number(playerName) === 0;
		if (!fail) {
			currentStep = 3;
    	const jsConfetti = new JSConfetti();
	  	jsConfetti.addConfetti();
		}
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="
  sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
  text-primary-content
  ">
	<nav class="navbar w-full">
		<div class="flex flex-1 md:gap-1 lg:gap-2">
			<div class="flex items-center gap-2 "><a href="/" aria-current="page" aria-label="Homepage"
					class="flex-0 btn btn-ghost px-2 ">
					<div class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
						<span class="text-primary-content">
							readyh4cker0ne
						</span>
					</div>
				</a>
			</div>
		</div>
		<div class="flex-0">
			<!--
			<div class="items-center flex-none hidden lg:block"><a sveltekit:prefetch="" href="/components"
					class="btn btn-ghost drawer-button normal-case"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24" class="inline-block h-6 w-6 fill-current md:mr-2">
						<path
							d="M6.5,22 C4.01471863,22 2,19.9852814 2,17.5 C2,15.0147186 4.01471863,13 6.5,13 C8.98528137,13 11,15.0147186 11,17.5 C11,19.9852814 8.98528137,22 6.5,22 Z M17.5,22 C15.0147186,22 13,19.9852814 13,17.5 C13,15.0147186 15.0147186,13 17.5,13 C19.9852814,13 22,15.0147186 22,17.5 C22,19.9852814 19.9852814,22 17.5,22 Z M6.5,11 C4.01471863,11 2,8.98528137 2,6.5 C2,4.01471863 4.01471863,2 6.5,2 C8.98528137,2 11,4.01471863 11,6.5 C11,8.98528137 8.98528137,11 6.5,11 Z M17.5,11 C15.0147186,11 13,8.98528137 13,6.5 C13,4.01471863 15.0147186,2 17.5,2 C19.9852814,2 22,4.01471863 22,6.5 C22,8.98528137 19.9852814,11 17.5,11 Z M17.5,9 C18.8807119,9 20,7.88071187 20,6.5 C20,5.11928813 18.8807119,4 17.5,4 C16.1192881,4 15,5.11928813 15,6.5 C15,7.88071187 16.1192881,9 17.5,9 Z M6.5,9 C7.88071187,9 9,7.88071187 9,6.5 C9,5.11928813 7.88071187,4 6.5,4 C5.11928813,4 4,5.11928813 4,6.5 C4,7.88071187 5.11928813,9 6.5,9 Z M17.5,20 C18.8807119,20 20,18.8807119 20,17.5 C20,16.1192881 18.8807119,15 17.5,15 C16.1192881,15 15,16.1192881 15,17.5 C15,18.8807119 16.1192881,20 17.5,20 Z M6.5,20 C7.88071187,20 9,18.8807119 9,17.5 C9,16.1192881 7.88071187,15 6.5,15 C5.11928813,15 4,16.1192881 4,17.5 C4,18.8807119 5.11928813,20 6.5,20 Z">
						</path>
					</svg> Components</a></div>
			<div title="Change Theme" class="dropdown dropdown-end ">
				<div tabindex="0" class="btn gap-1 normal-case btn-ghost"><svg width="20" height="20"
						xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
						</path>
					</svg> <span class="hidden md:inline">Theme</span> <svg width="12px" height="12px"
						class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 2048 2048">
						<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
					</svg></div>
				<div
					class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
					<div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
						<div class="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2"
							data-set-theme="light" data-act-class="outline">
							<div data-theme="light" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
										<div class="flex-grow text-sm font-bold">light</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1">
											<div class="bg-primary w-2 rounded"></div>
											<div class="bg-secondary w-2 rounded"></div>
											<div class="bg-accent w-2 rounded"></div>
											<div class="bg-neutral w-2 rounded"></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2"
							data-set-theme="winter" data-act-class="outline">
							<div data-theme="winter" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
										<div class="flex-grow text-sm font-bold">winter</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1">
											<div class="bg-primary w-2 rounded"></div>
											<div class="bg-secondary w-2 rounded"></div>
											<div class="bg-accent w-2 rounded"></div>
											<div class="bg-neutral w-2 rounded"></div>
										</div>
									</div>
								</div>
							</div>
						</div> <a class="outline-base-content overflow-hidden rounded-lg" href="/theme-generator/">
							<div class="hover:bg-neutral hover:text-neutral-content w-full cursor-pointer font-sans">
								<div class="flex gap-2 p-3"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4 fill-current" viewBox="0 0 512 512">
										<path d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z"></path>
										<line x1="90.25" y1="90.25" x2="124.19" y2="124.19"></line>
										<path
											d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z">
										</path>
										<path d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z"></path>
										<line x1="293.89" y1="90.25" x2="259.95" y2="124.19"></line>
										<path
											d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z">
										</path>
										<line x1="124.19" y1="259.95" x2="90.25" y2="293.89"></line>
										<path
											d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z">
										</path>
										<path
											d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z">
										</path>
										<path
											d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z">
										</path>
									</svg>
									<div class="flex-grow text-sm font-bold">Make your theme!</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			-->
			<div title="Change Lang" class="dropdown dropdown-end">
				<div tabindex="0" class="btn btn-ghost gap-1 normal-case"><svg
						class="inline-block h-4 w-4 fill-current md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" width="20"
						height="20" viewBox="0 0 512 512">
						<path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
						<path
							d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z">
						</path>
					</svg> <svg width="12px" height="12px" class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
						xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
						<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
					</svg>
				</div>
				<div
					class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-52 overflow-y-auto shadow-2xl">
					<ul class="menu menu-compact gap-1 p-3" tabindex="0">
						<li><button class="flex active"><img loading="lazy" width="20" height="20" alt="English"
									src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg"> <span
									class="flex flex-1 justify-between">English </span></button> </li>
						<li><button class="flex"><img loading="lazy" width="20" height="20" alt="Español"
									src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ea-1f1f8.svg"> <span
									class="flex flex-1 justify-between">Español <span
										class="badge badge-sm badge-ghost">beta</span></span></button> </li>
						<li><button class="flex"><img loading="lazy" width="20" height="20" alt="Indonesia"
									src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ee-1f1e9.svg"> <span
									class="flex flex-1 justify-between">Indonesia <span
										class="badge badge-sm badge-ghost">Beta</span></span></button> </li>
						<li><button class="flex"><img loading="lazy" width="20" height="20" alt="日本語"
									src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ef-1f1f5.svg"> <span
									class="flex flex-1 justify-between">日本語 <span
										class="badge badge-sm badge-ghost">ベータ</span></span></button> </li>
						<li><button class="flex"><img loading="lazy" width="20" height="20" alt="中文"
									src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1e8-1f1f3.svg"> <span
									class="flex flex-1 justify-between">中文 <span
										class="badge badge-sm badge-ghost">测试版</span></span></button> </li>
					</ul>
				</div>
			</div>
			<span class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="GitHub">
				<div class="flex-none items-center"><a aria-label="Github" target="_blank"
						href="https://github.com/saadeghi/daisyui" rel="noopener"
						class="btn btn-ghost drawer-button btn-square normal-case"><svg width="20" height="20"
							xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
							class="inline-block h-5 w-5 fill-current md:h-6 md:w-6">
							<path
								d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z">
							</path>
						</svg></a></div>
			</span>
		</div>
	</nav>
</div>
<div>
	<div
		class="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20">
		<div
			class="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-40 lg:pb-20 lg:flex-row lg:items-end lg:gap-0 xl:gap-20">
			<div class="lg:pl-10 lg:pb-32">
				<div class="mb-2 py-4 text-center lg:py-10 lg:text-left">
					<h1 class="font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-7xl">ready-h4cker0ne?</h1>
					<h2 class="font-title text-lg font-extrabold sm:text-2xl lg:text-3xl">
						A permission less open source platform
						<br>to learn blockchain security breaking CTFs</h2>
				</div>
				<div class="flex w-full flex-col items-center space-y-10 lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0">
					<div class="my-2 flex max-w-sm flex-col gap-2 text-left">
						<div class="flex gap-2">
							<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								class="inline-block h-6 w-6 stroke-current">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg> Learn security by hacking
						</div>
						<div class="flex gap-2">
							<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								class="inline-block h-6 w-6 stroke-current">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg> Have fun learning
						</div>
						<div class="flex gap-2">
							<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								class="inline-block h-6 w-6 stroke-current">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg> Earn NFTs breaking different CTFs
						</div>
						<div class="flex gap-2">
							<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								class="inline-block h-6 w-6 stroke-current">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg> Permissionless & collaborative
						</div>

					</div>

				</div>
				<div class="mt-4 flex flex-1 justify-center space-x-2 lg:mt-6 lg:justify-start">
					<button class="btn btn-ghost btn-active lg:btn-lg normal-case" 
						use:scrollto={{element: '#startContent', offset: -200}}>
						<span>Start</span>
					</button>
					<a href="#FAQ" class="btn lg:btn-lg normal-case"
					use:scrollto={{element: '#FAQ', offset: 0}}>FAQ</a>
				</div>
			</div>
		</div>
		<svg class="fill-secondary col-start-1 row-start-1 h-auto w-full" width="1600" height="595" viewBox="0 0 1600 595"
			fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z">
			</path>
		</svg>
	</div>
</div>

<div id="startContent" class="bg-base-200 flex flex-col items-center gap-20 py-20 min-h-screen">
	<div class="text-base-content glass xl:rounded-box -mt-48 grid gap-4 bg-opacity-60 pb-0">
		<div class="p-4">
			<h1 class="text-3xl text-white text-center pb-2">Begin here</h1>
			<ul class="steps steps-vertical lg:steps-horizontal">
				<li class="step" class:step-primary={currentStep>= 0}>Connect metamask</li>
				<li class="step" class:step-primary={currentStep>= 1}>Create your user</li>
				<li class="step" class:step-primary={currentStep>= 2}>Lets hack!</li>
				<li class="step" class:step-primary={currentStep>= 3}>Done</li>
			</ul>
		</div>
	</div>
	
	{#if currentStep == 0}
		<div in:fly|local={{ x: -20 }}>
		{#if !$hasMetamask}
			<div class="px-6">
				<div class="alert alert-warning shadow-lg max-w-xl">
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
						<span>Warning: You need to install Metamask first!</span>
					</div>
					<div class="flex-none">
						<a href="https://metamask.io/" target="_blank" class="btn btn-sm btn-primary">Install Metamask</a>
					</div>
				</div>
			</div>
		{:else}
			<div class="hero-content px-4 text-center md:px-0">
				<div>
					<button class="btn btn-primary btn-lg normal-case" on:click={connectMetamask}>Click Here to connect metamask</button>
					<div class="max-w-xl pt-4	text-lg text-justify">
						Before start playing you need a metamask wallet to store and manage account keys, broadcast 
						transactions, send and receive Ethereum-based cryptocurrencies and tokens, and securely connect 
						to decentralized applications through a compatible web browser or the mobile app's built-in browser.
					</div>
				</div>
			</div>
		{/if}
		</div>
	{:else if currentStep == 1}
		<div in:fly|local={{ x: -20 }}>
			<div class="hero-content px-4 text-center md:px-0">
				<div>
    			<h2 class="mb-5 text-3xl font-bold">Instructions</h2>
					<div class="mx-auto mb-5 w-full max-w-lg text-lg text-justify">
						<p>
							1) Press <code>F12</code> to open your browser DevTools, there you could access to the contract <code>Player</code> throught
							the global variable <code>Player</code>.
						</p>
						<p>2) Create you character. ReadyH4cker0ne its really popular, <span class="underline">our current waiting list is of five years</span>, to join our waiting
							list just type in the devtools console <code>Player.createPlayer(...)</code>
						</p>
						<p>💡 Hint: you will have to send your username in the createPlayer function in bytes32...<br >
							<a class="link link-primary" href="https://docs.ethers.io/v5/single-page/#/v5/api/utils/strings/-%23-utils-parseBytes32" target="_blank">
								https://docs.ethers.io/v5/single-page/#/v5/api/utils/strings/-%23-utils-parseBytes32
							</a>
					</p>
					</div>
				</div>
  		</div>
      <div class="w-full text-center">
        <button class="btn btn-primary btn-lg normal-case mx-auto" on:click={checkStep1}>Check</button>

        {#if fail}
          <div>
            <div class="alert alert-error shadow-lg inline-block mt-2" style="width: auto" transition:fade>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span class="font-bold">Sorry you havent pass this challenge!</span>
              </div>
            </div>
          </div>
        {/if}
      </div>
			<div class="divider">CODE</div>
			<div class="flex w-full flex-col text-left">
				<div class="mockup-code mx-auto w-full flex-grow shadow-lg text-sm ">
    			<Contract />
  			</div>
			</div>
		</div>
	{:else if currentStep == 2}
		<div in:fly|local={{ x: -20 }}>
			<div class="hero-content px-4 text-center md:px-0">
				<div>
    			<h2 class="mb-5 text-3xl font-bold">Now wait...</h2>
					<div class="mx-auto mb-5 w-full max-w-lg text-lg text-justify">
            <p>Okey, now you just have to wait a couple of years, if only there could be another way...</p>
						<p>
              Press <code>F12</code> to open your browser DevTools, there you could access to the contract <code>Player</code> throught
							the global variable <code>Player</code>.
						</p>
						<p>💡 Hint: take a look to the function <code>updateLock(uint _lockUntil)</code></p>
					</div>
				</div>
				<div>
					<button class="btn btn-primary btn-lg normal-case mx-auto" on:click={checkStep2}>Check</button>
					{#if fail}
						<div>
							<div class="alert alert-error shadow-lg inline-block mt-2" style="width: auto" transition:fade>
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
									<span class="font-bold">Sorry you havent pass this challenge!</span>
								</div>
							</div>
						</div>
					{/if}
				</div>
  		</div>
			<div class="divider">CODE</div>
			<div class="flex w-full flex-col text-left">
				<div class="mockup-code mx-auto w-full flex-grow shadow-lg text-sm ">
    			<Contract />
  			</div>
			</div>
		</div>
	{:else if currentStep == 3}
		<div in:fly|local={{ x: -20 }}>
				<div class="hero-content text-center">
					<div class="max-w-md">
						<h1 class="text-5xl font-bold">Welcome h4cker0ne!</h1>
						<p class="py-6">We have compiled a bunch of well knowns CTFs to keep you entertained.</p>
						<button class="btn btn-primary">Get Started</button>
					</div>
				</div>
		</div>
	{/if}
</div>

<div class="bg-base-300 flex flex-col items-center gap-20 py-20 min-h-screen
px-8 lg:px-0">
	<div class="card lg:max-w-4xl w-full bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">CTFs compilation!</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sit, nihil voluptate impedit doloribus ipsa natus nisi, iure quas harum esse omnis est molestiae. Delectus nostrum dolore sunt culpa laudantium.</p>
			<div class="overflow-x-auto">
  <table class="table w-full overflow-x-auto">
    <!-- head -->
    <thead>
      <tr>
        <th>Difficulty</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Capture the ether</td>
        <td>Quality Control Specialist</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td>Etthernaut</td>
        <td>Desktop Support Technician</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>DAMN vulnerable defi</td>
        <td>Tax Accountant</td>
      </tr>
    </tbody>
  </table>
</div>

		</div>
	</div>

</div>


<div id="FAQ" class="hero bg-base-100 text-base-content mx-auto min-h-screen max-w-md md:max-w-full">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">FAQ</h1>
			<p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
		</div>
	</div>
	
</div>
