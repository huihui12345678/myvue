<template>
	<div>
		<!--<router-view></router-view>--><div class="mar_top"></div>
		<transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
	</div>
</template>

<script>
</script>

<style>
	.mar_top{
		margin-top: 1rem;
	}
</style>