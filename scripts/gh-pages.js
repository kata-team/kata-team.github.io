var ghpages = require('gh-pages');

ghpages.publish('build', {
    dotfiles: false,
    branch: 'master',
    repo: 'https://' + (process.env.GH_TOKEN ? (process.env.GH_TOKEN + '@') : '') + 'github.com/kata-team/kata-team.github.io.git',
    message: 'Deploy to GitHub Pages.',
    silent: true
}, function(err) {
    if (err) {
        throw new Error(err.message);
    } else {
        console.log('Published');
    }
});
