var getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  isDev: process.env.NODE_ENV !== 'production',
  clearBeforeBuild: '!(images|icons|audio|fonts|vendor)',
  html: function(context) {
    return {
      'index.html': context.defaultTemplate({
        title: 'Louis\' 5th Birthday',
        head: '<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png"><meta property="og:title" content="Jedi Louis needs your help!" /><meta property="og:description" content="Help Jedi Louis restore peace and order to the galaxy by defeating Darth Vader and his sinister galactic agents. Click here for the full story..." /><meta property="og:image" content="http://louis.surge.sh/images/invite-facebook.png" />',
        html: '<div class="font-loader">Louis 5th Birthday</div><div id="game" class="container"></div><div id="orientation" class="orientation"></div><script src="/vendor/phaser.min.js" charset="utf-8"></script>'
      })
    };
  }
});
