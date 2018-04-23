import { Component } from '@angular/core';

@Component({
	selector: 'xpannel',
	templateUrl: './app.pannel.html',
	styleUrls: ['./app.pannel.css'],
	styles: [require("weui")]
})
export class PannelComponent {
	//Model
	title = '天天头条';
	items = [{
		title: "标题一",
		decription: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
	}, {
		title: "标题二",
		decription: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
	}, {
		title: "标题三",
		decription: "奥术大师多。"
	}];
	loadMore() {
		this.items.push({
			title:"asdhnkasdj",
			decription:"aaaaaaaaaaaaaaaaaa"
		});
	}
}