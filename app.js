window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        uri: 'spotify:playlist:1tHgRPvrjdADidyjLDr6kX'
      };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };
  
  document.getElementById('encore').onclick = function () {
    window.open('https://www.encore-wd.com/', '_blank');
  };

  document.getElementById('coding').onclick = function () {
    window.open('https://mharris162.github.io/mharris_JS-Final/', '_blank');
  };

  document.getElementById('todo').onclick = function () {
    window.open('https://mharris162.github.io/to-do-list/', '_blank');
  };

  document.getElementById('rock').onclick = function () {
    window.open('https://mharris162.github.io/mharris-rock-paper-scissors/', '_blank');
  };

  