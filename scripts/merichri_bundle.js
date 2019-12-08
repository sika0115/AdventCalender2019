var wall = new Array(24);
for (var i = 0; i < wall.length; i++) {
	var num = i;
	if (num < 10) num = "0" + num;		// 連番画像の桁をそろえる *1

	wall[i] = "./image" + num + ".png";	// "パスと番号以外のファイル名" + 画像番号 + "拡張子";
}

function bgchange() {
	var time = new Date().getHours();
	document.body.background = wall[time];
}