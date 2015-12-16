function img(n, action){
	if (action){
		document.images[n-1].src="wpch"+n+".gif"
		}else{
			document.images[n-1].src="pch"+n+".gif"
			}
  }
