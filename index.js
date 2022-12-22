window.onload = ()=>{ 
    console.log('1');
    if ("serviceWorker" in navigator) {
      console.log('2', '谷歌要求通过https为serviceWorker提供服务， 但允许localhost的开发例外');
          navigator.serviceWorker
            .register("/sw.js",{scope:"/learn-FE/"})
            .then(res => console.log("注册serviceWorker：成功"))
            .catch(err => console.log("注册serviceWorker：失败", err));
        
      }
};
  