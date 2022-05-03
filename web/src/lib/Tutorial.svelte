<script lang="ts">
	import {
		fly, fade
	} from 'svelte/transition';
	import {
		hasMetamask,
		init,
    wallet,
    playerStatus
	} from '$lib/store';

	import Contract from '$lib/Contract.svelte';
  
  import JSConfetti from 'js-confetti'


  let currentStep = 0;

  let fail = false;

  async function connectMetamask() {
		await (window as any).ethereum.enable();
		await init();
		currentStep = 1;
    const jsConfetti = new JSConfetti();
	  jsConfetti.addConfetti();
	}

  async function checkStep1() {
    fail = !fail;
  }
</script>

<div class="bg-base-200 flex flex-col items-center gap-20 py-20 ">
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
							Press <code>F12</code> to open your browser DevTools, there you could access to the contract <code>Player</code> throught
							the global variable <code>Player</code>.
						</p>
						<p>ReadyH4cker0ne its really popular, <span class="underline">our current waiting list is of five years</span>, to join our waiting
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
            <div class="alert alert-warning shadow-lg inline-block mt-2" style="width: auto" transition:fade>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>Warning: Invalid email address!</span>
              </div>
            </div>
          </div>
        {/if}
      </div>
			<div class="divider">CODE</div>
			<Contract />
		</div>
	{:else if currentStep == 2}
		<div class="hero-content px-4 text-center md:px-0">
				<div>
    			<h2 class="mb-5 text-3xl font-bold">Instructions</h2>
					<div class="mx-auto mb-5 w-full max-w-lg text-lg text-justify">
            <p>Okey, now you just have to wait a couple of years, if only there could be another way...</p>
						<p>
              Press <code>F12</code> to open your browser DevTools, there you could access to the contract <code>Player</code> throught
							the global variable <code>Player</code>.
						</p>
						<p>💡 Hint: take a look to the function <code>updateLock(uint _lockUntil)</code></p>
					</div>
				</div>
  		</div>
			<div class="divider">CODE</div>
			<Contract />
	{:else if currentStep == 3}
		<div in:fly|local={{ x: -20 }}>
			fdsfdfdsfsdf
		</div>
	{/if}
</div>
