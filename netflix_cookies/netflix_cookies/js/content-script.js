document.addEventListener('DOMContentLoaded', function()
{
    var ele = document.createElement('style');
    ele.innerHTML = `.account-dropdown-button {display: none !important;}`;
    document.head.appendChild(ele);

    initCustomPanel();
});

function initCustomPanel()
{
    var panel = document.createElement('div');
    panel.className = 'chrome-plugin-demo-panel';
    panel.innerHTML = `
		<p>奈飞小铺提供技术支持</p>
		<div class="btn-area">
		    <a target="_blank" href="https://api.naifei.shop/cookies/tg">TG交流群</a>
		    <a target="_blank" href="https://api.naifei.shop/cookies/bbs">插件问题反馈</a>
		</div>
		<div id="my_custom_log">
		</div>
	`;
    document.body.appendChild(panel);
}